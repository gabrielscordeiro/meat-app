import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService {
    constructor() {

    }


 /**
 * @todo Informações fixas para testes do front
 */
    rests: Restaurant[] = [
        {
            id: "bread-bakery",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png",
        },
        {
            id: "burger-house",
            name: "Burger House",
            category: "Hamburgers",
            deliveryEstimate: "100m",
            rating: 3.5,
            imagePath: "assets/img/restaurants/burgerhouse.png",
        }
    ];

    restaurants(): Restaurant[] {
        return this.rests;
    }
}