import React, { createContext, useReducer, useRef, useState } from 'react'
import { IGrid, ISettings } from '../types';
import { generateSnake } from '../helpers/generate';
import { useInterval } from '../helpers/interval';
import { last, random } from 'lodash';

interface IPosition {
  x?: number;
  y?: number;
}
interface GameContextType {
  settings: ISettings;
  grid: IGrid | null;
  snake: IPosition[];
  currentTime: number | null;
  [key: string]: any;
}

export const GameContext = createContext<GameContextType>({
  settings: {
    mode: {
      width: 32,
      height: 32
    }
  },
  grid: null,
  snake: [],
  currentTime: 0,
})

export const GameProvider = ({ children }: any) => {
  const [settings, setSettings] = useState({
    mode: {
      width: 32,
      height: 32
    }
  })
  const [grid, setGrid] = useState<IGrid | null>(null)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const [snake, setSnakeState] = useState<IPosition[]>([])
  const snakeRef = useRef<IPosition[]>([])

  const [food, setFood] = useState<IPosition>({})
  const [direction, setDirection] = useState('down')

  const onStartGame = () => {
    const snake = generateSnake(settings.mode)
    setSnake(snake)
    snakeRef.current = snake

    spawnFood()

    setGameOver(null)
    setCurrentTime(0)
  }

  const setSnake = (snake: IPosition[]) => {
    setSnakeState(snake)
    snakeRef.current = snake
  }

  const moveForward = () => {
    if (!snakeRef?.current) {
      return
    }

    const headPosition = last(snakeRef?.current || [])


    const getNextPosition: any = {
      up: ({ y, ...rest }: any) => ({ ...rest, y: y - 1 }),
      down: ({ y, ...rest }: any) => ({ ...rest, y: y + 1 }),
      left: ({ x, ...rest }: any) => ({ ...rest, x: x - 1 }),
      right: ({ x, ...rest }: any) => ({ ...rest, x: x + 1 }),
    }

    const nextPosition = getNextPosition[direction](headPosition)

    if (!nextPositionFree(nextPosition)) {
      setGameOver({ won: false })
    }

    const isFood = nextPositionFood(nextPosition)

    if (isFood) {
      spawnFood()
    }

    const newSnake = [ ...snake.slice(isFood ? 0 : 1), nextPosition ]
    setSnake(newSnake)
  }

  const nextPositionFree = (position: any) => {
    const hitsCorner = position.y <= 0 ||
      position.y >= settings.mode.height - 1 ||
      position.x <= 0 ||
      position.x >= settings.mode.width - 1

    return !hitsCorner
  }

  const changeDirection = (newDirection: string) => {
    setDirection(newDirection)
    // const newSnake = [ snake[0], ...snake ]
    // setSnake(newSnake)
  }

  const spawnFood = () => {
    setFood({ x: random(0, settings.mode.width - 1) , y: random(0, settings.mode.height - 1) })
  }

  const nextPositionFood = (position: any) => {
    return position.x === food.x && position.y === food.y
  }

  useInterval(() => {
    moveForward()
  }, !gameOver ? 100 : null)

  return (
    <GameContext.Provider
      value={{
        onStartGame,
        settings,
        setSettings,
        grid,
        setGrid,
        snake,
        food,
        gameOver,
        setGameOver,
        currentTime,
        setCurrentTime,
        changeDirection,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
