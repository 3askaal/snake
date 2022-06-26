import React, { useContext } from 'react'
import { SPlayerDetails, SPlayerDetailsMiddle, SPlayerDetailsButton } from './Controls.styled'
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'react-feather'
import isMobile from 'is-mobile'
import { GameContext } from '../../context'

export const Controls = () => {
  const { changeDirection } = useContext(GameContext)

  return (
    <SPlayerDetails>
      <SPlayerDetailsButton
        type="left"
        {...isMobile() ? {
          onTouchStart: () => changeDirection('left')
        } : {
          onMouseDown: () => changeDirection('left')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronLeft />
      </SPlayerDetailsButton>
      <SPlayerDetailsMiddle>
        <SPlayerDetailsButton
          type="up"
          {...isMobile() ? {
            onTouchStart: () => changeDirection('up')
          } : {
            onMouseDown: () => changeDirection('up')
          }}
          s={{
            touchAction: isMobile() ? 'auto' : 'none',
          }}
        >
          <ChevronUp />
        </SPlayerDetailsButton>
        <SPlayerDetailsButton
          type="down"
          {...isMobile() ? {
            onTouchStart: () => changeDirection('down')
          } : {
            onMouseDown: () => changeDirection('down')
          }}
          s={{
            touchAction: isMobile() ? 'auto' : 'none',
          }}
        >
          <ChevronDown />
        </SPlayerDetailsButton>
      </SPlayerDetailsMiddle>
      <SPlayerDetailsButton
        type="right"
        {...isMobile() ? {
          onTouchStart: () => changeDirection('right')
        } : {
          onMouseDown: () => changeDirection('right')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronRight />
      </SPlayerDetailsButton>
    </SPlayerDetails>
  )
}
