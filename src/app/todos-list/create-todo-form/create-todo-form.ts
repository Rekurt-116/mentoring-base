import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {  MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

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

    @Output()
    createTodo = new EventEmitter();

    public form = new FormGroup({
       userId: new FormControl(null,[Validators.required, Validators.minLength(1)]),
       id: new FormControl(),
       title: new FormControl(null,[Validators.required, Validators.minLength(1)]),
       completed: new FormControl(null,[Validators.required, Validators.minLength(1)]) 
    });

    public formInput(): void{
        this.createTodo.emit(this.form.value);
        this.form.reset();
    }
}