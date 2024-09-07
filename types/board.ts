// types/board.ts (should export these types and constants in types/index.ts)

export type BoardData = {
  ROWS: number;
  COLS: number;
  MINES: number;
};

export const LEVELS: { [key: number]: BoardData } = {
  0: {
    // Beginer
    ROWS: 9,
    COLS: 9,
    MINES: 10,
  },
  1: {
    // Intermediate
    ROWS: 16,
    COLS: 16,
    MINES: 40,
  },
  2: {
    // Expert
    ROWS: 16,
    COLS: 30,
    MINES: 99,
  },
};
