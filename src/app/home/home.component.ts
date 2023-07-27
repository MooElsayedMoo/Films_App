import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ds ='none';

  @HostListener('window:scroll', ['$event'])
  onScroll(click: Event): boolean {
    if ((click.target as Document).scrollingElement!.scrollTop >= 700) {
      this.ds = 'block';
    } else {
      this.ds = 'none';
    }
  return false;
  }
  toTop(): void {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  constructor(_MoviesService:MoviesService) {

    _MoviesService.getTrendingMovies().subscribe({
      next:(data) => this.trendingMovies = data.results
    })


   }
   trendingMovies:any[] = [];
   imgPrefix:string ='http://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
  }

}

