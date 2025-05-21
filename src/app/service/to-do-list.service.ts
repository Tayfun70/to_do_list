import { Injectable } from '@angular/core';
import { Task } from './task.service';

export interface ToDoList {
  id: number;
  name: string;
  tasks: Task[];
}

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  toDoList: ToDoList[] = [];
  private nextId: number = 0;

  addTodoList(name: string) {
    debugger;
    if (this.toDoList.length !== 0) {
      this.nextId = this.toDoList[this.toDoList.length - 1].id;
    }
    this.nextId++;

    const newToDoList: ToDoList = {
      id: this.nextId,
      name: name,
      tasks:[]
    };
    this.toDoList.push(newToDoList);
  }

  getToDoList(): ToDoList[] {
    debugger;
    return this.toDoList;
  }

  getToDoListById(id: number): ToDoList | undefined {
    return this.toDoList.find((t) => t.id === id);
  }
  constructor() {}
}
