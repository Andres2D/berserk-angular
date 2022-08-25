import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { names_db } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'async-input';
  clientFeedback: string[] = [];
  filterNames: string[] = [];
  bigInput: FormControl = new FormControl('');
  
  ngOnInit(): void {
    this.bigInput.valueChanges
    .pipe(
      debounceTime(2000),
      distinctUntilChanged()
    )
    .subscribe((value) => {
      if(!value || value.trim() === ''){
        this.filterNames = [];
        return;
      }
      this.filterNames = [...names_db].filter(name => name.includes(value)).splice(0, 5);
      this.clientFeedback.push(`{ Send request to backend for: ${value} }`);
    });  
  }
}
