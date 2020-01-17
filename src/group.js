class Group{
    constructor(id, groupName){
        if(groupName == "") groupName = 'New Group';
        this.id = id;
        this.groupName = groupName;
        this.activities = [];
    }
    addActivity(activity){
        this.activities.push(activity);
    }
    deleteActivity(id){
        this.activities = this.activities.filter( act => act.id != id);
    }
    showActivities(){
        return this.activities;
    }
    speceficActivity(id){
        return this.activities.filter(activity => activity.id == id)[0];
    }
    giveID(){
        return this._existsID(this.activities.length);
    }
    editActivity(id, title, description, important = false, complete = false){
        let newActivity = this._edit(this.speceficActivity(id), title, description, important, complete);
        this.activities = this.activities.filter((activity) => {
            if(activity.id == id)
                return newActivity;
            else
                return activity;
        });
    }
    editGroup(id, groupContinaer, groupName){
        const newGroup = this._editGroup(groupContinaer.speceficActivity(id),groupName);
        this.activities = this.activities.filter((activity) => {
            if(activity.id == id)
                return newGroup;
            else
                return activity;
        });
        
    }
    existsGroup(groupName){
        const existing = this.activities.some(group => group.groupName === groupName);
        if(!existing)
            return groupName;
        else
            return this._existsGroup(groupName);
    }
    _existsGroup(groupName, i = 1){
        const exists = this.activities.some(activity => activity.groupName == groupName);
        const newGroupname = `${groupName.split('(')[0]}(${i})`;
        return exists ? this._existsGroup(newGroupname, i + 1) : groupName;
    }
    _existsID(id) {
        const exists = this.activities.some(activity => activity.id === id);
        return exists ? this._existsID(id + 1) : id;
      }
    _editGroup(group, groupName){
        group.groupName = groupName
        return group;
    }
    _edit(activity, title, description, important, complete){
        activity.title = title;
        activity.description = description;
        activity.important = important;
        activity.completed = complete;

        return activity;
    }
}


export {Group};
