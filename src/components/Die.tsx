interface DieProps {
  value: number;
  isRolling: boolean;
}

const DOT_POSITIONS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
};

export function Die({ value, isRolling }: DieProps) {
  const dots = DOT_POSITIONS[value] ?? DOT_POSITIONS[1];

  return (
    <div
      className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center ${
        isRolling ? 'animate-dice-roll' : ''
      }`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-2">
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="8" fill="#1e293b" />
        ))}
      </svg>
    </div>
  );
}
