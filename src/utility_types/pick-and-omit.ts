export {};

// Pick <全体の型, 取り出したい型> - 必要なメンバだけを取り出したい場合
// Omit <全体の型, 除外したい型> - 型を除外したい場合

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type smallProfile = Omit<DetailedProfile, "height">;
