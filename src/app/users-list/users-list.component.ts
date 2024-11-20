import { NgFor } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { UserApiServise } from "../user-api-service";
import { UserCardComponent } from "./user-card/user-card.component";

const consoleResponse = (response: any) => {
    console.log(response);
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent],
})

export class UsersListComponent {
    readonly userApiServise = inject(UserApiServise);
    users: any [] = [];

    constructor() {
        // const consoleResponse = (response: unknown) => console.log(response);
        this.userApiServise.getUsers().subscribe(
            (response: any) => {
                this.users = response
                // console.log('USERS:', this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            //@ts-ignore
            item => item.id !== id
        )
    }
}