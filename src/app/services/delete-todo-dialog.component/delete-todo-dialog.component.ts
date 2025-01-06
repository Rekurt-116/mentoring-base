import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { Todo } from "../../interfaces/todo.interface";
import { MatButtonModule } from "@angular/material/button";

@Component ({
    standalone: true,
    templateUrl: './delete-todo-dialog.component.html',
    styleUrl: './delete-todo-dialog.component.scss',
    imports: [MatButtonModule, MatDialogModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteTodoDialogComponent {
    public readonly data = inject<{todo: Todo}>(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef<DeleteTodoDialogComponent>);

    
}