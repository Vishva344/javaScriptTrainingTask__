class Task {
  constructor(id, taskName, status) {
    this.id = id;
    this.taskName = taskName;
    this.status = status;
  }
}

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let currentFilter = "all";
function addTask() {
  const taskNameElement = document.getElementById("taskName");
  const taskName = taskNameElement.value;
  if (taskName.trim() !== "") {
    const id = new Date().getTime();
    const task = new Task(id, taskName, false);
    taskList.push(task);
    saveTasks();
    taskNameElement.value = "";
    displayTasks();
  } else {
    alert("Please enter a task name.");
  }
}

function displayTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  let filteredTasks;
  if (currentFilter === "all") {
    filteredTasks = taskList;
  } else if (currentFilter === "completed") {
    filteredTasks = taskList.filter((task) => task.status);
  } else if (currentFilter === "incomplete") {
    filteredTasks = taskList.filter((task) => !task.status);
  }
  filteredTasks.forEach((task) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("span");
    checkbox.innerHTML = task.status ? "O" : "X";
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", () => {
      task.status = !task.status;
      saveTasks();
      displayTasks();
    });
    const label = document.createElement("label");
    label.innerHTML = task.taskName;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    taskListElement.appendChild(listItem);
  });
}

function deleteTask(id) {
  taskList = taskList.filter((task) => task.id !== id);
  saveTasks();
  displayTasks();
}

function saveTasks() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

const allButton = document.getElementById("allButton");
allButton.addEventListener("click", () => {
  currentFilter = "all";
  displayTasks();
});

const completedButton = document.getElementById("completedButton");
completedButton.addEventListener("click", () => {
  currentFilter = "completed";
  displayTasks();
});

const incompleteButton = document.getElementById("incompleteButton");
incompleteButton.addEventListener("click", () => {
  currentFilter = "incomplete";
  displayTasks();
});
