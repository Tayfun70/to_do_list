import { Component, OnInit } from '@angular/core';
import{ToDoListService,ToDoList} from '../../service/to-do-list.service'
import { MatDialog } from '@angular/material/dialog';
import {NewListDialogComponent} from '../new-list-dialog/new-list-dialog.component'


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent  {
   toDoList:ToDoList[]=[];

  constructor(private dialog: MatDialog, private listService: ToDoListService) {
    this.loadTodos;
  }

  ngOnInit(): void{
    this.loadTodos();
    console.log(this.toDoList);
  }


  loadTodos():void{
    debugger
    this.toDoList=this.listService.getToDoList();
    console.log(this.toDoList);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      panelClass:'fullscreen-dialog',
      width: '400px', // Dialog genişliği
      disableClose: true, // Arka plana tıklayınca kapanmasın
      autoFocus: true,    // İlk input’a otomatik odaklan
    });

    dialogRef.afterOpened().subscribe((res)=>{
      console.log("dialog opened");
    })
  
    dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result) {
        this.listService.addTodoList(result);
        this.loadTodos();
        console.log(this.toDoList)
      }
    });
  }
}

