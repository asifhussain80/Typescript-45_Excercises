var nam = ["arshad", "asif", "arif"];
//jo guest nahi aa rahy un ki list
var dontcome = nam[0];
//message print jo nahi aa rjy un k liye
console.log(dontcome, "nahi aa sakty.");
//guest ko index main add or remove karny liye splice ka function use hota hy. 
nam.splice(0, 1, "arshad");
//message print for coming guests
console.log("Good News!We Have Found Bigger Table For Dinner");
//new gust adding in start of index by using of unshift function
nam.unshift("zain");
//new gueat adding in end of index by using of push function
nam.push("faizan");
//new guest middile main add karny ky liye type script main koi builtin function nahi 
//hy es liye ed ki veriable or math.floor ko use kar k banain gy
var middileindex = Math.floor(nam.length / 2);
//new guest ko middile main add karny ky liye middileindex veriable ko
//splice ki function ky sath likhain gy. 
nam.splice(middileindex, 0, "abdul Hadi");
//print message for new guest list
console.log("update guest list");
//for print message one by one with guests name use ForEach function
nam.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me.")); });
console.log("The Bigger Dinning table would not arrive,so i can invite only two Guests now.");
while (nam.length > 2) {
    var removeGuest = nam.pop();
    console.log("Sorry, ".concat(removeGuest, " you do not invited to dinner."));
}
;
console.log("Invitations to the last 2 Guests from the list.");
nam.forEach(function (Lasttwo) { return console.log("Lucky ".concat(Lasttwo, ", you are still invited to dinner.")); });
nam.pop();
nam.pop();
console.log("Empty List", nam);
