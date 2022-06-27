import React, { useContext } from 'react'
import { SControls, SControlsMiddle, SControlsButton } from './Controls.styled'
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
    <SControls>
      <SControlsButton
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
      </SControlsButton>
      <SControlsMiddle>
        <SControlsButton
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
        </SControlsButton>
        <SControlsButton
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
        </SControlsButton>
      </SControlsMiddle>
      <SControlsButton
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
      </SControlsButton>
    </SControls>
  )
}
