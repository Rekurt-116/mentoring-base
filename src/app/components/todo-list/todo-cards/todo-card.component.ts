import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import { UserFormComponent } from '../../forms/user-form/user-form.component';
import { Todo } from '../../../Interfaces/todo-interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [UserFormComponent],
})
export class TodoCardComponent {
    
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todo: string) {
    this.deleteTodo.emit(todo);
  }
}
