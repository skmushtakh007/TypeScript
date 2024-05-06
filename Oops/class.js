var main = /** @class */ (function () {
    function main() {
        this.name;
        this.age;
        this.dob;
    }
    main.prototype.Name = function () {
        return this.name;
    };
    main.prototype.Age = function () {
        return this.age;
    };
    main.prototype.Dob = function () {
        return this.dob;
    };
    return main;
}());
var obj = new main();
obj.name = "slam";
obj.age = 9;
obj.dob = 90;
console.log(obj.Name(), obj.Age(), obj.Dob());
