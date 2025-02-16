import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  {path:'add-to-do',component:TodoComponent},
  {path:'to-dos',component:TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
