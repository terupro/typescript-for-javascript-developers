import axios from "axios";
export {};

// any型 - 型推論ギブアップ宣言（プログラマが型を付ける必要がある）

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
});
