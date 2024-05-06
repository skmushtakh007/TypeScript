/*


Typescript is a Object Oriented Programming Language which has all the features
Related to Object Oriented Programming like classes,Abstraction,Inheritance,Polymorphism,
OverRiding, OverLoading,Interfaces,Abstract Classes


Class ==> Collection of DataMembers and Member functions 


We can create a class using "class " keyword

we can define a constructor using "constructor" keyword

Constructor is Member function which will automcatically called when object is created to the class

"new " is the keyword to create object to the class

We can use private Access specifiers recommonded for class

*/


class One {

    private uiTech: string;
    private backEndTech: string;
    private db: string;

    constructor() {
        this.uiTech = "Angular";
        this.backEndTech = "Spring Boot";
        this.db = "Mysql";
    }


    public getUiTech(): string {
        return this.uiTech;
    }


    public getBackEndTech(): string {
        return this.backEndTech;
    }


    public getDb(): string {
        return this.db;
    }

}


var obj: One = new One(); //obj is an object to the class1
console.log("UI Technology ===> ", obj.getUiTech())
console.log("BackEnd Technology ===> ", obj.getBackEndTech())
console.log("Database ==>", obj.getDb());

/*
Output

UI Technology ===>  Angular
BackEnd Technology ===>  Spring Boot
Database ==> Mysql

*/


class Two {

    constructor(public arg1: string,
        public arg2: string,
        public arg3: string) {

    }

}

let obj1: Two = new Two("Angular", "Spring Boot", "Mysql");

console.log(obj1.arg1, obj1.arg2, obj1.arg3);

let obj2: Two = new Two("React", "Dotnet Web Api", "SQL Server");

console.log(obj2.arg1, obj2.arg2, obj2.arg3);

let obj3: Two = new Two("VueJS", "Php", "NO SQL");

console.log(obj3.arg1, obj3.arg2, obj3.arg3);


/*
 
Output
 
Angular Spring Boot Mysql
React Dotnet Web Api SQL Server
VueJS Php NO SQL
 
*/

