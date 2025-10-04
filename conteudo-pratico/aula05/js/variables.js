// três maneiras de instanciar uma variável no js
//ES6

var nome = "Maria"; //globaL
console.log(nome);
var nome = "Pedro";

// usando a palavra chave 'var' para instanciar uma variavel não é muito recomendado,
// apesar de possível, pois ela é instanciada globalmente, ou seja, todo o meu código tem acesso
//além do seu valor poder ser alterado

function printPhone() {
   //ela vai existir onde vc instanciar dentro de um escopo
   let telefone = "9982315231";
   telefone = "0000000";
   console.log(telefone);
}

console.log(telefone); // erro de console pois a variavel não existe, ela não foi definida

printPhone(); //chamada da função

function printIdade() {
   const idade = "18";
//    idade ='20'; // erro pois não pode mudar uma variavel declarada como const
   console.log(idade);
}

console.log(idade); // erro de console pois a variavel não existe, ela não foi definida

printIdade(); //chamada da função

//tipo de dados
//string
let nome = 'João';
//number
let idade = 18;
//boleano/boolean
let estaCalor = true;
//undefined
let variavelIndefinida;