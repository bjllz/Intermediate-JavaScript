#!/usr/bin/env node

   /*1. decodeURI and encodeURI: ecape especial characters in URI
     these two functions ensure that special character like brakets and slashed     are escaped in URI
    */
    var log=console.log;
    var apiurl="https://www.federalregister.gov/api/vi/articles/"+
               "03-12969,2012-30312,E8-24781.json?fields%5B%5D=title"+
               "&fields%5B%5D=publication_date";

log(decodeURI(apiurl));
log(encodeURI(decodeURI(apiurl)));

/*2. typeof gives the type of the JS variable, typeof cannot be used by itself , look at reference in lecture 10*/

    typeof 19 //number
    typeof "foo"//string
    typeof{}//object

/*3. parseInt , parseFloat: converts strings to floats*/

parseInt('80',10);//80 base 10
parseInt('80',16);//128 base 16
parseFloat('89803.333');//89803.333

/*4. Object.getOwnPropertyNames, reminds you what methods exist in a particular object*/

Object.getOwnPropertyNames(JSON);

/*5. Object.getOwnPropertyDescriptor
Use this to instrospect the fields of a given object o module 
*/

var uu=require('underscore');
Object.getOwnPropertyDescriptor(uu,'map');







