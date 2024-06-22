let Guest = ["Arshad", "Asif", "Arif"];
let dntcm = Guest[0];
console.log(dntcm,"Nahi A sakte hn.");
Guest.splice(0, 1, "Saleem");
Guest.forEach(List => console.log(`Salam ${List}, "Would you Like to Dinner with me?`));  