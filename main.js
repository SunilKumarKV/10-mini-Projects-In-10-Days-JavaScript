// Set the main title and Get the ul Element
const projectList = document.getElementById("projectList");
const addButton = document.getElementById("addButton");

// List of projects
const projects = [
        {
          day: "Day 1",
          name: "Hello Name App",
          folder: "Day 1 - Hello Name Application",
        },
        {
          day: "Day 2",
          name: "Light Bulb Toggle",
          folder: "Day 2 - Light Bulb On or Off Project",
        },
        {
          day: "Day 3",
          name: "Random Number Generator",
          folder: "Day 3 - Random Number Generator",
        },
      ];

      // Loop through projects and create list items
      function createProjectItem(project, index) {
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.textContent = `${project.day}: ${project.name}`;
        link.href = `${project.folder}/index.html`;
        link.target = "_blank";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "🗑";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", () => {
          projects.splice(index, 1);
          renderProjectList();
        });

        li.appendChild(link);
        li.appendChild(removeBtn);
        projectList.appendChild(li);
      }

      function renderProjectList() {
        projectList.innerHTML = "";
        projects.forEach((project, index) => createProjectItem(project, index));
      }

      addButton.addEventListener("click", () => {
        const newIndex = projects.length + 1;
        const newProject = {
          day: `Day ${newIndex}`,
          name: `Dynamic Project ${newIndex}`,
          folder: `Day ${newIndex} - Dynamic Project`,
        };
        projects.push(newProject);
        renderProjectList();
      });

      renderProjectList();

      // Enable drag and drop using SortableJS
      new Sortable(projectList, {
        animation: 150,
        onEnd: (evt) => {
          const movedItem = projects.splice(evt.oldIndex, 1)[0];
          projects.splice(evt.newIndex, 0, movedItem);
          renderProjectList(); // refresh buttons with correct indexes
        },
      });

// Dynamically create a style element
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: "Segoe UI", sans-serif;
    background: #ADD8E;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }

  h1 {
    margin-bottom: 20px;
    color: #333;
  }

  dashboard {
    background: #fff;
    border-radius: 12px;
    padding: 20px 30px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    margin: 10px 0;
    background: #e3f2fd;
    border-radius: 8px;
    cursor: grab;
  }

  li.dragging {
    opacity: 0.5;
  }

  a {
    flex-grow: 1;
    text-decoration: none;
    color: #0d47a1;
    font-weight: bold;
  }

  .remove-btn {
    background: #e53935;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
  }

  .remove-btn:hover {
    background: #c62828;
  }

  button#addButton {
    margin-top: 20px;
    width: 100%;
    background: #2196f3;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }

  button#addButton:hover {
    background: #1976d2;
  }
`;

// Append the style to the head
document.head.appendChild(style);
