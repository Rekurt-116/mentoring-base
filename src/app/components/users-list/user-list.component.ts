import { Component, inject } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from "@angular/common/http";
import { UsersApiComponent } from "../../API/users-api.component";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    standalone: true,
    imports: [HeaderComponent, RouterLink, NgFor],
    
})
export class UserListComponent{
    apiService = inject(UsersApiComponent);
    users: any = []
    
    ngOnInit(){
        this.apiService.getUsers().subscribe(response => {
            this.users = response
        })
    }
    
    deleteUser(id: number){
        this.users = this.users.filter(
            
            (item: any) => item.id !== id
        )
    }
    
    
   
    
}
    
