function Item(na,q,p){
this.name=na;
this.qty=q;
this.price=p;
this.calQty= function(){
 this.qty++;
this.price*=this.qty;
};
};

alert('Items available are: apple, potato (per unit) and sugar,salt,chilli powder (1 kg packings). You can use these cmmands: enter item name to add, delete, view');
var apple=new Item('Apple',0,10);
var potato=new Item('Potato',0,6);
var sugar=new Item('Sugar-1kg',0,40);
var salt=new Item('Salt-1kg',0,35);
var chilli=new Item('Chilli Powder-1kg',0,60);
var cart=[];
var itemName=prompt('Put an item into the cart (if you want to)');
while(itemName)
{
switch (itemName.toLowerCase()){
    case 'apple':
if(apple.qty==0){
cart.push(apple);}
apple.calQty();
break;
    case 'potato':
if(potato.qty==0){
cart.push(potato);}
potato.calQty();
break;
    case 'sugar':
if(sugar.qty==0){
cart.push(sugar);}
sugar.calQty();
break;
    case 'salt':
if(salt.qty==0){
cart.push(salt);}
salt.calQty();
break;
    case 'chilli':
if(chilli.qty==0){
cart.push(chilli);}
chilli.calQty();
break;
    case 'delete':
if(cart.length===0){
alert('Cart is empty');}
else{
cart.pop();
}
break;
    case 'view':
(function (){
var pr=0,i;
for(i=0;i<cart.length;i++)
{pr= pr+ cart[i].price;
alert('item: '+ cart[i].name);
}
alert('total value of cart is: '+ pr);
var res=prompt('do you want to continue?');
if(res=='yes'){
var cardNum=prompt('Enter card number(10 digits)');
if(cardNum.length>10)
cardNum=prompt('please enter correct card number');
var cvv=prompt('enter cvv');}
alert('Thanks for shopping!');
})();
itemName=false;
break;
    default:
alert('Please enter correct input');
break;
}
if(itemName)
itemName=prompt('Whats your next step?');
}
console.log('end of page');