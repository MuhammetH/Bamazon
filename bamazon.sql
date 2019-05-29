/*Creating database and table*/
CREATE DATABASE Bamazon;
USE Bamazon;

DROP TABLE IF EXISTS `Products`;

CREATE TABLE Products(
	itemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(50) NOT NULL,
    departmentName VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stockQuantity INTEGER(10),
    primary key (ItemId)
);

INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy Note 8','electronics',449.99,4);
