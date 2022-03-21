//flip the cards

// $(function () {
//     $(".flip").flip({
//         trigger: 'hover'
//     });
// });

//constructor
function Pizza(size, crust, toppings, quantity){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
}
    
var inputSize=parseInt(document.getElementById('size').value);
var inpuCrust=parseInt(document.getElementById('crust').value);
var inputToppings=parseInt(document.getElementById('toppings').value);
var inputDeliver = parseInt(document.getElementById('deliver').value);
var howMany = parseInt(document.getElementById('quantity').value);

console.log (inputToppings)