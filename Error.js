#!/usr/bin/env node

   /*The ERROR object is used for exception handling*/

   //error examples

    var log=console.log;
Object.getOwnPropertyNames(Error);

var div=function(a,b){
    try{
	if(b===0){
	    throw new Error("Divided by Zero");
	}else{
	    return a/b;
	}
    }catch(e){
	log('name\n%s\nmessage\n%s\n\nstack\n%s',e.name,e.message,e.stack);
    }
};

//log(div(10,0));

//3.Returnung an Error object directly

var div2=function(a,b){

    if(b===0){
	return new Error("Divided by zero");
    }else{
	return a/b;
    }

};

var err=div2(3,0);
//log(err.stack);

//4.Using custom Error types

var Email=function(emstr){

    var regex=/([^@]+)@([^\.]+)\.([^\.]+)/;// try using existing regex as they are very complex

    if(regex.test(emstr)){
	var match=regex.exec(emstr);
	this.usr=match[1];
	this.domain=match[2];
	this.tld=match[3];
	this.valueOf=function(){
	    return this.value;
	};

	this.toString=function(){
	    return this.usr+"@"+this.domain+'.'+this.tld;
	};
    }else{
	  throw new EmailFormatException(emstr);// I use the word new because it is a class
    }
    
};

/*There are no classes in JavaScript, but functions can be used as classes , using 'this' and using the 'new' word when instantiating them*/

var EmailFormatException = function(value){

    this.value=value;
    this.message="not in a@b.c form";
    this.toString=function(){
	return this.value+ this.message;

    };
};

    var EMAIL_INVALID=-1;
    var EMAIL_UNCKNOWN_ERROR=-2;


    var parseEmail=function(instr){
	try{
	    em= new Email(instr)
	}catch(e){
	    if(e instanceof EmailFormatException){
		return EMAIL_INVALID;
	    }else{
		return EMAIL_UNCKNOWN_ERROR;
	    }

	}
	return em;

    };

log(parseEmail('byron@gmail.com'));// this will return me a JS object

