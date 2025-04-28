import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Product, ProductsState, createInitialState } from './products.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState> {

    constructor() {
        super(createInitialState());
    }

    // Custom store methods
    override setLoading(loading: boolean) {
        this.update({ loading });
    }

    setErr(error: string | null) {
        this.update({ error });
    }
}