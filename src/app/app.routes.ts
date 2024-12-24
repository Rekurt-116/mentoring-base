import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'users', component: UsersListComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
    {path: '', component: HomePageComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'location', component: LocationComponent},
    {path: 'todos', component: TodosListComponent}
]
