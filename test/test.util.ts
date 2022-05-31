export function randomString(length: number): string {
  let result = ''
  do {
    result += Math.random().toString(36).substring(2)
    result = result.substring(0, length)
  } while (result.length < length)
  return result
}