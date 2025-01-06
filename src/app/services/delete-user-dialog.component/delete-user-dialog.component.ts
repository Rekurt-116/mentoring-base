import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { IUser } from "../../interfaces/user.interface";
import { MatButton } from "@angular/material/button";
import { RedDirective } from "../../directives/red.directive";

@Component ({
    standalone: true,
    selector: 'app-delete',
    templateUrl: './delete-user-dialog.component.html',
    styleUrl: './delete-user-dialog.component.scss',
    imports: [MatDialogModule, MatButton, RedDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserComponent {
    public readonly data = inject<{user: IUser}>(MAT_DIALOG_DATA)
    readonly dialogRef = inject(MatDialogRef<DeleteUserComponent>);
}