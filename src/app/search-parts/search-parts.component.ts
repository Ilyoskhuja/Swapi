import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../model/car';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Part} from '../model/part';
import { CARSService } from '../services/CARS.service';


@Component({
  selector: 'car',
  templateUrl: './search-parts.component.html',
  styleUrls: ['./search-parts.component.css']
})
export class searchPartsComponent implements OnInit {
   
  searchResults$: Observable<Part[]>;
  activePart: Part;
  constructor(private CARSService: CARSService) {


  }
 
  ngOnInit() {


  }
  onSearch(search: string) {
    this.searchResults$ = this.CARSService.searchParts(search)
  }
  openPart(Part: Part) {
    this.activePart = Part;
  }
  onBackToSearch() {
    this.activePart = null;
  }

}











