import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
})
export class CreateTodoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateTodoDialogComponent>,
    private snackBar: MatSnackBar
  ) {}

  public form = new FormGroup({
    userId: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
    id: new FormControl(),
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
    completed: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  public formInput(): void {
    // console.log(this.form.value);
    if (this.form.valid) {
      const todo = this.form.value;
      this.dialogRef.close(todo);
      this.snackBar.open('Todo is created', 'Ok', {
        duration: 2000,
      });
    }
  }
}
