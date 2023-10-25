# Full Stack Admin Panel Application

This is a full stack admin panel application built using React for the frontend and Node.js with Express and PostgreSQL for the backend. The application allows users to manage a list of clothing shopping stores, add categories, and items to each store, and view a list of available stores in a well-optimized table.

## Requirements

To run this application, you will need the following software installed on your machine:

- Node.js
- PostgreSQL

## Installation and Setup

1. Clone the repository to your local machine.

```
git clone <repository-url>
```

2. Install backend dependencies.

``` npm install ```

3. Run the Node.js server.
```
npm start
```

## Data Structure
  Each store can have multiple categories.
  Each category can have multiple items.
  The ERD diagram below describes the relationship between tables:
  
![Untitled Diagram](https://github.com/LorenaCapraru/full-stack-challenge/assets/108892538/8af002db-7aa4-4fd9-9136-aadee6a03f8d)

  

## Project Structure
The project is organized into the following directories:

**backend**: Contains the Node.js backend code.
**frontend**: Contains the React frontend code.

# Database Schema

The database consists of three tables: `store`, `category`, and `item`, each with its respective fields.

## Store Table

- `id` (Primary Key): Unique identifier for each store.
- `name`: The name of the store.
- `logo_url`: URL or path to the store's logo image.

## Category Table

- `id` (Primary Key): Unique identifier for each category.
- `name`: The name of the category.
- `img`: URL or path to the category image.
- `store_id` (Foreign Key): References the `id` of the store to which this category belongs.

## Item Table

- `id` (Primary Key): Unique identifier for each item.
- `name`: The name of the item.
- `img`: URL or path to the item image.
- `price`: The price of the item.
- `category_id` (Foreign Key): References the `id` of the category to which this item belongs.
