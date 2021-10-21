import { Component, OnInit } from '@angular/core';
import { ActivityInfo } from 'src/app/interfaces/activities';
import { SportsService } from 'src/app/services/sports.service';
import {MatBottomSheet } from '@angular/material/bottom-sheet';
import { MybottomsheetFormComponent } from 'src/app/components/shared/mybottomsheet-form/mybottomsheet-form.component';

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html',
  styleUrls: ['./admin-activities.component.css']
})
export class AdminActivitiesComponent implements OnInit {

  data: ActivityInfo[];

  constructor(private ps:SportsService, private _bottomSheet:MatBottomSheet) { }

  ngOnInit(): void {
    this.getActivities();
  }

  addActivity() {
    this._bottomSheet.open(MybottomsheetFormComponent).afterDismissed().subscribe(
      (result) => {
        console.log("results: ", result);
        this.ps.addNewActivity(result).subscribe(
          (data) => {
            console.log("add activity result: ", data);
            this.getActivities();
          }
        )
      }
    );
  }

  getActivities(){
    this.ps.getActivities().subscribe(
      (results) => {
        this.data = results;
        console.log("activities list: ", results);
      }
    )
  }

}
