# projeto-js-HiringCoders

* Crie uma pasta 
* Crie 2 arquivos chamados app.js e database.js
* Dentro do arquivo database.js crie um array de objetos chamado livros digite o comando modules.exports = livros =>(nome do array de obijetos que criamos)
```
const livros = [
    {
        id: 1,
        nome: "A Cabana",
        autor: "William P. Young",
        categoria: "Ficção",
        paginas: 240,
        recomenda: true,
        leu: false
    },
        {
        id: 1,
        nome: "A Cabana",
        autor: "William P. Young",
        categoria: "Ficção",
        paginas: 240,
        recomenda: true,
        leu: false
    }
 ] 
```
O node js nos possibilia a exportar nossos arquivos js, vamos exportar nosso arquivo js.

* Dentro do  arquivo database.js depois do array de objetos chamado livro digite os seguintes comandos   ``` modulo.expres = livros```

```
const livros = [
    {
        id: 1,
        nome: "A Cabana",
        autor: "William P. Young",
        categoria: "Ficção",
        paginas: 240,
        recomenda: true,
        leu: false
    },
    {
        id: 2,
        nome: "Pai Rico, Pai Pobre",
        autor: "Robert Kyosaki",
        categoria: "Finanças",
        paginas: 153,
        recomenda: true,
        leu: true
    },
    {
        id: 3,
        nome: "O Monge e o Executivo",
        autor: "James C. Hunter",
        categoria: "Liderança",
        paginas: 144,
        recomenda: true,
        leu: true
    },
    {
        id: 4,
        nome: "Javascript e Jquery: desenvolvimento de interfaces web interativas",
        autor: "Jon Duckett",
        categoria: "Programação",
        paginas: "640",
        recomenda: true,
        leu: false
    },
    {
        id: 5,
        nome: "HTML e CSS: projete e constura websites",
        autor: "Jon Duckett",
        categoria: "Programação",
        paginas: 512,
        recomenda: true,
        leu: false
    },
    {
        id: 6,
        nome: "Geração de valor",
        autor: "Flávio Augusto da Silva",
        categoria: "Finanças",
        paginas: 208,
        recomenda: true,
        leu: true
    }
]

module.exports = livros
```

* Vamos iniciar um projeto node no terminal: abra o terminal e  vai até a pasta do nosso prejeto chamado projeto-js-HiringCoders e digite o comando ``` npm init -y ``` esse comando cria um packag.json no nosso projeto que vem com algumas informações do nosso projeto

![im](img/img1.png)

* Altere a linha 7 do package.json colocando o start e dentro da string passe o comando node e o nome do arquivo que quero que o node de o start 
``` 
"start": "node app.js 
```
![im](img/img2.png)



* No terminal na parte do seu projeto instale uma dependencia/biblioteca,  ela permite que receba uma "entrada de pessoas usuarias" digite o comando 
```
npm i readline-sync
```

* lembra do array de objetos que  exportamos quando o nós digitamos o comando module.exports = livros ?

* Agora vamos importar ele dentro do nosso arquivo app.js criando uma variavel  livros e digite os seguites comandos
``` const livros = require('./database) ``` digite ``` console.log(livros) ```eles ja vão estar disponiveis nesse arquivo. Agora vamos no terminal digitar ```npm start ``` vai aparecer no terminal o nosso array de objetos, isso que dizer que ja pode usar os dados à partir do arquivo app.js

![im](./img/ima3.png)

