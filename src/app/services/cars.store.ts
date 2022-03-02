// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable, throwError } from "rxjs";
// import { catchError, map, shareReplay, tap } from "rxjs/operators";
// import { LoadingService } from "../loading/loading.service";
// import { MessagesService } from "../messages/messages.service";
// import { Car } from "../model/car";

// @Injectable({
// 	providedIn:'root'
// })
// export class CARSStore{
// 	private subject = new BehaviorSubject<Car[]>([]);

// 	CARS$: Observable<Car[]> = this.subject.asObservable();
// 	constructor(
// 		private http: HttpClient,
// 		private loading: LoadingService,
// 		private messages:MessagesService
// 	) {
// 		this.loadAllCARS();
// 	}
// 	private loadAllCARS() {
// 		console.log("loadAllCARS");
		
// 	    const loadCARS$ =this.http.get<Car[]>('/api/CARS')
// 			.pipe(
// 				map(response => response["payload"]),
// 				catchError(err => {
// 					const message = "cloud not load";
// 					this.messages.showErrors(message);
// 					console.log(message, err);
// 					return throwError(err);
					
// 				}),
// 				tap(CARS=>this.subject.next(CARS))
// 			);
// 		this.loading.showLoaderUntilCompleted(loadCARS$).subscribe()
// 	}
// 	saveCar(CarId: string, changes: Partial<Car>):Observable<any> {
// 		const CARS = this.subject.getValue();
// 		const index = CARS.findIndex(Car => Car.id == CarId)
// 		const newCar: Car = {
// 			...CARS[index],
// 			...changes
// 		};
// 		const newCARS: Car[] = CARS.slice(0);
// 		newCARS[index] = newCar;
// 		this.subject.next(newCARS);
// 		return this.http.put(`/api/CARS/${CarId}`, changes)
// 			.pipe(
// 				catchError(err => {
// 					const message = "cloud not save Car";
// 					console.log(message, err);
// 					this.messages.showErrors(message);
// 					return throwError(err);
// 				}),
// 				shareReplay()
// 		)
// 	}
// 	 filterByCategory(category: string): Observable<Car[]>{
// 		return this.CARS$.pipe(
// 			map(CARS => CARS.filter(Car => Car.category == category))	
// 		)
// 	}
// }