// function Item(name, price) { this.name = name; this.price = price };
// function SaleItem(name, price, discount) { this.name = name; this.price = price; this.discount = discount };
// // And no SaleIntem does not extends Item nothing metion in the exercice about it...
// let regltem = new Item('Scarf', 50); //Name, price
// let saleItem = new SaleItem('Shirt', 80, 0.1); //Name, price, discount
// Item.prototype.currprice = function () { return this.price; }
// console.log(regltem.currprice()); 50
// //console.log(saleItem.currprice()); // --> Error
// SaleItem.prototype.currprice = function () { return this.price - (this.price * this.discount); }
// console.log(regltem.currprice());
// console.log(saleItem.currprice());


// let counter = 0;
// const logCounter = () => {
//   console.log(counter);
// };
// logCounter();
// setTimeout(logCounter, 2100);
// setInterval(() => {
//   counter++;
//   logCounter();
// }, 1000)

// var url;
// setCurrUrl();
// console.log(url);
// const setCurrUrl = function abc() {
//   url = window.location.href
// }

// function execute() {
//   return new Promise((resolve, reject) => reject());
// }
// let prom = execute();
// prom
//   .then(() => console.log('Resolved1'))
//   .then(() => console.log('Resolved2'))
//   .then(() => console.log('Resolved3'))
//   .catch(() => console.log('Rejected'))
//   .then(() => console.log('Resolved4'))



// function Person() {
//   this.firstName = 'John';
//   this.lastName = 'Doe';
//   this.name = () => {
//     console.log(`Hello ${this.firstName}, ${this.lastName}`);
//   }
// }
// const john = new Person();
// console.log(JSON.stringify(john));
// const dan = JSON.parse(JSON.stringify(john));
// dan.firstName = 'Dan'
// console.log(dan);
// dan.name();


// function hey() {
//   console.log('HEY I RAN');
// }
// document.addEventListener('DOMContentLoaded', hey)

for (let number = 2; number <= 5; number += 1) {
  console.log(number);
  console.assert(number % 2 === 0);
}