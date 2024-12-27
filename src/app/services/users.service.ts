import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

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
                        this.openSnackBar('Пользователь успешно отредактирован','')
                        return editedUser 
                    } else {
                        return user
                    }
                }
            )
        )
    };

    createUser(user: User) {
        const userIsExensting = this.userSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        );

        if(userIsExensting !== undefined) {
            alert('Такой email уже зареган')
        } else {
        this.userSubject$.next([...this.userSubject$.value, user]);
        this.openSnackBar1('Пользоватедль добавлен', 'ok');
        }
    };
    
    deleteUser(id: number) {
            this.userSubject$.next(
            this.userSubject$.value.filter(
                item => {
                    if (id === item.id) {
                        this.openDeleteSnack()
                        return false
                    } else {
                        return true
                    }
                }   
            )
        )
    }
    
    constructor(private snackBar: MatSnackBar) {}

        openSnackBar1(message: string, action: string) {
            let snackBarRef = this.snackBar.open(message, action, {duration: 5000});

            snackBarRef.afterDismissed().subscribe(() => {
              console.log('снэкбар закрылся');
            })

            snackBarRef.onAction().subscribe(() => {
              console.log('была задействовнана кнопка ок')
            })

        }
    
        openSnackBar(message: string, action: string) {
            this.snackBar.open(message, action, {duration: 3000});
        }
    
          public openDeleteSnack(): void {
          this.openSnackBar('Пользователь удален', 'OK');
    
        }
}
