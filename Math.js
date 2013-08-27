#!/usr/bin/env node


   //1. Enumerating the availabke Math methods
    var log=console.log;
log(Object.getOwnPropertyNames(Math));// I could use this static method for other objects.

//2. Generating random integer between a and b

var randint= function=(a,b){

    var frac= Math.random;
    return Math.floor((b-a)*frac+a);

};

//NOT COMPLETE, look at the PDF, lectur 10