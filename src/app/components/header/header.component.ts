import { AsyncPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { PhoneCleaning } from "../../pipes/phone-cleaning.pipe";
import { YelowDirective } from "../../directives/yelow.directive";
import { MatDialog } from "@angular/material/dialog";
import { AuthComponent } from "../../auth/auth.component";
import { UserService } from "../../user.service";

const menuItems = ['Кaталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда',]

const aboutCompany = 'О компании'

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)



@Component({
    selector: 'app-header',
    standalone:  true,
    imports: [NgFor,
      NgIf,
      RouterLink,
      RouterModule,
      DatePipe,
      PhoneCleaning,
      YelowDirective,
      AsyncPipe,
      NgIf
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class HeaderComponent {

  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }
    readonly dialog = inject(MatDialog);

    public readonly userService = inject(UserService)

    readonly aboutCompany = aboutCompany;

    isShowaboutCompany = true;
  
    isShowCatalog = true;
  
    readonly headernav1 ='Главная';
  
    readonly headernav2 ='О компании';
  
    readonly headernav3 ='Кaталог';
  
    readonly number = '+7 (965) 084-29-29';
  
    readonly header2nav1 = upperCaseMenuItems[0];
  
    menuItems = upperCaseMenuItems
  
    isUpperCase = true
  
    changeMenuText() {
      this.menuItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      )
  
      this.isUpperCase = !this.isUpperCase
    }

    openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
        width: '400px',
        height: '200px'

      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('Результат подписки после диалогового окна',result);
        if (result ==='admin') {
          this.userService.loginAsAdmin()
        } else if (result === 'user') {
          this.userService.loginAsUser()
        } else return undefined;
      }
    );
  }
  public logout() {
    if(confirm('Вы точно хотите выйти?')) {
      console.log('Совершили logout');
      return this.userService.logout()
    }
    else return false;
  }
}