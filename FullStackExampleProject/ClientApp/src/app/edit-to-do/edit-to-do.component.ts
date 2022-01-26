import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css'],
  providers: [ToDoService]
})
export class EditToDoComponent implements OnInit {

  @Input() toDoID: number;
  currentToDo: ToDo;

  constructor( private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.GetToDo(this.toDoID).subscribe(
      (response:any) => {
        this.currentToDo = response;
        console.log(response);
      }
    );
  }

  EditToDo(){
    let name : string =( <HTMLInputElement> document.getElementById("EditToDoName" + this.toDoID) ).value;
    console.log(name);
    let description : string =( <HTMLInputElement> document.getElementById("EditToDoDescription" + this.toDoID) ).value;
    console.log(description)
    let hoursNeeded : number =parseInt( ( <HTMLInputElement> document.getElementById("EditToDoHours" + this.toDoID) ).value );
    console.log(hoursNeeded);

    let updatedToDo : ToDo = {id: this.toDoID,
       assignedTo: this.currentToDo.assignedTo,
        name: name,
        description: description,
        hoursNeeded: hoursNeeded,
        isCompleted: this.currentToDo.isCompleted};

    console.log(updatedToDo);

    this.toDoService.EditToDo(this.toDoID,updatedToDo)
  }

}
