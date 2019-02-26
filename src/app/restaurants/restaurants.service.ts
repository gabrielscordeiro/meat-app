import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators'

import { ErrorHandler } from '../app.error-handler';

@Injectable()

export class RestaurantsService {
    constructor(private http: Http) {

    }


    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).pipe(map(
            response => response.json()
        ), catchError(ErrorHandler.handleError));
        //Mapear a resposta, substituindo pelo json que vem com a resposta)

    }
}