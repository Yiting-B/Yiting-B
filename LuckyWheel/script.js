const pointer = document.getElementById("pointer");
const wrapper = document.getElementById("wrapper");
let onRotation = false;
const rewards = [
  "Save 5%",
  "Save 10%",
  "Save 5%",
  "Save 15%",
  "Save 10%",
  "Save 15%",
  "Save 10%",
  "Save 20%",
];
let currentDeg = 0;

pointer.addEventListener("click", () => {
  if (onRotation) return;
  onRotation = true;

  const rotateDeg = Math.random() * 360 + 1440;
  currentDeg += rotateDeg;

  const normalizedDeg = ((currentDeg % 360) + 22.5) % 360; 
  const index = Math.floor(normalizedDeg / 45);
  const rewardText = rewards[index];

  wrapper.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
  wrapper.style.transform = `rotate(${currentDeg}deg)`;

  wrapper.addEventListener(
    "transitionend",
    () => {
        alert("You won：" + rewardText);
      onRotation = false;
    },
    { once: true }
  ); 
});
