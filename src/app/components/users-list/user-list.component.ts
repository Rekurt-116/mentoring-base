import { Component, inject } from '@angular/core';
import { UsersApiComponent } from '../../services/users-api.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { User } from '../../Interfaces/user.interface';
import { UserCardComponents } from './user-cards/user-card.component';
import { UsersService } from '../../services/user-service.component';
import { UserFormComponent } from '../forms/user-form/user-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponents, AsyncPipe, UserFormComponent],
})
export class UserListComponent {
  
  apiService = inject(UsersApiComponent);
  usersSerice = inject(UsersService);
  users = this.usersSerice;

  constructor() {
    this.apiService
      .getUsers()
      .subscribe((response: User[]) => this.usersSerice.setUser(response));
  }

  deleteUser(id: number) {
    let isConfirm = confirm('Вы действительно хотите удалить пользователя?');
    if (isConfirm === true) {
      this.usersSerice.deleteUser(id);
    }
  }
  editUser(editedUsers: User) {
    this.usersSerice.editedUser({
      ...editedUsers,
      id: editedUsers.id,
      name: editedUsers.name,
      phone: editedUsers.phone,
      address: {
        city: editedUsers.address.city,
      },
    });
  }

  createUser(event: User) {
    this.usersSerice.createUser({
      id: new Date().getTime(),
      name: event.name,
      email: event.email,
      address: {
        city: event.address?.city,
      },
      phone: event.phone,
    });
  }
  
}
