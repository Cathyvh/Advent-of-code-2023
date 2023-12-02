import { parseInputFile } from '../utils'

const games: string[] = parseInputFile('src/day2/input.txt')
interface RoundObj {
  [key: string]: number
}
interface RoundObjArr extends Array<RoundObj> {}

const parsedGames = games.map((game) => {
  const gameContent = game.split(': ')[1]
  const rounds = gameContent?.split('; ').map((round) => {
    const scores = round.split(', ').map((score) => score.split(' '))
    const roundObj: RoundObj = {}
    scores.map((score) => {
      const color = score[1]
      if (!color) throw new Error('No color found')
      roundObj[color] = Number(score[0])
    })
    return roundObj
  })
  if (!rounds) throw new Error('No rounds found')

  return rounds
})

export const day2 = () => {
  const partOne = () => {
    let sum = 0
    parsedGames.map((game: RoundObjArr, index) => {
      const validRounds = game.map((round) => {
        if ((round.red && round.red > 12) || (round.green && round.green > 13) || (round.blue && round.blue > 14))
          return false
        else return true
      })
      const validGame = { index: index + 1, valid: validRounds.every((round) => round === true) }
      if (validGame.valid) sum += validGame.index
    })
    return sum
  }

  const partTwo = () => {
    const combineFewestPossible = parsedGames.map((game: RoundObjArr, index) => {
      const blue: number[] = []
      const green: number[] = []
      const red: number[] = []
      game.map((round) => {
        if (round.blue) blue.push(round.blue)
        if (round.green) green.push(round.green)
        if (round.red) red.push(round.red)
      })
      const fewestPossibleBlue = Math.max(...blue)
      const fewestPossibleGreen = Math.max(...green)
      const fewestPossibleRed = Math.max(...red)
      return fewestPossibleBlue * fewestPossibleGreen * fewestPossibleRed
    })
    return combineFewestPossible.reduce((a, b) => a + b, 0)
  }

  return { partOne: partOne(), partTwo: partTwo() }
}
