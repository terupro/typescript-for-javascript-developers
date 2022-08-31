export {};

// enum型

enum Months {
  January = 1, //先頭から順に数字が割り当てられる
  February,
  March,
  April,
  May,
  Jun,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log({ green });

// 追加
enum COLORS {
  YELLOW = "#FFFF00",
}
