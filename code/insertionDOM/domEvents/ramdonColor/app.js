const newColor = document.querySelector("#newColor");
const h2 = document.querySelector("h2");
newColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = randomColor;
  h2.innerText = randomColor;
});
