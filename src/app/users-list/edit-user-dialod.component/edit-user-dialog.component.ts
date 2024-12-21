import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatError, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { User } from "../users-list.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user-dialog.component.html',
    imports: [ ReactiveFormsModule,
            MatFormFieldModule,
            MatLabel,
            MatError,
            MatIconModule,
            MatDialogClose,
            MatInputModule,
            MatButtonModule,
            ],
    standalone: true,
    styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {

    readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

    readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);

    form = new FormGroup({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)])
    })

    submitForm() {
        this.dialogRef.close(this.form.value);
    }

    get userWithUpdatedFielts() {
        return {
            ...this.form.value,
            id: this.data.user.id,
            
        } 
    }
}