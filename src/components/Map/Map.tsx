import React, { useContext, useEffect } from 'react'
import { Box } from '3oilerplate'
import { SMap, SMapSnake } from './Map.styled'
import { GameContext } from '../../context'

export const Map = () => {
  const { grid, gameOver, settings, snake } = useContext(GameContext)

  const blockSizeX = 100 / settings.mode.width
  const blockSizeY = 100 / settings.mode.height

  return (
    <SMap mode={settings.mode} gameOver={!!gameOver}>
      { snake.map((position: any, index: number) => (
        <Box
          s={{
            display: 'flex',
            position: 'absolute',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${blockSizeX}%`,
            height: `${blockSizeY}%`,
            top: `${blockSizeY * position.y}%`,
            left: `${blockSizeY * position.x}%`,
          }}
        >
          <SMapSnake
            key={`block-${index}`}
            block={position.block}
          />
        </Box>
      )) }
    </SMap>
  )
}
