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
jogo.style.display = 'none'
gif.style.display = 'none'

function add() {
    if (nome1.value && nome2.value) {
        item1.innerText = 'Jogador 1: ' + (nome1).value
        item2.innerText = 'Jogador 2: ' + (nome2).value
        div.appendChild(item1)
        div.appendChild(item2)
        div.appendChild(botao)
    } else {
        alert('Digite os nomes dos jogadores!')
    }
}

function jogar() {
    divPai.style.display = 'none';
    jogo.style.display = 'block'
}
let soma1 = 0
var contador = 0
var jogadorAtual = nome2.value

function somar(valor) {
    contador++
    let vencedor
    if (contador % 2 == 0) {
        vencedor = nome2.value

    } else {
        vencedor = nome1.value
    }

    function somar(valor) {
        let soma = 0
        if (soma < 21) {
            let a = document.getElementById('valorAtual').innerHTML = soma = +valor
        }
    }

    soma1 += valor
    switch (soma1) {
        case 19:
            btn3.setAttribute("disabled", 'true');
            break;
        case 20:
            btn2.setAttribute("disabled", 'true')
            btn3.setAttribute("disabled", 'true')
    }
    
}