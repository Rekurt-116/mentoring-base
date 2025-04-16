import { Component, inject } from '@angular/core';
import { UsersApiComponent } from '../../services/users-api.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { User } from '../../Interfaces/user.interface';
import { UserCardComponents } from './user-cards/user-card.component';
import { UsersService } from '../../services/user.service.component';
import { UserFormComponent } from '../forms/user-form/user-form.component';

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
      .subscribe((response: any) => this.usersSerice.setUser(response));
  }

  deleteUser(id: number) {
    this.usersSerice.deleteUser(id);
  }

  createUser(event: User) {
    this.usersSerice.createUser({
      id: new Date().getTime(),
      name: event.name,
      email: event.email,
      phone: event.phone,
      address: {
        city: event.address.city,
      },
    });
  }
  
}