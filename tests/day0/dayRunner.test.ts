import { logDayResults } from '../../src/app'
import { day0 } from '../../src/day0/solution'
import { day1 } from '../../src/day1/solution'

describe('day0', () => {
  it('returns Hello World', () => {
    const result = day0()
    expect(result).toEqual({ partOne: 'First solution', partTwo: 'Second solution' })
  })
})

describe('day1', () => {
  it.only('returns Hello World', () => {
    const result = day1()
    expect(result).toEqual({ partOne: 54159, partTwo: 53866 })
  })
})

describe('logDayResults', () => {
  it('should return answers for requested day', () => {
    const result = logDayResults(0)
    expect(result).toEqual(
      '🎄 Advent of Code 2023 🎄\n\nResult of day 0\n\nPart one: First solution\nPart two: Second solution\n'
    )
  })
  it('should return answers for all days', () => {
    const result = logDayResults()
    expect(result).toEqual('🎄 Advent of Code 2023 🎄\n\nDay 0 -  Part one: First solution Part two: Second solution')
  })
})
