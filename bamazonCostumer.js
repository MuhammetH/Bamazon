//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//Connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "password", //Your password
  database: "bamazon"
});

//Functions
function displayProducts() {
  //show all ids, names, and products from database.
  connection.query("SELECT * FROM Products", function(error, response) {
    if (error) {
      console.log(error);
    }
    //New instance of our constructor
    var theDisplayTable = new Table({
      //declare the value categories
      head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
      //set widths to scale
      colWidths: [10, 30, 18, 10, 10]
    });
    //for each row of the loop
    for (i = 0; i < response.length; i++) {
      //push data to table
      theDisplayTable.push([
        response[i].itemID,
        response[i].productName,
        response[i].departmentName,
        response[i].price,
        response[i].stockQuantity
      ]);
    }
    //log the completed table to console
    console.log(theDisplayTable.toString());
    inquireForPurchase();
  });
} //end displayAll
function inquireForPurchase() {
  //get item ID and desired quantity from user. Pass to purchase from Database
  inquirer
    .prompt([
      {
        name: "ID",
        type: "input",
        message: "What is the Item ID of the item you wish to purchase?"
      },
      {
        name: "Quantity",
        type: "input",
        message: "How many would you like to buy?"
      }
    ])
    .then(function(answers) {
      //set captured input as variables, pass variables as parameters.
      var quantityDesired = answers.quantity;
      var IDDesired = answers.ID;
      purchaseFromDatabase(IDDesired, quantityDesired);
    });
} //end inquireForPurchase

function purchaseFromDatabase(ID, quantityNeeded) {
  //check quantity of desired purchase. Minus quantity of the itemID from database if possible. Else inform user "Quantity desired not in stock"
  connection.query('SELECT * FROM Products WHERE itemID = ' + ID, function(
    error,
    response
  ) {
    if (error) {
      console.log(error);
    }

    //if in stock
    if (quantityNeeded <= response[0].stockQuantity) {
      //calculate cost
      var totalCost = response[0].price * quantityNeeded;
      //inform user
      console.log("Your order hass been placed!");
      console.log(
        "Your total cost for " +
          quantityNeeded +
          " " +
          response[0].productName +
          " is " +
          totalCost +
          ". Thank you for your Business!"
      );
      //update database, minus purchased quantity
      connection.query(
        'UPDATE Products SET stockQuantity = stockQuantity - ' +
          quantityNeeded +
          ' WHERE itemID = ' +
          ID
      );
    } else {
      console.log(
        "We are sorry. We don't have enough " +
          response[0].productName +
          " to fulfill your order."
      );
    }
    displayProducts(); 
  });
} //end purchaseFromDatabase

displayProducts();
