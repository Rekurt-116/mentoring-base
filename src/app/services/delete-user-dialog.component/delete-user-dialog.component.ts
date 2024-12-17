import { DIALOG_DATA } from "@angular/cdk/dialog";
import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { IUser, User } from "../../users-list/users-list.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component ({
    standalone: true,
    selector: 'app-delete',
    templateUrl: './delete-user-dialog.component.html',
    styleUrl: './delete-user-dialog.component.scss',
    imports: [MatDialogModule, MatButton],
})
export class DeleteUserComponent {
    public readonly data = inject<{user: IUser}>(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef<DeleteUserComponent>);
}