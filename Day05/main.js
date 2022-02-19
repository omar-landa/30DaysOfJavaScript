//Creating an empty  array:


//Using the Array Constructor:

//  const arr = Array()      ***or: let arr = new Array()
//  console.log(arr) 

//Using square brackets:
// **********THE MOST RECOMMENDED WAY TO MAKE AN EMPTY LIST******/

//  const arr = []
//  console.log(arr)  //an empty array

//Example on an array with values:
// const fruits = ['banana', 'orange', 'mango', 'lemon']

//Printing the array and its length:
// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

//Example of an array with different data types:
// const arr = [
//     'Jose',
//     250,
//     true,
//     {country: 'United States', city: 'Houston'},
//     {skills: ['HTML', 'CSS', 'JavaScript', 'Java']}
// ]
// console.log(arr)

//Creating an array using split:
// let js = 'JavaScript'
// const charsInJavaScript = js.split('')
// console.log(charsInJavaScript)

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
// const companies = companiesString.split(',')
// console.log(companies)

//Accessing array items using index:
// let firstFruit = fruits[0]
// console.log(firstFruit)

// let secondFruit = fruits[1]
// console.log(secondFruit)

//Modifying an array element:
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// numbers[0] = 10
// numbers[1] = 20
// console.log(numbers)

//Concatenating arrays using .concat():

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)
// console.log(firstList)
// console.log(secondList)
// console.log(thirdList)

//.push() adds an item to end of the array

//.pop() removes one item from end of the array

//.shift() removes one item from beginning of the array

//.unshift() adds an element to beginning of the array

//.reverse() reverses array order

//.sort() arranges array elements n ascendint order




// Exercise 1:

// 1: Create an empty array
const arr = []
console.log(arr)

// 2: Declare an array with > 5 number elements
const moreThanFiveNumbers = [1, 2, 3, 4, 5, 6, 7]

// 3: Find the length of your array
let lengthOfArray = moreThanFiveNumbers.length
console.log(lengthOfArray)

// 4: Get 1st, middle, and last item of the array
console.log(moreThanFiveNumbers[0])  //1st item
console.log(moreThanFiveNumbers[3])  //middle item
console.log(moreThanFiveNumbers[6])  //last item

/* 5: Declare an array called mixedDataTypes.
Put differemt data types in the array and find the length of the array.
Array size should be > 5. */

const mixedDataTypes = [1, 'string', true, 5, false, 'another string']
let lengthOfMixedDataTypes = mixedDataTypes.length
console.log(lengthOfMixedDataTypes)

/* 6: Declare an array variable name it Companies and assign initial
 values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */

 const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7: Print the array with console.log
 console.log(companies)

// 8: Print the number of companies in the array
let numberOfCompanies = companies.length
console.log(numberOfCompanies)

// 9: Print 1st, middle, and last company in the array
console.log(companies[0])
console.log(companies[3])
console.log(companies[6])

// 10: Print out each company
console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

// 11: Change each company name to uppercase one by one and print it out
console.log(companies[0].toUpperCase())
console.log(companies[1].toUpperCase())
console.log(companies[2].toUpperCase())
console.log(companies[3].toUpperCase())
console.log(companies[4].toUpperCase())
console.log(companies[5].toUpperCase())
console.log(companies[6].toUpperCase())

/* 12: Print the array like a sentence: "Facebook, Google, Microsoft,
 Apple, IBM,Oracle and Amazon are big IT companies." */

companies.pop()
console.log(companies)

let finishSentence = ' and Amazon are big IT companies.'

const fullSentence = companies.join(', ').concat(finishSentence)
console.log(fullSentence)

console.log(companies)

/* 13: Check if a certain companie exists in an array, if it does
return the company, if not return "company not found" */

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

let index = itCompanies.indexOf('Google')

if(index != -1){
    console.log('This company exists in the group.')
}
else {
    console.log('Company not found.')
}

// 15: Sprt the array using the .sort() method.
console.log(itCompanies.sort())

// 16: reverse the array
console.log(itCompanies.reverse())

// 17: slice out the 1st 3 companies from the array.
console.log(itCompanies.slice(0,3))

// 18: slice out the last 3 companies from the array.
console.log(itCompanies.slice(4))

// 19: Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

// 20: Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// 21: remove the middle IT company from the list
itCompanies.splice(2,2)
console.log(itCompanies)
// 22: remove the last IT company from the list
itCompanies.pop()
console.log(itCompanies)

// 23: remove all IT companies
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
console.log(itCompanies)

