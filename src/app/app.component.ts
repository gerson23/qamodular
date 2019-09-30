import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AssignBottomSheetComponent } from './assign-bottom-sheet/assign-bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operator: string;
  shovelSet: string;
  dumpSet: string;
  assignAction: string;
  spinIt: boolean;
  shovels: Array<string>;
  dumps: Array<string>;
  currentState: number;
  loads: number;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _bsheet: MatBottomSheet) {
    this.shovels = ['S100', 'S200', 'S300', 'S400'];
    this.dumps = ['CRUSHER_EAST', 'CRUSHER_WEST'];
    this.currentState = -1;
    this.loads = -1;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      var operRe = /^\w+$/
      var outRe= operRe.exec(result);
      if(outRe != null) {
        this.operator = result;
        this.currentState = 0;
        this.loads = 0;
      }
      else {
        this._snackBar.open("Invalid operator ID", "Dismiss", {
          duration: 2000,
        })
      }
    })
  }

  logoutOper(): void {
    this.operator = "";
    this.currentState = -1;
    this.loads = -1;
  }

  setShovel(): void {
    if(this.currentState == 6) {
      this.loads += 1;
    }
    const selected = Number(this.operator) % 4;
    this.shovelSet = this.shovels[selected];
    this.currentState = 1;
  }

  setDump(): void {
    const selected = Math.floor(Math.random() * 2)
    this.dumpSet = this.dumps[selected];
    this.currentState = 4
  }

  checkAssign(): boolean {
    if(this.assignAction == 'shovel' && this.currentState == 0) return true;
    else if(this.assignAction == 'shovel' && this.currentState == 6) return true;
    else if(this.assignAction == 'dump' && this.currentState == 3) return true;
    else {
      this._snackBar.open("Invalid assignment request", "Dismiss", {duration: 2000});
      return false;
    }
  }

  cleanText(): void {
    this.shovelSet = "";
    this.dumpSet = "";
  }

  newAssignment(): void {
    const bsheetRef = this._bsheet.open(AssignBottomSheetComponent);
    bsheetRef.afterDismissed().subscribe(()=> {
      if(bsheetRef.instance.action) {
        this.assignAction = bsheetRef.instance.action
        if(this.checkAssign()) {
          this.cleanText()
          this.spinIt = true
          setTimeout(() => {
            this.spinIt = false
            this.assignAction == 'shovel' ? this.setShovel() : this.setDump();
          }, 2500);
        }
      }
    })
  }

  arrive(): void {
    if(this.currentState == 1) {
      this.currentState = 2;
      setTimeout(() => {
        this.currentState = 3;
      }, 1500);
    }
    else if(this.currentState == 4) {
      this.currentState = 5;
      setTimeout(() => {
        this.currentState = 6;
      }, 1500);
    }
  }
}
