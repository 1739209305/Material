import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent{

 constructor(private snackBar: MatSnackBar) {}

  deleteIcon() {
    this.snackBar.open('Item deleted', '', { duration: 2000 });
  }
}
