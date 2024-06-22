import { log } from "console";

function makeAlbum(artistName:string, albumTitle:string, tracks?:number) {
    let Album : {artist : string, Title : string, tracks?:number}={
        artist: artistName,
        Title: albumTitle,
    }
    if(tracks !== undefined){
        Album.tracks=tracks;
    }
    return Album
}
let album1 = makeAlbum("Javed", "Album Number1")
let album2 = makeAlbum("Jamshed", "Album Number2")
let album3 = makeAlbum("Raju", "Album Number3",8)

console.log(album1);
console.log(album2);
console.log(album3);