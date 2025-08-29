//*Heart icon functionality

const heartClicked = document.querySelectorAll(".heart-icon");
let heartCountIncrease = parseInt(document.getElementById("lifeline").innerText);

heartClicked.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heartCountIncrease++;
    document.getElementById("lifeline").innerText = heartCountIncrease;
  })
})

//* 


