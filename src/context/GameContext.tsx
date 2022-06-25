import React, { createContext, useState } from 'react'
import { IGrid, ISettings } from '../types';
import { generateGrid, generateSnake } from '../helpers/generate';
import { useInterval } from '../helpers/interval';
import { last } from 'lodash';

interface ISnake {
  x?: number;
  y?: number;
}
interface GameContextType {
  settings: ISettings;
  grid: IGrid | null;
  snake: ISnake[];
  currentTime: number | null;
  [key: string]: any;
}

export const GameContext = createContext<GameContextType>({
  settings: {
    mode: {
      width: 64,
      height: 64
    }
  },
  grid: null,
  snake: [],
  currentTime: 0,
})

export const GameProvider = ({ children }: any) => {
  const [settings, setSettings] = useState({
    mode: {
      width: 64,
      height: 64
    }
  })
  const [grid, setGrid] = useState<IGrid | null>(null)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const [snake, setSnake] = useState<ISnake[]>([])
  const [direction, setDirection] = useState('down')
  // const [snakeRef, setSnakeRef] = useState(null)

  const onStartGame = () => {
    setSnake(generateSnake())
    setGameOver(null)
    setCurrentTime(0)
  }

  useInterval(() => {
    moveForward()
  }, !gameOver ? 100 : null)

  const moveForward = () => {
    const headPosition = last(snake)

    const getNextPosition: any = {
      up: ({ y, ...rest }: any) => ({ ...rest, y: y - 1 }),
      down: ({ y, ...rest }: any) => ({ ...rest, y: y + 1 }),
      left: ({ x, ...rest }: any) => ({ ...rest, y: x - 1 }),
      right: ({ x, ...rest }: any) => ({ ...rest, y: x + 1 }),
    }

    const nextPosition = getNextPosition[direction](headPosition)

    if (!nextPositionFree(nextPosition)) {
      setGameOver({ won: false })
    }

    snake.shift()

    setSnake([ ...snake, nextPosition ])
  }

  const nextPositionFree = (position: any) => {
    const hitsCorner = position.y < 0 ||
      position.y >= settings.mode.height - 1 ||
      position.x < 0 ||
      position.x >= settings.mode.width - 1

    return !hitsCorner
  }

  const changeDirection = () => {

  }

  return (
    <GameContext.Provider
      value={{
        onStartGame,
        settings,
        setSettings,
        grid,
        setGrid,
        snake,
        setSnake,
        gameOver,
        setGameOver,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
