"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artistName, albumTitle, tracks) {
    var Album = {
        artist: artistName,
        Title: albumTitle,
    };
    if (tracks !== undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
var album1 = makeAlbum("Javed", "Album Number1");
var album2 = makeAlbum("Jamshed", "Album Number2");
var album3 = makeAlbum("Raju", "Album Number3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
