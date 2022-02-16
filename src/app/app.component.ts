import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello_Nikhil';
  imgUrl="../assets/BL_logo_square_png"

  ngOnInit():void{
    this.title= "Hello From Nikhil."
  }//Interpolation Data Binding 
}
