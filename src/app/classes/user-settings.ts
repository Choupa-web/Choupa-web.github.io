import { UserActivities, ActivityElement } from 'src/app/interfaces/activities';

export class UserSettings {

    email:string;
    activitiesStatus: UserActivities[];
    activityFieldsUnity: ActivityElement[];

    constructor(userMail:string){
        this.email = userMail;
        this.activitiesStatus = [];
        this.activityFieldsUnity =[];
    }

    addActivityStatus(newActivity:UserActivities){
        console.log("nouveau status: ", newActivity);
    }

    updateActivityStatus(updatedActivity:UserActivities) {
        console.log("activite a mettre a jour: ", updatedActivity);
    }
}
