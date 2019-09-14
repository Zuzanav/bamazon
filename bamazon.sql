DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50),
    department_name VARCHAR (15),
    price DECIMAL (6, 3),
    stock_quantity INT (5),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Produce", 0.59, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Produce", 1.29, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Body Wash", "Personal Care", 9.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Dental", 5.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Bedroom", 12.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper", "Office", 9.99, 201);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purse", "Accessories", 29.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sneakers", "Shoe", 50.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunscreen", "Personal Care", 7.99, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Booties", "Shoe", 69.99, 7);

SELECT * from products;

