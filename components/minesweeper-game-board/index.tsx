"use client";

import { BoardData } from "@/types/board";
import { MinesweeperCellData } from "@/types/cell";
import { useMemo, useState } from "react";
import MinesweeperGameCell from "../minesweeper-game-cell";

export type MinesweeperGameBoardProps = {
  data: BoardData;
};

export default function MinesweeperGameBoard(props: MinesweeperGameBoardProps) {
  const { ROWS, COLS } = props.data;

  const max = useMemo(() => (ROWS > COLS ? ROWS : COLS), [ROWS, COLS]);

  const initialBoard = useMemo(() => {
    const cells: MinesweeperCellData[] = [];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cellData: MinesweeperCellData = {
          r,
          c,
          isFlagged: false,
          isOpened: false,
          mines: 0,
        };

        cells.push(cellData);
      }
    }
    return cells;
  }, [ROWS, COLS]);

  const [board, setBoard] = useState(initialBoard);

  const boardWidth = useMemo(() => {
    if (max === 9) {
      return 45 * 9;
    }

    if (max === 16) {
      return 35 * 16;
    }

    // 30 cells
    return 30 * 30;
  }, [max]);

  const onOpen = (row: number, col: number) => {};

  const onFlag = (row: number, col: number) => {};

  return (
    <div
      className="minesweeeper-game-board flex flex-row flex-wrap"
      style={{ width: boardWidth }}
    >
      {board.map((c, index) => {
        return (
          <MinesweeperGameCell
            {...c}
            onOpen={onOpen}
            onFlag={onFlag}
            size={Math.round(boardWidth / max)}
            key={index}
          />
        );
      })}
    </div>
  );
}
