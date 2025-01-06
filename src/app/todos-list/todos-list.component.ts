import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../services/todos-api-service";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from "@angular/common";
import { CreateTodoFormComponent } from "./create-todo-form/create-todo-form";
import { Store } from "@ngrx/store";
import { TodoAction } from "./store/todo.action";
import { selectTodo } from "./store/todos.selectors";
import { Todo } from "../interfaces/todo.interface";

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent,],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosListComponent {

private readonly store = inject(Store)
readonly todosApiService = inject(TodosApiService)
public readonly todos$ = this.store.select(selectTodo)

constructor() {

      this.todosApiService.getTodos().subscribe(
          (response: Todo[]) => {
              this.store.dispatch(TodoAction.set({ todos: response }))
              console.log(response)
          }
      )
  }

  createTodo(formData: any) {
    this.store.dispatch(
      TodoAction.create({
        todo: {
          userId: formData.userId,
          id: new Date().getTime(),
          title: formData.title,
          completed: formData.completed
        }
      })
    )
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodoAction.delete({ id }))
  }
}