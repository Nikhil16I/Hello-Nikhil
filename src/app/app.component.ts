import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello_Nikhil';
  url= ""
  imgUrl=""

  userName: string ="";//Adding userName as user Input/Typescripting

  ngOnInit():void{
    this.title= "Hello From Nikhil To Bridgelabz"
    this.imgUrl="../assets/BL_logo_square_png.png"
    this.url= "https://www.bridgelabz.com"


  }//Interpolation Data Binding 

onClick($event: any){
  console.log("Save Buuton Clicked !!", $event);
  window.open(this.url,"blank");
  }//Event Binding 
}
