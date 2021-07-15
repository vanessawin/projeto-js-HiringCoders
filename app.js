const livros = require('./database')// importando meus livros do database para app.js
//console.log(livros)

//pegar o input da pessoa usuaria, se ela quer escolher um livro por categoria 

const readiline = require("readline-sync") // nome da biblioteca require("readline-sync")
// agora da para acessar tudo que a biblioteca disponibiliza à partir da const readiline

const entradaInicial = readiline.question("Deseja buscar um livro?S/N")// Essa propriedade question é nativa readline-sync ela serve para fazer pergunta
//para receber a entrada da pessoa usuaria










