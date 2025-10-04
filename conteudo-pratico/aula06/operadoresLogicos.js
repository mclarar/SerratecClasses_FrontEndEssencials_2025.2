// AND - &&
// OR - ||
// NOT -!

// 1. AND - &&
//retorna true se todas as expressões forem verdadeiras

const a = 10;
const b = 20;

if (a > 5 && b > 10) {
  console.log("ambas as condições são verdadeiras");
} else {
  console.log("Pelo menos uma das condições é falsa");
}

// 2. OR - ||
//retorna true se pelo menos uma das expressões forem verdadeiras

const temperatura = 30;

if (temperatura < 15 || temperatura > 25) {
  console.log("o dia está muito frio ou muito quente");
} else {
  console.log("o dia está agradável");
}

// 3. NOT - !
//inverte o valor lógico de uma expressão

let lojaAberta = true;

if (!lojaAberta) {
  console.log("A loja está fechada");
} else {
  console.log("A loja está aberta");
}
//----------------------------------------

let cor = "red";

switch (cor) {
  case "red":
    console.log("a cor é vermelho");
    break;
  case "blue":
    console.log("a cor é azul");
  case "yellow":
    console.log("a cor é amarelo");
    break;
  default:
    console.log("a cor é desconhecida");
}

//----------------------------------------

if (idade >= 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}

let idade = 16;
let verificIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(verificIdade);

//ternário (maneira alternativa e mais curta de escrever uma condicional if/else)
