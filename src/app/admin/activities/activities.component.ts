import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityInfo } from 'src/app/interfaces/activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() activitiesList: ActivityInfo[];

  @Output() deleteButton: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() editButton: EventEmitter<number> = new EventEmitter<number>(); 

  columnsToDisplay: string[] = ['actions', 'id','activity_name', 'shortcut'];

  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(rowId:string) {
    console.log("Row id: ", rowId);
    this.deleteButton.emit(Number(rowId));
  }

}
