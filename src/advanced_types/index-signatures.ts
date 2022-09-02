export {};

// インデックスシグネチャ - 値を後から次々と追加・変更したい場合

interface Profile {
  name: string; //必須のパラメータ
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Teru", underTwenty: false };

profile.name = "Teru";
profile.age = 20;
profile.nationality = "Japan";
