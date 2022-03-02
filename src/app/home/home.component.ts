import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// import {Car} from '../model/car';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
// import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';

// import { CARSService } from '../services/CARS.service';
// import { LoadingService } from '../loading/loading.service';
// import { MessagesService } from '../messages/messages.service';
// import { CARSStore } from '../services/CARS.store';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  // bCARS$:Observable<Car[]>;

  // aCARS$:Observable<Car[]>;


  constructor(
    // private CARSService: CARSService,
    // private CARSStore:CARSStore,
    // private loadingService: LoadingService,
    // private messagesService: MessagesService
  ) {

  }

  ngOnInit() {
    this.reloadCARS()
  }

  reloadCARS() {
    // const CARS$ = this.CARSService.loadAllCARS()
    //   .pipe(
    //     map(CARS => CARS.sort(sortCARSByS),
    //     catchError(err => {
    //       const message = "Cloud not load CARS";
    //       this.messagesService.showErrors(message)
    //       console.log(message, err);
    //       return throwError(err)
          
    //       })
    //     ));
    // const loadCARS$ =this.loadingService.showLoaderUntilCompleted(CARS$)

    // this.beginnerCARS$ = loadCARS$.pipe(
    //   map(CARS => CARS.filter(car => car.category == "BEGINNER"))
    // )
    // this.bCARS$ = this.CARSStore.filterByCategory("B");
    // this.aCARS$ = this.CARSStore.filterByCategory("A");
    // this.advancedCARS$ = loadCARS$.pipe(
    //   map(CARS => CARS.filter(car => car.category == "ADVANCED"))
    // )
 }

}




