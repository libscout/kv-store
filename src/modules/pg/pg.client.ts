import {Client, Pool} from "pg"
import {IPgClient} from "../../types/i.pg.client"
import format from "pg-format"
import dotenv from "dotenv"
dotenv.config()

export class PgClient implements IPgClient {
  private static readonly connections: any = {}
  
  static getConnection(url: string): IPgClient {
    const options = {connectionString: url}
    return PgClient.connections[url] = PgClient.connections[url] || PgClient.create(options)
  }
  
  static create(options: any): IPgClient {
    return new PgClient(options)
  }

  private _pool?: Pool
  
  constructor(protected readonly options: any) {}
  
  async closeConnections(): Promise<void> {
    await this._pool?.end()
    this._pool = undefined
  }
  
  async query(query: string, variables?: any[]): Promise<any> {
    return await this.executor(query, variables).execute()
  }
  
  private executor(query: string, vars?: any[]): QueryExecutor {
    return new QueryExecutor(this.pool, query, vars)
  }
  
  private get pool(): Pool {
    return this._pool = this._pool || new Pool(this.options)
  }
  
  escape(str: string|number): string {
    return `'${("" + str).replace(/[']/g, substr => `'${substr}`)}'`
  }
  
  format(...args: any): string {
    return format(...args)
  }
}

class QueryExecutor {
  private client: Client
  
  constructor(private readonly pool: Pool,
              private readonly query: string,
              private readonly variables?: any[]) {}
  
  async execute(): Promise<any> {
    try {
      await this.loadClient()
      const result = await this.executeQuery()
      await this.release()
      return result
    } catch(error) {
      this.release()
      throw error
    }
  }
  
  private async executeQuery(): Promise<void> {
    return await this.client.query(this.query, this.variables)
  }
  
  private async loadClient(): Promise<void> {
    this.client = await this.pool.connect()
  }

  
  private async release(): Promise<void> {
    await this.client?.release()
  }
}