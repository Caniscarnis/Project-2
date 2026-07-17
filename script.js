const greetings = ["awoo", "bark", "Hello", "Welcome"];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("greeting").textContent = randomGreeting;
