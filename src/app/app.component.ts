import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// const time = new Date() .getTime();
// console.log("time:", time );

// if (time === 325643654) {
// console.log('time correct')
// } else {
// console.log('Error')
// }

// const shoping = (name:string,  item1:string, item2:string, item3:string, price:[number, number, number]) => {
//   console.log(name + ' пошел в магазин');
//   console.log('Купил ' + item1);
//   console.log('Затем взял ' + item2 + ',');
//   console.log(' и вспомнил про ' + item3);
//   console.log(name + ' потратил ', price[0] + price[1] + price[2], ' рублей');

// }

// shoping('Umar', 'хлеб', 'мясо', 'яйца', [25, 400, 100]);

// const names = ['Muslim', 'Yahya', 'Vakas', 'Timur', 'Samir', 'Nurlan'];

// names.forEach(
//   (name) => {
//     console.log('name is: ', name )
//   }
// )

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
}
