export {};

// Exclude <全体の型, 除外したい型> - 不要な型を除外する
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; //全ての関数の型を除外する

// Extract <全体の型, 抽出したい型> - 型を抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>; //全ての関数の型を抽出する

// Nonnullable - nullとundifinedを除外する
type NullabelTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NonFunctionType>;
