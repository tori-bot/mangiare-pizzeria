

//constructor
function Pizza(size, crust, toppings, quantity,delivery){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
    this.delivery = delivery;
}

            
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
        sum += parseFloat(item.name)
    });
    return sum;
};






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

Pizza.prototype.totalPrice = function () {
    let total = (this.sizePrice() + this.crustPrice() + this.toppingPrice()) * this.quantity;
    return total;
    
};
 
//user interface
$(document).ready(function () {
    $('#order').submit((event) => {
        event.preventDefault();
 


    //user input
    var inputType = $('#type').val();
    var inputSize = $('#size').val();
    var inputCrust = $('#crust').val();
    var inputToppings = $('#checkboxes').serializeArray();
    var quantityOrdered = parseInt($('#quantity').val());
    var delivery = $('#deliver').val();

    if (delivery === 'home')
    {
        $('#address').show();
    }
    else
    {
        $('#address').hide();
    }
    
    if (quantityOrdered === 0)
    {
        alert('error. please enter number of pizzas ordered');
        return;
    }

    

    var newOrder = new Pizza(inputType, inputSize, inputCrust, inputToppings, quantityOrdered, delivery);
    
    var newTotal = newOrder.totalPrice();

        var toppingsListed = newOrder.toppingNameList();
        
        
         $("ul#myOrder").append("<li><span class='myorder'>" +newOrder.totalPrice() + "</span></li>");

         
        
         $("#type").val("");
         $("#size").val("");
         $("#crust").val("");
         $("#toppings").val("");
         $("#quantity").val("");
         $("#deliver").val("");




    $('.grandTotal').text(newTotal);

    var deliveryAmount = newOrder.deliveryPrice();
    var absoluteTotal = deliveryAmount + newTotal;

    alert("your order of " + quantity + size + " sized " + type + "pizza/s will be completed in the next 30 minutes. Total proce payable is " + absoluteTotal + ". Enjoy your meal!");

   });
});