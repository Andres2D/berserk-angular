import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'async-input';
  clientFeedback: string[] = [];
  bigInput: FormControl = new FormControl('');
  
  ngOnInit(): void {
    this.bigInput.valueChanges
    .pipe(
      debounceTime(2000),
      distinctUntilChanged()
    )
    .subscribe((value) => {
      this.clientFeedback.push(`{ Send request to backend for: ${value} }`);
    });  
  }
}
