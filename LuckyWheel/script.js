const luckyWheel = document.querySelector(".luckyWheel");
const spinButton = document.querySelector(".spinButton");
const prize=[
  "Save 10%",
  "Save 20%",
  "Save 15%",
  "Save 20%",
  "Save 30%",
  "Save 15%",
  "Spin Again"
];
spinButton.addEventListener("click", function () {
  spinButton.disabled = true;
  const spinDuration = 5000;
  const spinAngle = 80*Math.floor(Math.random()*360);
  luckyWheel.style.transition=`transform ${spinDuration}ms`;
  luckyWheel.style.transform = `rotate(-${spinAngle}deg)`;
  setTimeout(() => {
    spinButton.disabled = false;
    const finalAngle = spinAngle % 360;
    const sectorAngle = 360 / prize.length;
    let prizeIndex = Math.floor((finalAngle + sectorAngle / 2) / sectorAngle) % prize.length;
    const wonPrize = prize[prizeIndex];
    alert(`Congrats,you get ${wonPrize} !`);
  },spinDuration);
});

console.log(360/7)
console.log(360%7)
