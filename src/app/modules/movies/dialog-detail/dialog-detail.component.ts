import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieData } from 'src/app/models/movie-data.model';
import { MoviesDbService } from '../../../services/movies-db.service';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent {

  constructor(
    public moviesDb : MoviesDbService,
    @Inject(MAT_DIALOG_DATA) public data: MovieData
  ) { }

  toggleMyList() {
    if(this.moviesDb.checkMovieOnList(this.data.id)) {
      this.moviesDb.removeMovieFromList(this.data.id);
    } else {
      this.moviesDb.addMovieToList(this.data.id);
    }
  }

  toggleMyFavorites() {
    if(this.moviesDb.checkMovieOnFavorites(this.data.id)) {
      this.moviesDb.removeMovieFromFavorites(this.data.id);
    } else {
      this.moviesDb.addMovieToFavorites(this.data.id);
    }
  }

}
