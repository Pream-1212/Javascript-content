const orderForm = document.getElementById("orderForm");
orderForm.style.backgroundColor = "lightblue";

const furniture = document.getElementById("furniture");

const total = document.getElementById("total");

const email = document.getElementById("email");

const customer = document.getElementById("customer");
const placeOrder = document.getElementById("orderBtn");

function updateTotal() {
  const price = Number(document.getElementById("price").value);
  const qty = Number(document.getElementById("qty").value);
  const cost = price * qty;
  total.textContent = `Total: UGX ${cost.toLocaleString()}`;
  
}

function finishOrder() {
    window.alert("You have passed over me!");
}
price.addEventListener("input", updateTotal);
qty.addEventListener("input", updateTotal);
placeOrder.addEventListener ("mouseover", finishOrder);
