import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ActivityUnity, ActivityInfo, FieldType } from 'src/app/interfaces/activities';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/Cdk/drag-drop';

@Component({
  selector: 'app-settings-user-activities',
  templateUrl: './settings-user-activities.component.html',
  styleUrls: ['./settings-user-activities.component.css']
})
export class SettingsUserActivitiesComponent implements OnInit, OnChanges {
  @Input() activities: ActivityInfo[];
  @Input() userActivities: ActivityInfo[];

  activitiesList: ActivityInfo[];
  userActivitiesList: ActivityInfo[];
  isActivities: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.activitiesList = this.activities;
    this.userActivitiesList = this.userActivities;
    if(this.activitiesList.length > 0) this.isActivities = true;
    else this.isActivities = false;
    console.log("component actities list: ", this.activitiesList);
    console.log("component user activities: ", this.userActivitiesList);

  }

  ngOnChanges() {
    this.activitiesList = this.activities;
    this.userActivitiesList = this.userActivities;
    if(this.activitiesList.length > 0) this.isActivities = true;
    else this.isActivities = false;
    console.log("onChange actities list: ", this.activitiesList);
    console.log("onChange user activities: ", this.userActivitiesList);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log("drop event container: ", event.container);
    console.log("drop event previous container: ", event.previousContainer);
    if (event.previousContainer === event.container) {
      console.log("move");
      if(event.container.id == "activities") {
        moveItemInArray(this.activities, event.previousIndex, event.currentIndex);
      }
      else {
        moveItemInArray(this.userActivities, event.previousIndex, event.currentIndex);
      }
      
    } else {
      console.log("transfert");
      console.log("previous :", event.previousContainer.id);
      console.log("next :", event.container.id);
      if(event.previousContainer.id == "activites"){
        transferArrayItem(this.activities,
          this.userActivities,
          event.previousIndex,
          event.currentIndex);
      }
      else {
        transferArrayItem(this.userActivities,
          this.activities,
          event.previousIndex,
          event.currentIndex);
      }
     /*transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex); */
    }
  }

}
