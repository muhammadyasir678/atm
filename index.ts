#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Doller
let myPin = 2567;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Please enter your pin",
    type: "number",
  },
]);
//   25678 === 2567 - false
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    // =, -=, +=
    myBalance -= amountAns.amount;

    console.log("Your remaninig balance is: " + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("yourbalance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
