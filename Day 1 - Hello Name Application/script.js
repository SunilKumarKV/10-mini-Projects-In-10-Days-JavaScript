const btnElement = document.querySelector("button");
const spanElement = document.getElementById("updateContent");

btnElement.onclick = function () {
    const yourName = prompt("Please Enter Your Name");
    spanElement.textContent = yourName;
};

// Dynamically create a style element
const style = document.createElement("style");
style.textContent = `
 body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #a9b9c9;
 }

 .container{
    align-items: center;
 }

 spam{
    color: red;
 }

 button{
    background-color: hotpink;
    color: whitesmoke;
    padding: 0.5rem 1rem;
    border: 2px solid honeydew;
    box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
 }

 button:hover {
    background-color: #6c717d;
    color: #f0f0f0;
 }
`;

// Append the style to the head
document.head.appendChild(style);