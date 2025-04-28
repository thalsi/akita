import { Component } from '@angular/core';
import { ProductsService } from '../../state/products.service';
import { ProductsQuery } from '../../state/products.query';
import { Observable } from 'rxjs';
import { Product } from '../../state/products.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private query: ProductsQuery,
    private service: ProductsService
  ){
    console.log('aaa');
    
  }
  ngOnInit() {
    console.log('pr-list');
    
    this.products$ = this.query.products$;
    this.loading$ = this.query.loading$;
    this.error$ = this.query.error$;

    this.service.get().subscribe();
  }

  refresh() {
    this.service.get().subscribe();
  }

}
