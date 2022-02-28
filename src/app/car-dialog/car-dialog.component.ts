import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Car} from "../model/car";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { CARSService } from '../services/CARS.service';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';
import { CARSStore } from '../services/CARS.store';

@Component({
    selector: 'car-dialog',
    templateUrl: './car-dialog.component.html',
    styleUrls: ['./car-dialog.component.css'],
    providers: [LoadingService,
    MessagesService]
})
export class carDialogComponent implements AfterViewInit {

    form: FormGroup;

    car:Car;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<carDialogComponent>,
        @Inject(MAT_DIALOG_DATA) car: Car,
        // private CARSService: CARSService,
        private CARSStore:CARSStore,
        // private loadingService: LoadingService,
        private messaegesService:MessagesService) {

        this.car = car;

        this.form = fb.group({
            description: [car.description, Validators.required],
            category: [car.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [car.longDescription,Validators.required]
        });
    }

    ngAfterViewInit() {

    }

    save() {

        const changes = this.form.value;
        
        // const savecar$ =
            this.CARSStore.saveCar(this.car.id, changes)
            // .pipe(
            //     catchError(err => {
            //         const message = "Cloud not save car";
            //         console.log(message, err);
            //         this.messaegesService.showErrors(message);
            //         return throwError(err);
                    
            //     })
            // )
                .subscribe();
        this.dialogRef.close(changes);
       

    }

    close() {
        this.dialogRef.close();
    }

}
