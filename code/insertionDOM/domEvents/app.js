const btn2 = document.querySelector("#v2");

btn2.onclick = () => {
  console.log("You Clicked 2° Button");
  console.log("YES IT WORK");
};

function scream() {
  console.log("Hey!!");
}
btn2.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  alert("Clicked!");
});
