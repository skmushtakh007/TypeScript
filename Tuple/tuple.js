/* Collection of heterogenious elements ==> any keyword is used

 We need a variable of type Array which contains different datatypes like number,string,boolean,sub array,
 JSON
 Tuple can have fixed number of elements
 Additional or fewer elements will result in a type error
 Error: Type '[number, string, boolean]' is not assignable to type '[number, string]'.
 myTuple = [10, "Hello", true];
 
*\



var tuple:[number,string,number,boolean]=[33,'s',33.9,false];
tuple.forEach((element,index)=>{
    console.log(`Element is ${element} and index is ${index}`);
})

/* output
Element is 33 and index is 0
Element is s and index is 1
Element is 33.9 and index is 2
Element is false and index is 3
*/
var tuple1 = ['a', true, 55, 33.3];
tuple1.forEach(function (element, index) {
    console.log("Element is ".concat(element, " and index is ").concat(index));
});
/*  output

Element is a and index is 0
Element is true and index is 1
Element is 55 and index is 2
Element is 33.3 and index is 3
*/ 
