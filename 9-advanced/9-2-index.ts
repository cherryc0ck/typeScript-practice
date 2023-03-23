{
  const obj = {
    name: 'ellie',
  }

  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'] // string
  type Age = Animal['age'] // number
  type Gender = Animal['gender'] // 'male' | 'female'


  const testName: Name = 'dd';
  const testAge: Age = 123;
  const gender: Gender = 'female';

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = 'gender';


  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'ellie',
    gender: 'male',
  }
}