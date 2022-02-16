import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello_Nikhil';
  imgUrl="../assets/BL_logo_square_png.png"
  url= "https://www.bridgelabz.com"

  ngOnInit():void{
    this.title= "Hello From Nikhil To Bridgelabz"
  }//Interpolation Data Binding 

onClick($event: any){
  console.log("Save Buuton Clicked !!", $event);
  window.open(this.url,"blank");
  }
}
