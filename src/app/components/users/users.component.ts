import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[] ;

showExtended: boolean = true ;
loaded: boolean = false;
enabledAdd: boolean = true;
currentClasses = {};
  constructor() { }

  ngOnInit() {


   
      this.users = [
        {
             firstName: 'John',
             lastName: 'Doe',
             age: 30,
             address: {
                 street: '50 Main street',
                 city: 'Boston',
                 state: 'MA'
             },
             image: 'http://lorempixel.com/600/600/people/2'
 
         },
 
         {
           firstName: 'Kevin',
           lastName: 'Doe',
           age: 26,
           address: {
               street: '20 Main street',
               city: 'Boston',
               state: 'MA'
           },
           image: 'http://lorempixel.com/600/600/people/2',
           isActive: true
 
       },
       {
         firstName: 'mike',
         lastName: 'Dob',
         address: {
          street: '20 Main street',
          city: 'Boston',
          state: 'MA'
      },
      image: 'http://lorempixel.com/600/600/people/2'
 
     }
 
 
 ];
 this.loaded = true;
 this.setCurrentClasses();
 
  
// this.showExtended = true;

//this.showExtended = false;

this.addUsers(

  {
    firstName: 'bob',
    lastName: 'bone',
    image: 'http://lorempixel.com/600/600/people/2'
  
  },
  
);

  }


  addUsers(user: User){

    this.users.push(user);
  }


  setCurrentClasses() {
    this.currentClasses = {
      'btn-success' : this.enabledAdd,
      'big-text' : this.showExtended
    }
  }

}
