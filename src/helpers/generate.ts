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

  return newGrid
}
