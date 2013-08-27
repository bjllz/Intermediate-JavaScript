#!/usr/bin/node

    var log = console.log;
var sx1="the queick brown jumped over the lazy dogs";
sx1.charAt(10);
sx1.slice(10,13);
sx1.substring(10,13);
sx1.substr(10,13);
sx1.length;


//2. Compare 2 strings using alphabetcal order 

var sx2="alpha";
var sx3="beta";
log(sx2<sx3);//true

//3. Replace substrings via String or RegEx

var sx4=sx2.replace('ph','foo');
log(sx2);
log(sx4);

var sx5=sx2.replace(/a$/,'bar');//NOTE regex
log(sx2);
log(sx5);

//4. Change case

log(sx2.toUpperCase());

//5. Trim Strings

var sx6=" "+['field1','field2','field3'].join("\t") + "\n";
var sx7= sx6.trimRight();// it cuts off a piece from right
var sx8= sx6.trimLeft();
var sx9= sx6.trim();

log(sx6);
log(sx7);
log(sx8);
log(sx9);

//6. Split strings

var fields=sx9.split("\t");
log(fields);