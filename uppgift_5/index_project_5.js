import readline from 'node:readline/promises'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const number = getRandomInt(100);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await rl.question('Do you want to guess the number between 1-100? (Y/N)')
if (answer == "Y" || answer == "y") {
    let input_number = 101
    while (input_number != number) {
        input_number = await rl.question('What is the number?')
        input_number = Number(input_number)
        if (isNaN(input_number)) {
            console.log('Please write a number, try again...')
        }
        else if (input_number > number) {
            console.log('Number is smaller, try again..')
        }
        else if (input_number < number) {
            console.log('Number is higher, try again..')
        }
    }
    if (input_number == number) {
        console.log('Congratulations!! You guessed it!')
    }
}
else if (answer == "N" || answer == "n") {
    console.log("Thank you!")
}

rl.close()
