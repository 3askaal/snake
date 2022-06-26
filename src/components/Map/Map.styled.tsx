import { s, darken } from '3oilerplate'
import chroma from 'chroma-js'

export const SMap = s.div(({ theme, width, height, mode, gameOver }: any) => ({
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  aspectRatio: `${(mode.width / mode.height) || 1} / 1`,
  border: '.25rem solid',
  userSelect: 'none',

  // Light
  borderRightColor: chroma('#000').brighten(1).hex(),
  borderTopColor: chroma('#000').brighten(1).hex(),
  // Middle
  backgroundColor: chroma('#000').brighten(0.2).hex(),
  // Dark
  borderLeftColor: chroma('#000').brighten(.8).hex(),
  borderBottomColor: chroma('#000').brighten(.8).hex(),

  ...(gameOver && {
    [SMapSnake]: {
      backgroundColor: chroma('#FD0054').hex(),
      border: '1px solid ' + darken('#FD0054', .75),
    }
  })
}))

const snakeColor = '#00FFAB'

export const SMapSnake = s.div(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: darken(snakeColor, .25),
  border: '1px solid ' + darken(snakeColor, 1),
}))

export const SMapFood = s.div(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  border: '1px solid ' + darken('white', .5),
}))
