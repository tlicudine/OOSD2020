let greetings = [
    "Hi",
    "Hello",
    "Sup?",
    "Aloha"
]

const randomGreeting = (arr) => {
    let greet = arr[Math.floor(Math.random()*arr.length)];
    console.log(greet);
}

module.exports = {
    randomGreeting
}