import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../interfaces/article.interface';

@Component({
  selector: 'app-fake-page',
  templateUrl: './fake-page.component.html',
  styleUrls: ['./fake-page.component.scss']
})
export class FakePageComponent implements OnInit {

  article?: Article;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { article } = this.activatedRoute.snapshot.data;
    this.article = article;
  }

}
