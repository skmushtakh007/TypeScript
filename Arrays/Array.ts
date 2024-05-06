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

var num_arr:number[]=[10,20,30,40,50];

num_arr.forEach(
    (element,index)=>{

        console.log('Index is ==> ',index,'Element is ==>',element);

    }

)

/*  Output:
Index is ==>  0 Element is ==> 10
Index is ==>  1 Element is ==> 20
Index is ==>  2 Element is ==> 30
Index is ==>  3 Element is ==> 40
Index is ==>  4 Element is ==> 50
*/


let array:Array<string> = ['a','b','c'];
array.forEach((element,index)=>{
    console.log(`Element is ${element} and index is ${index}`)
})

/* Output
Element is a and index is 0
Element is b and index is 1
Element is c and index is 2 */


const both:Array<number | string>=[2,4,'a','k'];
console.log(both);

/* output 

[ 2, 4, 'a', 'k' ]

*/

var aa:any=[2,3,'9',false];
console.log(aa);

/* output
[ 2, 3, '9', false ]
*/