


import {Request, Response} from 'express';
import {PARTS} from "./db-data";
import {setTimeout} from "timers";



export function searchParts(req: Request, res: Response) {

    const queryParams = req.query;

    const carId = queryParams.carId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 3;

    let parts;

    if (carId) {
        parts = Object.values(PARTS).filter(part => part.carId == carId);
    }
    else {
        parts = Object.values(PARTS);
    }

    if (filter) {
       parts = parts.filter(part => part.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        parts = parts.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const partsPage = parts.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: partsPage});
    },1000);


}
