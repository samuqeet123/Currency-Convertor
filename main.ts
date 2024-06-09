import inquirer from "inquirer";

let Currency :any= {
    USD: {
        USD: 1,
        PKR: 277,
        INR: 83,
        EUR: 0.92
    },
    PKR:{USD: 0.0036,
        PKR: 1,
        INR: 0.3,
        EUR: 0.0033
    },
    INR: {
        USD: 0.012,
        PKR: 3,
        INR: 1,
        EUR: 0.011
    },
    EUR: {
        USD: 1.09,
        PKR: 301.92,
        INR: 90.61,
        EUR: 1
    }
}
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "convertFrom",
        message: "Please select your currency which you want to convert",
        choices: ["PKR", "INR", "USD", "EUR"]
    },
    {
        type: "list",
        name: "convertInto",
        message: "Please select the currency into which you want to convert",
        choices: ["PKR", "INR", "USD", "EUR"]
    },
    {
        type: "input",
        name: "amount",
        message: "Enter Amount"
    }
])

let amount: any = parseInt(answer.amount)
let output = Currency[answer.convertFrom][answer.convertInto]
let conversion = output * answer.amount
console.log(conversion)

if (answer.amount <= 0){
    console.log("Put value in positive") 
}
else if (Number.isNaN(answer.amount)){
    console.log("Invalid amount")
}

