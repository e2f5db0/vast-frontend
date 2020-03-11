export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  S: {
    shape: [
      [0, 'S', 0],
      [0, 'S', 0],
      ['S', 'S', 'S'],
      [0, 'S', 0],
    ],
    color: '242, 242, 242'
  },
  Z: {
    shape: [
      [0, 'Z', 0],
      ['Z', 'Z', 'Z'],
      [0, 'Z', 0],
      [0, 'Z', 0],
    ]
    , color: '227, 78, 78'
  },
};

export const randomTetromino = () => {
  const tetrominos = 'SZZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
