
function question1() {
let quote1 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote1 = quote1.trim();
if (quote1 === "Joey" || quote1 === "joey") {
    alert("That's right... How YOU doin'!?😎");
} else {
    alert("Bow wow, try again!");
} 
}
let answer1Button = document.querySelector(".answer1");
answer1Button.addEventListener("click", question1);

 function question2() {
let quote2 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote2 = quote2.trim();
if (quote2 === "Phoebe" || quote2 === "phoebe") {
    alert("Ohhhh no... you're right!😄");
} else {
    alert("Bow wow, try again!");
} 
}
let answer2Button = document.querySelector(".answer2");
answer2Button.addEventListener("click", question2);

function question3() {
let quote3 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote3 = quote3.trim();
if (quote3 === "Monica" || quote3 === "monica") {
    alert("I KNOW!... Or rather, YOU KNOW!🤭");
} else {
    alert("Bow wow, try again!");
} 
}
let answer3Button = document.querySelector(".answer3");
answer3Button.addEventListener("click", question3);

function question4() {
let quote4 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote4 = quote4.trim();
if (quote4 === "Ross" || quote4 === "ross") {
    alert("Correct, you've now achieved 'UNAGI'!🙇‍♂️");
} else {
    alert("Bow wow, try again!");
} 
}
let answer4Button = document.querySelector(".answer4");
answer4Button.addEventListener("click", question4);

function question5() {
let quote5 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote5 = quote5.trim();
if (quote5 === "Chandler" || quote5 === "chandler") {
    alert("Could you BE anymore correct?!😏");
} else {
    alert("Bow wow, try again!");
} 
}
let answer5Button = document.querySelector(".answer5");
answer5Button.addEventListener("click", question5);

function question6() {
let quote6 = prompt("Who said this? Was it Phoebe, Monica, Rachel, Joey, Chandler or Ross?");
quote6 = quote6.trim();
if (quote6 === "Rachel" || quote6 === "rachel") {
    alert("Ahh, Salmon skin roll... 🙇‍♀️");
} else {
    alert("Bow wow, try again!");
} 
}
let answer6Button = document.querySelector(".answer6");
answer6Button.addEventListener("click", question6);

function addSubscriber() {
 let name = prompt ("Hey friend, what's your first name?");
 let email = prompt ("What's your email address?")

let h1 = document.querySelector("h1");
 h1.innerHTML = `💜Thanks ${name}, more trivia heading your way!💜`;
}
let optinButton = document.querySelector(".subscribe");
optinButton.addEventListener("click", addSubscriber);
