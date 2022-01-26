import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
  providers: [ToDoService]
})
export class CreateToDoComponent implements OnInit {

  constructor( private toDoService: ToDoService) { }

  ngOnInit() {
  }

  CreateToDo(){
    let name : string =( <HTMLInputElement> document.getElementById("CreateToDoName") ).value;
    console.log(name);
    let description : string =( <HTMLInputElement> document.getElementById("CreateToDoDescription") ).value;
    console.log(description)
    let hoursNeeded : number =parseInt( ( <HTMLInputElement> document.getElementById("CreateToDoHours") ).value );
    console.log(hoursNeeded);

    let newToDo : ToDo = {id: 0,
       assignedTo: 1 ,
        name: name,
        description: description,
        hoursNeeded: hoursNeeded,
        isCompleted: false
      };
    //We will pass this model to the movie service

    this.toDoService.CreateToDo(newToDo);
  }

}
