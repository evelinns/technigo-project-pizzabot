// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name here:");
alert(`Hi and welcome, ${userName}!`);

// Step 2 - Food choice
// Your code goes here
const orderItem = prompt(
  "What would you like to order today? Type the corresponding number for your order: 1/ Pizza, 2/ Pasta, 3/ Salad"
);

if (orderItem == 1) {
  alert(`Pizza is a great choice!`);
} else if (orderItem == 2) {
  alert(`Pasta is a great choice!`);
} else {
  alert(`Salad is a great choice!`);
}

// Step 3 - Subtype choice
// Your code goes here

if (orderItem == 1) {
  let pizzaType = prompt(
    `Which pizza do you wish to order today? Type the number that you'd like to order: 1/ Margarita, 2/ Peperoni, 3/ Potato`
  );
  if (pizzaType == 1) {
    alert("Margarita is a great choice!");
  } else if (pizzaType == 2) {
    alert("Peperoni is a great choice!");
  } else {
    alert("Potato is a great choice!");
  }
} else if (orderItem == 2) {
  let pastaType = prompt(
    `Which pasta do you wish to order today? Type the number that you'd like to order: 1/ Cacio e Pepe, 2/ Carbonara, 3/ Tomato`
  );

  if (pastaType == 1) {
    alert("Cacio e Pepe is a great choice!");
  } else if (pastaType == 2) {
    alert("Carbonara is a great choice!");
  } else {
    alert("Tomoato is a great choice!");
  }
} else {
  let saladType = prompt(
    `Which salad do you wish to order today? Type the number that you'd like to order: 1/ Greek, 2/ Caesar, 3/ Green`
  );

  if (saladType == 1) {
    alert("Greek is a great choice!");
  } else if (saladType == 2) {
    alert("Caesar is a great choice!");
  } else {
    alert("Green is a great choice!");
  }
}

// Step 4 - Age
// Your code goes here

let age = prompt("What's your age? Please type it in the box:");

if (age < 18) {
  alert(`The order is for a child, your total for today will be $10.`);
} else {
  alert(`The order is for an adult, your total for today will be $18.`);
}

// Step 5 - Order confirmation
// Your code goes here
alert("Order is submitted, please wait 15min for us to prepare your order");
