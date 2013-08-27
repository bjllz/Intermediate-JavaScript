#!usr/bin/env

//Find the multiples of 3 or 5 below 1000
//this time we are going to make use of underscore.js library

    var uu=require('underscore');
    
/*For the anydivide function
-uu.map: takes an array and a univariate function, and applies the function 
        element-wise to the array, returning a new array

-we define divfn via closure, so that it takes one variable and returns one output. This can be passed to uu.map

uu.any takes an array of booleans and returns the true if and only if one of the is true, and false otherwise
*/

var anydivide= function(as,b){
    var divfn=function(a)

};