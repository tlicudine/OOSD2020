let arr = [
    "You OTTER know, I like you",
    "I think we should keep seeing each OTTER",
    "Hello from the OTTER side",
    "You are OTTER-ly adorable"
];

const randomGreeting = () => {
    let gr = arr[Math.floor(Math.random()*arr.length)];
    return `${gr}`;
};

module.exports = {
    randomGreeting
};