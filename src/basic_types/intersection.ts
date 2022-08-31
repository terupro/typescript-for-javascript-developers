export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAvarage: number;
};

const Dal: Pitcher1 = {
  throwingSpeed: 160,
};

const Itiro: Batter1 = {
  battingAvarage: 0.367,
};

// type Ohtani = {
//   throwingSpeed: number;
//   battingAvarage: number;
// };

// インターセクション型(交差型) - 既存の型を組み合わせる場合
type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAvarage: 0.286,
};
