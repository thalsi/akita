# akita
Akita is a state management pattern and library for Angular applications, used especially in large apps. It helps manage and organize your app’s state in a clean and scalable way. Akita is a state management pattern, built on top of RxJS. 

- You can think of Akita as a store (like a mini-database) in the frontend where you can fetch, update, and delete data easily.

## Why use Akita?
Akita is like a memory box in your app. It holds data (like tasks) so that you don’t need to keep calling the server again and again. It’s super useful in big apps.

## Main Parts of Akita

1. Store – Holds the data (like a container)
2. Query – Used to read data from the store
3. Service – Connects API with the store (do HTTP requests and update store)
4. Model / Interface – Defines the shape of data

##  File Structure

src/app/features/products/
├── state/
│   ├── products.model.ts    # Type definitions
│   ├── products.store.ts   # Akita store
│   ├── products.query.ts   # Akita queries
│   ├── products.api.ts     # Pure API calls
│   └── products.service.ts # Business logic
└── products.module.ts


## ref
https://chat.deepseek.com/a/chat/s/5d24c0e5-5b5a-4527-943f-995a2a2c2563