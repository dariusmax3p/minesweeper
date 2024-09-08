// types/cell.ts
export type MinesweeperCellData = {
  r: number; // row-index
  c: number; // col-index
  isMine: boolean;
  isOpened: boolean;
  isFlagged: boolean;
  mines: number; // adjacent cells's mines
};
