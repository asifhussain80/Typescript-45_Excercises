var Guest = ["Arshad", "Asif", "Arif"];
var dntcm = Guest[0 - 1];
console.log(dntcm, "Nahi A sakte hn.");
Guest.splice(0, 1, "Saleem");
Guest.forEach(function (List) { return console.log("Salam ".concat(List, ", \"Would you Like to Dinner with me?")); });
