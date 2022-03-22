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
        <h2>Your Cart</h2>
        <hr>
        <h4> Total: ${this.total}</h3>
        <h4> Quantity: ${this.quantity}</h4>
        <hr>
        <h3>${this.product.name}</h3>
        <h4>${this.product.size.name}</h4>
        <h4>${this.product.crust.name}</h4>
        <h4>Your toppings are,${this.product.toppings
          .map((topping) => topping.name)
          .join(", ")}</h4>
        </div>
    
      </div>
      `;
      } catch (error) {
        return `Please select a product`;
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
  