import { Injectable } from '@angular/core';

export interface Todo{
  id:number,
  title:string,
  completed:boolean,
  toDoListId:any
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];
  private nextId:number=0;
  private toDoListId:any=null;

  constructor() { }

  getTodos():Todo[]{
    return this.todos;
  }

  getByToDoListId(toDoListId:number):Todo[]{
    return this.todos.filter(t=> t.toDoListId===toDoListId);
  }

  addTodo(toDoListId:number,title:string):void{
    debugger
    if(this.todos.length!==0){
      this.nextId=this.todos[this.todos.length - 1].id;
    }
    this.nextId++;
    const newTodo:Todo={
      id:this.nextId,
      title:title,
      completed:false,
      toDoListId:toDoListId
    }
    this.todos.push(newTodo);
  }

  toggleTodo(id:number):void{
    debugger
    const todo=this.todos.find(t=> t.id===id);
    if(todo){
      todo.completed=!todo.completed;
    }
  }

  deleteTodo(id:number): void{
    debugger
    this.todos= this.todos.filter(t=>t.id !== id);
  }
}
