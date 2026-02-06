const stem = document.querySelector(".stem");
const msg = document.getElementById("msg");

function growPlant() {
  const hour = new Date().getHours(); // 0–23
  const height = 30 + hour * 3;

  stem.style.height = height + "px";
  stem.style.background = "#2f7a4f";

  msg.textContent = `The plant is growing 🌱 (hour: ${hour})`;
}

growPlant();
setInterval(growPlant, 60000); // updates every minute
