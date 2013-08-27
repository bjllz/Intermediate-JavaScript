#!/usr/bin/env node

   //This program finds the sum of all the multiples of 3 or 5 below 1000

    var divides= function(a,b){
       /*This function devides b and a, it returns a boolean indicating
	if ther are multiples*/
       return b%a==0;
   };
    

    var anydivide=function(as,b){
	/*this function divides a number for each number in an array, it returns true if its multipl of at least one*/  
	for (var ii in as){
	       if(divides(as[ii],b)){
		   return true;
	       } 
	   }
	   return false;
       };
 

var sum = function(arr){
    /*Tjis function sums all the elements of an array*/
    var cc=0;
    for (var ii in arr){
	cc +=arr[ii];
    }
    return cc;
};


    var fizzbuzz = function(factors, max){
	/*out is an array wher all the multiples will be stored for the end 
	  where we will sum them up, we use the push method of an array to pushit to the end of the array, this could be customized with the module command*/
	var out=[];
	for (var nn=1; nn<max; nn+=1){
	    if (anydivide(factors,nn)){
		out.push(nn);
	    }
	}
	
	return sum(out);
    };

console.log(fizzbuzz([3,5],1000));

