import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../todos-list/todos-list.component";

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
        )
    }

    deleteTodo(id: number) {
        this.todoSubjects.next(
            this.todoSubjects.value.filter(
                item => {
                    if (id === item.id) {
                       return false
                    } else {
                        return true;
                    }
                }
            )
        )
    }
}