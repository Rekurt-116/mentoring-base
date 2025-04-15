import { Component, EventEmitter, inject, Input, input, Output } from "@angular/core";



@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [],
})

export class TodoCardComponent{
    @Input()
    todo: any;
    
    @Output()
    deleteTodo = new EventEmitter()
    
    onDeleteTodo(todo: string){
        this.deleteTodo.emit(todo);
    }
}