const div1 = document.createElement("div");
div1.className = "container";

const div2 = document.createElement("div");
div2.className = "number-container-password";

const div3 = document.createElement("div");
div2.className = "display";

const heading = document.createElement("h1");
heading.innerHTML = "generate a <br /><span>Random password</span>";

const clipBoard = document.createElement("i");
clipBoard.className = "fas fa-clipboard";
clipBoard.id = "copy";

const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Generate Password";

const input = document.createElement("input");
input.type = "text";
input.id = "password";
input.placeholder = "password";

div1.appendChild(div2);
div2.appendChild(heading);
div2.appendChild(div3);
div3.appendChild(input);
div3.appendChild(clipBoard);
div2.appendChild(btn);

// Append to body
document.body.appendChild(div1);