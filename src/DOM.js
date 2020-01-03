const DOM = () => {
    const drawGroup = (group, groupContainer) => {
      const container = document.createElement("div");
      const controlContainer = document.createElement("div");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const groupName = document.createElement("h1");
      const activityContainer = document.querySelector('#activities-container');
      const idHolder = document.querySelector('.ID-holder');
      const activityTitle = document.querySelector('#activities-title');

      groupName.innerHTML = group.groupName;

      editButton.innerHTML = `<i class="material-icons">create</i>`;
      editButton.classList.add("edit");

      deleteButton.innerHTML = `<i class="material-icons">delete_sweep</i>`;
      deleteButton.classList.add("delete");

      controlContainer.classList.add("control-container");
      container.classList.add("group");

      controlContainer.appendChild(editButton);
      controlContainer.appendChild(deleteButton);

      container.appendChild(groupName);
      container.appendChild(controlContainer);
      container.tabIndex = -1;
      container.id = `group_${group.id}`;
      

      container.addEventListener('click', ()=>{
        clearContainer(activityContainer);
        activityTitle.innerText = group.groupName;
        idHolder.id = group.id;
        group.showActivities().forEach(activity => {
          activityContainer.appendChild(drawActivity(activity));
        });
      });
      deleteButton.addEventListener('click', ()=>{
        deleteGroup(group);
        groupContainer.deleteActivity(group.id);
      });
      return container;
    };
    const drawActivity = (activity) => {
      //Universal containers
      const container = document.createElement("div");
      const controlsContainer = document.createElement("div");
      const descriptionContainer = document.createElement("div");
      const header = document.createElement("header");

      //Interactive containers
      const important = document.createElement("button");
      const completed = document.createElement("button");
      const deleteButton = document.createElement("button");

      //Text containers
      const activityTitle = document.createElement("h1");
      const activityDescription = document.createElement("p");
      const star = document.createElement("i");
      const checkBox = document.createElement("i");
      const close = document.createElement("i");

      container.classList.add("activity-container");
      controlsContainer.classList.add("activity-controls-container");
      descriptionContainer.classList.add("activity-description-container");
      header.classList.add("activity-header");

      important.classList.add("important-button");
      completed.classList.add("completed-button");
      deleteButton.classList.add("delete-button");

      activityTitle.classList.add("acitivity-title");
      activityDescription.classList.add("activity-description");

      star.classList.add("material-icons");
      checkBox.classList.add("material-icons");
      close.classList.add("material-icons");

      star.innerHTML = "star_border";
      checkBox.innerHTML = "check_box_outline_blank";
      close.innerHTML = "clear";

      activityTitle.innerText = activity.title;
      activityDescription.innerText = activity.description;

      important.appendChild(star);
      completed.appendChild(checkBox);
      deleteButton.appendChild(close);

      controlsContainer.appendChild(important);
      controlsContainer.appendChild(completed);
      controlsContainer.appendChild(deleteButton);

      header.appendChild(activityTitle);
      header.appendChild(controlsContainer);

      descriptionContainer.appendChild(activityDescription);

      container.appendChild(header);
      container.appendChild(descriptionContainer);
      container.id = activity.id;

      if(activity.important) 
        star.innerHTML = toggleSymbols(star);
      if(activity.completed) 
        checkBox.innerHTML = toggleSymbols(checkBox);

      important.addEventListener("click", () => {
        star.innerHTML = toggleSymbols(star);
        activity.important = !activity.important;
      });
      completed.addEventListener("click", () => {
        checkBox.innerHTML = toggleSymbols(checkBox);
        activity.completed = !activity.completed;
      });

      return container;
    };
    const toggleSymbols = (action) => {
      switch (action.innerHTML) {
        case "star":
          return "star_border";

        case "star_border":
          return "star";

        case "check_box":
          return "check_box_outline_blank";

        case "check_box_outline_blank":
          return "check_box";

        default:
          break;
      }
    };
    const deleteGroup = (group) =>{
        
        const groupContainer = document.querySelector(`#group_${group.id}`);
        groupContainer.classList.add('fade-out');
        setTimeout(()=> groupContainer.remove(), 200);
    };
    const clearContainer = (container)=>{
      container.innerHTML = '';
    };
  return { drawGroup, drawActivity };
};

export { DOM };
