const cartTotalSpan = document.getElementById('cart-total');
const cartModal = document.getElementById('cart-modal');

let cartItems = [];

function addToCart() {
  var productName = document.getElementById('product-name').innerText;
  var productPrice = Number(document.getElementById('product-price').innerText);

  var details = {
    name: productName, 
    price: productPrice 
  }
  console.log(details);

  if (productName && productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
  }
}

function updateCart() {
     const cartItemsList=document.getElementById('cart-items');
     cartItemsList.innerHTML = "";
    let total = 0;
    console.log(cartItems)
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.name} - $${item.price}`;
      console.log(li);
      cartItemsList.appendChild(li);
      total += item.price;
    });
    cartTotalSpan.textContent = `$${total}`;
    cartModal.style.display = 'block';
}

function ccloseModal() {
  cartModal.style.display = 'none';
}

window.addEventListener('beforeunload', function() {
    sessionStorage.clear();
  });