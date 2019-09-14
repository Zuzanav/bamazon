## Bamazon

This is an application which allows a user to view a full selection of products and allows them to purchase a specified quantity of a product through simple command lines.


## How to Run
Download/clone all the files from this bamazon repository. Have [MySQL](https://dev.mysql.com/downloads/workbench/) installed on your computer. Running the bamazon.sql file on that application will allow you to view the database with the relevant data. Then, open up your terminal/bash window and proceed to navigating to the folder with the cloned git files. Run the following command before proceeding further:
- npm i

Next, type ' node bamazonCustomer.js ' to open the application. 


## The App
The app will first display all the information of the products available in the store, including item id, name and price.

![All Products](/screenshots/products.png)

The user will be prompted to select one item of their choosing by typing in the item id into the command line. Then they'll be prompted to select a quantity. If the item is in stock, they will be taken to checkout and be given a total amount for their purchase. 

![In Stock](/screenshots/instock.png)

If the item is not in stock, or if the user requested a quantity that cannot be met, they receive a separate response.

![Insufficient Quantity](/screenshots/insuf.png)

Once purchased, the stock inventory gets updated in the MySQL database and the number will be reflected as such. 


## Technologies Used
- MySQL
- Node JS
- NPM Inquirer









