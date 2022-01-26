import { Component, OnInit } from '@angular/core';
import { Convert, Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  currentMovie : Movie;

  constructor(private movieService : MovieService) { }
  
  newMovie(){
     
    this.movieService
    .GetMovie( parseInt( ( <HTMLInputElement> document.getElementById("movieID")).value  ) ).subscribe(
      (response : any) => {
        console.log(response)
        let json = Convert.movieToJson(response);
        this.currentMovie = Convert.toMovie(json);
        console.log(this.currentMovie);
      }
    );
  }

  ngOnInit() {
    // this.movieService.GetMovie(3).subscribe(
    //   (response : any) => {
    //     console.log(response)
    //     let json = Convert.movieToJson(response);
    //     this.currentMovie = Convert.toMovie(json);
    //     console.log(this.currentMovie);
    //   }
    // );
  }

}
