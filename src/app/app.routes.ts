import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FuterComponent } from './futer/futer.component';
import { LocationComponent } from './location/location.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: 'head',
        component: HeaderComponent
    },
    {
        path: 'admin',
        component: UsersListComponent
    },     
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'foot',
        component: FuterComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'todos',
        component: TodosListComponent
    }
]
