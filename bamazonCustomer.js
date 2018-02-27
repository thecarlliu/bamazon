var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "bamazon"
});

connection.connect();

displayItems();

//Displays all of the items available for sale.
//Include the ids, names, and prices of products for sale.
function displayItems() {
    console.log("Hello faithful customer!\nWelcome to Bamazon.\nHere's what we have:");
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        for (i=0;i<res.length;i++) {
            console.log("\nID: "+res[i].item_id+"\nName: "+res[i].product_name+"\nCost: "+res[i].price+"\n");
        }
        bamazonCustomer();
    });
}


//Then asks the user to make an order.
function bamazonCustomer() {
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
        var id = answers.buyId;
        var amount = answers.buyAmount;
        console.log("Checking to see if the requested amount of the product you are looking for is in stock..");
        connection.query("SELECT stock_quantity, price FROM products WHERE item_id =?", [id], function(err, res) {
            var stock = res[0].stock_quantity;
            var itemPrice = res[0].price;
            if (amount > stock) {
                console.log("Looks like we don't have enough of the product you requested, the order did not go through.");
                shopAgain();
            }
            else {
                var newAmount = stock - amount;
                connection.query("UPDATE products SET stock_quantity =? WHERE item_id =?", [newAmount, id]);
                var totalCost = amount * itemPrice;
                console.log("Your order has gone through.\nYour total cost is $" + totalCost + "\nThanks for choosing Bamazon.");
                shopAgain();
            }
        });
    });
}

function shopAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Would you like to make another purchase?"
        }
    ]).then(function(answers) {
        if (answers.again === true) {
            displayItems();
        }
        else {
            console.log("See you next time!");
            connection.end();
        }
    });
}