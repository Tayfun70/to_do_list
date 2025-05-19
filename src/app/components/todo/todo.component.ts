import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../service/todo.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  toDoListId!: number;
  todoListName!: string;

  constructor(
    private todoService: TodoService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.loadTodos();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.toDoListId = params['id'];
      this.todoListName = params['name'];
      console.log('Gelen id:', this.toDoListId);
    });
    this.getByToDoListId(this.toDoListId);
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  getByToDoListId(toDoListId: number): void {
    this.todos = this.todoService.getByToDoListId(toDoListId);
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.toDoListId, this.newTodoTitle);
      this.newTodoTitle = '';
      this.getByToDoListId(this.toDoListId);
    }
  }
  goBack(): void {
    this.location.back(); // Tarayıcı geçmişine göre geri gider
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
    this.getByToDoListId(this.toDoListId);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.getByToDoListId(this.toDoListId);
  }

  currentPage: number = 1;
  itemsPerPage: number = 5;

  get paginatedTodos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.todos.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
