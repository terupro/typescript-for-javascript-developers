export {};

// オブジェクト型

// Part1 = 制約が甘い
let profile1: object = { name: "Teru" };
profile1 = { birthYear: 2002 };

// Part2 = プロパティに型指定できる(基本こっち)
let profile2: { name: string } = { name: "Teru" };
profile2 = { name: "Yuta" };
