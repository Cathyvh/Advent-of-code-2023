import { logDayResults } from './app'

const args = process.argv.slice(2)
if (!args[0]) {
  console.log(logDayResults())
} else {
  const day = parseInt(args[0], 10)
  console.log(logDayResults(day))
}
