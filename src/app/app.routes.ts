import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/users-list/user-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'users',
        component: UserListComponent
    }
   
];
