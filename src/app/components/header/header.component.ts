import { DatePipe, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { PhoneCleaning } from "../../pipes/phone-cleaning.pipe";
import { YelowDirective } from "../../directives/yelow.directive";

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
      YelowDirective
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class HeaderComponent {

  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

    readonly aboutCompany = aboutCompany

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
}