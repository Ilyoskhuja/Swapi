
// import { ChangeDetectionStrategy,Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { filter, tap } from 'rxjs/operators';
// import { carDialogComponent } from '../car-dialog/car-dialog.component';
// import { Car } from '../model/car';

// @Component({
//   selector: 'cars-card-list',
//   templateUrl: './cars-card-list.component.html',
//   styleUrls: ['./cars-card-list.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CARSCardListComponent implements OnInit {

//   @Input()
//   CARS: Car[] = [];
  
//   @Output()
//     private CARSChanged =new EventEmitter()

//   constructor(private dialog: MatDialog) { }

//   ngOnInit(): void {
//   }
//   editcar(car: Car) {

//     const dialogConfig = new MatDialogConfig();

//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.width = "400px";

//     dialogConfig.data = car;

//     const dialogRef = this.dialog.open(carDialogComponent, dialogConfig);
//     dialogRef.afterClosed().pipe(
//       filter(val => !!val),
//       tap(()=>this.CARSChanged.emit())
//     ).subscribe()
//   }
// }
