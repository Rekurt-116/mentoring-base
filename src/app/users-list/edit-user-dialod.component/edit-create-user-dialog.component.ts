import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatError, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { User } from "../../interfaces/user.interface";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-create-user-dialog.component.html',
    imports: [ ReactiveFormsModule,
            MatFormFieldModule,
            MatLabel,
            MatError,
            MatIconModule,
            MatInputModule,
            MatButtonModule,
            ],
    standalone: true,
    styleUrl: './edit-create-user-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCreateUserDialogComponent {

    readonly dialogRef = inject(MatDialogRef<EditCreateUserDialogComponent>);

    readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);

    form = new FormGroup({
        id: new FormControl(this.data.user.id, [Validators.required]),
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
            name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)])
        })
    })

    

    submitForm() {
        const user = this.form.value;
        this.dialogRef.close(user);
    }

}