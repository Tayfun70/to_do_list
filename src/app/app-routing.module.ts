import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', component: ToDoListComponent },
  {path:'add-to-do',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
