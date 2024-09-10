"use client";

import { MinesweeperCellData } from "@/types/cell";
import { MouseEventHandler } from "react";

export type MinesweeperGameCellProps = MinesweeperCellData & {
  size: number;
  onOpen: (row: number, col: number) => void;
  onFlag: (row: number, col: number) => void;
};

export default function MinesweeperGameCell(props: MinesweeperGameCellProps) {
  const { mines, size, isOpened, onOpen, r, c, isMine, onFlag, isFlagged } =
    props;

  const flagCell: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    onFlag(r, c);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center border-[1px] ${
        !isOpened && "bg-secondary-100"
      } hover:bg-secondary-300 border-primary-200 ${
        isMine && isOpened && "bg-mine bg-cover"
      } ${isFlagged && !isOpened && "bg-flag bg-cover bg-center"}`}
      style={{ width: size, height: size }}
      onClick={() => onOpen(r, c)}
      onContextMenu={flagCell}
    >
      {mines > 0 && !isMine && isOpened && <span>{mines}</span>}
    </div>
  );
}
