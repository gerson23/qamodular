import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner';
import { MatProgressBarModule }from '@angular/material/progress-bar';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ]
})
export class MaterialModule {}