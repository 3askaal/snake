import { s, brighten, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10.5rem',
  width: '10.5rem',
  // border: '1px solid red',

  '&:before': {
    content: "''",
    position: 'absolute',
    width: '120%',
    height: '120%',
    borderRadius: '100%',
    backgroundColor: 'backgroundDark',
    pointerEvents: 'none',
  }
}))

export const SControlsMiddle = s.div(({ theme, index }: any) => ({
  position: 'absolute',
  width: '3.5rem',
  height: '3.5rem',
  backgroundColor: brighten('black', .2),
  pointerEvents: 'none',

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

export const SControlsButton = s.button(({ theme, type, color, index }: any) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.5rem',
  height: '3.5rem',
  backgroundColor: brighten('black', .2),
  border: 0,
  borderRadius: '.2rem',
  color: 'white',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',

  'svg': {
    strokeWidth: 3,
    stroke: darken('white', 1.2)
  },

  ...(type === 'up' && {
    transform: 'translateY(-100%)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),

  ...(type === 'down' && {
    transform: 'translateY(100%)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),

  ...(type === 'left' && {
    transform: 'translateX(-100%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }),

  ...(type === 'right' && {
    transform: 'translateX(100%)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
}))
