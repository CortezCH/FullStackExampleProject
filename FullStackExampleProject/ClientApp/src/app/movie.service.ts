import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url : string = "Movie";

  constructor( private http : HttpClient, @Inject('BASE_URL') baseUrl: string) 
  {
    this.url = baseUrl + this.url;
  }

  GetMovieList(){
    return this.http.get( this.url );
  }

  GetMovie( movieID : number ) : Observable<any>{
    return this.http.get(this.url + "/" + movieID)
  }

  CreateMovie( newMovie : Movie){
    console.log(this.url + "/createMovie")
    return this.http
    .post(this.url + "/createMovie", newMovie).subscribe(
      (response:any) => {
        console.log("Movie added!"); 
        location.reload();
      }
    );
  }

  DeleteMovie( movieID : number ){
    return this.http.delete(this.url + "/delete/" + movieID)
  }

  UpdateMovie( movieID : number, newMovie : Movie){
    console.log(this.url + "/update/" + movieID)
    return this.http
    .put(this.url + "/update/" + movieID, newMovie)
    .subscribe(
      (response:any) => { console.log("Movie Updated!"); location.reload()}
    );
  }

}
