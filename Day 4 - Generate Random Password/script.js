const div1 = document.createElement("div");
div1.className = "container";

const div2 = document.createElement("div");
div2.className = "number-container-password";

const div3 = document.createElement("div");
div3.className = "display";

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

const style = document.createElement("style");
style.textContent = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    background: linear-gradient(to right, #000, #01356d, #019f55);
    color: #fff;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-random-password {
    margin: 12%;
    width: 90%;
    max-width: 700px;
}

.display {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 30px;
    background: #fff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 25px;
    border-radius: 5px;
}

.container h1 {
    font-weight: 500;
    font-size: 45px;
}

.container h1 span {
    color: hotpink;
    border-bottom: 4px solid hotpink;
}

.display input {
    border: 0;
    outline: 0;
    font-size: 24px;
    flex: 1;
}

#copy {
    cursor: pointer;
    font-size: 24px;
}

.container button {
    border: 0;
    outline: 0;
    background: hotpink;
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 26px;
    border-radius: 5px;
    cursor: pointer;
}
`;

document.head.appendChild(style);

//-------
const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

// Password generator function
const generatePassword = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";

  let password = "";
  const lengthOfPassword = 8;

  for (let i = 0; i < lengthOfPassword; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    // console.log(password);
  }

  passwordBox.value = password;
};

// click Event
button.addEventListener("click", generatePassword);
copyButton.addEventListener("click", () => {
  const passwordCopy = passwordBox.value.trim();
  if (!passwordCopy) {
    alert("No password to copy! Please generate a password first.");
    return;
  }

  navigator.clipboard.writeText(passwordCopy).then(() => {
    alert("Password copied to clipboard!");
  });
});
