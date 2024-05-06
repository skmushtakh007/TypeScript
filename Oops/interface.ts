//Achieving Inheritance Throuh interfaces
//Single Level Inheritance

interface uiInterface{
    tech_one:string;
}


interface backEndInterface extends uiInterface{
    tech_two:string;

}

interface databaseInterface extends backEndInterface{
    tech_three:string;
}


interface fullstackInterface extends uiInterface,backEndInterface,databaseInterface{
    data_format:string;
}

let obj:backEndInterface={
    tech_one:"Angular",
    tech_two:"SpringBoot"
}

let obj1:backEndInterface={
    tech_one:"React",
    tech_two:"Dotnet Web API"
}

let techObj:databaseInterface={
    tech_one:"C#",
    tech_two:"Delphi",
    tech_three:"DB2"
}


let fullstack_obj:fullstackInterface={
    tech_one:"Angular",
    tech_two:"SpringBoot",
    tech_three:"MySql",
    data_format:"JSON"

}


/* Output

console.log("Ui Tech Variable",obj.tech_one);
console.log("Back End Tech Variable",obj.tech_two);


console.log("Ui Tech Variable",obj1.tech_one);
console.log("Back End Tech Variable",obj1.tech_two);




Ui Tech Variable Angular
Back End Tech Variable SpringBoot
Ui Tech Variable React
Back End Tech Variable Dotnet Web API




console.log("Ui Tech Variable",techObj.tech_one);
console.log("Back End Tech Variable",techObj.tech_two);
console.log("DataBase Tech Variable",techObj.tech_three);

 Output

Ui Tech Variable C#
Back End Tech Variable Delphi
DataBase Tech Variable DB2

*/







console.log("Ui Tech Variable",fullstack_obj.tech_one);
console.log("Back End Tech Variable",fullstack_obj.tech_two);
console.log("DataBase Tech Variable",fullstack_obj.tech_three);
console.log("Data Format",fullstack_obj.data_format);

/* output

Ui Tech Variable Angular
Back End Tech Variable SpringBoot
DataBase Tech Variable MySql
Data Format JSON

*/