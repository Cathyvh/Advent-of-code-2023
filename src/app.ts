import { day0 } from './day0/solution'
import { day1 } from './day1/solution'
import { day2 } from './day2/solution'
import { Solutions } from './types'

const days: Solutions[] = [day0(), day1(), day2()]

export const logDayResults = (dayId?: number) => {
  const title = '🎄 Advent of Code 2023 🎄\n'
  let result: string

  const allDays = days
    .map((day, index) => (index === 0 ? null : `Day ${index} -  Part one: ${day.partOne} Part two: ${day.partTwo}`))
    .join('\n')
  if (dayId === undefined) {
    result = `${title}${allDays}`
  } else {
    const individualday = days[dayId]
    if (!individualday) throw new Error(`Day ${dayId} not found`)
    const chosenDay = `Result of day ${dayId}\n\nPart one: ${individualday.partOne}\nPart two: ${individualday.partTwo}\n`
    result = `${title}${chosenDay}`
  }
  return result
}
