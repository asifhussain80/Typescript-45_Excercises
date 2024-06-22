let mobile = "mobile"
console.log("mobile is Equal to mobile");
console.log(mobile == "mobile");

console.log("\nmobile is not equal to mobile");
console.log(mobile != mobile);

let uppc = "mobile"
console.log("\nmobile is equal to mobile after converting uppercase");
console.log(mobile.toUpperCase() == "mobile");
//console.log("\nmobile is not equal to mobile after converting uppercase");
//console.log(mobile.toUpperCase() != "mobile");
//console.log("\nmobile is equal to mobile after converting uppercase");
//console.log(uppc.toUpperCase() == "mobile");
console.log("\nmobile is not equal to mobile after converting uppercase");
console.log(uppc.toUpperCase() != "mobile");

let num1 = 7;
let num2 = 12;

console.log("\nSeven is Equal to 7");
console.log(num1 == 7);

console.log("\nSeven is not equal to 7.");
console.log(num1 != 7);

console.log("\nTwenty is Greater than Seven.");
console.log(num2 > num1);

console.log("\nTwenty is less Seven.");
console.log(num2 < num1);

console.log("\nTwenty is Greater than or equal to Seven");
console.log(num2 > num1 || num2 == num1);

console.log("\nTwenty is less than Seven or equal to Seven");
console.log(num2 < num1 || num2 == num1);

console.log("\nSeven is less than Twenty and equal to twenty.");
console.log(num1 < num2 && num1 == num2);

let transport = ["Car", "Bus", "Cycle", "train"];
console.log("\nis train is include in array?");
console.log(transport.includes ("train"));

console.log("\nis train is not include in array?");
console.log(!transport.includes ("train"));