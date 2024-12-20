import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../services/todos-api-service";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodosService } from "../services/todos.service";
import { CreateTodoFormComponent } from "./create-todo-form/create-todo-form";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent,],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodosListComponent {

  createTodo(formData: any) {
    this.todosService.creatTodo({
      userId: formData.userId,
      id: new Date().getTime(),
      title: formData.title,
      completed: formData.completed
    })
  }


  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)

    constructor() {

        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodo(response)
            // console.log('TODOS:', this.todos)
            }
        )
    }

    deleteTodo(id: number) {
      this.todosService.deleteTodo(id);
    }

}