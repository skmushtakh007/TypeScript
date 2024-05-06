/*

Inhertiance ==>

We can define clases with some functioanlity


Single Level Inheritance, Multi Level Inheritance 

Multiple Inheritance is not possible through Classes but its possible through Interfaces

extends is the keyword can be used to reuse the functionality


Order class ==> Order Functionality

Payment Class ==> Payment Functionality

Single Inheritance ==> One Class extends only one classes

*/

class class_one {
    public fun_one(): string {
        return "Function One";
    }
}

class class_two extends class_one {
    public fun_two(): string {
        return "Function Two";
    }
}

class class_three extends class_two {

    public fun_three(): string {
        return "Function Three";
    }

}
let obj: class_one = new class_one();
console.log(" Class1 Instance Objectd ==>", obj.fun_one());
/*   Output
  Class1 Instance Objectd ==> Function One
*/

let obj1: class_two = new class_two();
console.log(" Class2 Instance Objectd ==>", obj1.fun_one())
console.log(" Class2 Instance Objectd ==>", obj1.fun_two())
/*  Output
  Class2 Instance Objectd ==> Function One
  Class2 Instance Objectd ==> Function Two
*/


let obj2: class_three = new class_three();

console.log(" Class3 Instance Objectd ==>", obj2.fun_one())
console.log(" Class3 Instance Objectd ==>", obj2.fun_two())
console.log(" Class3 Instance Objectd ==>", obj2.fun_three())
/*  Output
  Class3 Instance Objectd ==> Function One
  Class3 Instance Objectd ==> Function Two
  Class3 Instance Objectd ==> Function Three 
*/