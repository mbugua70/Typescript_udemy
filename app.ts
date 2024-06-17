// unknown types

let userInput: unknown;
let clientInput: string

userInput = 4;
userInput = "Mary";

// to asign clientInput userInput we will have to use if statement becoz unlike the any type unknown are somehow restrictive.

if(typeof userInput === "string"){
    clientInput = userInput;
    console.log(clientInput);
}