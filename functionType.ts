function add(num1: number, num2: number ){
    return num1 + num2;
}

function printResult(num: number) {
    console.log("Result is: " + num);
}

printResult(add(3,5));


// passing Function as a type.
// the function type shows the parameter of the function should be numbers and the fun should return a number.
let combinationValue: (a: number, b: number) => number;

combinationValue = add;
console.log(combinationValue(5,7));


// callback function type
function addHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addHandle(4,5, (result) => {
    console.log(result)
})


function sendRequest(data: string, cb: (response: any) => void) {
    return cb({data: "Hi there"});
}

sendRequest("See there!", (response) => {
   console.log(response);
   return true;
})