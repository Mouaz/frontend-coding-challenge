import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Movi } from '../models/Movie';
import { ShowTime, ShowTimeData, TheaterShowTime } from '../models/TheaterShowTime';
import { GetMoviesService } from '../services/get-movies.service';

@Component({
  selector: 'app-get-show-times',
  templateUrl: './get-show-times.component.html',
  styleUrls: ['./get-show-times.component.scss']
})
export class GetShowTimesComponent implements OnInit {
  
  showTimes: TheaterShowTime[];
  amc: ShowTimeData[];
  pt: ShowTimeData[];
  arc: ShowTimeData[];

  value:string ='';
  constructor( private getShowTimesService : GetMoviesService) { }

   ngOnInit(): void{
    forkJoin(
      [this.getShowTimesService.getTheaterShowtimes(),
      this.getShowTimesService.getMovies()]
      ).subscribe(([showTimesData, moviesData]) => {
        this.showTimes = showTimesData;
        const movies = moviesData;
        this.showTimes.forEach(x => console.log(typeof x.showtimes));
        this.showTimes.forEach(x => (Object.keys(x.showtimes).forEach( function(id){
          const m = movies.find(m => m.id==id) as Movi;
          x.showtimes[id] = {
          times: x.showtimes[id],
          title: m.title,
          poster: m.poster,
          rating: m.rating,
          };
        })));
        console.log(this.showTimes)
        this.renderMovies();
      });
   }

   onKey(event: any) {
    this.value = event.target.value;
    this.renderMovies();
  }

  renderMovies(){
    this.amc = Object.values(this.showTimes.find(x => x.name=='AMC').showtimes);
    this.amc = this.amc.filter(s => s.title?.toLowerCase().indexOf(this.value.toLowerCase())!==-1);
    console.log(this.amc);
    this.pt = Object.values(this.showTimes.find(x => x.name=='Pacific Theatres').showtimes);
    this.pt = this.pt.filter(s => s.title?.toLowerCase().indexOf(this.value.toLowerCase())!==-1);
    this.arc = Object.values(this.showTimes.find(x => x.name=='Arclight').showtimes);
    this.arc = this.arc.filter(s => s.title?.toLowerCase().indexOf(this.value.toLowerCase())!==-1);
  }

}
