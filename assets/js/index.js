const cardLeft = document.getElementById("card-img-1");
const cardMiddle = document.getElementById("card-img-2");
const cardRight = document.getElementById("card-img-3");

cardLeft.addEventListener("click", function () {
  if (document.getElementById("card-img-1").style.border === "") {
    document.getElementById("card-img-1").style.border = "2px solid #3f3738";
    document.getElementById("card-img-1").style.borderRadius = "20rem";
  } else {
    document.getElementById("card-img-1").style.border = "";
    document.getElementById("card-img-1").style.borderRadius = "0rem";
  }
});

cardMiddle.addEventListener("click", function () {
  if (document.getElementById("card-img-2").style.border === "") {
    document.getElementById("card-img-2").style.border = "2px solid #3f3738";
    document.getElementById("card-img-2").style.borderRadius = "20rem";
  } else {
    document.getElementById("card-img-2").style.border = "";
    document.getElementById("card-img-2").style.borderRadius = "0rem";
  }
});

cardRight.addEventListener("click", function () {
  if (document.getElementById("card-img-3").style.border === "") {
    document.getElementById("card-img-3").style.border = "2px solid #3f3738";
    document.getElementById("card-img-3").style.borderRadius = "20rem";
  } else {
    document.getElementById("card-img-3").style.border = "";
    document.getElementById("card-img-3").style.borderRadius = "0rem";
  }
});

btnAnterior.addEventListener("click", function () {
  window.location.href = "index3.html";
});

btnSiguiente.addEventListener("click", function () {
  window.location.href = "index2.html";
});
