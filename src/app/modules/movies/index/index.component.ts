import { Component, OnInit } from '@angular/core';
import { MovieCategory } from 'src/app/models/movie-category.model';
import { MoviesDbService } from '../../../services/movies-db.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  genres : MovieCategory[] = [];

  constructor(public moviesDb : MoviesDbService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.moviesDb.getGenres()
    .subscribe( (response:any) => {
      this.genres = <MovieCategory[]>response['genres'];
    })
  }

}
