import { Component } from '@angular/core';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'userForm';

   name!: string;
   email!: string;
   address!: string;

userArray:Array<any> = [];

onClick(){

  this.userArray.push({

    "name": this.name,
    "email": this.email,
    "address": this.address

  })
  
}

onDelete(index: any){

  this.userArray.splice(index, 1);

}

} 
