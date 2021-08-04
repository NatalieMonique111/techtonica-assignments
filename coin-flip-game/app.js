
document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("button");
  let result = document.getElementById("result");
  button.addEventListener("click", flipClick);
});

function flipClick(event) {
  let num = Math.random();

  if (num < 0.5) {
    result.innerHTML = "You got HEAD";
  } else {
    result.innerHTML = "You got TAIL";
  }
}

