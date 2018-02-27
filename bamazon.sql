-- Creates the database --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

-- Creates table "products" within the bamazon db --
CREATE TABLE products (
	item_id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

 -- Creates new rows containing data in all named columns --
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (748, "Tide Pods", "Laundry", 1199, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (997, "Fissler Skillet", "Kitchenware", 19999, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (781, "Charmin", "Bathroom", 799, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (883, "Nivea Men's Aftershave", "Hygiene", 479, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (782, "Chamin Ultra", "Bathroom", 849, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (538, "Large Eggs 18", "Dairy", 499, 180);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (439, "Blue Gatorade 6-Pack", "Drinks", 499, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (759, "Tide Sport", "Laundry", 999, 60);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (164, "Bananas", "Produce", 399, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (487, "Totino's Pizza Rolls", "Frozen", 699, 60);