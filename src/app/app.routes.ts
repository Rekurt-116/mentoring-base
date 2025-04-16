import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserListComponent } from './components/users-list/user-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
    
    {
        path: '', component: MainComponent
    },
    {
        path: 'users', component: UserListComponent
    },
    
    {
        path: 'todo', component: TodoListComponent
    },
   
];
