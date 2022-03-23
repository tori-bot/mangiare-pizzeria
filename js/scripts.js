//same-site cookies secured
document.cookie = "tagname = test";


//cart model
class Cart {
    product;
    total = 0;
    quantity = 0;
  
    updateQuantity(quantity) {
      this.quantity = quantity;
      this.updateTotal();
    }
  
    updateTotal() {
      this.total = this.product.unitPrice * this.quantity;
  
      let cartDiv = document.querySelector("#cart");
      cartDiv.innerHTML = this.render();
    }
  
    render() {
      try {
        return `
      <div class="cart-container">
        <div class="cart-header">
        <h2>Your Cart </h2>
        <hr>
        <h4> Total: ${this.total}</h3>
        <h4> Quantity: ${this.quantity}</h4>
        <hr>
        <h3>${this.product.name}</h3>
        <h4>${this.product.size.name}</h4>
        <h4>${this.product.crust.name}</h4>
        <h4>Your toppings are: ${this.product.toppings
          .map((topping) => topping.name)
          .join(", ")}</h4>
        </div>
        <button onCheckout="onCheckout(event)"  class="checkout">check out</button>
    
      </div>
      `;
      } catch (error) {
        return `Please select a product`;
      }
    }
}
  
class Delivery{
  updateGrandTotal() {
    this.grandTotal = this.totalTotal;
  }
  deliver(){
  let deliveryDiv = document.querySelector("#delivery");
    deliveryDiv.innerHTML = this.render();
  }
  render() {
    try
    {
      return `
      <div class="delivery-container>
      <form>
      <input type="text" id="name" placeholder="name"><br>
      <input type="text" id="location" placeholder="location/address"><br>
      <input type="email" id="email" placeholder="email"><br>
      <input type="number" id="m-number" placeholder="mobile number"><br>
      <p>Delivery price is sh 200<p>
      <input onchange"onDeliverySelect(event)" type="checkbox" id="yes" placeholder="Deliver"><br>
      <h3>grand total: ${this.grandTotal}<h3>
      <button class="checkout">Finish<button>
      </form>
      </div>`;
    } finally
    {
      alert('Please pay the Grand Total Your order will be ready in 30 minutes. Bon appetit!')
    }
  }
}

  //product model
  class Product {
    name = "";
    size = "";
    toppings = [];
    crust = "";
    unitPrice = 0;
  
    addTopping(topping) {
      this.toppings.push(topping);
      this.getPrice();
    }
  
    removeTopping(topping) {
      this.toppings = this.toppings.filter((item) => item.name !== topping);
      this.getPrice();
    }
  
    selectCrust(crust) {
      this.crust = crust;
      this.getPrice();
    }
  
    selectSize(size) {
      this.size = size;
      this.getPrice();
    }
  
    getPrice() {
      let toppingPrice = 0;
  
      this.toppings.forEach((topping) => {
        toppingPrice += topping.price;
      });
  
      let crustPrice = this.crust.price;
      let sizePrice = this.size.price;
  
      if (isNaN(crustPrice)) {
        crustPrice = 0;
      }
  
      if (isNaN(sizePrice)) {
        sizePrice = 0;
      }
  
      this.unitPrice = crustPrice + toppingPrice + sizePrice;
  
      return this.unitPrice;
    }
  }

  //size model
  class Size {
    name = "";
    price = 0;
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  //crust model
  class Crust {
    name = "";
    price = 0;
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
//toppings model
class Topping {
    name = "";
    price = 0;
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  //main app
const myCart = new Cart();
const deliveryForm = new Delivery();
  //event handler
  const onTypeSelect = (event) => {
    updateName(event.target.value);
  };
  
  const onSizeSelect = (event) => {
    let size = event.target.value.split(":");
    updateSize(size[0], size[1]);
  };
  
  const onToppingSelect = (event) => {
    if (event.srcElement.checked) {
      addTopping(event.target.name, event.target.value);
    } else {
      removeTopping(event.target.name);
    }
  };
  
  const onCrustSelect = (event) => {
    let crust = event.target.value.split(":");
    updateCrust(crust[0], crust[1]);
  };
  
  const onQuantity = (event) => {
    myCart.updateQuantity(parseFloat(event.target.value));
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitOrder();
  };

const onCheckout = (event) => {
  event.preventDefault();
  console.log('checkout')
  onCheckoutCart();
  }

const onDeliverySelect = (event) => {
  if (event.srcElement.checked)
  {
     this.totalTotal = this.total + 200;
  }
  else
  {
     this.totalTotal = this.total;
  }
  
}
  
  //controller
  const pizza = new Product();
myCart.product = pizza;

const updateName = (name) => {
  pizza.name = name;
};

const updateSize = (sizeName, sizePrice) => {
  const size = new Size(sizeName, parseFloat(sizePrice));
  pizza.selectSize(size);
  myCart.updateTotal();
};

const addTopping = (toppingName, toppingPrice) => {
  const topping = new Topping(toppingName, parseFloat(toppingPrice));
  pizza.addTopping(topping);

  myCart.updateTotal();
};

const removeTopping = (toppingName) => {
  pizza.removeTopping(toppingName);

  myCart.updateTotal();
};

const updateCrust = (crustName, crustPrice) => {
  const crust = new Crust(crustName, parseFloat(crustPrice));
  pizza.selectCrust(crust);

  myCart.updateTotal();
};

const onSubmitOrder = () => {
  console.log(myCart);
};

const onCheckoutCart = () => {
  console.log(deliveryForm);
}

  