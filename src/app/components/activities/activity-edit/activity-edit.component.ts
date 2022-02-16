import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Activity} from '../../../models/activities.model';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Activity) { }

  ngOnInit(): void {
    console.log('edit data: ', this.data);
  }

}
