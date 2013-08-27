#!usr/bin/env node

/*Functional programming vs procedural*/

//1. Implementation : procedural


var log=console.log;
var n=5;
var out=[];

for (var i=0;i<n;i+=1){

    out.push(i*i);
}
log(out);

//2. Implementation 2: FUnctional Programming

/*functions as first class variables allows us to abstract out of the loop 
and the function applied within, such that we can swap in a nwe function 
or a new kind of iteration*/

var sq=function(x){return x*x;};
var cub=function(x){return x*x*x;};

var loop=function(n,fn){
    var out=[];
    for (var i=0 ; i<n;i+=1){
	out.push(fn(i));

    }
return out
};

var loopeven=function(n,fn){
    var out =[];
    for (vari=0;i<n;i++){
	if(i%2===0){
	    out.push(fn(i));
	}else{
	    out.push(i);
	}

    }
};

log (loop(n,sq));
log(loop(n,cub));
log(loopeven(n,sq));
log(loopeven(n,cub));

/*Implementation 3: Functional programmin g with underscorejs.org
Note the use of a map and range of methods.
range: generate an array of numbers between 0 and n
map: apply a function to a specified array*/

var uu=require('underscore');
log(uu.map(uu.range(0,n),sq));
log(uu.map(uu.range(0,n)cub));


