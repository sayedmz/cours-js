let book = "video";
let video = "book";
//1ere methode
// // save book value in x
// let x = book;
// console.log(x); //video

// //change video value

// book = video;
// console.log(book); //book

// //change video value

// video = x;
// console.log(video); //video

// 2eme methode

[book, video] = [video, book];
console.log(book); //book
console.log(video); //video
