import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../todos-list/todos-list.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({providedIn: 'root'})
export class TodosService{
    todoSubjects = new BehaviorSubject<Todo[]>([]);

    setTodo(todos: Todo[]) {
        this.todoSubjects.next(todos);
    }

    editTodo(editedTodo: Todo) {
        this.todoSubjects.next(
            this.todoSubjects.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo
                } else {
                    return todo
                }
                }
            )
        )
    }

    creatTodo(todo: Todo) {
        this.todoSubjects.next(
            [...this.todoSubjects.value, todo]
        );
        this.openSnackBar('Задача добовлена', 'ок')
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
        this.snackBar.open(message, action, {duration: 5000});
      }

      public openDeleteSnackTodo(): void {
      this.openSnackBar('Задача удалена', 'OK');

    }

    deleteTodo(id: number) {
        this.todoSubjects.next(
            this.todoSubjects.value.filter(
                item => {
                    if (id === item.id) {
                       this.openDeleteSnackTodo(); 
                       return false;
                    } else {
                        return true;
                    }
                }
            )
        )
    }
}