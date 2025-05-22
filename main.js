// Set the main title and Get the ul Element
const title = document.getElementById("title");
const projectList = document.getElementById("projectList");

// List of projects
const projects = [
    { day: "Day 1", name: "Hello Name Application", folder: "Day 1 - Hello Name Application" },
    { day: "Day 2", name: "Light Bulb On/Off Project", folder: "Day 2 - Light Bulb On or Off Project" },
    { day: "Day 3", name: "Random Number Generator", folder: "Day 3 - Random Number Generator" },
    { day: "Day 4", name: "Generate Random Password", folder: "Day 4 - Generate Random Password" },
    { day: "Day 5", name: "Hello Nmae Appliction", folder: "Day 5 - Hello Nmae Appliction" },
    { day: "Day 6", name: "Hello Nmae Appliction", folder: "Day 6 - Hello Nmae Appliction" },
    { day: "Day 7", name: "Hello Nmae Appliction", folder: "Day 7 - Hello Nmae Appliction" },
    { day: "Day 8", name: "Hello Nmae Appliction", folder: "Day 8 - Hello Nmae Appliction" },
    { day: "Day 9", name: "Hello Nmae Appliction", folder: "Day 9 - Hello Nmae Appliction" },
    { day: "Day 10", name: "Hello Nmae Appliction", folder: "Day 10 - Hello Nmae Appliction" },
];

// Loop through projects and create list items
projects.forEach(project => {
    const li = document.createElement("li");
    const link = document.createElement("a")

    // Set link text and href
    link.textContent = `${project.day} - ${project.name}`;
    link.href = `${project.folder}/index.html`;
    link.target = "_blank"; // open in new tab

    //Append link to li and li to ul
    li.appendChild(link);
    projectList.appendChild(li);
});

// Create a button to add new project dynamically
const addButton = document.createElement("button");
addButton.textContent = "➕ Add New Project";
addButton.style.margin = "20px auto";
addButton.style.display = "block";
addButton.style.padding = "10px 20px";
addButton.style.fontSize = "16px";
addButton.style.cursor = "pointer";
addButton.style.borderRadius = "6px";
addButton.style.border = "none";
addButton.style.backgroundColor = "#4CAF50";
addButton.style.color = "white";
addButton.style.transition = "all 0.3s ease";

// Append button to body
document.body.appendChild(addButton);

// On click — add a new project item
addButton.addEventListener("click", () => {
  const newProject = {
    day: `Day ${projects.length + 1}`,
    name: "New Dynamic Project",
    folder: `Day ${projects.length + 1} - New Dynamic Project`
  };

  projects.push(newProject);
  createProjectItem(newProject);
});

// Dynamically create a style element
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
  }
  h1 {
    color: #4CAF50;
    text-align: center;
    margin-bottom: 30px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
  }
  li {
    background: #fff;
    margin: 10px 0;
    padding: 12px 18px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  li:hover {
    background: #e0ffe0;
    transform: scale(1.02);
  }
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  a:hover {
    color: #4CAF50;
  }
`;

// Append the style to the head
document.head.appendChild(style);
