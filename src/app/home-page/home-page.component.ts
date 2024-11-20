import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { FuterComponent } from "../futer/futer.component";
import { LocationComponent } from "../location/location.component";

const newPages=['5', '4', '3', '2', '1']

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [RouterOutlet, NgIf, NgFor, RouterModule, HeaderComponent, HomePageComponent, FuterComponent,LocationComponent],

})
export class HomePageComponent {

    isShowMan = true;
      
    readonly newPages = newPages 
}