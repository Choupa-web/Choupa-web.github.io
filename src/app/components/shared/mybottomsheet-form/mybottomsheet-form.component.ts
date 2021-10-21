import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivityInfo } from 'src/app/interfaces/activities';


@Component({
  selector: 'app-mybottomsheet-form',
  templateUrl: './mybottomsheet-form.component.html',
  styleUrls: ['./mybottomsheet-form.component.css']
})
export class MybottomsheetFormComponent implements OnInit {

  newActivityForm: FormGroup;
  

  constructor(private _bottomSheetRef: MatBottomSheetRef<MybottomsheetFormComponent>, private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.newActivityForm= this._fb.group({
      activity_name:[''],
      shortcut:['']
    })
  }

  onSubmit() {
    this._bottomSheetRef.dismiss(this.newActivityForm.value);

  }

}
