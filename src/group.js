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
        let newActivity = this._edit(this.activities[id], title, description, important, complete);
        this.activities[id] = newActivity;
    }
    _existsID(id) {
        const exists = this.activities.some(activity => activity.id === id);
        return exists ? this._existsID(id + 1) : id;
      }
    _edit(activity, title, description, important, complete){
        activity.title = title;
        activity.description = description;
        activity.important = important;
        activity.completed = complete;

        return activity;
    }
};

export { Group };