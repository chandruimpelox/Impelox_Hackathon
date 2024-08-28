import { Component } from '@angular/core';
import { data } from './app.text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'impelox_hackathon';
  public tracker: any;
  constructor (
  
  ){

  }

  async ngOnInit(): Promise<void>{
    this.tracker = data
    console.log(this.tracker)
  }
}
