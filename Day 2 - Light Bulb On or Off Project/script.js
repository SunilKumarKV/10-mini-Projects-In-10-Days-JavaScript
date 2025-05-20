const div1 = document.createElement("div");
div1.className = "light";

const div2 = document.createElement("div");
div2.className = "wire";

const div3 = document.createElement("div");
div3.className = "bulb";

const div4 = document.createElement("div");
div4.className = "switch";

const lightBulb = document.createElement("i");
lightBulb.className = "fas fa-lightbulb";
div3.appendChild(lightBulb);

// Nest structure
div1.appendChild(div2);
div1.appendChild(div3);
div1.appendChild(div4);

// Create second <i> tag with class "switch" and append to light
const powerOff = document.createElement("i");
powerOff.className = "fas fa-power-off";
div4.appendChild(powerOff);

// Append the final structure to the body
document.body.appendChild(div1);

const switchBtn = document.querySelector(".switch");
const body = document.body;

switchBtn.addEventListener("click", () => {
  body.classList.toggle("on");
});

// Dynamically create a style element
const style = document.createElement("style");
style.textContent = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
}

body.on{
    background: radial-gradient(#555,#111);
}

.wire{
    position: absolute;
    left: calc(50% - 2px);
    bottom: 50%;
    height: 60vh;
    width: 4px;
    background: #000;
    z-index: 1;
}

.bulb{
    position: relative;
    width: 80px;
    height: 80px;
    background: transparent;
    z-index: 2;
}

.bulb i {
    font-size: 4rem;
    color: #444;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%) rotate(180deg);
}

.switch{
    position: absolute;
    top: 60px;
    right: 100px;
    width: 40px;
    height: 40px;
    background: #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: gray 0px 10px 15px -5px;
    cursor: pointer;
}

.switch i{
    font-size: 1.5rem;
}

.on .bulb i{
    color: #ffd700;
}

.on .switch{
    background: #4caf50;
}`;

// Append the style to the head
document.head.appendChild(style);
