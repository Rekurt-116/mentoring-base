import { Component, EventEmitter, inject, Input, Output, } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialod.component/edit-user-dialog.component";
import { DeleteUserComponent } from "../../services/delete-user-dialog.component/delete-user-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: 'user-card.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatCardModule],
})

export class UserCardComponent {

    readonly dialog = inject(MatDialog);


public openDeleteDialog(): void {
      const dialogRef = this.dialog.open(DeleteUserComponent, {
        width: '600px',
        data: {user: this.user}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
        this.deleteUser.emit(this.user.id);
      }
      });
    }

public openDialog(): void {
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
    deleteUser = new EventEmitter<number>();

    @Output()
    editUser = new EventEmitter();
}