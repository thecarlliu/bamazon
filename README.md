# bamazon

This is a node app that uses the "inquirer" and "mysql" npm packages in order to allow the user to view our bamazon store inventory, select a product based on the item_id that is referenced, and purchase a certain number of that product.

![img](https://github.com/thecarlliu/bamazon/blob/master/imgs/img1.png)
![img](https://github.com/thecarlliu/bamazon/blob/master/imgs/img2.png)

If the purchase is successful(the quantity requested is available), then the user is told the total cost, and then is asked if they would like to make another purchase. In this case, there are 15 of this product. And we purchase 1.

![img](https://github.com/thecarlliu/bamazon/blob/master/imgs/img3.png)

If the purchase is unsuccessful(there is not enough of the product in stock), then the user is told there is not enough, and then is asked if they would like to make another purchase. We purchased 1 earlier, so there are only 14 left, and we asked to purchase 15.

![img](https://github.com/thecarlliu/bamazon/blob/master/imgs/img4.png)

If the user doesn't want to make another purchase, they respond with "n", then the connection to our mysql database ends, and we say bye.

![img](https://github.com/thecarlliu/bamazon/blob/master/imgs/img5.png)
