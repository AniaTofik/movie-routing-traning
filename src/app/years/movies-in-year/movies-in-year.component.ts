import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies-in-year',
  templateUrl: './movies-in-year.component.html',
  styleUrls: ['./movies-in-year.component.css']
})
export class MoviesInYearComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getMoviesFromYear(params.get('year')))
    );
  }

}