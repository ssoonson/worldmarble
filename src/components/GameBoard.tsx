import { BOARD_PATH } from '../data/boardPath';
import { PlayerToken } from './PlayerToken';

interface GameBoardProps {
  playerPositions: number[];
  playerColors: string[];
  isMoving: boolean;
}

export function GameBoard({ playerPositions, playerColors, isMoving }: GameBoardProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <img
        src="/board.svg"
        alt="세계여행 보드게임 보드"
        className="w-full h-auto rounded-2xl shadow-2xl"
        draggable={false}
      />
      <div className="absolute inset-0">
        {playerPositions.map((position, index) => {
          const cell = BOARD_PATH[position];
          const offsetAngle = (index / playerPositions.length) * 2 * Math.PI;
          const offsetRadius = playerPositions.length > 1 ? 2.2 : 0;
          const offsetX = Math.cos(offsetAngle) * offsetRadius;
          const offsetY = Math.sin(offsetAngle) * offsetRadius;

          return (
            <PlayerToken
              key={index}
              x={cell.x + offsetX}
              y={cell.y + offsetY}
              color={playerColors[index]}
              playerNumber={index + 1}
              isMoving={isMoving}
            />
          );
        })}
      </div>
    </div>
  );
}
