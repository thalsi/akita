import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.model';

@Injectable({ providedIn: 'root' }) 
export class ProductsApi {
    private readonly BASE_URL = `${'https://jsonplaceholder.typicode.com/users'}`;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(this.BASE_URL);
    }

    getById(id: string) {
        return this.http.get<Product>(`${this.BASE_URL}/${id}`);
    }

    create(product: Omit<Product, 'id'>) {
        return this.http.post<Product>(this.BASE_URL, product);
    }

    update(id: string, product: Partial<Product>) {
        return this.http.patch<Product>(`${this.BASE_URL}/${id}`, product);
    }

    delete(id: string) {
        return this.http.delete<void>(`${this.BASE_URL}/${id}`);
    }
}