import { Component, OnInit } from '@angular/core';
import { ToDoListService, ToDoList } from '../../service/to-do-list.service';
import { MatDialog } from '@angular/material/dialog';
import { NewListDialogComponent } from '../new-list-dialog/new-list-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  toDoList: ToDoList[] = [];

  constructor(
    private dialog: MatDialog,
    private listService: ToDoListService,
    private router: Router
  ) {
    this.loadTodos;
  }

  ngOnInit(): void {
    this.loadTodos();
    console.log(this.toDoList);
  }

  onCardClick(id: number, name: string): void {
    console.log('MatCard tıklandı!');
    this.router.navigate(['/add-to-do'], {
      queryParams: { id: id, name: name },
    });
  }

  loadTodos(): void {
    this.toDoList = this.listService.getToDoList();
    console.log(this.toDoList);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      panelClass: 'fullscreen-dialog',
      width: '250px', // Dialog genişliği
      disableClose: true, // Arka plana tıklayınca kapanmasın
      autoFocus: true, // İlk input’a otomatik odaklan
    });

    dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result) {
        this.listService.addTodoList(result);
        this.loadTodos();
        console.log(this.toDoList);
      }
    });
  }
}
