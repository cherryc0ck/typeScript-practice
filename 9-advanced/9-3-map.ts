{
  type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  [P in keyof T]: T[P] // for ... in
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

type VideoOptional = Optional<Video>;

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: 'dog',
};
animal.name = 'ellie';

// type VideoOptional = {
//   title?: string;
//   author?: string;
// };

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
// }

type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
  title: null,
  author: null,
};

}