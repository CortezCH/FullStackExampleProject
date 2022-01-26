import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ConvertToDo, ToDo } from '../ToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ToDoService]
})
export class ToDoListComponent implements OnInit {
  
  toDos: ToDo [] = [];

  constructor( private toDoService : ToDoService) { }

  ngOnInit() {
    this.toDoService.GetToDos().subscribe(
      ( response:any ) => {
        console.log(response);
        this.toDos = response;
        console.log(this.toDos)
      }
    );
  }

  ToggleToDo(toDoId: number){
    let displayPanel = document.getElementById("ToDoDisplay" + toDoId);
    let editPanel = document.getElementById("ToDoEdit" + toDoId);

    // If the display style is the empty string,
    // by default the element is being shown
    if(displayPanel.style.display === ""){
      displayPanel.style.display = "none";
      editPanel.style.display = "";
    }else if(displayPanel.style.display === "none"){
      displayPanel.style.display = "";
      editPanel.style.display = "none";
    }
  }

  DeleteToDo(toDoId: number, index:number){
    this.toDoService.DeleteToDo(toDoId);
    this.toDos.splice(index, 1);
  }

}
