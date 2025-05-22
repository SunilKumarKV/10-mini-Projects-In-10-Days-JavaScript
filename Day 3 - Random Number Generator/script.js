const div1 = document.createElement("div");
div1.className = "container";

const div2 = document.createElement("div");
div2.className = "number-container";

const span = document.createElement("span");
span.id = "random-number";
span.textContent = "0";

const headerText = document.createElement("h1");
headerText.textContent = "Random Number Generator";

const btn = document.createElement("button");
btn.id = "generate-btn";
btn.textContent = "Generate";

// Nest structure
div1.appendChild(headerText);
div1.appendChild(div2);
div2.appendChild(span);
div1.appendChild(btn);

// Append the final structure to the body
document.body.appendChild(div1);

// Dynamically create a style element
const style = document.createElement("style");
style.textContent = `
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3498db;
    color: white;
}

.container {
    text-align: center;
}

.number-container {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeIn 1s ease-in-out;
}

.keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

button {
    background-color: #2ecc71;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;

}

button:hover {
    background-color: #27ae60;
}
`;

// Append the style to the head
document.head.appendChild(style);

// Add event listener to generate random number on button click
document.getElementById("generate-btn").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100
  document.getElementById("random-number").textContent = randomNumber;
});