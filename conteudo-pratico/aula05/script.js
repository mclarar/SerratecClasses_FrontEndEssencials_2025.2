const botao = document.getElementById('button');

const titulo = document.getElementById('title');


botao.addEventListener('click', ()=>{
    titulo.textContent = 'JavaScript';
    titulo.style.color = 'purple'; 
});


// DOM - arvore de elementos html que o navegador cria
// para "mapear" a tela
// o DOM funciona como uma ponte entre o código e a página

// é atraves do DOM que o JS interage com o html
// - como ele faz isso? pela palavra chave 'document'

