{
  /**
   *  InterSection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name);
    console.log(person.score);
    console.log(person.employeeId);
  };
  internWork({
    name: 'ellie',
    score: 100,
    employeeId: 123,
    work: () => {},
  });
}