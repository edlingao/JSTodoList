import { DOM } from "./DOM";
import { Activity } from "./activity";
import { Group } from "./group";
import interact from "interactjs";
const Dom = DOM();
const GROUPS = new Group(0,'Groups Container');


const main = ()=>{
  interact('#form-header').draggable(
    {
      inertia: false,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      onmove: dragMoveListener
    }
  );

 setEventListeners();
 
}

const setEventListeners = () => {
  const addGroup = document.querySelector("#add-group");
  const groupForm = document.querySelector("#group-form");
  const acitivityForm = document.querySelector("#activity-form");
  const addGroupForm = document.querySelector("#add-group-form");
  const addActivityForm = document.querySelector("#add-activity-form");
  const groupContainer = document.querySelector("#group-container");
  const addActivity = document.querySelector("#add-activities");
  const activityContainer = document.querySelector('#activities-container');
  const newGroupName = document.querySelector('#group-name');
  const activityName = document.querySelector('#activity-name');
  const activityDescription = document.querySelector('#activity-description');
  const important = document.querySelector('#important');
  const idHolder = document.querySelector('.ID-holder');


  addGroup.addEventListener("click", () => {
    groupForm.classList.remove("hidden");
  });
  addGroupForm.addEventListener("click", () => {

    const newGroup = new Group(GROUPS.giveID(), newGroupName.value);
    groupForm.classList.add("hidden");
    GROUPS.addActivity(newGroup);
    
    groupContainer.appendChild(Dom.drawGroup(newGroup, GROUPS));
  });
  addActivityForm.addEventListener("click", () => {
    try
    {
      const group = GROUPS.speceficActivity(idHolder.id);
      const newActivity = Activity(group.giveID(),activityName.value, activityDescription.value, important.checked);
      group.addActivity(newActivity);
      activityContainer.appendChild(Dom.drawActivity(group.speceficActivity(newActivity.id), GROUPS.speceficActivity(idHolder.id)));
      acitivityForm.classList.add("hidden");
    }catch(err){
      const errorMsg = document.querySelector('#alert');
      errorMsg.classList.remove('hidden');
      errorMsg.classList.add('alert');
      setTimeout(()=>{
        errorMsg.classList.remove('alert');
        errorMsg.classList.add('hidden');
      }, 4000);
    }
  });
  addActivity.addEventListener("click", () => {
    acitivityForm.classList.remove("hidden");
  });
};

const dragMoveListener  = (event) => {
  var target = event.target.parentNode
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


main();
