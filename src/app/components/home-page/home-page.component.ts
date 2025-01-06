import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShadowThrowDirective } from "../../directives/shadow-throw.directive";

const newPages=['5', '4', '3', '2', '1']

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [ NgFor, RouterModule, ShadowThrowDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

    isShowMan = true;
      
    readonly newPages = newPages 
}