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
  nameError: string ="";//Checking whether name is Correct
  ngOnInit():void{
    this.title= "Hello From Nikhil To Bridgelabz"
    this.imgUrl="../assets/BL_logo_square_png.png"
    this.url= "https://www.bridgelabz.com"


  }//Interpolation Data Binding 

onClick($event: any){
  console.log("Save Buuton Clicked !!", $event);
  window.open(this.url,"blank");
  }//Event Binding 

onInput($event: any){
  console.log("Change Event Occured !",$event.data);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if (nameRegex.test(this.userName)){
    this.nameError=" ";
    return;
  }
  this.nameError=" Invalid Name, Please Input Correct Name"
}
}
