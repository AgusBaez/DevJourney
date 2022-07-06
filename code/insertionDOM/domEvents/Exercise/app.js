const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const productValue = product.value;
  const qtyValue = qty.value;

  const newLi = document.createElement("Li");
  newLi.innerText = `${qtyValue} ${productValue}`;
  list.appendChild(newLi);
  qty.value = "";
  product.value = "";
});
