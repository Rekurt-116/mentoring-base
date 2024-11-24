import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject, Observable, Subscribable } from "rxjs";

@Injectable({providedIn: 'root' })
export class UsersService {
    userSubjects = new BehaviorSubject<User[]>([]);
    users: User [] = [];
usersSubjects: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;

    setUsers(users: User[]) {
        this.userSubjects.next(users);
    }

    editUser(editedUser: User) {
        this.userSubjects.next(
            this.userSubjects.value.map(
                user => {
                    if (user.id === editedUser.id) {
                        return editedUser 
                    } else {
                        return user
                    }
                }
            )
        )
    }

    creatUser(user: User) {
        this.userSubjects.next(
            [...this.userSubjects.value, user]
        )
    }

    deleteUser(id: number) {
            this.userSubjects.next(
            this.userSubjects.value.filter(
                item => {
                    if (id === item.id) {
                        return false 
                    } else {
                        return true
                    }
                }   
            )
        )
    }
}
