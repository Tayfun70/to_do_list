import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from '../material.module';
import { NewListDialogComponent } from './components/new-list-dialog/new-list-dialog.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ToDoListComponent,
    NewListDialogComponent,
    LoginComponent,
    TodosComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
