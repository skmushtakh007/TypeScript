//export {}
/*

Array ==> A variable can store more than one value

Number Array can store more than one number

String Array can store more than one string

Syntax for creating Number Array

var <variablename>:number[]=[<value1>,<value2>,<value3>....]

                   (or)

var <variablename>:Array<number>=[<value1>,<value2>,<value3>....]


Foreach same in javascript also same exists for typescript which is used to iterate the array
or any collection data structure
*/
var num_arr = [10, 20, 30, 40, 50];
num_arr.forEach(function (element, index) {
    console.log('Index is ==> ', index, 'Element is ==>', element);
});
/*  Output:
Index is ==>  0 Element is ==> 10
Index is ==>  1 Element is ==> 20
Index is ==>  2 Element is ==> 30
Index is ==>  3 Element is ==> 40
Index is ==>  4 Element is ==> 50
*/
var array = ['a', 'b', 'c'];
array.forEach(function (element, index) {
    console.log("Element is ".concat(element, " and index is ").concat(index));
});
/* Output
Element is a and index is 0
Element is b and index is 1
Element is c and index is 2 */
var both = [2, 4, 'a', 'k'];
console.log(both);
/* output

[ 2, 4, 'a', 'k' ]

*/
var aa = [2, 3, '9', false];
console.log(aa);
/* output
[ 2, 3, '9', false ]
*/ 
