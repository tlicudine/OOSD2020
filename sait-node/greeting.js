let arr = [
    "Hi",
    "Hello",
    "Aloha",
    "Sup"
];

const randomGreeting = () => {
    let gr = arr[Math.floor(Math.random()*arr.length)];
    return `${gr}`;
};

module.exports = {
    randomGreeting
};