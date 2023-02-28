import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pages: number = 0;
  @Input() currentPage: number = 0;
  @Input() visiblePages: number = 0;
  
  @Output() gotToPageEvent = new EventEmitter<number>();

  fullPagesList: number[] = [];
  pagesToShow: number[] = [];
  pagesDifferential = 0;

  ngOnInit(): void {
    this.pagesDifferential = Math.floor(this.visiblePages / 2);
    this.fullPagesList = Array.from({length: this.pages}).map((_, i) => i+1);
    this.definePagesButtons(this.currentPage);
  }

  definePagesButtons(page: number): void {
    if(this.pages > this.visiblePages) {
      let pagesArray = [...this.fullPagesList];

      pagesArray = [...pagesArray.slice(page - 1, pagesArray.length)];

      if(pagesArray.length > this.visiblePages) {
        pagesArray = [
          ...pagesArray.splice(0, this.pagesDifferential), 
          -1, 
          ...pagesArray.splice(pagesArray.length - this.pagesDifferential, pagesArray.length)
        ];
        this.pagesToShow = pagesArray;
      } else if(pagesArray.length === this.visiblePages) {
        pagesArray = [
          -1, 
          ...pagesArray.splice(0, this.pagesDifferential), 
          ...pagesArray.splice(pagesArray.length - this.pagesDifferential, pagesArray.length)
        ];
        this.pagesToShow = pagesArray;
      }
    } else {
      this.pagesToShow = [...this.fullPagesList];
    }
  }

  goToPage(page: number): void {
    if(!page) return;
    this.gotToPageEvent.emit(page);
    this.definePagesButtons(page);
  }

  goToPageFromArrow(arrow: 'left' | 'right'): void {
    if(arrow === 'left') {
      this.gotToPageEvent.emit(this.currentPage - 1);
      this.definePagesButtons(this.currentPage - 1);
    } else {
      this.gotToPageEvent.emit(this.currentPage + 1);
      this.definePagesButtons(this.currentPage + 1);
    }    
  }
}
