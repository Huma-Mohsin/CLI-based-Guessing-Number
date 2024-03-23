#!/usr/bin/env node
//creating a CLI based GUESSING NUMBER GAME
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber = Math.floor(Math.random() * 50 + 1);
console.log(randomNumber); //used for observation of flow(TESTING PURPOSE FOR CONDITIONS MATCH OR NOT)
const answers = await inquirer.prompt([{
        name: "GuessingNumber",
        type: "number",
        message: chalk.blueBright.bgYellow("Think of any Number and then Enter!")
    }]);
if (answers.GuessingNumber === randomNumber) {
    console.log(chalk.greenBright("Congratulations,You Won The Match!"));
}
else {
    console.log(chalk.redBright("Ooops!!! You Loss The Game,Try Again "));
}
//Author-HUMA MOHSIN
