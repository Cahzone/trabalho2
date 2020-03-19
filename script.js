let divPai = document.getElementById('pai')
let div = document.getElementById('teste')
let gif = document.getElementById('gif')
let jogo = document.getElementById('jogo')
divPai.appendChild(div)
let btn1 = document.getElementById('botao1')
let btn2 = document.getElementById('botao2')
let btn3 = document.getElementById('botao3')
let nome1 = document.getElementById('jogador1')
let nome2 = document.getElementById('jogador2')
let item1 = document.createElement('p')
let item2 = document.createElement('p')
let lista = document.getElementById('lista')
let botao = document.createElement('button')
botao.setAttribute('class', 'btn btn-primary')
botao.innerText = 'Jogar!'
botao.onclick = function() {
    jogar()
}
