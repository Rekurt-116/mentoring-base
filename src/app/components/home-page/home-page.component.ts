import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

const newPages=['5', '4', '3', '2', '1']

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [ NgFor, RouterModule],

})
export class HomePageComponent {

    isShowMan = true;
      
    readonly newPages = newPages 
}