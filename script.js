// Criamos variaveis para podermos interagir com o html
const nomeCapitulo = document.getElementById("capitulo")
const audio = document.getElementById("audio-capitulo")
const botaoPlayPause = document.getElementById("play-pause")
const botaoProximoCapitulo = document.getElementById("proximo")
const botaoCapituloAnterior = document.getElementById("anterior")

const quantidadeCapitulos = 10
let taTocando = false
let capitulo = 1

function tocarFaixa() {
  // Troca a aparencia do botao
  botaoPlayPause.classList.remove("bi-play-circle-fill")
  botaoPlayPause.classList.add("bi-pause-circle-fill")

  // .play ja que operamos um audio, js ja sabe que é para começar a tocar
  audio.play()
  taTocando = true
}

function pausarFaixa() {
  // Troca a aparencia do botao
  botaoPlayPause.classList.add("bi-play-circle-fill")
  botaoPlayPause.classList.remove("bi-pause-circle-fill")

  // .pause ja que operamos um audio, js ja sabe que é para começar a tocar
  audio.pause()
  taTocando = false
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa()
  } else {
    tocarFaixa()
  }
}

function capituloAnterior() {
  if (capitulo === 1) {
    capitulo = quantidadeCapitulos
  } else {
    capitulo -= 1
  }
  // Passa o link do audio para o html
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3"
  // Troca o nome do capitulo no html
  nomeCapitulo.innerText = "Capítulo " + capitulo
  tocarFaixa()
}

function proximoCapitulo() {
  if (capitulo < quantidadeCapitulos) {
    capitulo += 1
  } else {
    capitulo = 1
  }
  // Passa o link do audio para o html
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3"
  // Troca o nome do capitulo no html
  nomeCapitulo.innerText = "Capítulo " + capitulo
  tocarFaixa()
}

// Adiciona eventos ao clicar
botaoPlayPause.addEventListener("click", tocarOuPausarFaixa)
//botaoPlayPause.onclick(tocarFaixa)
botaoCapituloAnterior.addEventListener("click", capituloAnterior)
//botaoCapituloAnterior.onclick(capituloAnterior)
botaoProximoCapitulo.addEventListener("click", proximoCapitulo)
//botaoProximoCapitulo.onclick(proximoCapitulo)

// Quando o audio acabar (evento "ended") chama a proxima faixa
audio.addEventListener("ended", proximoCapitulo)
