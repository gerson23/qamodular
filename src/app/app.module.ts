import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AssignBottomSheetComponent } from './assign-bottom-sheet/assign-bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    AssignBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    AssignBottomSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
