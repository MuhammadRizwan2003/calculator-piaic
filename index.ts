#! /usr/bin/env node

import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "enter your first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "enter your second number"
    },
    {
        name: "operator",
        type: "list",
        choices: ["+", "-", "/", "*"]
    }
])


if (answers.operator === "+") {
    console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "-") {
    console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "/") {
    console.log(answers.firstNumber / answers.secondNumber);
} else {
    console.log(answers.firstNumber * answers.secondNumber);
}