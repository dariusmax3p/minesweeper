// types/cell.ts
export type MinesweeperCellData = {
  r: number; // row-index
  c: number; // col-index
  isOpened: boolean;
  isFlagged: boolean;
  mines: number; // adjacent cells's mines
};
