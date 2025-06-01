import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { Task, TaskService } from 'src/app/service/task.service';
import { ToDoList, ToDoListService } from 'src/app/service/to-do-list.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  listTitleList: ToDoList[] = [];
  showAddListTitleInput: boolean = true; // todo: buraya tekrardan bak
  showAddTaskInput: boolean = false;
  checked: boolean = false;
  submitted: boolean = false;
  taskNameLength: number = 50;

  listForm: UntypedFormGroup = this.fb.group({});
  taskForm: UntypedFormGroup = this.fb.group({});
  constructor(
    private todoListService: ToDoListService,
    private taskService: TaskService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.listForm = this.fb.group({
      listTitleName: ['', Validators.required],
    });

    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.maxLength(this.taskNameLength)]],
    });
    this.showAddListTitleInput = false;
    this.getToDoList();
  }

  addToDoList(): void {
    console.log('Girilen liste adı:', this.listForm.value.listTitleName);
    const titleName: string = this.listForm.value.listTitleName;
    this.showAddListTitleInput = false;
    if (this.listForm.dirty) {
      this.todoListService.addTodoList(titleName);
    }
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
    debugger;
    var newTasks: Task[] = [];
    this.submitted = true;
    if (this.taskForm.valid) {
      if (taskName) {
        this.submitted = false;
        newTasks = this.taskService.addTask(listTitleId, taskName);
      }

      if (newTasks.length > 0) {
        const taskSize = newTasks.length;
        this.listTitleList
          .find((list) => list.id === listTitleId)
          ?.tasks.push(newTasks[taskSize - 1]);
      }

      this.taskForm.patchValue({
        taskName: '',
      });
    }
  }

  clickCheckBox(
    listId: number,
    taskId: number,
    event: MatCheckboxChange
  ): void {
    debugger;
    this.checked = event.checked;
    var task = this.listTitleList
      .find((list) => list.id == listId)
      ?.tasks.find((task) => task.id == taskId);
    if (task) {
      task.completed = event.checked;
    }
  }
}
