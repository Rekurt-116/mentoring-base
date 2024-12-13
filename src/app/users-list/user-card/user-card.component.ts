import { Component, EventEmitter, inject, Input, Output, } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialod.component/edit-user-dialog.component";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: 'user-card.component.scss',
    standalone: true,
    imports: [],
})

export class UserCardComponent {

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: {user: this.user},
        });
    
        dialogRef.afterClosed().subscribe(editResult => {
          console.log('модалка закрылась, значение формы: ', editResult);
          if (!editResult) return;
          this.editUser.emit(editResult);
        });
    }

    @Input()
    user!: User;

    @Output()
    deleteUser = new EventEmitter();

    @Output()
    editUser = new EventEmitter();


    onDeleteuser(userId: number) {
        this.deleteUser.emit(userId);
    }
}