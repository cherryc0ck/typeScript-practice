{
  type ToDo = {
    title: string;
    desc: string;
    label: string;
    priority: 'high' | 'low';
  };




  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  };

  const todo: ToDo = {
    title: 'lean TypeScript',
    desc: 'study hard',
    label: 'study',
    priority: 'high',
  };

  console.log(updateToDo(todo, { title: 'ㅠㅠ' }));

  


}