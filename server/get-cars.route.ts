

import {Request, Response} from 'express';
import {CARS} from "./db-data";



export function getAllCARS(req: Request, res: Response) {


    // console.log("ERROR loading CARS!");
    // res.status(500).json({message: 'random error occurred.'});
    // return;

        setTimeout(() => {

             res.status(200).json({payload:Object.values(CARS)});

        }, 1500);
}


export function getcarById(req: Request, res: Response) {

    const carId = req.params["id"];

    const CARSData:any = Object.values(CARS);

    const car = CARSData.find(car => car.id == carId);

    res.status(200).json(car);
}
