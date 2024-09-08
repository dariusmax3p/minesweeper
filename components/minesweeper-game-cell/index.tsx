"use client";

import { MinesweeperCellData } from "@/types/cell";

export type MinesweeperGameCellProps = MinesweeperCellData & {
  size: number;
  onOpen: (row: number, col: number) => void;
  onFlag: (row: number, col: number) => void;
};

export default function MinesweeperGameCell(props: MinesweeperGameCellProps) {
  const { mines, size, isOpened, onOpen, r, c, isMine } = props;
  return (
    <div
      className={`flex flex-col justify-center items-center border-[1px] ${
        !isOpened && "bg-secondary-100"
      } hover:bg-secondary-300 border-primary-200 ${
        isMine && "bg-mine bg-cover"
      }`}
      style={{ width: size, height: size }}
      onClick={() => onOpen(r, c)}
    >
      {mines > 0 && !isMine && <span>{mines}</span>}
    </div>
  );
}
