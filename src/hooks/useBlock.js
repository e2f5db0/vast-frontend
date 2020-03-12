import { useState, useCallback } from 'react'

import { TETROMINOS, randomTetromino, getPlayer } from '../tetrominos'
import { STAGE_WIDTH } from '../gameHelpers'

export const useBlock = () => {
  const [block, setBlock] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  })

  const updateBlockPos = ({ x, y, collided }) => {
    setBlock(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }))
  }

  const resetBlock = useCallback(() => {
    let xCoor = Math.floor(Math.random() * STAGE_WIDTH)
    if (xCoor > 2) {
      xCoor = xCoor - 2
    }
    setBlock({
      pos: { x: xCoor, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [block, updateBlockPos, resetBlock]
}

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 5, y: 10 },
    tetromino: getPlayer(),
    collided: false,
  })

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }))
  }

  return [player, updatePlayerPos]
}
