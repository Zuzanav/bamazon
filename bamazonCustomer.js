// DEPENDENCIES -------------------------------------------------

var mysql = require('mysql');
var inquirer = require('inquirer');


// CONNECTION TO MYSQL ------------------------------------------

var connection = mysql.createConnection({
    host: "localhost",

port: 3306,

user: "root",

password: "",
database: "bamazon"

});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");

    // run function to display all products to user 
    readProducts();
  });

//==================================================================

// FUNCTION to display all products to user --------------------
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT item_id, product_name, price FROM products", function(error, response) {
      if (error) throw error;

      // all results of the SELECT statement
      console.log(response);

      // end connection
      //connection.end();
     
    });
  }

  //=================================================================

  // INITIAL PROMPT TO USER -------------------------------

  inquirer.prompt([
      {
        type: "input",
        name: "idNumber",
        message: "State the item number of the item you'd like to purchase"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"
      },

  // then create function that checks item with quantity in store 
  ]).then(function(userResponse) {

    // FIRST QUERY TO MYSQL - GATHER ITEM ID, PRICE, QUANTITY ----------------------------------------
     var query = "SELECT item_id, price, stock_quantity FROM products WHERE ?";

     connection.query(query, { item_id: userResponse.idNumber }, function(error, res) {
        for (var i = 0; i < res.length; i++) {

            // grab quantity of items from table based on user input 
            var selectedItemQ = res[i].stock_quantity;

            // see if the item is in stock - if it is then...
            if (userResponse.quantity <= selectedItemQ) {
                
                // create new query to update product in database
                var newQuery = "UPDATE products SET stock_quantity = " + (selectedItemQ - userResponse.quantity) + " WHERE item_id = " + userResponse.idNumber;

                connection.query(newQuery, function(err, data){
                    if (err) throw err;
                });                
            
                var total = userResponse.quantity * res[i].price;
                console.log("The requested item is in stock!");
                console.log("Proceeding to checkout...")
                console.log("Your total is: " + total.toFixed(2));
            } else {
                console.log("Insufficient quantitity!")
            };
        };

        connection.end();
  });

})