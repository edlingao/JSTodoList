let Activity = ( id, title, description, important = false, completed = false ) => {
    if(title == '') title = 'New activity';
    if(description == '') description = 'Description goes here';
    return { id, title, description, important, completed };
  };

export { Activity };

