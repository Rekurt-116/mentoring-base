import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-create-todo-form',
    standalone: true,
    templateUrl: './create-todo-form.html',
    styleUrl: './create-todo-form.scss',
    imports: [ReactiveFormsModule],
})
export class CreateTodoFormComponent {

    @Output()
    createTodo = new EventEmitter();


    public form = new FormGroup({
       userId: new FormControl(null,[Validators.required, Validators.minLength(1)]),
       id: new FormControl(null,[Validators.required, Validators.minLength(1)]),
       title: new FormControl(null,[Validators.required, Validators.minLength(1)]),
       completed: new FormControl(null,[Validators.required, Validators.minLength(1)]) 
    });

    public formInput(): void{
        this.createTodo.emit(this.form.value);
        this.form.reset();
    }
}