import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UserApiServise } from "../services/user-api-service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../services/users.service";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import { Store } from "@ngrx/store";
import { UserAction } from "./store/user.action";
import { User } from "../interfaces/user.interface";
import { selectUsers } from "./store/users.selectors";
// import { User } from "../interfaces/user.interface";


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
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);

    constructor() {
        this.userApiServise.getUsers().subscribe(
            (response: any) => {
                // this.usersService.setUsers(response)
                this.store.dispatch(UserAction.set({ users: response }))
            }
        );

        this.usersService.users$.subscribe(
            users => console.log(users)
        )
    }

    createUser(formData: any) {
        // this.usersService.createUser({
        //     id: new Date().getTime(),
        //     name: formData.name,
        //     email: formData.email,
        //     website: formData.website,
        //     company: {
        //         name: formData.companyName,
        //     },
        // });
        this.store.dispatch(
            UserAction.create({
                user: {
                    id: new Date().getTime(),
                    name: formData.name,
                    email: formData.email,
                    website: formData.website,
                    company: {
                        name: formData.companyName,
                    },
                }
            })
        )
    }

    deleteUser(id: number) {
        // this.usersService.deleteUser(id);
        this.store.dispatch(UserAction.delete({ id }));
    }

    editUser(user: User) {
        // this.usersService.editUser({
        //     ...user,
        //     company: {
        //         name: user.companyName,
        //     },
        // });
        this.store.dispatch(UserAction.edit({ user }))
    }

}