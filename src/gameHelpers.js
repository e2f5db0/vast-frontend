export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 15

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']))

export const checkCollision = (block, stage, { x: moveX, y: moveY }) => {

  for (let y = 0; y < block.tetromino.length; y += 1) {
    for (let x = 0; x < block.tetromino[y].length; x += 1) {
      
      if (block.tetromino[y][x] !== 0) {
        if (
          // Check that our move is inside the game areas height (y)
          !stage[y + block.pos.y + moveY] ||
          // Check that our move is inside the game areas width (x)
          !stage[y + block.pos.y + moveY][x + block.pos.x + moveX]
        ) {
          return true
        }
      }
    }
  }
  return false
}
