/**
 * Let's make a calculator 🧮
 */

type Options = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

// function calculate(option: Options, ...rest: number[]):number {
//   switch (option) {
//     case 'add':
//       return rest.reduce((acc, cur) => acc + cur);
//     case 'substract':
//       return rest[0] - rest[1];
//     case 'multiply':
//       return rest[0] * rest[1];
//     case 'divide':
//       return rest[0] / rest[1];
//     case 'remainder':
//       return rest[0] % rest[1];
//   }
// };

const calculate = (option: Options, ...rest: number[]):number => {
  switch (option) {
    case 'add':
      return rest.reduce((acc, cur) => acc + cur);
    case 'substract':
      return rest[0] - rest[1];
    case 'multiply':
      return rest[0] * rest[1];
    case 'divide':
      return rest[0] / rest[1];
    case 'remainder':
      return rest[0] % rest[1];
    default:
      const _option: never = option;
      throw new Error('unknown command');
  }
};

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
console.log(calculate('test', 5, 2)); // 1
