import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, TaskService } from 'src/app/service/task.service';
import { ToDoList, ToDoListService } from 'src/app/service/to-do-list.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  listTitleList: ToDoList[] = [];
  showAddListTitleInput: boolean;
  showAddTaskInput: boolean = false;
  tasks: Task[]=[];
  listForm: FormGroup;
  taskForm: FormGroup;
  constructor(
    private todoListService: ToDoListService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.listForm = this.fb.group({
      listTitleName: ['', Validators.required],
    });
    this.taskForm = this.fb.group({});
    this.showAddListTitleInput = false;
  }

  ngOnInit(): void {
    this.getToDoList();
  }

  addToDoList(): void {
    console.log('Girilen liste adı:', this.listForm.value.listTitleName);
    const titleName: string = this.listForm.value.listTitleName;
    this.showAddListTitleInput = false;
    this.todoListService.addTodoList(titleName);
    this.listForm.patchValue({
      listTitleName: '',
    });
  }

  getToDoList(): void {
    this.listTitleList = this.todoListService.getToDoList();
    console.log(this.listTitleList);
  }

  changeshowAddListTitleInputStatus(): void {
    this.showAddListTitleInput = true;
  }

addTask(listTitleId: number, taskName: string): void {
  const newTasks = this.taskService.addTask(listTitleId, taskName);
  this.tasks = newTasks;
}
}
