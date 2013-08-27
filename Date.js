#!/usr/bin/env node

    var log='console.log';
var year=2013;
var month=02;
var day=29;
var hour=12;
var minute=30;
var second=15;
var millisecond=876;
var millisecond_since_jan_1_1970=86400*10*1000;
var iso_timestamp='2003-05-23T17:00:00Z';

var dt0=Date();// Bad- This will give you a string and not a Date instance
var dt1= new Date();
var dt2= new Date(milliseconds_since_jan_1_1970);
var dt3= new Date(iso_timestamp);
var dt4= new Date (year, month, day);
var dt5= new Date (year, month, day, hour, minute, second, millisecond);

log('dt0:'+dt0);
log('dt1:'+dt1);
log('dt2:'+dt2);
log('dt3:'+dt3);
log('dt4:'+dt4);
log('dt5:'+dt5);

// Date classmethods - these returns milliseconds , not date instances.

var milliseconds_per_year=(86400*1000*365);
var years_from_epoch=function(ms){
    
    log(Math.floor(ms/milliseconds_per_year));
};

years_from_epoch(Date.now());//43

years_from_epoch(Date.parse(iso_timestamp));

years_from_epoch(Date.UTC(year, month, day, hour, minute, seconds, milliseconds)); 

//Date examples


var ddt= dt3-dt4;// it returns the number of millisends
var ddt2=dt3.getTime() - dt4.getTime();
log('ddt:'+ddt);
log('ddt2:'+ddt2);
log('Number of years:'+(ddt/milliseconds_per_year));


//Get JSON data , pasrsing strings into Date instances, and then return docs structure;

var data2docs=function(data){
    var docs=[]; // This is a new array
    var offset='T12:00:00-05:00';// explicitly specify time/timezone
    var dt,i,dtnew;

    for(ii=0;ii<data.results.length;ii+=1){
	/* I figure data.results is an array part of the data object as 
	   it is a JSON object*/
	dt=data.results[ii].publication_date;/*This means that the JSON object
					       has a key value results and it 
					       is an array of objects, one of the objects inside this array is 
					       publication date*/
	dti=new Date(dt+offset);
	docs.push({'title':data.results[ii].title,'publication date:':dti});// I am pushing an object into this array, always the last position
   }
    return docs;
};

var docs2console=function(docs){
    
    for(var ii =0;ii<docs.length;ii++){
	doc=docs[ii];
	log('Date: %s\nTitle:%s\n',doc.publication_date,doc.title);
    }


};

//This is how we do request for JSON documents
var apiurl="";
var request=require('request');
var printdata= function(apiurl){
    request(apiurl,function(error,response,body){
	    if (!error&& response.statusCode=200){
		    data=JSON.parse(body);
		    docs2console(data2docs(data));
		}
	});

};