import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
  providers: [MovieService]
})
export class UpdateMovieComponent implements OnInit {

  @Input() movieID: number;
  currentMovie: Movie;

  constructor( private movieService: MovieService) {
    
   }

  ngOnInit() {
    this.movieService.GetMovie(this.movieID).subscribe(
      (response:any) => {
        console.log(response);
        this.currentMovie = response;
      }
    );
  }

  UpdateMovie(){
    let title : string =( <HTMLInputElement> document.getElementById("Title" + this.movieID) ).value;
    console.log(title);
    let genre : string =( <HTMLInputElement> document.getElementById("Genre" + this.movieID) ).value;
    console.log(genre)
    let year : number =parseInt( ( <HTMLInputElement> document.getElementById("Year" + this.movieID) ).value );
    console.log(year);

    let updatedMovie : Movie = {movieID: this.movieID, title: title, genre: genre, releaseDate: year};
    console.log(updatedMovie);

    this.movieService.UpdateMovie(this.movieID,updatedMovie)
  }

}
