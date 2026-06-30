# 세계여행 마블 (World Marble)

React와 Tailwind CSS로 만든 교실용 보드게임 웹 애플리케이션입니다.

## 기능

- **24칸 직사각형 순환 보드**: 반시계 방향으로 이동하며, 우측 하단 "시작" 칸에서 출발합니다.
- **다중 플레이어**: 1~6명까지 참여 인원을 설정할 수 있습니다.
- **주사위 2개**: 1~6 사이의 랜덤 값과 합계를 표시하며, 굴리는 애니메이션을 제공합니다.
- **순차 이동 애니메이션**: 주사위 합계만큼 한 칸씩 이동하며, 마지막 칸 이후 시작 칸으로 순환합니다.

## 실행 방법 (내 컴퓨터에서)

이 주소는 **내 PC에서 서버를 실행했을 때만** 접속됩니다.

```bash
git clone https://github.com/ssoonson/worldmarble.git
cd worldmarble
npm install
npm run dev
```

실행 후 브라우저에서 **http://localhost:5173/worldmarble/** 로 접속합니다.

## 온라인 접속 (배포 후)

GitHub Pages에 배포되면 아래 주소에서 바로 플레이할 수 있습니다.

**https://ssoonson.github.io/worldmarble/**

> PR이 main 브랜치에 머지된 뒤 자동 배포됩니다. 처음 배포는 1~2분 정도 걸릴 수 있습니다.

## 기술 스택

- React 19 + TypeScript
- Vite
- Tailwind CSS 4

## 보드 좌표

플레이어 말의 위치는 `src/data/boardPath.ts`에 정의된 24개 칸의 퍼센트 좌표를 사용합니다. 배경 이미지(`public/board.svg`)를 교체할 경우 이 좌표를 조정하면 됩니다.
