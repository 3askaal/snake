import { times } from 'lodash'

const width = 64
const height = 64

export const generateGrid = () => {
  let newGrid: any = {}
  const positionAmount = (width * height)

  times(positionAmount, (i) => {
    const y = (i - (i % width)) / height
    const x = i % (width)

    newGrid[`${x}/${y}`] = { x, y, block: true }
  })

  // newGrid = generateSnake(newGrid)

  return newGrid
}

export const generateSnake = () => {
  let x = width / 2
  let y = (height / 2) - 2

  return times(5, (i) => {
    return { x, y: y + i }
  })
}
