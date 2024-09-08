"use client";

import { BoardData } from "@/types/board";
import { MinesweeperCellData } from "@/types/cell";
import { useMemo, useState } from "react";
import MinesweeperGameCell from "../minesweeper-game-cell";

export type MinesweeperGameBoardProps = {
  data: BoardData;
};

export default function MinesweeperGameBoard(props: MinesweeperGameBoardProps) {
  const { ROWS, COLS, MINES } = props.data;

  const [firstMove, setFirstMove] = useState(true);

  const max = useMemo(() => (ROWS > COLS ? ROWS : COLS), [ROWS, COLS]);

  const initialBoard = useMemo(() => {
    const cells: MinesweeperCellData[] = [];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cellData: MinesweeperCellData = {
          r,
          c,
          isMine: false,
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

  const isValid = (row: number, col: number) => {
    return row >= 0 && row < ROWS && col >= 0 && col < COLS;
  };

  const indexOf = (row: number, col: number) => {
    return row * COLS + col;
  };

  const genBoard = (row: number, col: number) => {
    let placedMines = 0;
    let _board = [...board];

    while (placedMines < MINES) {
      const randomR = Math.round(Math.random() * ROWS);
      const randomC = Math.round(Math.random() * COLS);

      if (randomC === col && randomR === row) continue;
      if (isValid(randomR, randomC)) {
        const randomIndex = indexOf(randomR, randomC);
        const randomCell = _board[randomIndex];
        randomCell.isMine = true;
        _board[randomIndex] = randomCell;

        placedMines++;
      }
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const index = indexOf(r, c);
        const cell = _board[index];

        if (cell.isMine) {
          for (let ri = -1; ri < 2; ri++) {
            for (let ci = -1; ci < 2; ci++) {
              const rr = r + ri;
              const cc = c + ci;

              if (ri === 0 && ci === 0) continue;

              if (isValid(rr, cc)) {
                const indexIndex = indexOf(rr, cc);
                const cellCell = _board[indexIndex];
                cellCell.mines = cellCell.mines + 1;
                _board[indexIndex] = cellCell;
              }
            }
          }
        }
      }
    }

    return _board;
  };

  const flootFill = (
    row: number,
    col: number,
    board: MinesweeperCellData[]
  ) => {
    if (!isValid(row, col)) return board;

    const index = indexOf(row, col);
    const cell = board[index];
    if (cell.mines !== 0 || cell.isOpened || cell.isMine) return board;

    cell.isOpened = true;
    board[index] = cell;

    // Up
    board = flootFill(row - 1, col, board);
    // Down
    board = flootFill(row + 1, col, board);
    // Left
    board = flootFill(row, col - 1, board);
    // Right
    board = flootFill(row, col + 1, board);

    return board;
  };

  const openCell = (row: number, col: number, board: MinesweeperCellData[]) => {
    let _board = [...board];
    const index = indexOf(row, col);
    const cell = _board[index];
    cell.isOpened = true;

    if (cell.mines === 0) {
      // Up
      _board = flootFill(row - 1, col, _board);
      // Down
      _board = flootFill(row + 1, col, _board);
      // Left
      _board = flootFill(row, col - 1, _board);
      // Right
      _board = flootFill(row, col + 1, _board);
    }

    _board[index] = cell;

    return _board;
  };

  const onOpen = (row: number, col: number) => {
    if (firstMove) {
      let _board = genBoard(row, col);
      _board = openCell(row, col, _board);

      setFirstMove(false);
      setBoard(_board);
    } else {
      const _board = openCell(row, col, [...board]);
      setBoard(_board);
    }
  };

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
