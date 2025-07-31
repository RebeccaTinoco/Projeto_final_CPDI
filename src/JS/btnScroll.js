

const botaoFixo = document.getElementById("botao-fixo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoFixo.style.display = "block";
  } else {
    botaoFixo.style.display = "none";
  }
});

