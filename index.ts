import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold("\n#####################################################"));
console.log(chalk.inverse("====================================================="));
console.log(chalk.bold("\tWelcome To ABDULLAH WORD COUNTER"));
console.log(chalk.inverse("====================================================="));
console.log(chalk.bold("#####################################################"));
console.log("\n");

let condition = true
while (condition) {
	const answer: { sentence: string, functions: string } = await inquirer.prompt([{
		name: "sentence",
		type: "input",
		message: chalk.inverse.hex('#ca5310')("Enter Your Sentence Or Parah to count :")
	},
	{
		name: "functions",
		type: "list",
		message: chalk.inverse("Select"),
		choices: ["wordsCounting", "letterCounting",]
	}
	])
	if (answer.sentence == "") {
		console.log(chalk.bold.hex("#FF0000")("\n\t!! PLEASE ENTER SENTENCES OR PARAH !!"));
	} else {
		switch (answer.functions) {
			case "wordsCounting":
				const words = answer.sentence.trim().split(' ')
				console.log(words);
				console.log(chalk.bold.hex('#62FF00')(`\tYour Sentence Word Count is : ${words.length}`));
				break;
			case "letterCounting":
				const letter = answer.sentence.trim().split('')
				let filter = letter.filter(item => item.trim() !== "")
				console.log(filter);
				console.log(chalk.bold.hex('#62FF00')(`\tYour Sentence Letter Count is : ${filter.length}`));
				break;
			default:
				"Select Function";
				break;
		}
	}
	let user = await inquirer.prompt({
		type: "confirm",
		name: "quit",
		message: chalk.hex("#ff4hcx")("Do You Want To Count More? ")

	})
	condition = user.quit
}