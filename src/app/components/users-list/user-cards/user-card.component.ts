import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: "app-card",
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    imports: [NgFor, ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserCardComponents{
    @Input()
    user: any;
    
    @Output()
    deleteUser = new EventEmitter();
    
    onDeleteUser(userId: any){
        this.deleteUser.emit(userId);
    }
}