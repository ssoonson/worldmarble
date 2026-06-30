import { useCallback, useState } from 'react';
import { PLAYER_COLORS, TOTAL_CELLS } from '../data/boardPath';

const ROLL_DURATION = 800;
const STEP_DELAY = 350;

function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useGameState() {
  const [playerCount, setPlayerCount] = useState(2);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerPositions, setPlayerPositions] = useState<number[]>([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const playerColors = PLAYER_COLORS.slice(0, playerCount);

  const startGame = useCallback(() => {
    setPlayerPositions(Array(playerCount).fill(0));
    setCurrentPlayer(0);
    setDie1(0);
    setDie2(0);
    setGameStarted(true);
  }, [playerCount]);

  const movePlayerStepByStep = useCallback(
    async (playerIndex: number, steps: number) => {
      setIsMoving(true);

      for (let i = 0; i < steps; i++) {
        await sleep(STEP_DELAY);
        setPlayerPositions((prev) => {
          const next = [...prev];
          next[playerIndex] = (next[playerIndex] + 1) % TOTAL_CELLS;
          return next;
        });
      }

      setIsMoving(false);
      setCurrentPlayer((prev) => (prev + 1) % playerCount);
    },
    [playerCount],
  );

  const rollDice = useCallback(async () => {
    if (isRolling || isMoving) return;

    setIsRolling(true);
    setDie1(0);
    setDie2(0);

    const interval = setInterval(() => {
      setDie1(rollDie());
      setDie2(rollDie());
    }, 80);

    await sleep(ROLL_DURATION);
    clearInterval(interval);

    const final1 = rollDie();
    const final2 = rollDie();
    setDie1(final1);
    setDie2(final2);
    setIsRolling(false);

    await movePlayerStepByStep(currentPlayer, final1 + final2);
  }, [isRolling, isMoving, currentPlayer, movePlayerStepByStep]);

  return {
    playerCount,
    setPlayerCount,
    gameStarted,
    playerPositions: playerPositions.slice(0, playerCount),
    playerColors,
    currentPlayer,
    die1,
    die2,
    isRolling,
    isMoving,
    startGame,
    rollDice,
  };
}
