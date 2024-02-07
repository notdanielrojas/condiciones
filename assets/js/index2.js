const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

verificar.addEventListener("click", function () {
  const input1 = parseInt(document.getElementById("input-1").value);
  const input2 = parseInt(document.getElementById("input-2").value);
  const input3 = parseInt(document.getElementById("input-3").value);

  const total = input1 + input2 + input3;
  if (total > 10) {
    resultado.innerHTML = "Llevas demasiados stickers.";
  } else if (total >= 1 && total <= 10) {
    resultado.innerHTML = "Llevas " + total + " stickers.";
  } else {
    resultado.innerHTML = "No has seleccionado ningún sticker.";
  }
});

anterior.addEventListener("click", function () {
  window.location.href = "index.html";
});

siguiente.addEventListener("click", function () {
  window.location.href = "index3.html";
});
