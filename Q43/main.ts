function make_great(magicians:string[]){
magicians.forEach(name => console.log(name));
}
function array_magicians(magicians:string[]){
return magicians.map(name => `The Great ${name}`);
}
let magicians_name= ["Harry", "Mickal", "Wilson", "George"];

let magicians_Name_copy = magicians_name.slice()

let show_magicians = array_magicians(magicians_Name_copy)

make_great(show_magicians);
make_great(magicians_Name_copy);