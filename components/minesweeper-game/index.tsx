"use client";

import { useState } from "react";
import MinesweeperGameLevelSelection from "../minesweeper-game-level-selection";
import MinesweeperGameBoard from "../minesweeper-game-board";
import { LEVELS } from "@/types/board";

export default function MinesweeperGame() {
  const [level, setLevel] = useState(-1);
  const onLevelSelected = (level: number) => {
    setLevel(level);
  };

  return (
    <div className="minesweeper-game flex flex-col">
      {level < 0 && (
        <MinesweeperGameLevelSelection onLevelSelected={onLevelSelected} />
      )}
      {level >= 0 && <MinesweeperGameBoard data={LEVELS[Number(level)]} />}
    </div>
  );
}
