/*

Variables are used to store the any type of data

We have var key word in typescript to store any type of data

Syntax is : var <variablename>:datatype = value
                     or 
             var <variablename>=value;

*/

var var1:number=100;   //Here var1 is the variable name used to store number type
var var2:number=100.1234 //Float Value
var var3:number=0x123ABC; //HexaDecimal value
var var4:number=0o123; //Octal Sytem
var var5:number=0b1110000; //Binary System

console.log('Decimal Value ====>',var1);
console.log('Float Value===>',var2);
console.log('HexaDecimal Value ===>',var3);
console.log('Octal System Value ====>',var4);
console.log('Binary System Value ===>',var5);

/*

Output

Decimal Value ====> 100
Float Value===> 100.1234
HexaDecimal Value ===> 1194684
Octal System Value ====> 83
Binary System Value ===> 112

*/
