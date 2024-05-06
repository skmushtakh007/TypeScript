/*

We will use string datatype which is used to store string values


*/
var tech_one = "Angular";
var tech_two = "Spring Boot";
var tech_three = "Oracle";
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
var web_tech = "".concat(tech_one, " <===> ").concat(tech_two, " <===> ").concat(tech_three);
//console.log('Web Application Stack ', web_tech);
//Output ==> Web Application Stack  Angular <===> Spring Boot <===> Oracle
//select * from employee where sal>10000;
var table_name = 'employee';
var column_name = 'sal';
var salValue = '10000';
var sql_query = " select * from ".concat(table_name, "  where ").concat(column_name, " > ").concat(salValue, " ");
console.log(sql_query);
//Output ==> select * from employee  where sal > 10000
// ===String Array===
var str_arr = ['Angular', 'SpringBoot', 'MySQL'];
str_arr.forEach(function (element, index) {
    console.log('Index is ==> ', index, 'Element is ==>', element);
});
/*
Output:

Index is ==>  0 Element is ==> Angular
Index is ==>  1 Element is ==> SpringBoot
Index is ==>  2 Element is ==> MySQL

*/ 
