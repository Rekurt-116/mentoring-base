import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UserApiServise } from "../services/user-api-service";
import { UserCardComponent } from "./user-card/user-card.component";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import { Store } from "@ngrx/store";
import { UserAction } from "./store/user.action";
import { User } from "../interfaces/user.interface";
import { selectUsers } from "./store/users.selectors";


@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsersListComponent /*implements OnInit*/ {
    readonly userApiServise = inject(UserApiServise);
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);


    // ngOnInit(): void {
    //     this.loadUsers();
    // }

    constructor() {
        this.userApiServise.getUsers().subscribe(
            (response) => {
                this.store.dispatch(UserAction.set({ users: response }))
            }
        );
    }
    
    createUser(formData: any) {
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
        this.store.dispatch(UserAction.delete({ id }));
    }

    editUser(user: User) {
        this.store.dispatch(UserAction.edit({ user }))
    }

}