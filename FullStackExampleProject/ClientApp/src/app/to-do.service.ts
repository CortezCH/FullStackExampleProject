import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToDo } from './ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  url: string = "ToDo"

  constructor( private http: HttpClient, @Inject('BASE_URL') baseUrl: string ) {
    this.url = baseUrl + this.url;
  }

  GetToDos(){
    return this.http.get( this.url );
  }

  GetToDo(toDoId: number){
    return this.http.get( this.url + "/getToDo/" + toDoId );
  }

  CreateToDo( newToDo : ToDo){
    console.log(this.url + "/createToDo");
    console.log(newToDo);
    return this.http
    .post(this.url + "/createToDo", newToDo).subscribe(
      (response:any) => {
        console.log("ToDo Added!");
        location.reload();
      }
    );
  }

  DeleteToDo(toDoId: number){
    console.log("Attempting to delete to-do ID " + toDoId);
    return this.http
    .delete( this.url + "/delete/" + toDoId)
    .subscribe(
      (response:any) =>{
        console.log("Todo at ID " + toDoId + " is deleted")
      }
    );
  }

  EditToDo( toDoId : number, newToDo : ToDo){
    console.log(this.url + "/edit/" + toDoId)
    return this.http
    .put(this.url + "/edit/" + toDoId, newToDo)
    .subscribe(
      (response:any) => { console.log("ToDo Updated!"); location.reload() }
    );
  }

}
