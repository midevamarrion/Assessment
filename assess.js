//Write a function that takes in a string and returns it when reversed
//let food = “eating”
let food ="eating"
function eat (food){
console.log(food.split(``).reverse(``).join(``))
}
eat(food)
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
let num=[2,8,0,23,5,45,76];
target=23;
function Search(target,num){
    let left =0
         let right = num.length-1
        while(left < right){
           let middle = Math.floor((left+right)/2);
             if (num[middle]=== target){
                return middle
             }
             else if(num[middle] < target){
            left = middle+1
           }
            else{
                right = middle-1
             }
        }
        return null
     }
    console.log(Search(target,num))
    
    
    


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let years=[]



//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let nambari=[];


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
let multiply =numArray.map(function(item){
    return item*4
})
console.log(multiply);


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”];
let nums =["10","24","45","56","67"];
let b=("turn to number")
console.log(b)


