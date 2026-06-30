interface PlayerTokenProps {
  x: number;
  y: number;
  color: string;
  playerNumber: number;
  isMoving: boolean;
}

export function PlayerToken({ x, y, color, playerNumber, isMoving }: PlayerTokenProps) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
        isMoving ? 'scale-110' : 'scale-100'
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div
        className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px] border-white shadow-lg"
        style={{ backgroundColor: color }}
      >
        <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
          {playerNumber}
        </span>
      </div>
    </div>
  );
}
