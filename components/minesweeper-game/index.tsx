"use client";
import MinesweeperGameLevelSelection from "../minesweeper-game-level-selection";

export default function MinesweeperGame() {
  const onLevelSelected = (level: number) => {
    alert(level);
  };

  return (
    <div className="minesweeper-game flex flex-col">
      <MinesweeperGameLevelSelection onLevelSelected={onLevelSelected} />
    </div>
  );
}
