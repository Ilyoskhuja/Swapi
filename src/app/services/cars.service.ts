import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Car } from "../model/car";
import { Part } from "../model/part";

@Injectable({
	providedIn:'root'
})
export class CARSService{
	constructor(private http: HttpClient) {
		
	}
	loadcarById(carId: number) {
	return	this.http.get<Car>(`/api/CARS/${carId}`).pipe(
			shareReplay()
		)
	}
	loadAllCARS(): Observable<Car[]>{
		return this.http.get<Car[]>("/api/CARS").pipe(map(
			res=>res["payload"]
		),
		shareReplay());
	}
	loadAllcarParts(carId:number):Observable<Part[]> {
		return this.http.get<Part[]>('/api/Parts', {
			params: {
				pageSize: "10000",
				carId:carId.toString()
			}
		}).pipe(
			map(res => res["payload"]),
			shareReplay()
		);
	}
	savecar(carId: string, changes: Partial<Car>):Observable<any> {
		return this.http.put(`/api/CARS/${carId}`, changes)
			.pipe(
				shareReplay()
			)	
	}
	searchParts(search: string): Observable<Part[]>{
		return this.http.get<Part[]>('/api/Parts', {
			params: {
				filter: search,
				pageSize: "100"
			}
		}).pipe(
			map(res => res["payload"]),
			shareReplay()
		);
	}
}