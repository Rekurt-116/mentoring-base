import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { UserApiServise } from "../user-api-service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";

const consoleResponse = (response: any) => {
    console.log(response);
}

export interface User {
    id: any;
    name: string,
    email: any,
    website: any,
    companyname: any,
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsersListComponent {
    readonly userApiServise = inject(UserApiServise);
    readonly usersService = inject(UsersService);

    constructor() {
        // const consoleResponse = (response: unknown) => console.log(response);
        this.userApiServise.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response)
                // console.log('USERS:', this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }
}