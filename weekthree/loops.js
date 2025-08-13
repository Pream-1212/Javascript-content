// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (initialization; condition; increment/decrement) : for loops
// initialze : If (condition) (code if true )

//for, for---of, for--in, for each(),while, do---while

// const products= ["chair","table","bed","cupboard"]
// for (let i=0;i>products.length;i++ ) {
//     console.log(`item${i+1}: products${i}`);
// }

// while (condition ie stock availability ){code if condition is true; increment/decrement}
// let stock =20
// while (stock>0) {
//     console.log(`Selling item-- stock left is ${stock}`);
//     stock--;
//}

// do {
//     console.log("Checking available stock" )
// }

// let order;
// let totalStock = 1000

// do {
//     order= prompt(`Enter order(available stock is ${totalStock})`)
// } while (order < totalStock)
// {
//     alert("your order has been received");
//     stock--;
//}

// do {code to be executed at least once before iteration}
// while (condition)
// const products= ["chair","table","bed","cupboard"];
// for (let i=0; i<products.length; i++ ) {
//     console.log(`item${i+1}: ${products[i]}`);
// }

// let stock =20
// while (stock>=0) {
//     console.log(` stock left is ${stock}`);
//     stock--;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x <= 5);

// const itemSold = ["chair", "table", "cupboard"];
// //for fixed repetitions, loop through the code
// for (const item of itemSold) {
//   console.log(`Sold ${item}`);
// }

const sale = {
  customer: "Pream",
  product: "chair",
  quantity: 4,
  price: 50000,
};

//for in loop

for (const key in sale) {
  console.log(`${key}:${sale[key]}`);
}
