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

function event1() {
  console.log("Event one");
}

const twoEvents = document.querySelector("#two");

twoEvents.addEventListener("click", event1, { once: true });
twoEvents.addEventListener("click", () => {
  console.log("Event two");
});
