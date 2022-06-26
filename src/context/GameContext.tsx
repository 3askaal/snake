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
  const directionRef = useRef('down')

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

    const nextPosition = getNextPosition[directionRef.current](headPosition)
    const isCorner = nextPositionCorner(nextPosition)
    const isFood = nextPositionFood(nextPosition)
    const isTail = nextPositionTail(nextPosition)

    if (isCorner || isTail) {
      setGameOver({ won: false })
    }

    if (isFood) {
      spawnFood()
    }

    if (!isCorner && !isTail) {
      const newSnake = [ ...snake.slice(isFood ? 0 : 1), nextPosition ]
      setSnake(newSnake)
    }
  }

  function changeDirection (newDirection: string) {
    const isOpposite = (direction === 'left' && newDirection === 'right') ||
      (direction === 'right' && newDirection === 'left') ||
      (direction === 'up' && newDirection === 'down') ||
      (direction === 'down' && newDirection === 'up')

    if (isOpposite) {
      return
    }

    setDirection(newDirection)
    directionRef.current = newDirection
  }

  const spawnFood = () => {
    setFood({ x: random(0, settings.mode.width - 1) , y: random(0, settings.mode.height - 1) })
  }

  const nextPositionCorner = ({ x, y }: any) => {
    const hitsCorner = y < 0 ||
      y >= settings.mode.height ||
      x < 0 ||
      x >= settings.mode.width

    return hitsCorner
  }

  const nextPositionFood = (position: any) => {
    return position.x === food.x && position.y === food.y
  }

  const nextPositionTail = (position: any) => {
    return !!snake.find(({ x, y }) => position.x === x && position.y === y)
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
