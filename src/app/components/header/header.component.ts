import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf],
})

export class HeaderComponent{
    
    isShowCatalog = true;
    isUpperCase = false;
  
    menuItems = [
      'Каталог',
      'Стройматериалы',
      'Инструменты',
      'Электрика',
      'Интерьер и одежда',
    ];
  
    toUpperCase(): any {
      this.menuItems = this.menuItems.map((item) =>
        this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      );
      this.isUpperCase = !this.isUpperCase;
    }
    
    switchNumbers = [1,2,3,4,5];
    
    switchFunction() {
      return this.switchNumbers.slice().reverse();
    }
    
    
}