export {};

// Record<K, T> - 同じような構造のデータを複数のメンバーに設定する場合に使用する

type Prefectures = "Tokyo" | "Osaka" | "Aichi";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// Recordを使わなかった場合
const covid19Japan1: {
  Tokyo: Covid19InfectionInfo;
  Osaka: Covid19InfectionInfo;
  Aichi: Covid19InfectionInfo;
} = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
  Osaka: { kanji_name: "大阪", confirmed_cases: 1950 },
  Aichi: { kanji_name: "愛知", confirmed_cases: 1600 },
};

// Recordを使った場合
const covid19Japan2: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
  Osaka: { kanji_name: "大阪", confirmed_cases: 1950 },
  Aichi: { kanji_name: "愛知", confirmed_cases: 1600 },
};
