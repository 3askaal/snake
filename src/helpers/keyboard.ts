import React from "react"
import useMousetrap from "react-hook-mousetrap"

export function useKeyboardBindings() {
  useMousetrap('up', () => {})
  useMousetrap('down', () => {})
  useMousetrap('left', () => {})
  useMousetrap('right', () => {})
}
