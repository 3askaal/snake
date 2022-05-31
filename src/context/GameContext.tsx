import React, { createContext, useEffect, useState } from 'react'
import { IGrid, IPosition, ISettings } from '../types';
import { generateGrid } from '../helpers/generate';
import { useInterval } from '../helpers/interval';

interface GameContextType {
  settings: ISettings;
  grid: IGrid | null;
  currentTime: number | null;
  [key: string]: any;
}

export const GameContext = createContext<GameContextType>({
  settings: {},
  grid: null,
  currentTime: 0
})

export const GameProvider = ({ children }: any) => {
  const [settings, setSettings] = useState({})
  const [grid, setGrid] = useState<IGrid | null>(null)
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const onStartGame = () => {
    setGrid(generateGrid())
    setGameOver(null)
    setGameActive(true)
    setCurrentTime(0)
  }

  useInterval(() => {
    // increase snake length
  }, (gameActive && !gameOver) ? 100 : null)

  return (
    <GameContext.Provider
      value={{
        onStartGame,
        settings,
        setSettings,
        grid,
        setGrid,
        gameOver,
        setGameOver,
        currentTime,
        setCurrentTime,
        setGameActive
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
