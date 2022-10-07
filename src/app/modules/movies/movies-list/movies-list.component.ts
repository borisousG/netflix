import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from 'src/app/models/movie-data.model';
import { MoviesDbService } from '../../../services/movies-db.service';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  currentId : number = -1;
  movies : MovieData[] = [];
  currentPage : number = 1;
  
  @ViewChild('mainContainer')
  mainContainer! : ElementRef;
  
  constructor(public activeRouter : ActivatedRoute, 
    public moviesDb : MoviesDbService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe( params => {
      if(JSON.stringify(params) != '{}') {
        this.currentId = parseInt(params['id']);
      }

      this.movies = [];
      this.currentPage = 1;
      this.getMovies();
    });
  }

  getMovies(){
    if(this.currentId == -1) {
      this.getTrending();
    } else {
      this.getMoviesByGenre();
    }
  }

  getTrending(){
    this.moviesDb.getTrending(this.currentPage)
    .subscribe( (response:any) => {
      this.movies = this.movies.concat(<MovieData[]>response['results']);
      this.needMore();
    })
  }  

  getMoviesByGenre(){
    this.moviesDb.getMoviesByGenre(this.currentId, this.currentPage)
    .subscribe( (response:any) => {
      this.movies = this.movies.concat(<MovieData[]>response['results']);
      this.needMore();
    })
  }  

  needMore(){    
    let columns = Math.ceil(this.movies.length * 207 / this.mainContainer.nativeElement.offsetWidth);
    setTimeout(()=>{
      console.log(columns);
      console.log(columns * 300);
      console.log( this.mainContainer.nativeElement.offsetHeight);

      if((columns * 300) < this.mainContainer.nativeElement.offsetHeight){
        this.currentPage ++;
        this.getMovies();
      }
    }, 800);
  }

  openDetail(movie : MovieData) {
    this.dialog.open(DialogDetailComponent, {
      height: '700px',
      width: '600px',
      data: movie
    });
  }

  onScroll(event:any) : void {
    let _target : Element = event.target;
    if(_target.scrollTop >= (_target.scrollHeight - _target.clientHeight - 300)){
      this.currentPage ++;
      this.getMovies();
    }
  }

}
