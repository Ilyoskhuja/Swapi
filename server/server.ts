
import * as express from 'express';
import {Application} from "express";
import {getAllCARS, getcarById} from "./get-CARS.route";
import {searchParts} from "./search-parts.route";
import {savecar} from './save-cars.route';
import {loginUser} from './login.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/CARS').get(getAllCARS);

app.route('/api/CARS/:id').get(getcarById);

app.route('/api/parts').get(searchParts);

app.route('/api/CARS/:id').put(savecar);

app.route('/api/login').post(loginUser);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



