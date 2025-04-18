document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  const resetButton = document.getElementById("reset");
  const numberTxt = document.querySelector(".part1");
  const freeTips = document.getElementById("free");
  const soldOut = document.getElementById("pause");

  function sameFunction() {
    numberTxt.textContent = count;
    freeTips.style.display = count >= 10 && count < 20 ? "block" : "none";
    soldOut.style.display = count >= 20 ? "block" : "none";
    plusButton.style.backgroundColor = count >= 20 ? "red" : "";
    plusButton.disabled = count >= 20;
    minusButton.disabled = count <= 0;
  }
  plusButton.addEventListener("click", () => {
    count++;
    sameFunction();
  });
  minusButton.addEventListener("click", () => {
    count--;
    sameFunction();
  });
  resetButton.addEventListener("click", () => {
    count = 0;
    sameFunction();
  });
});
