import { Solutions } from '../types'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const parseInputFile = (input: string) => {
  const data = readFileSync(input, 'utf8')
  const lines = data.split('\n')
  return lines
}
const calibrations: string[] = parseInputFile('src/day1/input.txt')

const translateWordToDigit = (word: string | undefined): string => {
  switch (word) {
    case 'one':
      return '1'
    case 'two':
      return '2'
    case 'three':
      return '3'
    case 'four':
      return '4'
    case 'five':
      return '5'
    case 'six':
      return '6'
    case 'seven':
      return '7'
    case 'eight':
      return '8'
    case 'nine':
      return '9'
    default:
      return word || '0'
  }
}

const getCalibrationspartOne = (): number => {
  const foundDigits = calibrations.map((cal) => {
    const firstDigit = cal.match(/\d/)
    const lastDigit = cal.match(/(\d)[a-z]*$/)
    if (!firstDigit || !lastDigit) return 0
    return Number(`${firstDigit[0]}${lastDigit[1]}`)
  })
  return foundDigits.reduce((acc, curr: number) => {
    return acc + Number(curr)
  })
}

const getCalibrationspartTwo = (): number => {
  const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|[1-9]))/g
  const foundDigits = calibrations.map((calibration) => {
    return Array.from(calibration.matchAll(regex), (match) => match[1])
  })
  const result = foundDigits
    .map((digit) => {
      if (!digit) return 0
      const firstDigit = translateWordToDigit(digit[0]).charAt(0)
      const lastDigit = translateWordToDigit(digit[digit.length - 1]).charAt(0)
      if (!firstDigit || !lastDigit) return 0
      const number = firstDigit + lastDigit
      return Number(number)
    })
    .reduce((acc, curr: number) => {
      return acc + Number(curr)
    })

  return result
}

export const day1 = (): Solutions => {
  return { partOne: getCalibrationspartOne(), partTwo: getCalibrationspartTwo() }
}
