import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {

    @Input()
    user!: User;

    @Output()
    createUser = new EventEmitter();
    
    constructor(
      public dialog: MatDialog,
    ) {}

  dialogCreateUser() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '400px',
      data: {user: this.user}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createUser.emit(result);
      }
    });
  }
}
