import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../service/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService:TodoService,private location:Location) { 
    this.loadTodos();
  }

  loadTodos():void{
    this.todos=this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.loadTodos();
    }
  }
  goBack(): void {
    this.location.back(); // Tarayıcı geçmişine göre geri gider
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
    this.loadTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }

  ngOnInit(): void {
  }

  currentPage: number = 1;
  itemsPerPage: number = 5;

  get paginatedTodos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.todos.slice(startIndex, startIndex + this.itemsPerPage);
  }

}
