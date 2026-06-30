import { GameBoard } from './components/GameBoard';
import { DicePanel } from './components/DicePanel';
import { PlayerSetup } from './components/PlayerSetup';
import { useGameState } from './hooks/useGameState';

function App() {
  const {
    playerCount,
    setPlayerCount,
    gameStarted,
    playerPositions,
    playerColors,
    currentPlayer,
    die1,
    die2,
    isRolling,
    isMoving,
    startGame,
    rollDice,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
            세계여행 마블
          </h1>
          <p className="text-blue-300 mt-2 text-sm sm:text-base">
            주사위를 굴려 24칸을 돌아보세요! (반시계 방향)
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
          <div className="w-full lg:flex-1 flex justify-center">
            <GameBoard
              playerPositions={gameStarted ? playerPositions : [0]}
              playerColors={gameStarted ? playerColors : ['#ef4444']}
              isMoving={isMoving}
            />
          </div>

          <aside className="flex flex-col gap-4 w-full lg:w-auto">
            <PlayerSetup
              playerCount={playerCount}
              onPlayerCountChange={setPlayerCount}
              onStart={startGame}
              gameStarted={gameStarted}
            />

            {gameStarted && (
              <DicePanel
                die1={die1}
                die2={die2}
                isRolling={isRolling}
                isMoving={isMoving}
                currentPlayer={currentPlayer}
                totalPlayers={playerCount}
                onRoll={rollDice}
              />
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
