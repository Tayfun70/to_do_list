import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  listTitleId: number;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks: Task[] = [];
  taskId: number = 0;

  addTask(listTitleId: number, title: string):  Task[] {
    if (this.tasks.length > 0) {
      this.taskId = this.tasks[this.tasks.length - 1].id;
    }
    this.taskId++;

    const newTask: Task = {
      id: 1,
      title: title,
      completed: false,
      listTitleId: listTitleId,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
}
