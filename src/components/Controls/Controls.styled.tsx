import { s, brighten } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}))

export const SControlsMiddle = s.div(({ theme }: any) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 's',
  marginRight: 's',
  width: '5rem',
}))


export const SControlsButton = s.button(({ theme, type, color, index }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  width: '5rem',
  backgroundColor: brighten('black', .2),
  border: 0,
  // border: '.125rem solid',
  // borderTopColor: brighten('black', .8),
  // borderRightColor: brighten('black', .8),
  // borderLeftColor: brighten('black', 1.2),
  // borderBottomColor: brighten('black', 1.2),
  borderRadius: '.25rem',
  color: 'white',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',

  'svg': {
    strokeWidth: 3,
    stroke: 'white'
  }
}))
