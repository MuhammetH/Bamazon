/*Creating database and table*/
CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products(
	itemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(50) NOT NULL,
    departmentName VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stockQuantity INTEGER(10),
    primary key (ItemId)
);