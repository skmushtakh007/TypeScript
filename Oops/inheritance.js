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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "Function One";
    };
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "Function Two";
    };
    return class_two;
}(class_one));
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three.prototype.fun_three = function () {
        return "Function Three";
    };
    return class_three;
}(class_two));
var obj = new class_one();
console.log(" Class1 Instance Objectd ==>", obj.fun_one());
/*   Output
  Class1 Instance Objectd ==> Function One
*/
var obj1 = new class_two();
console.log(" Class2 Instance Objectd ==>", obj1.fun_one());
console.log(" Class2 Instance Objectd ==>", obj1.fun_two());
/*  Output
  Class2 Instance Objectd ==> Function One
  Class2 Instance Objectd ==> Function Two
*/
var obj2 = new class_three();
console.log(" Class3 Instance Objectd ==>", obj2.fun_one());
console.log(" Class3 Instance Objectd ==>", obj2.fun_two());
console.log(" Class3 Instance Objectd ==>", obj2.fun_three());
/*  Output
  Class3 Instance Objectd ==> Function One
  Class3 Instance Objectd ==> Function Two
  Class3 Instance Objectd ==> Function Three
*/ 
