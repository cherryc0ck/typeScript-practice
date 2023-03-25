{
  type ToDo = {
    title: string;
    desc: string;
  };

  // 이미 만들어진 유틸 타입들이 있음!!!.
  // eg) Readonly
  function display(todo: Readonly<ToDo>) {
    todo.title = 'jaja';
  }
};