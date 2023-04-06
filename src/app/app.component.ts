import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async-input';

  response: FormControl = new FormControl('');

  constructor(private readonly http: HttpClient) {}

  ask(actionKey: string): void {
    if(actionKey === 'joke') {
      this.http.get('https://dad-jokes.p.rapidapi.com/random/joke', {
        headers: {
          'X-RapidAPI-Key': 'your_api_key',
          'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
      }).subscribe((res: any) => {
        this.response.setValue(`${res.body[0].setup}... \n\n${res.body[0].punchline}`);
      });
    }else if(actionKey === 'quote'){
      this.http.get('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', {
        headers: {
          'X-RapidAPI-Key': 'your_api_key',
          'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
      }).subscribe((res: any) => {
        this.response.setValue(res[0].text);
      });
    }else if(actionKey === 'wordle'){
      this.http.get('https://wordle-answers-solutions.p.rapidapi.com/today', {
        headers: {
          'X-RapidAPI-Key': 'your_api_key',
          'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
        }
      }).subscribe((res: any) => {
        this.response.setValue(res.today);
      });
    }else if(actionKey === 'should'){
      const options = ['Yes, do it.', `Please don't do it.`];
      this.response.setValue(options[Math.floor(Math.random() * 2)]);
    }
  }
}
