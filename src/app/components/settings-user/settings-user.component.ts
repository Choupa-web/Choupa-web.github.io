import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { ActivityUnity, ActivityInfo, FieldType } from 'src/app/interfaces/activities';
import * as activitiesSettings from 'src/app/json/activitiesSettings.json';
import * as userActivities from 'src/app/json/usersActivitiesSettings.json';

import { SportsService } from 'src/app/services/sports.service';


const ELEMENT_DATA: ActivityUnity[] = [
  {position: 1, activity: 'Rameur', type: 'Vitesse', unity: 'm/s'},
  {position: 2, activity: 'Rameur', type: 'Distance', unity: 'm'},
  {position: 3, activity: 'Rameur', type: 'Frequence', unity: ''},
  {position: 4, activity: 'VTT', type: 'Vitesse', unity: 'km/h'},
  {position: 5, activity: 'VTT', type: 'Distance', unity: 'km'},
];

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {

  displayedColumns: string[] = ['activity', 'type', 'unity', 'actions'];
  data: ActivityUnity[] = ELEMENT_DATA //.filter(element => element.activity == 'Rameur');
  activitiesList: ActivityInfo[] = [];
  userActivitiesList: ActivityInfo[] = [];
  fieldTypesList: FieldType[] = activitiesSettings.fieldsType;
  userMail: string ;
  isActivities: boolean = false;
  



  constructor(private sp:SportsService) { }

  ngOnInit(): void {

    let userMail = "persan27190@gmail.com";
    this.sp.getActivities().subscribe(
      (data)=> {
        this.activitiesList = data;
        if(this.activitiesList.length > 0) this.isActivities = true;
        else this.isActivities = false;
        console.log("activities list:", data);
      }
    )
   /* this.activitiesList = activitiesSettings.activitiesList;
    let userActivitesListTempo = userActivities.usersActivities.filter( function(element){
      return element.user == userMail;
    });
    userActivitesListTempo.forEach(element => {
      delete element.user;
      this.userActivitiesList.push(element);
    }) */
  
  }

  deleteActivityTypeUnity($event) {
    this.data = ELEMENT_DATA.filter(element => element.position != $event);
    console.log("la ligne %d a ete supprime",$event);
  }


  onSubmit(myform){
    console.log("submitted: ", myform)
  }

  
  

}
