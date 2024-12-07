import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject, Observable, Subscribable } from "rxjs";

@Injectable({providedIn: 'root' })
export class UsersService {
    userSubject$:
    BehaviorSubject<User[]>= new 
    BehaviorSubject<User[]>([]);

    public users$: Observable<User[]> =
    this.userSubject$.asObservable();

    setUsers(users: User[]) {
        this.userSubject$.next(users);
    }

    editUser(editedUser: User) {
        this.userSubject$.next(
            this.userSubject$.value.map(
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
        const userIsExensting = this.userSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        );

        if(userIsExensting !== undefined) {
            alert('Такой email уже зареган')
        } else {
        this.userSubject$.next([...this.userSubject$.value, user]);
        alert('Пользователь успешно добавлен'); 
        }
    }

    deleteUser(id: number) {
            this.userSubject$.next(
            this.userSubject$.value.filter(
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
