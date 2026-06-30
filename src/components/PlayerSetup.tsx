interface PlayerSetupProps {
  playerCount: number;
  onPlayerCountChange: (count: number) => void;
  onStart: () => void;
  gameStarted: boolean;
}

export function PlayerSetup({
  playerCount,
  onPlayerCountChange,
  onStart,
  gameStarted,
}: PlayerSetupProps) {
  if (gameStarted) {
    return (
      <div className="flex items-center gap-2 text-white/80 text-sm">
        <span className="bg-white/10 px-3 py-1 rounded-full">
          플레이어 {playerCount}명
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
      <h2 className="text-xl font-bold text-white">게임 설정</h2>
      <div className="flex items-center gap-3">
        <label htmlFor="player-count" className="text-white font-medium">
          참여 인원:
        </label>
        <select
          id="player-count"
          value={playerCount}
          onChange={(e) => onPlayerCountChange(Number(e.target.value))}
          className="px-4 py-2 rounded-lg bg-white text-gray-800 font-semibold cursor-pointer"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}명
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        onClick={onStart}
        className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-white font-bold text-lg rounded-xl shadow-lg transition-all active:scale-95"
      >
        게임 시작
      </button>
    </div>
  );
}
