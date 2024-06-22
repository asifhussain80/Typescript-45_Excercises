function make_great(magicians:string[]){
magicians.forEach(name =>console.log(name));
}
function array_magicians(magicians:string[]){
return magicians.map(name=> `${name} is the great magician.`);
}

let show_magicians=["Harry", "Michal", "George", "Wilson"];

let great_magicians = array_magicians(show_magicians);
make_great(great_magicians);