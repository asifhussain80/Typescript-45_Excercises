function make_great(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function array_magicians(magicians) {
    return magicians.map(function (name) { return "".concat(name, " is the great magician."); });
}
var show_magicians = ["Harry", "Michal", "George", "Wilson"];
var great_magicians = array_magicians(show_magicians);
make_great(great_magicians);
