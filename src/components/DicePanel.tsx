import { Die } from './Die';

interface DicePanelProps {
  die1: number;
  die2: number;
  isRolling: boolean;
  isMoving: boolean;
  currentPlayer: number;
  totalPlayers: number;
  onRoll: () => void;
}

export function DicePanel({
  die1,
  die2,
  isRolling,
  isMoving,
  currentPlayer,
  totalPlayers,
  onRoll,
}: DicePanelProps) {
  const sum = die1 + die2;
  const disabled = isRolling || isMoving;
  const hasRolled = die1 > 0 && die2 > 0 && !isRolling;

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl min-w-[260px]">
      <h2 className="text-xl font-bold text-white">주사위</h2>

      <p className="text-blue-200 text-sm">
        현재 차례: <span className="font-bold text-white">플레이어 {currentPlayer + 1}</span>
        <span className="text-blue-300"> / {totalPlayers}명</span>
      </p>

      <div className="flex gap-4">
        <Die value={die1 || 1} isRolling={isRolling} />
        <Die value={die2 || 1} isRolling={isRolling} />
      </div>

      {hasRolled && (
        <p className="text-lg font-semibold text-white bg-blue-600/40 px-4 py-2 rounded-lg">
          주사위 결과: {die1}, {die2} (합계: {sum})
        </p>
      )}

      <button
        type="button"
        onClick={onRoll}
        disabled={disabled}
        className="w-full py-3 px-6 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg transition-all active:scale-95"
      >
        {isRolling ? '굴리는 중...' : isMoving ? '이동 중...' : '주사위 굴리기'}
      </button>
    </div>
  );
}
