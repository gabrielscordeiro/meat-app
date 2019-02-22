import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable()

export class RestaurantsService {
    constructor(private http: Http) {

    }


    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).pipe(map(
            response => response.json()
        ));//Mapear a resposta, substituindo pelo json que vem com a resposta)

    }
}