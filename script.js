var musica = document.querySelector("audio");

document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  var barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  var tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  var campoMinuto = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinuto + ":" + campoSegundos;
}

window.sr = ScrollReveal({ reset: true });

sr.reveal(".social-medias", {
  rotate: { x: 0, y: 85, z: 0 },
  duration: 2000,
});
sr.reveal("h2", {
  rotate: { x: 0, y: 85, z: 0 },
  duration: 2000,
});
sr.reveal(".duracao", {
  rotate: { x: 0, y: 85, z: 0 },
  duration: 2000,
});
sr.reveal(".img-la", {
  rotate: { x: 0, y: 85, z: 0 },
  duration: 2000,
});
sr.reveal(".mk", {
  rotate: { x: 0, y: 85, z: 0 },
  duration: 2000,
});
