import { Query } from "@datorama/akita";
import { ProductsState } from "./products.model";
import { ProductsStore } from "./products.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends Query<ProductsState> {
    // Observable selectors
    products$ = this.select(state => state.products);
    loading$ = this.select(state => state.loading);
    error$ = this.select(state => state.error);

    constructor(protected pstore: ProductsStore) {
        super(pstore);
    }

    // Getter for current state
    get products() {
        return this.getValue().products;
    }

    // Derived selector
    getProductsByCategory(username: string) {
        return this.select(state =>
            state.products.filter(p => p.username === username)
        );
    }
}