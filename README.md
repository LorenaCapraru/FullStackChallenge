***Database Schema***
The database consists of three tables: store, category, and item, each with its respective fields.

**Store Table**

id (Primary Key): Unique identifier for each store.
name: The name of the store.
logo_url: URL or path to the store's logo image.

**Category Table**

id (Primary Key): Unique identifier for each category.
name: The name of the category.
img: URL or path to the category image.
store_id (Foreign Key): References the id of the store to which this category belongs.

**Item Table**

id (Primary Key): Unique identifier for each item.
name: The name of the item.
img: URL or path to the item image.
price: The price of the item.
category_id (Foreign Key): References the id of the category to which this item belongs.
This schema represents a basic structure for storing data related to clothing shopping stores, their categories, and the items within those categories
