#!/usr/bin/env node

   //regExp examples, is an object used to specify regular expressions
   //1. Test of presence

var ex1="The quick brown box jumped over the carzy dogs";
var re1=/(cr|l)azy/;// this is one way to declare a RegExp object
var log=console.log;
log(re1.test(ex1));
log(re1.exec(ex1));

var ex2="Alpha Beta Gamma Epsilon Omicron Phi";
var re2=/(\w+a)/;
var re2g=/(\w+a)/g;

re2.exec(ex2);
re2.exec(ex2);// this will give me the same result, looking for the word where "a" is;

re2g.exec(ex2);
re2g.exec(ex2);
re2g.exec(ex2);// this will give me different results as it iterates from first to last word

// we can formalize the proccess of iterating through the matches till we hit a null with the following function

var allmatches=function(rex,str){
    var matches =[]; // empty array
    var match;

    while (true){
	match=rex.exec(str);
	if(match !==null){
	    matches.push(match);
	}else{
	    break;
	}
    }

    return matches;
};

allmatches(re2g,ex2);

// 3 Case sensitive

var ex3="Jhon is here";
var re3s=/JHON/;//this is with case sensitive
var re3i=/JHON/i;// this is without case sensitive

re3s.test(ex3);// false
re3i.test(ex3);//true

//4 Multiple line

var ex4="Alpha Beta Gamma. \n All the king's men.\n Germany France Italy ";
var re4s=/~G/;
var re4m=/~G/m;

re4s.test(ex4);//false
re4m.test(ex4);//true

//5. Parsing Postgres urls

var pgurl="postgres://myuser:mypass@example.com:5432/mydbpass";
var pgregex=/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;// mirar documentacion de regEx
var flag=pgregex.test(pgurl);
var out=pgregex.exec(pgurl);

//6. Parsing postgres URLs in a function(mor advanced)
/* Here, we use the object and zip methods form underscore.js to organize the regex-parsed fields in a nice , easy to use data structure*/
var uu=require('underscore');
var parsedburl=function(dburl){
    var debregex=/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
    var out=debregex.exec(dburl);
    var fields=['protocol','user','pass','host','port','dbpass'];
    return uu.object(fields,out.slice(1,out.length));
};

log(parsedburl(pgurl));

log(parsedburl(pgurl).protocol);