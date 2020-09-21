// declaration of variables:
var btnsPlus = Array.from(document.getElementsByClassName("plusbutton"));
console.log(btnsPlus);
var btnsMinus = Array.from(document.getElementsByClassName("minusbutton"));
console.log(btnsMinus);
var qnt = document.getElementsByClassName("quantite");
console.log("qnt", qnt);
var prices = document.getElementsByClassName("Price");
var sum = document.getElementById("total");
// add quantity:

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    // var sum = document.querySelector("#total");
    qnt[i].innerText++;

   
  Total();
  });
  btnsMinus[i].addEventListener("click", function () {
    if (qnt[i].innerText > 0) {
     // let sum = document.querySelector("#total");
      qnt[i].innerText--;

    Total();
    } else {
      alert("Please choose the quantity");
    }
  });
}

// add the removebtn to card
let removecards = Array.from(document.getElementsByClassName("card"));

for (let i = 0; i < removecards.length; i++) {
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  // remove btn event

  removeBtn.addEventListener("click", function () {
    removeBtn.parentElement.remove();
    Total();
  });
  removecards[i].appendChild(removeBtn);

}
// reduce the total

// for (let i = 0; i < removecards.length; i++) {
//   let removeBtn = document.createElement("button");
//   removeBtn.innerText = "X";

//   removeBtn[i].addEventListener("click", function () {
//    // let sum = document.querySelector("#total");
//     let prices = document.getElementsByClassName("Price");
//     let qnt = document.getElementById("quantite");
//     let x = prices[i].innerHTML * qnt[i].innerHTML
//     sum.innerHTML = sum.innerHTML - x
//     console.log(sum);
//   });
// }

// add mouseover and mouseout to prices
for (let i = 0; i < prices.length; i++)
  prices[i].addEventListener("mouseover", function () {
    prices[i].style.fontSize = "25px";
    prices[i].addEventListener("mouseout", function () {
      prices[i].style.fontSize = "18px";
      console.log(prices);
    });
  });

// add color heart by toggle

let colorHeart = document.getElementsByClassName("heart");
for (let i = 0; i < colorHeart.length; i++) {
  colorHeart[i].addEventListener("click", function () {
    colorHeart[i].classList.toggle("red");
  });
}
function Total (){
  var qnt = document.getElementsByClassName("quantite");
 var prices = Array.from(document.getElementsByClassName("Price"));
 var sum = 0
 for (let i=0; i<prices.length; i++){
   sum = sum + (prices[i].innerText * qnt[i].innerText)
 }
  document.getElementById("total").innerHTML = sum
}
