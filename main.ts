#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let red=chalk.red.bold.italic

let green=chalk.green.bold.italic

const prompt = await inquirer.prompt([
    {
        name :"num1",
        message :"Enter Any One Number",
        type : "number"
    }
])

let num1 : number = 3

let computerNumber : number = Math.floor(Math.random() * 10)

console.log(computerNumber);

if(prompt.num1 === computerNumber){
    console.log(green("\nCongratulations You Won The Game"));
}else{
    console.log(red("\nYou Lost The Game Try Again"));
    
}
