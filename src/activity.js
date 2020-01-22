let Activity = ( id, title, description, important = false, completed = false, dueDate) => {
    if(title == '') title = 'New activity';
    if(description == '') description = 'Description goes here';
    return { id, title, description, important, completed, dueDate};
  };

export { Activity };

