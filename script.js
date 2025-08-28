// ====================
// Part 1: Variables & Conditionals
// ====================
let age = 22;

if(age >= 18) {
    document.getElementById("conditionalOutput").textContent = "You are an adult.";
} else {
    document.getElementById("conditionalOutput").textContent = "You are a minor.";
}

// ====================
// Part 2: Functions
// ====================

// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JS project.`;
}

// Function 2: Calculate sum
function sum(a, b) {
    return a + b;
}

// Display outputs
let functionOutput = `
${greetUser("v01d")} 
The sum of 5 + 10 is ${sum(5,10)}.
`;
document.getElementById("functionOutput").textContent = functionOutput;

// ====================
// Part 3: Loops
// ====================

const loopOutput = document.getElementById("loopOutput");

// For loop
for(let i = 1; i <= 5; i++){
    let li = document.createElement("li");
    li.textContent = `For loop iteration ${i}`;
    loopOutput.appendChild(li);
}

// While loop
let j = 1;
while(j <= 3){
    let li = document.createElement("li");
    li.textContent = `While loop iteration ${j}`;
    loopOutput.appendChild(li);
    j++;
}

// ====================
// Part 4: DOM Interactions
// ====================

// 1. Change header color
document.getElementById("colorButton").addEventListener("click", () => {
    document.querySelector("header").style.color = "blue";
});

// 2. Add new list item
document.getElementById("addItemButton").addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New item added dynamically!";
    loopOutput.appendChild(li);
});

// 3. Create dynamic div content
let dynamicDiv = document.getElementById("dynamicDiv");
dynamicDiv.textContent = "This div content was added dynamically via JS!";
dynamicDiv.style.backgroundColor = "#f0f0f0";
dynamicDiv.style.padding = "10px";
dynamicDiv.style.marginTop = "10px";
