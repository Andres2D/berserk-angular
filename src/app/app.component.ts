import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'paginator';
  pages: number = 0;
  contentPerPage = 4;
  currentPage: number = 1;
  content = Array.from({length: 20}).map((_, i) => i+1);
  contentToShow: number[] = [];

  ngOnInit(): void {
    this.pages = Math.floor(this.content.length / this.contentPerPage);
    this.contentToShow = [...this.content].splice(0, this.contentPerPage);
  }

  changePage(page: number): void {
    if(page === this.currentPage) {
      return;
    }
    this.contentToShow = [...this.content].splice((this.contentPerPage * page) -  this.contentPerPage, this.contentPerPage);
    this.currentPage = page;
  }
}
