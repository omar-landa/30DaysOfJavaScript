//Exercise 3:

// 1: The following is an array of 10 student ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//sort the array and find the min and max age

ages.sort((a,b) => a - b)

console.log(ages.length)
console.log(ages)
console.log(`The min age is ${ages[0]}`)
console.log(`The max age is ${ages[9]}`)

//Find the median age
        //sorts the array from smallest to largest,
console.log(ages.sort((a, b) => a - b))

let median

if(ages.length % 2 != 0) {  //executes for odd # of values in array
    let middleIndex = Math.floor(ages.length / 2)
    median = ages[middleIndex]
}
else {
    let middleIndex = Math.floor(ages.length / 2)  //executes for even # of values in array
    median = (ages[middleIndex] + ages[middleIndex - 1]) / 2
}

console.log(median)

//Find the average age
const averageAge = ages.reduce((a,b) => a + b) / 10
console.log(averageAge)

//Find the range of the ages (max - min)
let rangeOfAges = ages[9] - ages[0]
console.log(rangeOfAges)

//Compare (min-average) and (max-average) using abs() method
    
    //(min-average)
    let minAverage = ages[0] - averageAge
    let absMinAverage = Math.abs(minAverage)

    //(max-average)
    let maxAverage = ages[9] - averageAge
    let absMaxAverage = Math.abs(maxAverage)

    //Compare

    if(absMinAverage > absMaxAverage) {
        console.log("The absolute value of min-average is greater")
    }
    else {
        console.log("The absolute value of max-average is greater")
    }
