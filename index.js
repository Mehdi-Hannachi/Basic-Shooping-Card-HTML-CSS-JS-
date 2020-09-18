// ************************* Quantity increment *************************//

// let buttonplus = Array.from(document.getElementsByClassName("add"));
let buttonplus = document.getElementsByClassName("fa-plus-square");
for (let plus of buttonplus) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    somme();
  });
}

// ************************* Decrease quantity *******************************//

let buttonminus = document.querySelectorAll(".fa-minus-square");
console.log(buttonminus);
for (let i = 0; i < buttonminus.length; i++) {
  buttonminus[i].addEventListener("click", function () {
    if (buttonminus[i].previousElementSibling.innerHTML > 0) {
      buttonminus[i].previousElementSibling.innerHTML--;
    }
    somme();
  });
}

//************************* Remove article *******************************//

let buttonremove = document.getElementsByClassName("fa-times");
for (let rmv of buttonremove) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    somme();
  });
}

//************************* Calculate sum *******************************//

function somme() {
  let quantity = document.getElementsByClassName("qte");
  let prices = document.getElementsByClassName("price");
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += quantity[i].innerHTML * prices[i].innerHTML;
  }
  return (document.getElementById("totalp").innerHTML =
    "Shooping Bag Total : $" + sum);
}

//************************* Like / Dislike *******************************//

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    // if (heart.style.color == "red") {
    //   heart.style.color = "gray";
    // } else {
    //   heart.style.color = "red";
    // }
    heart.classList.toggle("red");
  });
}
