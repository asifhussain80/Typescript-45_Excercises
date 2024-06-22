let current_user = ["Arshad", "Asif", "Arif", "Saleem", "Raza"];
let new_user = ["Ubaid", "Umer", "Uzair", "asif", "raza"];

new_user.forEach(new_One =>{
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase()
    === new_One.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_One} is already taken!`)}
    else{console.log(`This User name ${new_One} is available`)}});

//used ok
   /* let current_user = ["Arshad","Asif","Arif","Saleem"];
let new_user = ["Uzair","Huzaifa","Asif","Umer","Raza", "Saleem"];

new_user.forEach(new_one_user =>{
     let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase()
      === new_one_user.toLowerCase())
if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)}
else{console.log(`This user name ${new_one_user} is available`)}});*/