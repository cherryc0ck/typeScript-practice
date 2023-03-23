type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
};

interface PositionInterface {
  z: number;
}



// oject ⭐️
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class ⭐️
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInerface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };


// only interfaces can be merged.
// 인터페이스만 merge가 가능..
interface PositionInterface {
  z: number;
}


// Type aliases can use computed properties
type Person = {
  name: string,
  age: number,
}

type Name = Person['name']; // string


















