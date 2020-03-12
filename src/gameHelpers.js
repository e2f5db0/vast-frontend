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
