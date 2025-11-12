criaCartao('Programação',
'O que é python?',
'O python é uma linguagem de programação')
criaCartao(
'Geografia',
'Qual a capital da França?',
'A capital da França é Paris')
criaCartao('Programaçao',
    'O que é uma função',
    'Uma funçao é um bloco de que codigo que executa alguma tarefa'
)criaCartao('lingua inglesa','Como se diz oi em inglês?','Oi em ingles é HI (RAI)')
let respostaEstaVisivel = false
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel 
    Cartao.classList.toggle('active',respostaEstaVisivel)}
    cartao.addEventListener("click", viraCartao)
container.appendChild(cartao)}