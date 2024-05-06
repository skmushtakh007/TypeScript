/*


Static Members ==> Can be Accessed Directly by class itself and they are class level.

We cant access static members through class objects

We cant initialize the static members by using constructor keyword


*/

class staticclass{
    static wish:string="Welcome to Static";

  /*  constructor(){
      this.wish="reinitialization";
    }
    */

    static getWish():string{
      return this.wish;
    }
}

console.log("DataMember ===" , staticclass.wish);
console.log("Member Function ===" , staticclass.getWish());

/* Output


DataMember === Welcome to Static
Member Function === Welcome to Static

*/
