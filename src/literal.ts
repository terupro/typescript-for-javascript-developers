export {};

// union型 - より詳細な型を指定したい場合

let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfTheWeek = "月";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;

let TRUE: true = true;
// TRUE = false;
