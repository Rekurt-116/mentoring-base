import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss',
})
export class CreateUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private snackBar: MatSnackBar
  ) {}

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  public formInput(): void {
    if (this.form.valid) {
      const user = this.form.value;
      this.dialogRef.close(user);
      this.snackBar.open('User is created', 'Ok', {
        duration: 2000,
      });
    }
  }
}
