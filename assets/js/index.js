const cardLeft = document.getElementById("card-img-1");
const cardMiddle = document.getElementById("card-img-2");
const cardRight = document.getElementById("card-img-3");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

cardLeft.addEventListener("click", function () {
  if (cardLeft.style.border === "") {
    cardLeft.style.border = "2px solid #3f3738";
    cardLeft.style.borderRadius = "20rem";
  } else {
    cardLeft.style.border = "";
    cardLeft.style.borderRadius = "0rem";
  }
});

cardMiddle.addEventListener("click", function () {
  if (cardMiddle.style.border === "") {
    cardMiddle.style.border = "2px solid #3f3738";
    cardMiddle.style.borderRadius = "20rem";
  } else {
    cardMiddle.style.border = "";
    cardMiddle.style.borderRadius = "0rem";
  }
});

cardRight.addEventListener("click", function () {
  if (cardRight.style.border === "") {
    cardRight.style.border = "2px solid #3f3738";
    cardRight.style.borderRadius = "20rem";
  } else {
    cardRight.style.border = "";
    cardRight.style.borderRadius = "0rem";
  }
});

anterior.addEventListener("click", function () {
  window.location.href = "index3.html";
});

siguiente.addEventListener("click", function () {
  window.location.href = "index2.html";
});
