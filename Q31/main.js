var Names = ["Arshad", "Asif", "Arif", "Saleem", "Admin"];
Names = [];
if (Names.length === 0) {
    console.log("Your Array is Empty we need to find some users.");
}
else {
    Names.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", Would you like to see status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", Thankyou for Logging in Again."));
        }
    });
}
