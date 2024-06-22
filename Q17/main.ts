let nam = ["arshad", "asif", "arif"];

//jo guest nahi aa rahy un ki list
let dontcome = nam [0];

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
let middileindex: number = Math.floor(nam.length /2);

//new guest ko middile main add karny ky liye middileindex veriable ko
//splice ki function ky sath likhain gy. 
nam.splice(middileindex, 0,"abdul Hadi");

//print message for new guest list
console.log("update guest list");

//for print message one by one with guests name use ForEach function
nam.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me.`));

//we are print a message to announce that we can invite only two guests.
console.log("The Bigger Dinning table would not arrive,so i can invite only two Guests now.");

//while ka function yaha use kre ge forEach ki jagga, kio ke forEach ka function aik aik kar ke tamam names ko print karta he,
//jab k while ka function ko app jo condition do ge wo utne hi names print kre ga sirf.
while(nam.length > 2){

    //yaha ham aik new variable bna rhe hn ta k while ko conditin de skein k kitne names ko print karna he.
    // aor pop ka function use kr rhe hn names ko aik aik kar ke remove karne k lye list me se.
    let removeGuest = nam.pop();

    //yaha hm msg print kr rhe hn tmam names ko aik aik kr ke remove ke variable ko use kar ke.
    console.log(`Sorry, ${removeGuest} you do not invited to dinner.`)
};

//msf print kr rhe hn 2 guests ke liye jinhe invite krna he.
console.log("Invitations to the last 2 Guests from the list.");

//forEach ka function use kr rhe hn ta ke aik aik kar ke dono guests ko invitation dya jae.
nam.forEach(Lasttwo => console.log(`Lucky ${Lasttwo}, you are still invited to dinner.`))

//pop() ka function 2 martaba use kare ge, ta ke list me se aakhri ye 2 guest bhi remove ho jaein aor list empty ho jae.
nam.pop();
nam.pop();

//msg print krein ge Empty List ka aor us ke sath guest ki list ke variable ka name likhein ge jo ke ab khali reh gai he.
console.log("Empty List", nam);