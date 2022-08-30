import { Component, OnInit } from '@angular/core';
import { fakeArticle } from '../../constants/fake-article';

@Component({
  selector: 'app-fake-page',
  templateUrl: './fake-page.component.html',
  styleUrls: ['./fake-page.component.scss']
})
export class FakePageComponent implements OnInit {

  skeletonContent: Array<any> = Array.from({length: 21});
  articleContent = {
    title: '',
    content: '',
    author: ''
  };

  get hasContent() {
    const { 
      title,
      content,
      author
    } = this.articleContent;
    return (title === '' || content === '' || author === '') ? false : true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.articleContent = fakeArticle;
    },
    2000);
  }
}
