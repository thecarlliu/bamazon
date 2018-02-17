var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bamazon"
});

connection.connect();

//Displays all of the items available for sale.
//Include the ids, names, and prices of products for sale.
//Then asks the user to make an order.
function bamazonCustomer() {
    //displayItems();
    inquirer.prompt([
        {
            type: "input",
            name: "buyId",
            message: "What is the ID of the product you would like to purchase?"
        },
        {
            type: "input",
            name: "buyAmount",
            message: "How many units of the product chosen would you like to purchase?"
        }
    ]).then(function(answers) {
        //log "Your order has been placed! Checking to see if the
        // requested amount of the product you are looking for is in stock.."
        var id = answers.buyId;
        var amount = answers.buyAmount;
        //check if store has enough of product to meet customer's request
        //if not, log "Looks like we don't have enough. The order did not go through."
        //if store has enough of the product:
        //update SQL database to reflect remaining quantity
        //show customer the total cost of their purchase.
    });
}