//***************** */
//Exercise 1
//********************** */


/* 1: Declare firstName, lastName, country, city, age, isMarried,
 & year variables. Use typeof operator to check the date types.*/

 let firstName = "Jose"
 let lastName = "Landa"
 let country = "United States"
 let city = "Houston"
 let age = 28
 let isMarried = true
 let year = 2022

 console.log(typeof(firstName))
 console.log(typeof(lastName))
 console.log(typeof(country))
 console.log(typeof(city))
 console.log(typeof(age))
 console.log(typeof(isMarried))
 console.log(typeof(year))

 // 2: Check if typeof "10" is equal to 10
 console.log(typeof('10') == 10)
 console.log(typeof(parseInt('10')))
 console.log(typeof(10))

 // 3: Check if parseInt('9.8') is equal to 10
 console.log(parseInt('9.8')== 10)

 // 4: Write three statements which provide truthy value
let myName = "Jose" //strings are truthy unless they are empty
let isSunny = true //True booleans are truthy
let currentYear = 2022 //all numbers are truthy except for zero
 
 // 4: write three statements which provide falsy value
 let numberOfApples = 0 //zero is falsy
 let isCloudy = false //False booleans are falsy
 let myAge //undefined values are falsy

 // 5: Comfirm the following with console.log
 console.log(4 > 3)     //True
 console.log(4 >= 3)    //True
 console.log(4 < 3)     //False
 console.log(4 <= 3)    //False
 console.log(4 == 4)    //True
 console.log(4 === 4)   //True
 console.log(4 != 4)    //False
 console.log(4 !== 4)   //False
 console.log(4 != '4')  //False
 console.log(4 == '4')  //True
 console.log(4 === '4') //False

 // 5: Find length of "python" and "jargon" and make a falsy comparison statment
 let python = "python"
 let jargon = "jargon"

 console.log(python.length)
 console.log(jargon.length)

 console.log(python.length !== jargon.length)

 // 6: Confirm the following with console.log
 console.log(4 > 3 && 10 < 12)    //True
 console.log(4 > 3 && 10 > 12)    //False
 console.log(4 > 3 || 10 < 12)    //True
 console.log(4 > 3 || 10 > 12)    //False
 console.log(!(4 > 3))            //False
 console.log(!(4 < 3))            //True
 console.log(!(false))            //True
 console.log(!(4 > 3 && 10 < 12)) //False
 console.log(!(4 > 3 && 10 > 12)) //True
 console.log(!(4 === '4'))        //True
 
 let dragon = "dragon"
 console.log(python.includes('on')) //True
 console.log(dragon.includes('on')) //True

 console.log(python.includes('on') && dragon.includes('on')) //True

 // 7: Use the Date Object for the following activities:
 const now = new Date()
 console.log(now)

 //What is today's year?
 console.log(now.getFullYear())

 //What is the month today as a number?
 console.log(now.getMonth())

 //What is the date today?
 console.log(now)

 //What is the day today as a number?
 console.log(now.getDate())

 //What is the hour now?
 console.log(now.getHours())

 //What is the minutes now?
 console.log(now.getMinutes())
 
 //Find out number of seconds elapsed since Jan 01, 1970 to now.
 console.log(now.getTime())


 //***************************** */
 //EXCERSIZE 2:
  //***************************** */

  /* 1: Create a script that prompts user to input the base and height
  of a triangle and calculate the area of the triangle (area = 0.5 x b x h) */

  let base = prompt("Enter the base of the triangle:")
  let height = prompt("Enter the height of the triangle:")

  let area = parseInt(base) * parseInt(height)

  console.log(`The area of the triangle is ${area}`)
  alert(`The area of the triangle is ${area}`)

  /* 2: Write a script that prompts the user to input side a, side b, and 
  side c of the triange. Next, calculate the perimeter.
  (perimeter = a + b + c) */

  let sideA = prompt("Enter the length of side A:")
  let sideB = prompt("Enter the length of side B:")
  let sideC = prompt("Enter the length of side B:")

  let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)

  console.log(`The perimeter of the triangle is ${perimeter}!`)
  alert(`The perimeter of the triangle is ${perimeter}!`)

  /* 3: Get the length and width of a rectangleand calculate the 
  area (area = length * width) and the perimeter
  (perimeter = 2 * (length + width)) */

  let length = prompt("Enter the length of the rectangle:")
  let width = prompt("Enter the width of the rectangle:")

  let rectangleArea = parseInt(length) * parseInt(width)

  let rectanglePerimeter =  2 * (parseInt(length) + parseInt(width))

  console.log(`The rectangle's area is ${rectangleArea} and it's perimeter is ${rectanglePerimeter}!`)
  alert(`The rectangle's area is ${rectangleArea} and it's perimeter is ${rectanglePerimeter}!`)

  /* 4: Get the radius of a circle using a prompt and then calculate the
  area of the circle (area = pi * r * r) and the 
  circumfrence (circumfrence = 2 * pi * r) where pi = 3.14 */

  let radius = prompt("Enter the radius of the cirlce:")

  let radiusNum = parseInt(radius)

  let circleArea = 3.14 * radiusNum * radiusNum

  let circumfrence = 2 * 3.14 * radiusNum

  console.log(`The area of the circle is ${circleArea} and the circumfrence is ${circumfrence}!`)
  alert(`The area of the circle is ${circleArea} and the circumfrence is ${circumfrence}!`)

/* 5: Calculate the slope, the x-intercept, and the y-intercept of 
  y = 2x - 2 */

  let yInt = -2
  let slope = 2

  let y = 2 * 0 -2
  console.log(`The y-intercept is ${y}`)

  let x = (y/2) + 2
  console.log(`The x-intercept is ${x}`)

/* 6: Slope is (m = y2-y1/x2-x1). Find the slope
 between point (2, 2) and point(6,10) */

 let y1 = 2
 let y2 = 10
 let x1 = 2
 let x2 = 6

 let slope2 = (y2 - y1) / (x2 - x1)

 console.log(`The slope is ${slope2}`)

 // 7: Compare the slope of the above 2 equations.

 console.log(slope == slope2)

 /* 8: Calculate the value of y.
    y = x^2 + 6x + 9
    Use different values of x to find where y = 0 */

 let newX = -3

 let newY = newX ** 2 + 6 * newX + 9

 console.log(newY)

 // 9: Promp user to enter hours and rate per hour. Calculate the pay. 

 let hours = prompt("How many hours did you work?")
 let hoursInt = parseInt(hours)

 let rate = prompt("What is your pay rate?")
 let rateInt = parseInt(rate)

 let pay = hoursInt * rateInt

 console.log(`Your pay is $${pay}!`)
 alert(`Your pay is $${pay}!`)

 /* 10: If the length of your name is greater 
 than 7 say, your name is long else say your name is short. */

let yourName = prompt("What is your name?")

let nameLength = yourName.length

if (nameLength >7 ){
    console.log("Your name is long!")
    alert("Your name is long!")
}
else { 
    console.log("Your name is short!")
    alert("Your name is short!")
}

/* 11: Compare your first name length and your
 family name length and say which name is longer. */

 let yourFirstName = prompt("What is your first name?")

 let yourLastName = prompt("What is your last name?")

 let firstNameLength = yourFirstName.length

 let lastNameLength = yourLastName.length

 if (firstNameLength > lastNameLength) {
     console.log(`Your first name, ${yourFirstName}, is longer than your last name, ${yourLastName}!`)
 }
 else {
     console.log(`Your last name, ${yourLastName} is longer than your first name, ${yourFirstName}!`)
 }

//12: Declare myAge and yourAge and calculate the difference in age.

let myCurrentAge = 83
let yourAge = 20

let ageDifference = parseInt(myCurrentAge) - parseInt(yourAge)
console.log(`I am ${ageDifference} years older than you!`)

/* 13: Using prompt get the year the user was born and if the
 user is 18 or above allow the user to drive if not tell the 
 user to wait a certain amount of years. */

 let yourCurrentAge = prompt("Enter your age:")
 let licenseAge = 18
 if (yourCurrentAge >= 18) {
     console.log("You are allowed to drive!")
 }
 else {
     let howLong = licenseAge - parseInt(yourCurrentAge)
     console.log(`You cannot drive yet! You can get a license in ${howLong} years!`)
 }

/* 14: Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. 
Assume some one lives just hundred years */

let howManyYears = prompt("How many years old are you?")
let secondsInYear = 31536000
let totalSeconds = secondsInYear * parseInt(howManyYears)
console.log(`You have lived for ${totalSeconds} seconds!`)

// 15: Create a human readable time format using the Date time object.

const dateTime = new Date()
const years = dateTime.getFullYear()
const month = dateTime.getMonth() + 1
const date = dateTime.getDate()
const newHours = dateTime.getHours()
const fullHours = newHours > 9 ? newHours : '0' + newHours
const minutes = dateTime.getMinutes()
const fullMinutes = minutes > 9 ? minutes : '0' + minutes

console.log(`${years}-${month}-${date} ${newHours}:${minutes}`)
console.log(`${date}-${month}-${years} ${newHours}:${minutes}`)
console.log(`${years}/${month}/${date} ${newHours}:${minutes}`)

// 15: Create human readable time with hours and minutes being 2 digits.
console.log(`${years}/${month}/${date} ${fullHours}:${fullMinutes}`)
