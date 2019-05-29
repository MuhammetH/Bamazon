/*Creating database and table*/
CREATE DATABASE Bamazon;
USE Bamazon;
/*drops the tabel named products if its already existing*/
DROP TABLE IF EXISTS `Products`;

CREATE TABLE Products(
	itemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(50) NOT NULL,
    departmentName VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stockQuantity INTEGER(10),
    primary key (ItemId)
);
/*adding products to our table*/
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy Note 8','electronics',449.99,4);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy Note 9','electronics',549.99,2);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('IPhone XS max','electronics',599.99,1);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy s10+ (new)','electronics',999.99,1);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy s10','electronics',599.99,1);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Gear s3 Frontier','electronics',239.99,3);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Galaxy Tab s4','electronics',710.00,2);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Logitech G502 Wireless','electronics',144.99,2);
INSERT INTO Products(productName,departmentName,price,stockQuantity) VALUES('Sony Hear-ON 2','electronics',199.99,6);

