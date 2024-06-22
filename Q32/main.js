var current_user = ["Arshad", "Asif", "Arif", "Saleem", "Raza"];
var new_user = ["Ubaid", "Umer", "Uzair", "asif", "raza"];
new_user.forEach(function (new_One) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase()
        === new_One.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_One, " is already taken!"));
    }
    else {
        console.log("This User name ".concat(new_One, " is available"));
    }
});
//used ok
/* let current_user = ["Arshad","Asif","Arif","Saleem"];
let new_user = ["Uzair","Huzaifa","Asif","Umer","Raza", "Saleem"];

new_user.forEach(new_one_user =>{
  let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase()
   === new_one_user.toLowerCase())
if(our_condition){
 console.log(`Sorry ${new_one_user} is already taken!`)}
else{console.log(`This user name ${new_one_user} is available`)}});*/ 
