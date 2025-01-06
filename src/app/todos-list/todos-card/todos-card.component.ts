import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Todo } from "../../interfaces/todo.interface";
import { MatDialog } from "@angular/material/dialog";
import { DeleteTodoDialogComponent } from "../../services/delete-todo-dialog.component/delete-todo-dialog.component";
import { LimitationString } from "../../pipes/limitation-string-to-20.pipe";

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [LimitationString],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosCardComponent {

  readonly dialog = inject(MatDialog);

  @Input()
  todo!: Todo

  @Output()
  deleteTodo = new EventEmitter<number>();

  public openDeleteDialog(): void {
        const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
          width: '600px',
          data: {todo: this.todo}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
          this.deleteTodo.emit(this.todo.id);
        }
        });
      }
}
