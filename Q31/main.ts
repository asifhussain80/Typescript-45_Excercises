let Names = ["Arshad","Asif","Arif","Saleem","Admin"];
Names=[]

if(Names.length === 0){
    console.log("Your Array is Empty we need to find some users.")
}
else{Names.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, Would you like to see status report?`)
    }
    else{console.log(`Hello ${oneuser}, Thankyou for Logging in Again.`)}})}