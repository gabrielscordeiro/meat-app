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
            response => response.json()//Mapear a resposta, substituindo pelo json que vem com a resposta)
        ), catchError(ErrorHandler.handleError)); // Realizar tratamento de erro da requisição feita


    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`).pipe(map(
            response => response.json()
        ), catchError(ErrorHandler.handleError));
    }
}