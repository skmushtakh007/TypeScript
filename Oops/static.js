/*


Static Members ==> Can be Accessed Directly by class itself and they are class level.

We cant access static members through class objects

We cant initialize the static members by using constructor keyword


*/
var staticclass = /** @class */ (function () {
    function staticclass() {
    }
    /*  constructor(){
        this.wish="reinitialization";
      }
      */
    staticclass.getWish = function () {
        return this.wish;
    };
    staticclass.wish = "Welcome to Static";
    return staticclass;
}());
console.log("DataMember ===", staticclass.wish);
console.log("Member Function ===", staticclass.getWish());
/* Output


DataMember === Welcome to Static
Member Function === Welcome to Static

*/
