let Activity = (
  id,
  title,
  description,
  important = false,
  completed = false,
  dueDate
) => {
  if (title == "") title = "New activity";
  if (description == "") description = "Description goes here";
  if (dueDate == "")
    dueDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
  return { id, title, description, important, completed, dueDate };
};

export { Activity };
