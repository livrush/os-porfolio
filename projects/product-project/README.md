Product Project
===

Given the data at `data/products.json`, create a searchable list of products.

Note: 

* We've included a few utilities for you to use, but you'll definitely want to use jQuery, and maybe a CSS library, too.
* Feel free to use bower or a similar client-side package manager for your project.
* There are also product thumbnails and detailed images within the `img/product` directory!
* 

* REDUCE
* The filter by type drop down menu should create things dynamically by using reduce on the data to find all the types
* 
* RECURRSION
* The search function should search EVERY part of each listing using recurrsion. 
* 
* PSEUDO CODE
* Make a function SEARCH
* It will take an ARRAY of data
* Also take a STRING target
* FILTER through the data
* In the filter function declare a named function argument that will be 
* Check if it's a string
* Have a recursive case for otherwise
*   A la it is an object, array, or number data type
* Then use SOME hof to check if th thing contains 
* Then something about returning the filter function and passing through the new named function
* So that step goes HERE and not before. Somehow.