import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello_Nikhil';

  ngOnInit():void{
    this.title= "Hello From Nikhil."
  }
}
