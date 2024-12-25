import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list-dialog.component.html',
  styleUrls: ['./new-list-dialog.component.scss']
})
export class NewListDialogComponent {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewListDialogComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      listName: ['', Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.listName); // Liste adını geri döndürüyoruz
    }
  }

}
