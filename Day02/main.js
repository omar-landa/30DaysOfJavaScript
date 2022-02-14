
//Exercise 1

let challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,3))
console.log(challenge.substr(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(string.split(","))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))
console.log(sentence.lastIndexOf("because"))
console.log(sentence.search("because"))

let newChallenge = " 30 Days Of Java Script " 
console.log(newChallenge)
console.log(newChallenge.trim())

console.log(challenge.startsWith(30))
console.log(challenge.endsWith('Script'))

console.log(challenge.match('a'))

let challenge2 = "30 Days Of "
let challenge3 = "JavaScript"
console.log(challenge2.concat(challenge3))

console.log(challenge.repeat(2))


//Exercise 2

let quote = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."
console.log(quote)

let secondQuote = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(secondQuote)

console.log(typeof('10') == 10)
console.log(typeof('10'))
console.log(parseInt('10') == 10)

console.log(parseFloat('9.8') == 10)
console.log(Math.round(parseFloat('9.8')) == 10)

let python = "python"
let jargon = "jargon"
console.log(python.includes('on'))
console.log(jargon.includes('on'))

let excersizeQuestion6 = "I hope this course is not full of jargon"
console.log(excersizeQuestion6.includes('jargon'))

//Random Number Between 0 And 100
let randomNum = Math.random()
let numBtwnZeroAndOneHundred = randomNum * 99
let randomNumToFloor = Math.floor(numBtwnZeroAndOneHundred)
console.log(randomNumToFloor)

//Random Number Between 50 And 100
let max = 100
let min = 50
let numberBetweenFiftyAndOneHundred = Math.floor(Math.random() * (max - min) + min);
console.log(numberBetweenFiftyAndOneHundred)


//Random Number Between 0 and 255
let biggerRandomNum = Math.random()
let numBtwnZeroAndTwoFiveFive = biggerRandomNum * 99
let biggerRandomNumToFloor = Math.floor(numBtwnZeroAndTwoFiveFive)
console.log(biggerRandomNumToFloor)

//Escape Characters Question
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 7 \n 4 1 4 16 64 \n 5 1 5 25 125")

//Slice out a phrase
console.log(sentence.substr(30, 24))


//Exercise 3

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(love.match('love'))

let pattern = /love/gi
console.log(love.match(pattern))

let pattern2 = /because/gi
console.log(sentence.match(pattern2))

const sentence2 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
console.log(sentence2.replace(/[^\w ]/g, ""))


//Pull the numbers out of the array; Convert the strings to ints; Add the total sum of the ints
let salarySentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaryArray = salarySentence.match(/\d+/g)
console.log(salaryArray)

let amountOne = salaryArray[0]
let amountOneInt = parseInt(amountOne)
console.log(amountOneInt)

let amountTwo = salaryArray[1]
let amountTwoInt = parseInt(amountTwo)
console.log(amountTwoInt)

let amountThree = salaryArray[2]
let amountThreeInt = parseInt(amountThree)
console.log(amountThreeInt)

let totalSalary = amountOneInt + amountTwoInt + amountThreeInt
console.log(totalSalary)

