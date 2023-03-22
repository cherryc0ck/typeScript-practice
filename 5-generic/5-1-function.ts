// function checkNotNull(arg: number | null): number {
//   if (arg == null) {
//     throw new Error('not vaild number!');
//   }

//   return arg;
// };

// function checkNotNullAnyBad(arg: any | null): any {
//   if (arg == null) {
//     throw new Error('not vaild number!');
//   }
  
//   return arg;
// }

function checkNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error('not vaild number!');
  }
  
  return arg;
}

const result = checkNotNull(111);
const boal: boolean = checkNotNull(true);


