import { Component, inject } from '@angular/core';
import { UsersApiComponent } from '../../services/users-api.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { User } from '../../Interfaces/user.interface';
import { UserCardComponents } from './user-cards/user-card.component';
import { UsersService } from '../../services/user.service.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponents, AsyncPipe],
})
export class UserListComponent {
  apiService = inject(UsersApiComponent);
  usersSerice = inject(UsersService);
  users = this.usersSerice;
  
  constructor(){
    this.apiService.getUsers().subscribe(
      (response: any) =>
        this.usersSerice.setUser(response)
    )
  }


  deleteUser(id: number) {
    this.usersSerice.deleteUser(id);
  }
}

  // getEmail(id: number){
  // let user = this.users.find(item =>
  //   item.id === id)
  //   if(user){
  //     console.log(user.email);
  //   }

  // getCity(){
  //   let usersInCity = this.users.filter(item => item.address.city === 'Lebsackbury');
  //   if(usersInCity.length > 0){
  //     console.log(usersInCity);
  //   }
  // }
  // getReverse(){
  //   let reverse = this.users.reverse();
  //   console.log(reverse);
  // }
  // getFindEmail(){
  // this.users.forEach(item =>{
  //   if(item.website.includes('.com')){
  //     console.log(item);
  //   };
  // })
  
  // }

