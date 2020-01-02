const group = require('./group');
const act = require('./activity');
const Activity = act.Activity;

const Dom = () => {
  (setEventListeners = () => {
    const addGroup = document.querySelector("#add-group");
    const groupForm = document.querySelector("#group-form");
    const acitivityForm = document.querySelector("#activity-form");
    const addGroupForm = document.querySelector("#add-group-form");
    const addActivityForm = document.querySelector("#add-activity-form");
    const groupContainer = document.querySelector("#group-container");
    const addActivity = document.querySelector("#add-activities");
    const activityContainer = document.querySelector("#activities-container");

    addGroup.addEventListener("click", () => {
      groupForm.classList.remove("hidden");
    });
    addGroupForm.addEventListener("click", () => {
      groupForm.classList.add("hidden");
      groupContainer.appendChild(drawGroup({ groupName: "New Group", id: 1 }));
    });
    addActivityForm.addEventListener("click", () => {
      activityContainer.appendChild(
        drawActivity({
          title: "New title",
          description: "New description"
        })
      );
      acitivityForm.classList.add("hidden");
    });
    addActivity.addEventListener("click", () => {
      acitivityForm.classList.remove("hidden");
    });
  }),
    (drawGroup = group => {
      const container = document.createElement("div");
      const controlContainer = document.createElement("div");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const groupName = document.createElement("h1");

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
      container.id = group.id;

      return container;
    }),
    (drawActivity = activity => {
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

      important.addEventListener("click", () => {
        star.innerHTML = toggleSymbols(star);
      });
      completed.addEventListener("click", () => {
        checkBox.innerHTML = toggleSymbols(checkBox);
      });

      return container;
    }),
    (toggleSymbols = action => {
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
    });
  return { setEventListeners, drawGroup, drawActivity };
};

exports.Dom = Dom;
