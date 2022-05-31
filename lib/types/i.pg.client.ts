export interface IPgClient {
  closeConnections(): Promise<void>
  query(query: string, variables?: any[]): Promise<any>
  format(...args: any): string
}