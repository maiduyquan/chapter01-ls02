var price=5;
var quantity=14;
var totla=price*quantity;

/* Method2
var price,quantity,total;
price=5;
quantity=14;
total=price* quantity;
*/
/* Method3
var price=5,quantity=14;
var total =price*quantity;
*/
var el=document.getElementById(elementid:'cost');
el.textContent='$' +total;