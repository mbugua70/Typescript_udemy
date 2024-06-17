// types alias

type Combinable = number | string;
type ConversionScript = "as-number" | "as-text";

//  union types
function combine(
    // input1: string | number,
    //  input2: string | number,
    // resultConversion: "as-number" | "as-text"

    // using type alias instead
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionScript

     ) {
    let result;

    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedNames = combine("john", "pascal", "as-text");
const combinedAges = combine(23, 44, "as-number");

console.log(combinedNames);
console.log(combinedAges);

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }

//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }
//   To:

//   type User = { name: string; age: number };

//   function greet(user: User) {
//     console.log('Hi, I am ' + user.name);
//   }

//   function isOlder(user: User, checkAge: number) {
//     return checkAge > user.age;
//   }