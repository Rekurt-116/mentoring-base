import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api-service';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { NgFor } from '@angular/common';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  todos: Todo[] = [];

    constructor() {

    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todos = response;
        // console.log('TODOS:', this.todos)
      }
    )
  }


  deleteTodo(id: any) {
    this.todos = this.todos.filter(
      todo => {
          if (id === todo.id) {
             return false
          } else {
              return true;
         }
       }
     )
  }
}