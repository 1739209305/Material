import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menex';
   emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);

}
