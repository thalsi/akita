export interface Product {
    id: string;
    name: string;
    username: string;
    email: string;
    lastUpdated?: Date;
}

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

// Initial state
export function createInitialState(): ProductsState {
    return {
        products: [],
        loading: false,
        error: null
    };
}