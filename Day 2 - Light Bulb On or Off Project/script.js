const div1 = document.createElement("div");
div1.className = "light";

const div2 = document.createElement("div");
div2.className = "wire";

const div3 = document.createElement("div");
div3.className = "bulb";

const lightBulb = document.createElement("i");
lightBulb.className = "fas fa-lightbulb";
div3.appendChild(lightBulb);

// Nest structure
div2.appendChild(div3);
div1.appendChild(div2);

// Create second <i> tag with class "switch" and append to light
const powerOff = document.createElement("i");
powerOff.className = "fas fa-power-off";
div1.appendChild(powerOff);

// Append the final structure to the body
document.body.appendChild(div1);


// Dynamically create a style element
const style = document.createElement("style");
style.textContent = ``;

// Append the style to the head
document.head.appendChild(style);