import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  id: string

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  onCancel(): void {
    this.dialogRef.close()
  }
}
