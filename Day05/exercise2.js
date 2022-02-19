//Exercise 2:


/* 2: remove all punctuation and change string into array then
count number of words in the array */

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/[^\w ]/g, "")  //regex code for special characters
console.log(newText)

const words = newText.split(" ")
console.log(words)
console.log(words.length)


// 3: add, remove, edit items in the following array:

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' to the beginning of the cart
shoppingCart.unshift('Meat')
console.log(shoppingCart)

//add 'Sugar' to the end of the cart
shoppingCart.push('Sugar')
console.log(shoppingCart)

//remove 'Honey' from the cart
console.log(shoppingCart.indexOf('Honey'))
shoppingCart.splice(4,1)
console.log(shoppingCart)

//modify "Tea" to "Green Tea"
console.log(shoppingCart.indexOf('Tea'))
shoppingCart.splice(3,1,"Grean Tea")
console.log(shoppingCart)
