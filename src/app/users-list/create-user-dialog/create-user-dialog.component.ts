import { Component, EventEmitter, Inject, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from '../../interfaces/user.interface';

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
  public formGroup: FormGroup;
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      name: [this.data.user.name,
        Validators.required,
        Validators.minLength(2)],
      email: [this.data.user.email,
        Validators.required,
        Validators.email],
      website: [
        this.data.user.website,
        Validators.required,
        Validators.minLength(3),
      ],
      company: formBuilder.group({
        name: [
          this.data.user.company.name,
          Validators.required,
          Validators.minLength(2),
        ],
      }),
    });
  }

  public form = new FormGroup({
    name: new FormControl(this.data.user.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(this.data.user.email, [
      Validators.required,
      Validators.email,
    ]),
    website: new FormControl(this.data.user.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl(this.data.user.company.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
    }),
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
