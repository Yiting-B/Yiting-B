// Remane this file from homework-week6.js to script.js to follow naming conventions

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  // Good job on caching the DOM elements in variables!
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  const resetButton = document.getElementById("reset");
  const numberTxt = document.querySelector(".part1");
  const freeTips = document.getElementById("free");
  const soldOut = document.getElementById("pause");

  // Consier using more descriptive name for this function, for example updateDisplay.
  function sameFunction() {
  // Nice job applying styles with JavaScript!
  // In the future, you might also try using classList.add/remove/toggle 
  // instead of directly setting styles here — it will allow you to reuse styles and give you more flexibility.
    numberTxt.textContent = count;
    freeTips.style.display = count >= 10 && count < 20 ? "block" : "none";
    soldOut.style.display = count >= 20 ? "block" : "none";
    plusButton.style.backgroundColor = count >= 20 ? "red" : "";
    plusButton.disabled = count >= 20 
    minusButton.disabled = count <= 0
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
