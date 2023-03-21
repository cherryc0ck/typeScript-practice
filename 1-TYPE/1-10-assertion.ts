{
  /**
   * Type Assertions 
   */

  function jsStrFunc(): any {
    return 5;
  }

  const result = jsStrFunc();
  console.log((result as string).length);
}