const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#inputList");

form.addEventListener("submit", (e) => {
  console.log("Submitted Form¡¡");
  e.preventDefault();
  const inputValue = input.value;
  const newLi = document.createElement("Li");
  newLi.innerText = inputValue;
  console.log(newLi);
  list.append(newLi);
  input.value = "";
});
