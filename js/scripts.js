//flip the cards

// $(function () {
//     $(".flip").flip({
//         trigger: 'hover'
//     });
// });

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
    $("#orderbtn").click(function (event) {
        var pizzaSize = $("#size option:selected").value;
        var pizzaCrust = $(".#crust option:selected").value;
        var pizzaTopping = $(".#toppings option:selected").value;
    })
 })
    
 
var newOrder = new Pizza(type, size, crust, toppings, quantity, delivery);
  
var inputSize=parseInt(document.getElementById('size').value);
var inpuCrust=parseInt(document.getElementById('crust').value);
var inputToppings=parseInt(document.getElementById('toppings').value);
var inputDeliver = parseInt(document.getElementById('deliver').value);
var howMany = parseInt(document.getElementById('quantity').value);

console.log (inputToppings)