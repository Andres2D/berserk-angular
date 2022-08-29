import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-page',
  templateUrl: './fake-page.component.html',
  styleUrls: ['./fake-page.component.scss']
})
export class FakePageComponent implements OnInit {

  skeletonContent: Array<any> = Array.from({length: 27});

  constructor() { }

  ngOnInit(): void {
  }

}
