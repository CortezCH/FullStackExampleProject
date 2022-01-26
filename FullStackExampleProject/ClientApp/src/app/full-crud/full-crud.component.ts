import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers: [MovieService]
})
export class FullCRUDComponent implements OnInit {
  title="Movie List";
  movieContainer: Movie[] = [];

  constructor( private movieService: MovieService ) {
    this.movieService.GetMovieList().subscribe(
      (response:any) => {
        this.movieContainer = response;
      }
    );
   }

  ngOnInit() {
  }

  DeleteEntry(idToDelete: number, index: number){
    this.movieService.DeleteMovie(idToDelete).subscribe(
      (response:any) => { 
        console.log("Movie Deleted at position " + index);
        this.movieContainer.splice(index, 1);
      }
    );
  }

  EditMovie(movieID: number){
    let displayPanel = document.getElementById("Display" + movieID);
    let editPanel = document.getElementById("Edit" + movieID);

    // If the display style is the empty string,
    // by default the element is being shown
    if(displayPanel.style.display === ""){
      displayPanel.style.display = "none";
      editPanel.style.display = "";
    }
  }

  ShowMovie(movieID: number){
    let displayPanel = document.getElementById("Display" + movieID);
    let editPanel = document.getElementById("Edit" + movieID);

    // If the display style is the empty string,
    // by default the element is being shown
    if(displayPanel.style.display === "none"){
      displayPanel.style.display = "";
      editPanel.style.display = "none";
    }
  }

}
