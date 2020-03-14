import death2 from '../resources/minigame-death2.wav'
import boing from '../resources/minigame-confused.wav'

export const STAGE_WIDTH = 10
export const STAGE_HEIGHT = 11

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']))

export const checkCollision = (block, stage, { x: moveX, y: moveY }) => {

  for (let y = 0; y < block.tetromino.length; y += 1) {
    for (let x = 0; x < block.tetromino[y].length; x += 1) {

      if (block.tetromino[y][x] !== 0) {
        if (
          // Check that block is inside the game areas height (y)
          !stage[y + block.pos.y + moveY]
        ) {
          return true
        }
      }
    }
  }
  return false
}

export const checkBoundaries = (player, stage, { x: moveX, y: moveY }) => {

  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {

      if (player.tetromino[y][x] !== 0) {
        if (
          // Check that player is inside the restricted height (y)
          !stage[y + player.pos.y + moveY] ||
          // Check that player is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX]
        ) {
          return true
        }
      }
    }
  }
  return false
}

export const godsPhases = (setMessage, setLaugh, setStatus) => {

  setTimeout(() => {
    setMessage('He is amused by his own wrath.')
  }, 20000)

  setTimeout(() => {
    setMessage('His wrath intensifies.')
  }, 45000)

  setTimeout(() => {
    setMessage('His wrath is getting intense!')
  }, 60000)

  setTimeout(() => {
    setLaugh(false)
    setMessage('God is getting suspicious.')
    setStatus('suspicious')
  }, 66000)

  setTimeout(() => {
    new Audio(boing).play()
    setMessage('God is confused!')
    setLaugh(false)
    setStatus('confused')
    new Audio(death2).play()
  }, 74000)

  setTimeout(() => {
    setLaugh(true)
    setMessage('God snapped out of it!')
    setStatus('laughing')
  }, 83000)

  setTimeout(() => {
    new Audio(boing).play()
    setLaugh(false)
    setStatus('confused')
    setMessage('God hurt himself in his confusion!')
  }, 90000)

  setTimeout(() => {
    setLaugh(true)
    setMessage('But he recovered!')
    setStatus('laughing')
  }, 100000)

  setTimeout(() => {
    setMessage('The magic spell is starting to wear off.')
  }, 110000)

  setTimeout(() => {
    new Audio(boing).play()
    setLaugh(false)
    setStatus('confused')
    setMessage('He is getting weaker! Finish him!')
  }, 119000)
}

export const move = ({ keyCode }, player, stage, updatePlayerPos) => {
  if (keyCode === 37) {
    // arrow right
    moveHorizontally(-1, player, stage, updatePlayerPos)
  } else if (keyCode === 39) {
    // arrow left
    moveHorizontally(1, player, stage, updatePlayerPos)
  } else if (keyCode === 40) {
    // arrow down
    moveVertically(1, player, stage, updatePlayerPos)
  } else if (keyCode === 38) {
    // arrow up
    moveVertically(-1, player, stage, updatePlayerPos)
  }
}

export const moveHorizontally = (dir, player, stage, updatePlayerPos) => {
  if (!checkBoundaries(player, stage, { x: dir, y: 0 })) {
    updatePlayerPos({ x: dir, y: 0 })
  }
}

export const moveVertically = (dir, player, stage, updatePlayerPos) => {
  if (!checkBoundaries(player, stage, { x: 0, y: dir })) {
    updatePlayerPos({ x: 0, y: dir })
  }
}
