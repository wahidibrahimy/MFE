import faker from "faker";
let productString = "";
productString += `<h1>Products List</h1>`;
for (let i = 0; i < 10; i++) {
  productString += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector("#product-list").innerHTML = productString;
