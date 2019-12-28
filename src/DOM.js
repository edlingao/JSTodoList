const Dom = () => {
    setEventListeners  = ()=>{
        const addGroup = document.querySelector('#add-group');
        const groupForm = document.querySelector('#group-form');
        const addGroupForm = document.querySelector('#add-group-form');
        const groupContainer = document.querySelector('#group-container');

        addGroup.addEventListener('click', ()=>{
            groupForm.classList.remove('hidden');
        });
        addGroupForm.addEventListener('click', ()=>{
            groupForm.classList.add('hidden');
            groupContainer.appendChild(drawGroup({groupName: 'New Group', id: 1}))
        });
    },
    drawGroup = (group)=>{
        const container = document.createElement('div');
        const controlContainer = document.createElement('div');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const groupName = document.createElement('h1');
        
        groupName.innerHTML = group.groupName;

        editButton.innerHTML = `<i class="material-icons">create</i>`;
        editButton.classList.add('edit');

        deleteButton.innerHTML = `<i class="material-icons">delete_sweep</i>`;
        deleteButton.classList.add('delete');
        
        controlContainer.classList.add('control-container');
        container.classList.add('group');

        controlContainer.appendChild(editButton);
        controlContainer.appendChild(deleteButton);

        container.appendChild(groupName);
        container.appendChild(controlContainer);
        container.tabIndex = -1;
        container.id = group.id;
        
        return container;
    },
    drawActivity = (activity) => {
        //Universal containers
        const container = document.createElement('div');
        const controlsContainer = document.createElement('div');
        const descriptionContainer = document.createElement('div');
        const header = document.createElement('header');

        //Interactive containers
        const important = document.createElement('button');
        const completed = document.createElement('button');
        const deleteButton = document.createElement('button');

        //Text containers
        const activityTitle = document.createElement('h1');
        const activityDescription = document.createElement('p');
        const starOutline = document.createElement('i');
        const starFill = document.createElement('i');
        const checkboxOutline = document.createElement('i');
        const checkboxFill = document.createElement('i');
        const close = document.createElement('i');

        container.classList.add('activity-container');
        controlsContainer.classList.add('activity-controls-container');
        descriptionContainer.classList.add('activity-description-container');
        header.classList.add('activity-header');

        important.classList.add('important-button');
        completed.classList.add('completed-button');
        deleteButton.classList.add('delete-button');

        activityTitle.classList.add('acitivity-title');
        activityDescription.classList.add('activity-description');
        

    }
    return{setEventListeners, drawGroup, drawActivity}
}

exports.Dom = Dom;