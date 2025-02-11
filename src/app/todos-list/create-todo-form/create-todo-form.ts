import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {  MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { CreateTodoDialogComponent } from "../create-todo-dialog/create-todo-dialog.component";

@Component({
    selector: 'app-create-todo-form',
    standalone: true,
    templateUrl: './create-todo-form.html',
    styleUrl: './create-todo-form.scss',
    imports: [ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoFormComponent {

    constructor(
        public dialog: MatDialog,
    ) {}

    @Output()
    createTodo = new EventEmitter();

    

    dialogCreateTodo() {
        const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.createTodo.emit(result);
            }
        }); 
    }
}