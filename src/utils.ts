import { readFileSync } from 'fs'

export const parseInputFile = (input: string) => {
  const data = readFileSync(input, 'utf8')
  const lines = data.split('\n')
  return lines
}
