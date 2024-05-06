/*
In interface all are abstract methods ==> No implementation
If we have some partial implementation ==> Abstract Class
we can create abstract class using abstract keyword
implementations to be provided in child classes
*/

abstract class One{
    public fun_one():string{
        return "Functione One";
    }
    abstract fun_two():string; //Abstract Method
}
class Two extends One{
    fun_two(): string {
       return "Function Two";
    }
}
let object:Two=new Two();
console.log(object.fun_one());
console.log(object.fun_two());