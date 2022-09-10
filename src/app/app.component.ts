import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Infinite scroll';

  content: number[] = [];

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    Array.from({length: 10}).forEach(() => {
      this.content.push(this.content.length + 1);
    });
  }

  @HostListener('window:scroll')
  onWindowsScroll() {
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
      console.log('Send request');
      this.loadContent();
    }
  }
}
