function make_great(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function array_magicians(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Harry", "Mickal", "Wilson", "George"];
var magicians_Name_copy = magicians_name.slice();
var show_magicians = array_magicians(magicians_Name_copy);
make_great(show_magicians);
make_great(magicians_Name_copy);
