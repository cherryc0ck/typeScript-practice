{
  // JavaScript 
  // function add (num1:number, num2:number): number {
  //   console.log(num1 + num2)
  //   return num1 + num2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function printName(firstName: string, lastName?: string) {
  //   console.log(firstName);
  //   console.log(lastName);
  // }
  // printName('홍언택', '정태웅');
  // printName('Steve');

  // Default parameter
  // function printMessage(message: string = 'Default message') {
  //   console.log(message);
  // }
  // printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}