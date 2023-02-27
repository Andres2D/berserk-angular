import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pages: number = 7;
  @Input() currentPage: number = 2;

  fullPagesList: number[] = [];

  ngOnInit(): void {
    this.fullPagesList = Array.from({length: this.pages}).map((_, i) => i+1);
  }
}
