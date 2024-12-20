import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'admin',
        component: UsersListComponent
    },     
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'footer',
        component: FooterComponent
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
