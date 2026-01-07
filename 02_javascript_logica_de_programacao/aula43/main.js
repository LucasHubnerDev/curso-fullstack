const randomNumber = Math.floor(Math.random() * 100)

const fizzBuzz = (x) => {
    const number = Number(x)
    let status;

    if (typeof number !== "number") {
        return
    }

    if (number % 3 === 0 && number % 5 === 0) status = "FizzBuzz";
    else if (number % 3 === 0) status = "Fizz";
    else if (number % 5 === 0) status = "Buzz";

    return status ? status : number
}


const teste1 = fizzBuzz(15) // FizzBuzz
const teste2 = fizzBuzz(9) // Fizz
const teste3 = fizzBuzz(10) // Buzz
const teste4 = fizzBuzz("abc")
const teste5 = fizzBuzz(randomNumber)

// console.log(teste1, teste2, teste3, teste4, teste5)
console.log(teste5)
