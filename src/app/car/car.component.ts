import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../model/car';

import {merge, fromEvent, Observable, concat, throwError, combineLatest} from 'rxjs';
import {Part} from '../model/part';
import { CARSService } from '../services/CARS.service';
import { map, startWith } from 'rxjs/operators';

interface carData{
  car: Car;
  Parts: Part[];
}
@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class carComponent implements OnInit {

  data$:Observable<carData>;


  constructor(private route: ActivatedRoute,
  private CARSService:CARSService) {


  }

  ngOnInit() {
    const carId =parseInt(this.route.snapshot.paramMap.get("carId"))
    
    const car$ = this.CARSService.loadcarById(carId).pipe(
      startWith(null)
    );
    const Parts$ = this.CARSService.loadAllcarParts(carId).pipe(
      startWith([])
    );
    this.data$ = combineLatest([car$, Parts$]).pipe(
      map(([car, Parts]) => {
        return {
          car,
          Parts
        }
      })
    )
  }


}











