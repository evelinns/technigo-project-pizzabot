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
  `What would you like to order today? \n\nType the corresponding number for your order: \n\n1/ Pizza\n2/ Pasta\n3/ Salad\n\n`
);

let item;

if (orderItem == 1) {
  item = "Pizza";
} else if (orderItem == 2) {
  item = "Pasta";
} else {
  item = "Salad";
}

alert(`${item} is a great choice!`);

// Step 3 - Subtype choice
// Your code goes here

if (item == "Pizza") {
  let pizzaType = prompt(
    `Which type of ${item} would you like? Type the number of the option you'd like to order:\n\n 1/ Margarita\n2/ Peperoni\n3/ Potato\n\n`
  );

  if (pizzaType == 1) {
    pizzaType = "Margarita";
  } else if (pizzaType == 2) {
    pizzaType = "Peperoni";
  } else {
    pizzaType = "Potato";
  }

  alert(
    `${pizzaType} is a great choice! We'll get that ready for you shortly!`
  );
} else if (item == "Pasta") {
  let pastaType = prompt(
    `Which type of ${item} would you like? Type the number of the option you'd like to order:\n\n 1/ Cacio e Pepe\n2/ Carbonara\n3/ Tomato\n\n`
  );

  if (pastaType == 1) {
    pastaType = "Cacio e Pepe";
  } else if (pastaType == 2) {
    pastaType = "Carbonara";
  } else {
    pastaType = "Tomato";
  }

  alert(
    `${pastaType} is a great choice! We'll get that ready for you shortly!`
  );
} else {
  let saladType = prompt(
    `Which type of ${item} would you like? Type the number of the option you'd like to order:\n\n 1/ Greek\n2/ Caesar\n3/ Green\n\n`
  );

  if (saladType == 1) {
    saladType = "Greek";
  } else if (pastaType == 2) {
    saladType = "Caesar";
  } else {
    saladType = "Green";
  }

  alert(
    `${saladType} is a great choice! We'll get that ready for you shortly!`
  );
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
