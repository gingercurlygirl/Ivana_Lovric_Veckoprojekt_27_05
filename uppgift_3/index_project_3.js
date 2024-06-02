import readline from 'node:readline/promises'

const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await rl.question('Do you want another joke? (Y/N)')
if (answer == "Y" || answer == "y") {
    let input = await rl.question('How many jokes do you want?')
    input = Number(input)
    if (isNaN(input)) {
        console.log('Please write a number, try again...')
    }
    else {
        if (input > programmingJokes.length) {
            input = programmingJokes.length
            console.log("Sorry, we have just " + programmingJokes.length +  " jokes")
        }
        console.log()
        for (let i = 0; i < input; i++) {
            console.log(programmingJokes[i])
        }
        console.log()
    }
}
else if (answer == "N" || answer == "n") {
    console.log("Thank you!")
}

rl.close()
