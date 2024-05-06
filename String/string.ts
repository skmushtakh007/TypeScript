/*

We will use string datatype which is used to store string values


*/

var tech_one:string="Angular";
var tech_two:string="Spring Boot";
var tech_three:string="Oracle";

/*
console.log('Front End Technology',tech_one);
console.log('BackEnd Technology',tech_two);
console.log('Database Technology',tech_three);

Output

Front End Technology Angular
BackEnd Technology Spring Boot
Database Technology Oracle

*/

// We want to create a string ==> " Angular <====> SpringBoot <====> Oracle";

//When we are doing dynamic string ==> we need to take one special symbole ` ` (BackTick)

var web_tech:string=`${tech_one} <===> ${tech_two} <===> ${tech_three}`
//console.log('Web Application Stack ', web_tech);

//Output ==> Web Application Stack  Angular <===> Spring Boot <===> Oracle


//select * from employee where sal>10000;

var table_name:string='employee';
var column_name:string='sal';
var salValue:string='10000';

var sql_query:string=` select * from ${table_name}  where ${column_name} > ${salValue} `;
console.log(sql_query);
//Output ==> select * from employee  where sal > 10000



// ===String Array===
var str_arr:string[]=['Angular','SpringBoot','MySQL'];
str_arr.forEach(
    (element,index)=>{
        console.log('Index is ==> ',index,'Element is ==>',element);
    }
)

/*
Output:

Index is ==>  0 Element is ==> Angular
Index is ==>  1 Element is ==> SpringBoot
Index is ==>  2 Element is ==> MySQL

*/