
let result;
let img;
const imgPath = 'src/coin.png';

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  result = document.getElementById("result");
  button.addEventListener("click", flipClick);
});

function flipClick() {
  const qty = document.getElementById("quantity").value;
  let coin;

  if (qty > 108) {
    alert("This isn't a bank! Enter 108 or less.");
    return;
  }
  for (let i = 0; i < qty; i++) {
    let num = Math.random();

    if (num < 0.5) {
      coin = getCoin('You got HEADS');

    } else {
      coin = getCoin('You got TAILS');
    }
    result.appendChild(coin);
  }
}

function getCoin(text) {
  // create a new p element
  const p = document.createElement('p');
  const textNode = document.createTextNode(text);
  p.appendChild(textNode);

  // create a new img element
  img = new Image(25, 25);
  img.src = imgPath;
  p.appendChild(img);
  return p;
}