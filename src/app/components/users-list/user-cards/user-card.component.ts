import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UserFormComponent } from '../../forms/user-form/user-form.component';
import { User } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [NgFor, UserFormComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponents {
  @Input()
    user!: User;
  
  

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userId: any) {
    this.deleteUser.emit(userId);
  }
}
