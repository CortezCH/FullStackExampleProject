import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FullCRUDComponent } from './full-crud/full-crud.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MovieListComponent,
    CreateMovieComponent,
    ToDoListComponent,
    FullCRUDComponent,
    UpdateMovieComponent,
    CreateToDoComponent,
    EditToDoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movie-list', component : MovieListComponent},
      { path: 'create-movie', component : CreateMovieComponent},
      { path: 'to-do-list', component : ToDoListComponent},
      { path: 'full-crud', component: FullCRUDComponent},
      { path: 'update-movie', component: UpdateMovieComponent},
      { path: 'create-to-do', component: CreateToDoComponent},
      { path: 'edit-to-do', component: EditToDoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
