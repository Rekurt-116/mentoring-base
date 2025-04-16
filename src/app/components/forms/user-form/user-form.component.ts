import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  NgModule,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class UserFormComponent {
  @Output()
  createUser = new EventEmitter();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, Validators.required],
    });
  }
  onCreateUser(): void {
    this.createUser.emit(this.form.value);
  }
}
