import { s, brighten, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '12rem',
  width: '12rem',
  // border: '1px solid red',

  '&:before': {
    content: "''",
    position: 'absolute',
    width: '120%',
    height: '120%',
    borderRadius: '100%',
    backgroundColor: 'backgroundLight',
    pointerEvents: 'none',
  }
}))

export const SControlsMiddle = s.div(({ theme, index }: any) => ({
  position: 'absolute',
  width: '4rem',
  height: '4rem',
  backgroundColor: brighten('black', .2),
  pointerEvents: 'none',
  zIndex: '100100',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '80%',
    height: '80%',
    borderRadius: '100%',
    backgroundColor: brighten('black', .4),
    pointerEvents: 'none',
  }
}))

const shadowSize = '.125rem'
const shadowColor = brighten('black', 1.2)

export const SControlsButton = s.button(({ type }: any) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  backgroundColor: brighten('black', .2),
  border: 0,
  borderRadius: '.2rem',
  color: 'white',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '.2rem',

    ...(type === 'up' && {
      boxShadow: `0 -${shadowSize} 0 ${shadowSize} ${shadowColor}`,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    }),

    ...(type === 'down' && {
      boxShadow: `0 ${shadowSize} 0 ${shadowSize} ${shadowColor}`,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    }),

    ...(type === 'left' && {
      boxShadow: `-${shadowSize} 0 0 ${shadowSize} ${shadowColor}`,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }),

    ...(type === 'right' && {
      boxShadow: `${shadowSize} 0 0 ${shadowSize} ${shadowColor}`,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    }),
  },

  'svg': {
    strokeWidth: 3,
    stroke: darken('white', 1.2)
  },

  ...(type === 'up' && {
    transform: 'translateY(-99.5%)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),

  ...(type === 'down' && {
    transform: 'translateY(99.5%)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),

  ...(type === 'left' && {
    transform: 'translateX(-99.5%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }),

  ...(type === 'right' && {
    transform: 'translateX(99.5%)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
}))
