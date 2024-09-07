import MinesweeperGame from "@/components/minesweeper-game";

export default function MinesweeperPage() {
  return (
    <main className="minesweeper__page flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-head1 font-head1 font-serif text-primary">
        Minesweeper Game
      </h1>
      <MinesweeperGame />
    </main>
  );
}
