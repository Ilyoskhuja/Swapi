import {Request, Response} from 'express';
import {CARS} from "./db-data";
import {setTimeout} from 'timers';


export function savecar(req: Request, res: Response) {

  // console.log("ERROR saving car!");
  // res.sendStatus(500);
  // return;

  

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving car changes", id, JSON.stringify(changes));

    const newcar = {
      ...CARS[id],
      ...changes
    };

    CARS[id] = newcar;

    console.log("new car version", newcar);

    setTimeout(() => {

        res.status(200).json(CARS[id]);

    }, 2000);



}
