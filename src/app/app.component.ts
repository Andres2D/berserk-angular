import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'async-input';
  bigInput: FormControl = new FormControl('');
  
  ngOnInit(): void {
    this.bigInput.valueChanges.subscribe((value) => {
      console.log(value);
    });  
  }
}
