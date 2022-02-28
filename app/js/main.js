//import Board from "../board/board"

var fs = require('fs');

fs.readFile('D:/Proyectos/WordleJS/wordle/app/words.txt', 'utf8', function(err, data){
    if (err) {
        return console.log(err);
    }
    let lista = data.split(" ")
    console.log(lista)
});