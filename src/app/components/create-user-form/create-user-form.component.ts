import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-create-user-form",
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: "./create-user-form.component.html",
  styleUrl: "./create-user-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {

    @Output()
    createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    companyName: new FormControl(null, [Validators.required, Validators.minLength(2)])
  });

  public formInput(): void{
    this.createUser.emit(this.form.value);
    alert('User created successfully')
    this.form.reset()
  }
}
