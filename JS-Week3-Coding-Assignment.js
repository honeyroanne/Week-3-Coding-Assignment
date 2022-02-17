//1
////a
{
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
let lastAge = ages[ages.length-1]
let firstAge = ages[0];
console.log("subtracted value = " + (lastAge - firstAge));
////b
let addNewAge = [3, 9, 23, 64, 2, 8, 28, 93, 90]
let newLastAge = addNewAge[addNewAge.length-1]
let newFirstAge = addNewAge[0];
console.log("new age = " + (newLastAge - newFirstAge));
////c
let sum = 0
let averageAge = 0
    for (let i = 0; i < addNewAge.length; i++) {
        sum += addNewAge[i]
        averageAge = sum/addNewAge.length;
}
console.log("average age = " + (averageAge));
}


//2
////a
let names = [];
names.push("Sam")
names.push("Tommy")
names.push("Tim")
names.push("Sally")
names.push("Buck")
names.push("Bob") 
let sum = 0;
    for (let i = 0; i < names.length; i++) {
        sum += names[i].length;
}
        average = sum / names.length;
console.log(average)
console.log()
//////b
let concatenatedNames = []
    for(let i = 0; i < names.length; i++) { 
        let name = names[i];
        concatenatedNames += name + ", ";
}
console.log(concatenatedNames)



//3
console.log("last element of any array = element[element.length-1]");



//4
console.log("first element of any array = element[0]")



//5
let namesArray = names
console.log(namesArray)

let nameLengths = namesArray.map (function(element) {
    return element.length;
});
console.log(nameLengths);



//6 console.log(names.length)
let newSum = 0
    for (let i = 0; i < nameLengths.length; i++) {
        newSum += nameLengths[i];
}
console.log(newSum)



//7 
function repeat(word, n) {
    if(typeof(n) == "undefined") {
        count =1;
}
    return n < 1 ? " " : new Array(n + 1).join(word);
}
console.log(repeat('hey',3))



//8
function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}
let fullName = createFullName("Roanne", "Torres");
console.log ("full name = " + fullName);



//9
let numbers = [10, 20, 30, 40 , 50]
let trueNumbers = numbers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
});
function numberSum(trueNumbers){
    if(trueNumbers > 100) {
        return true
    } 
        return false;
};
console.log(numberSum(trueNumbers));



//10
function sumOfAllNumbers(numbers) {
let total = numbers.reduce((accumulator,currentValue) => accumulator
    +currentValue, 0);
    return total / numbers.length;
  }
  
  let theAverage = sumOfAllNumbers(numbers);
  console.log(theAverage);



//11
let firstGroup = [15, 30, 60, 120]
let secondGroup = [5, 10, 15, 20]
let averageOfFirstGroup = firstGroup.reduce(function(accumulator,currentValue){
    return (accumulator + currentValue) 
});
// console.log(averageOfFirstGroup/firstGroup.length)

let averageOfSecondGroup = secondGroup.reduce(function(accumulator,currentValue){
    return accumulator + currentValue 
});
// console.log(averageOfSecondGroup/secondGroup.length)

function createGreaterAverage (firstGroup, secondGroup){
    return firstGroup > secondGroup
} 
let greaterAverage = createGreaterAverage ((averageOfFirstGroup/firstGroup.length), (averageOfSecondGroup/secondGroup.length));
console.log("average of the elements in the first array is greater than the average of the elements in the second array = " +greaterAverage);



//12
let isHotOutside = true
let moneyInPocket = 11
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true && moneyInPocket > 10.50) {
        return true
    } 
    return false;
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));



//13
// I created a function named sumOfThree that accepts 3 integer variables named one, two, and three. 
// and return the sum of the three variables.
let a = 1;
let b = 2;
let c = 3;
function sumOfThree(one, two, three){
    return one + two + three;
}
console.log(sumOfThree(a,b,c));