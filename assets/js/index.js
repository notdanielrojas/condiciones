const cardLeft = document.getElementById("card-img-1");
const cardMiddle = document.getElementById("card-img-2");
const cardRight = document.getElementById("card-img-3");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

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

anterior.addEventListener("click", function () {
  window.location.href = "index3.html";
});

siguiente.addEventListener("click", function () {
  window.location.href = "index2.html";
});
