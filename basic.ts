function add(num1: number, num2: number, showResult: boolean, showString: string){
    let results = num1 + num2;
    if(showResult){
        console.log(showString + results );
    }
    return num1 + num2
}

const number_one = 4;
const number_two = 12.2;
const printResult = true;
const showString = "Result is: "
add(number_one, number_two, printResult, showString)


console.log('Your code goes here!!');