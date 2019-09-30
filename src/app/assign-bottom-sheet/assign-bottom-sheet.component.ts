import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-assign-bottom-sheet',
  templateUrl: './assign-bottom-sheet.component.html',
  styleUrls: ['./assign-bottom-sheet.component.css']
})
export class AssignBottomSheetComponent {
  action: string;

  constructor(private _bsheetRef: MatBottomSheetRef<AssignBottomSheetComponent>) { }

  onAssign(event: MouseEvent, target: string): void {
    this.action = target;
    this._bsheetRef.dismiss();
    event.preventDefault();
  }
}
