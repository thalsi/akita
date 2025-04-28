import { Injectable } from '@angular/core';
import { ProductsStore } from './products.store';
import { ProductsApi } from './products.api';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from './products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    constructor(
        private store: ProductsStore,
        private api: ProductsApi
    ) { }

    // Load all products
    get() {
        console.log('hi');
        
        this.store.setLoading(true);
        return this.api.getAll().pipe(
            tap(products => {
                this.store.update({
                    products,
                    loading: false,
                    error: null
                });
            }),
            catchError(error => {
                this.store.setErr(error.message);
                this.store.setLoading(false);
                return of(null); // Graceful fallback
            })
        );
    }

    // Add new product (optimistic update)
    add(product: Omit<Product, 'id'>) {
        const tempId = Date.now().toString();
        const newProduct = { ...product, id: tempId };

        this.store.add(newProduct); // Optimistic update

        return this.api.create(product).pipe(
            tap(serverProduct => {
                // Replace temporary ID with server ID
                this.store.replace(tempId, serverProduct);
            }),
            catchError(error => {
                this.store.remove(tempId); // Rollback on error
                this.store.setError(error.message);
                return error;
            })
        );
    }

}
