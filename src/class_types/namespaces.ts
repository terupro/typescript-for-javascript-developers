export {};

// 名前空間 - 同じ名前のクラスは1つのファイルに作成できないが、名前空間を使えば、1つ上の階層を作れる (同じ名前のクラスを作れる)

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

const meTokyo = new Japanese.Tokyo.Person("Teru");
console.log(meTokyo.name);

const meOsaka = new Japanese.Osaka.Person("TeruYan");
console.log(meOsaka.name);

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael.firstName);
