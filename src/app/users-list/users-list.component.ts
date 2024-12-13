import { AsyncPipe, formatDate, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { UserApiServise } from "../user-api-service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../components/create-user-form/create-user-form.component";
import { EditUserDialogComponent } from "./edit-user-dialod.component/edit-user-dialog.component";

const consoleResponse = (response: any) => {
    console.log(response);
}

export interface User {
    open(EditUserDialogComponent: EditUserDialogComponent, arg1: { data: { user: User; }; }): unknown;
    id: number,
    name: string,
    username?: string,
    email: string,
    address?: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone?: string,
    website: string,
    company: {
        name: string,
        catchPhrase?: string,
        bs?: string
    }
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
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

        this.usersService.users$.subscribe(
            users => console.log(users)
        )
    }

    createUser(formData: any) {
        this.usersService.creatUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName,
            },
            open: function (EditUserDialogComponent: EditUserDialogComponent, arg1: { data: { user: User; }; }): unknown {
                throw new Error("Function not implemented.");
            }
        });
        console.log('ДАННЫЕ ФОРМЫ', event);
    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(user: any) {
        this.usersService.editUser({
            ...user,
            company: {
                name: user.companyName,
            },
        })
    }

}