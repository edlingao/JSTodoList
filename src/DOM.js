const Dom = () => {
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
        container.classList.add('group-continer');

        controlContainer.appendChild(editButton);
        controlContainer.appendChild(deleteButton);

        container.appendChild(groupName);
        container.appendChild(controlContainer);
        
        return container;
    },
    drawActivity = (activity) => {
        
    }
}