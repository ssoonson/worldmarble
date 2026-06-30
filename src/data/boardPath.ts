/** 24칸 직사각형 순환 경로 좌표 (보드 SVG 기준 %, 셀 중심점) */
export interface CellPosition {
  x: number;
  y: number;
  label: string;
}

/** 반시계 방향, index 0 = 우측 하단 "시작" 칸 */
export const BOARD_PATH: CellPosition[] = [
  // 하단 행 (우→좌) 8칸
  { x: 84.0, y: 92.0, label: '시작' },
  { x: 72.75, y: 92.0, label: '2' },
  { x: 61.5, y: 92.0, label: '3' },
  { x: 50.25, y: 92.0, label: '4' },
  { x: 39.0, y: 92.0, label: '5' },
  { x: 27.75, y: 92.0, label: '6' },
  { x: 16.5, y: 92.0, label: '7' },
  { x: 9.0, y: 92.0, label: '8' },
  // 좌측 열 (하→상) 4칸
  { x: 9.0, y: 78.67, label: '9' },
  { x: 9.0, y: 63.67, label: '10' },
  { x: 9.0, y: 48.67, label: '11' },
  { x: 9.0, y: 33.67, label: '12' },
  // 상단 행 (좌→우) 8칸
  { x: 16.5, y: 8.0, label: '13' },
  { x: 27.75, y: 8.0, label: '14' },
  { x: 39.0, y: 8.0, label: '15' },
  { x: 50.25, y: 8.0, label: '16' },
  { x: 61.5, y: 8.0, label: '17' },
  { x: 72.75, y: 8.0, label: '18' },
  { x: 84.0, y: 8.0, label: '19' },
  { x: 91.0, y: 8.0, label: '20' },
  // 우측 열 (상→하) 4칸
  { x: 91.0, y: 33.67, label: '21' },
  { x: 91.0, y: 48.67, label: '22' },
  { x: 91.0, y: 63.67, label: '23' },
  { x: 91.0, y: 78.67, label: '24' },
];

export const TOTAL_CELLS = BOARD_PATH.length;

export const PLAYER_COLORS = [
  '#ef4444',
  '#3b82f6',
  '#22c55e',
  '#eab308',
  '#a855f7',
  '#f97316',
];
