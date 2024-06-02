import readline from 'node:readline/promises'
import { programmingJokes } from './object';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await rl.question('Do you want to add joke? (Y/N)')
if (answer == "Y" || answer == "y") {
    let input_question = await rl.question('What is the question?')
    let input_answer = await rl.question('What is the answer?')
    programmingJokes.push({
        id: programmingJokes.length,
        question: input_question,
        answer: input_answer
    })
    console.log("Joke added!")
}
else if (answer == "N" || answer == "n") {
    console.log("Thank you!")
}

rl.close()
