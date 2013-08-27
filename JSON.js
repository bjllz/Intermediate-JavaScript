#!/usr/bin/env node

   /*JSON is a Global variable used to rapidly parse JSON objects*/

   //1. List methods that JSON has.

    var log=console.log;
    Object.getOwnPropertyNames(JSON);

//2. Using JSON.parse te deserialize JSON strings
//Note that you use double quotes within JSON and single quotes to 
//encapsulate the entire string

var jsdata='[{"asdf":9,"bar":10},18,"baz"]';// an array with a  JSON in index 0 
var data=JSON.parse(jsdata);
log(data[0].asdf);//9

// you can also do this with eval. But don't do that, use JSON.parse instead

var data2= eval=(jsdata);
log (data2[0].asdf);

/*Using JSON.stringify to serialize JSObjects*/

//While strings , numbers, arrays, and dictionaries/objects are generally safe, note that regex instances dont have a good default serialization and thus need special handling;

var dt= new Date('2003-05-23T17:00:00Z');
var rex=/(cr|l)/;
var data3=[9,{"foo":dt,"bar":rex,"baz":{"quux":"a","alpha":[77,3]}},11];

log(data3);

var data3str=JSON.stringify(data3);

//note that the regex variable was not serialized correctly

var data4=JSON.parse(data3str);


