const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

verificar.addEventListener("click", function () {
  const select1 = document.getElementById("value-1").value;
  const select2 = document.getElementById("value-2").value;
  const select3 = document.getElementById("value-3").value;

  const password = select1 + select2 + select3;

  if (password === "911") {
    resultado.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    resultado.innerHTML = "Password 2 correcto";
  } else {
    resultado.innerHTML = "Password incorrecto.";
  }
});

btnAnterior.addEventListener("click", function () {
  window.location.href = "index2.html";
});

btnSiguiente.addEventListener("click", function () {
  window.location.href = "index1.html";
});
