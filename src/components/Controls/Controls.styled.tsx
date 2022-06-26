import { s, brighten } from '3oilerplate'

export const SPlayerDetails = s.div(({ theme, index }: any) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}))

export const SPlayerDetailsMiddle = s.div(({ theme }: any) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 'xs',
  marginRight: 'xs',
  width: '5rem',
}))


export const SPlayerDetailsButton = s.button(({ theme, type, color, index }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  width: '5rem',
  backgroundColor: brighten('black', .4),
  border: '.125rem solid',
  borderTopColor: brighten('black', .8),
  borderRightColor: brighten('black', .8),
  borderLeftColor: brighten('black', 1.2),
  borderBottomColor: brighten('black', 1.2),
  borderRadius: '.25rem',
  color: 'white',
  cursor: 'pointer',
  marginTop: 'xs',
  marginBottom: 'xs',

  'svg': {
    strokeWidth: 3,
    stroke: 'white'
  }
}))
