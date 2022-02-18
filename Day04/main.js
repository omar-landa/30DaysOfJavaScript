/****DAY 04 - CONDITIONALS******* */

/* IF STATEMENTS:

if (condition) {
  //this part of code runs for truthy condition
} */


/* IF-ELSE STATEMENTS:

if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
} */


/* IF-ELSE IF-ELSE STATEMENTS:

// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
} */


/* SWITCH STATEMENTS: 

switch(caseValue){
  case 1: ***Case blocks run if the value in the switch statement matches the case value***
    // code
    break ***break will terminate the execution once the condition is satisfied***
  case 2:
   // code
   break
  case 3:
  // code
  default: ***default will run if all cases dont satisfy the condition***
   // code
} */

/* TERNARY OPERATORS: 

***Another way to write conditionals***
Example: 

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  */



//Exercise 1: 

/* 1: Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' but
if not 18 give another feedback stating to wait for 
the number of years he neds to turn 18. */

let driversAge = prompt("Enter your age:")
let requiredAge = 18

if (driversAge >= 18) {
    console.log("You are old enough to drive.")
}
else {
    let yearsLeft = requiredAge - parseInt(driversAge)
    console.log(`You cannot drive for another ${yearsLeft} year(s).`)
} 

/* 2: Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating
 who is older (me or you). Use prompt(“Enter your age:”) to 
 get the age as input. */

 let yourAge = prompt("Enter your age:")
 let myAge = 29

 if (yourAge > myAge) {
     console.log("You are older than me!")
 }
 else {
     console.log("I am older than you!")
 }

 /* 3: If a is greater than b return 'a is greater than b' else 'a is
  less than b'. Try to implement it in to ways.
  use if-else and use ternary operator. */

  let a = 2
  let b = 1

  if (a > b) {
      console.log(`${a} is greater than ${b}`)
  }
  else {
      console.log(`${b} is greater than ${a}`)
  }


  let aGreaterThanB = true
  aGreaterThanB
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

/* 4: Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript? */

let number = prompt("Enter a number:")

let remainder = (parseInt(number) % 2)

if (remainder ==
     0) {
    console.log("Your number is even.")
}
else {
    console.log("Your number is odd.")
}


// Exercise 2:

/* 1: Write a code which can give grades to students 
according to theirs scores:
- 90-100, A
- 70-89, B
- 60-69, C
- 50-59, D
 -0-49, F */

 let grade = prompt("Enter a grade from 0 to 100:")

 switch(true) {
     case grade >= 90 && grade <= 100:
         console.log("Your grade is an A");
         break;
     case grade >= 70 && grade <= 89:
         console.log("Your grade is a B");
         break;
     case grade >= 60 && grade <= 69:
         console.log("Your grade is a C");
         break;
     case grade >= 50 && grade <= 59:
         console.log("Your grade is a D");
         break;
     case grade >= 0 && grade <= 49:
         console.log("Your grade is an F");
         break;
     default:
         console.log("Invalid number entered. Please enter a number between 0 and 100.");
 }

 /* 2: Check if the season is Autumn, Winter, Spring or Summer. 
 If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let currentMonth = prompt("Enter the current month:")
let month = currentMonth.toLowerCase()

switch(true) {
    case month == 'september':
    case month == 'october':
    case month == 'november':
        console.log("The season is Autumn");
        break;
    case month == 'december':
    case month == 'january':
    case month == 'february':
        console.log("The season is Winter");
        break;
    case month == 'march':
    case month == 'april':
    case month == 'may':
        console.log('The season is Spring');
        break;
    case month == 'june':
    case month == 'july':
    case month == 'august': 
        console.log("The season is Summer");
        break;
    default:
        console.log("Please enter a valid month of the year.");
        break;
}


/* 3: Check if a day is weekend day or a working day.
 Your script will take day as an input. */

 let enteredDay = prompt("Enter a day of the week:")

 let day = enteredDay.toLowerCase()

 if (day == 'monday' || day == 'tuesday' || day =='wednesday' || day == 'thursday' || day == 'friday'){
     console.log( `${enteredDay} is a working day.`)
 }
 else if (day == 'saturday' || day == 'sunday') {
     console.log(`${enteredDay} is a weekend day!`)
 }
 else {
     console.log("Please enter a valid day of the week.")
 }

//Exercise 3:

/* Write a program which tells the number of days in the 
month provided by user input. Consider leap year as well */

let enteredMonth = prompt("Enter the month:")
let userMonth = enteredMonth.toLowerCase()

switch(true) {
    case userMonth == 'january':
    case userMonth == 'march':
    case userMonth == 'may':
    case userMonth == 'july':
    case userMonth == 'august':
    case userMonth == 'october':
    case userMonth == 'december':
        console.log (`There are 31 days in ${userMonth}`);
        break;
    case userMonth == 'april':
    case userMonth == 'june':
    case userMonth == 'septmber':
    case userMonth == 'november':
        console.log(`There are 30 days in ${userMonth}`);
        break;
    case userMonth == 'february':
        let leapYear = prompt("Is this a leap year?")
        let enteredLeapYear = leapYear.toLowerCase()
        if (enteredLeapYear == 'yes') {
            console.log("There are 29 days in February!")
        }
        else {
            console.log("Ther are 28 days February!")
        }
        break;
    default:
        console.log("Please enter a valid month.");
        break;

        
}
