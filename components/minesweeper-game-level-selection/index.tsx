"use client";

import { LEVELS } from "@/types/board";

export type MinesweeperGameLevelSelectionProps = {
  onLevelSelected: (level: number) => void;
};

export default function MinesweeperGameLevelSelection(
  props: MinesweeperGameLevelSelectionProps
) {
  const levelName = (level: number) => {
    if (level === 0) {
      return "Beginer";
    }

    if (level === 1) {
      return "Intermediate";
    }

    return "Expert";
  };

  return (
    <div className="minesweper-game__level-selection flex flex-col flex-start items-start">
      <h2 className="text-head2 font-head2 font-san text-secondary">
        Please select level:{" "}
      </h2>
      {Object.keys(LEVELS).map((k) => {
        const level = LEVELS[Number(k)];
        return (
          <div
            className="text-head5 font-head5 font-mono text-primary hover:text-secondary cursor-pointer"
            onClick={() => props.onLevelSelected(Number(k))}
            key={k}
          >
            ⌲ {levelName(Number(k))} --{" "}
            {`${level.ROWS} x ${level.COLS} -- ${level.MINES} mines`}
          </div>
        );
      })}
    </div>
  );
}
