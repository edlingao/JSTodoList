
class Group{
    constructor(groupName){
        this.groupName = groupName;
        this.activities = [];
    }
    addActivity(activity){
        this.activities.push(activity);
    }
    deleteActivity(activity){
        activities = activities.filter( act => act != activity);
    }
    showActivities(){
        return this.activities;
    }
    giveID(){
        return this.activities.length - 1 == -1 ? 0 : this.activities.length - 1 == 0 ? 1 : this.activities.length - 1;
    }
    editActivity(id, title, description, important = false, complete = false){
        let newActivity = this._edit(this.activities[id], title, description, important, complete);
        this.activities[id] = newActivity;
    }
    _edit(activity, title, description, important, complete){
        activity.title = title;
        activity.description = description;
        activity.important = important;
        activity.completed = complete;

        return activity;
    }
}



exports.Group = Group;
