import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityInfo } from 'src/app/interfaces/activities';


@Component({
  selector: 'app-table-activity-fields-unity',
  templateUrl: './table-activity-fields-unity.component.html',
  styleUrls: ['./table-activity-fields-unity.component.css']
})
export class TableActivityFieldsUnityComponent implements OnInit {
  @Input() displayedColumns: string[];
  @Input() activityName:string;
  @Input() data:ActivityInfo[];

  @Output() deleteButton: EventEmitter<number> = new EventEmitter<number>(); 

  columnsToDisplay: string[] ;
  

  constructor() { }

  ngOnInit(): void {
    this.columnsToDisplay = this.displayedColumns.slice();
    console.log("displaycolumns:", this.displayedColumns);
    console.log("data: ", this.data);
  }

  deleteRow(rowId:string) {
    console.log("Row position: ", rowId);
    this.deleteButton.emit(Number(rowId));
  }

}
