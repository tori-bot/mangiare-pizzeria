var price, crustPrice, toppingPrice, deliveryPrice
let total=0

//constructor
function Pizza(size, crust, toppings, quantity,delivery){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
    this.delivery = delivery;
}

$(document).ready(function () {
        $("#submitbtn").click(function (event) {
            var ptype = $("#type option:selected").value;
            var psize = $("#size option:selected").value;
            var ptoppings = $("#toppings option:selected").value;
            var pcrust = $("#crust option:selected").value;
            var deliver = $("#deliver option:slected").value;
        });
    });
//prototypes
Pizza.prototype.sizePrice = function () {
    if (this.size === 'small')
    {
        return 600;  
    }
    else if (this.size === 'medium')
    {
        return 1000;
    }
    else
    {
        return 1300;
    }
    
}

Pizza.prototype.crustPrice = function () {
    if (this.crust === 'gluten free')
    {
        return 300;
    }
    else if (this.crust === 'thin')
    {
        return 150;
    }
    else if(this.crust==='thick')
    {
        return 200;
    }
    else
    {
        return 0;
    }
}

Pizza.prototype.toppingPrice = function () {
    var sum = 0;
    this.toppings.forEach(item => {
        sum += parseFloat(item.value)
    });
    return sum;
}


Pizza.prototype.totalPrice = function () {
    var total = (this.sizePrice() + this.crustPrice() + this.toppingPrice()) * this.quantity;
    return total;
}

Pizza.prototype.toppingNameList = function () {
    var toppingsList = this.toppings;
    var newList = [];
    toppingsList.forEach(item => {
        newList.push(item.value)
    })
    return newList.join(', ')
}

Pizza.prototype.deliveryPrice = function () {
    if (this.deliver === 'home')
    {
        return 200;
    }
    else
    {
        return 0;
    }  
 }  

$('#order').submit((e) => {
    e.preventDefault();

//user input
    var inputType = $('#type').val();
    var inputSize = $('#size').val();
    var inpuCrust = $('#crust').val();
    var inputToppings = $('#checkboxes').serializeArray();
    var quantityOrdered = parseInt($('#quantity').val());
    var delivery = $('#deliver').val();
    
    if (quantityOrdered === 0)
    {
        alert('error. please enter number of pizzas ordered');
        return;
    }
    

    var newOrder = new Pizza(inputType, inputSize, inputCrust, inputToppings, quantityOrdered, delivery);
    
    var newTotal = newOrder.totalPrice();

    var toppingsListed = newOrder.toppingNameList();

    $("ul#checkout").append("<li><span class='type'>" + newOrder.inputType() + "</span></li>");
    $("ul#checkout").append("<li><span class='size'>" + newOrder.inputSize() + "</span></li>");
    $("ul#checkout").append("<li><span class='crust'>" + newOrder.inputCrust() + "</span></li>");
    $("ul#checkout").append("<li><span class='toppings'>" + newOrder.inputToppings() + "</span></li>");
    $("ul#checkout").append("<li><span class='quantity'>" + newOrder.quantityOrdered() + "</span></li>");
    $("ul#checkout").append("<li><span class='deliver'>" + newOrder.delivery() + "</span></li>");


alert("your order of "+quantity + size +" sized "+type+ "pizza/s will be completed in the next 30 minutes. Total proce payable is "+absoluteTotal+". Enjoy your meal!")
    
 
    
  
    var inputSize = parseInt(document.getElementById('size').value);
    var inpuCrust = parseInt(document.getElementById('crust').value);
    var inputToppings = parseInt(document.getElementById('toppings').value);
    var inputDeliver = parseInt(document.getElementById('deliver').value);
    var howMany = parseInt(document.getElementById('quantity').value);
