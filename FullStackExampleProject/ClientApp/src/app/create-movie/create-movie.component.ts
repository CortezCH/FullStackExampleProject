import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [MovieService]
})
export class CreateMovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  CreateMovie(){
    let title : string =( <HTMLInputElement> document.getElementById("Title") ).value;
    console.log(title);
    let genre : string =( <HTMLInputElement> document.getElementById("Genre") ).value;
    console.log(genre)
    let year : number =parseInt( ( <HTMLInputElement> document.getElementById("Year") ).value );
    console.log(year);

    let newMovie : Movie = {movieID: 0, title: title, genre: genre, releaseDate: year};
    //We will pass this model to the movie service

    this.movieService.CreateMovie(newMovie)
  }

}
