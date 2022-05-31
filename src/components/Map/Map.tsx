import React, { useContext } from 'react'
import { Box } from '3oilerplate'
import { SMap, SMapBlock, SMapMine, SMapMineThread } from './Map.styled'
import { GameContext } from '../../context'

export const Map = () => {
  const { grid, gameOver, settings } = useContext(GameContext)

  const getPositions = () => {
    return grid ? Object.values(grid) : []
  }

  const blockSizeX = 100 / settings.mode.width
  const blockSizeY = 100 / settings.mode.height

  return (
    <SMap mode={settings.mode} gameOver={!!gameOver}>
      { getPositions().map((position: any, index: number) => (
        <Box
          s={{
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${blockSizeX}%`,
            height: `${blockSizeY}%`,
          }}
        >
          <SMapBlock
            key={`block-${index}`}
            block={position.block}
          />
        </Box>
      )) }
    </SMap>
  )
}
