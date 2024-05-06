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
/*


Polymorphism ==> Customization of Class

OverLoading and OverRiding ==> Polymorphism


*/
console.log("====Method Overloading====");
var class1 = /** @class */ (function () {
    function class1() {
    }
    class1.prototype.my_func = function (arg1, arg2) {
        console.log("Arguement1 ===> ", arg1);
        console.log("Arguement2 ==> ", arg2);
    };
    return class1;
}());
//We can Also create an object in different way
new class1().my_func("Without Object", "Class Execution");
new class1().my_func(30, 50);
new class1().my_func(true, false);
/*

Arguement1 ===>  Without Object
Arguement2 ==>  Class Execution
Arguement1 ===>  30
Arguement2 ==>  50
Arguement1 ===>  true
Arguement2 ==>  false

*/
/*
var obj:class1=new class1();
obj.my_func(10,20);   //Two Numbers


var obj1:class1=new class1();
obj1.my_func("Ashok","IT"); //Two Strings

var obj3:class1=new class1();

obj3.my_func(true,false); //Two Booleans





Arguement1 ===>  10
Arguement2 ==>  20
Arguement1 ===>  Ashok
Arguement2 ==>  IT
Arguement1 ===>  true
Arguement2 ==>  false

*/
console.log("====Method Overriding====");
/*
Method Overriding:

*/
/*


OverRiding ==> Already some functionality will be there at parent level, but i want to customize this


Car Class ==> Engine, Dash Board, Seats, Mats, AC

Maruti Class ==> Need to use the same Engine for Car Class

super key word is used to access parent class functionality in child class
*/
var class11 = /** @class */ (function () {
    function class11() {
    }
    class11.prototype.dbFunc = function () {
        return "MYSQL Database is Conneted";
    };
    return class11;
}());
var class12 = /** @class */ (function (_super) {
    __extends(class12, _super);
    function class12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class12.prototype.dbFunc = function () {
        return "MONGO DB is Connected";
    };
    return class12;
}(class11));
var class13 = /** @class */ (function (_super) {
    __extends(class13, _super);
    function class13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class13.prototype.dbFunc = function () {
        return _super.prototype.dbFunc.call(this); // Accessing class1 Functionality in Class3
    };
    return class13;
}(class12));
console.log(new class11().dbFunc()); // This will Point to MY SQL
console.log(new class12().dbFunc()); //This will point to MONGO DB
console.log(new class13().dbFunc()); // This will Point to MY SQL ==> We used Super Keyword
/*
Output
MYSQL Database is Conneted
MONGO DB is Connected
MYSQL Database is Conneted

*/
