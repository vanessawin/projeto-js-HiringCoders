const livros = require('./database')// importando meus livros do database para app.js
console.log(livros)

//pegar o input da pessoa usuaria, se ela quer escolher um livro por categoria 
//Verificar a capitura do input da entrandaInicial
//Se for Sim, mostra as categorias disponiveis, e pergunta qual categoria ela escolhe
//Se for Não, mostra todos os livros em ordem crescente pela quantidade de paginas

const readline = require('readline-sync') // nome da biblioteca require("readline-sync")
// agora da para acessar tudo que a biblioteca disponibiliza à partir da const readiline

const entradaInicial = readline.question("Deseja buscar um livro? S/N ")// Essa propriedade question é nativa readline-sync ela serve para fazer pergunta
//para receber a entrada da pessoa usuaria

//Verificar a capitura do input da entrandaInicial
//Se for Não, mostra todos os livros em ordem crescente pela quantidade de paginas

//Se for Sim, mostra as categorias disponiveis, e pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === "S") { // Se a pessoa digitar um s minusculo fazer a transformaçao toUpperCase() === "S"
    console.log("Essas são as categorias disponiveis: ")
    console.log("Ficção","/Finanças","/Liderança","/Prgramação")

    const entradadaCategoria = readline.question("Qual categoria voce escolhe:")
    const retorno = livros.filter(livro => livro.categoria === entradadaCategoria)
    console.log(retorno)
}
