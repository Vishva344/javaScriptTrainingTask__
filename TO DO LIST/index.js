class Task {
  constructor(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let taskName = document.getElementById("taskName").value;

  if (taskName) {
    let tasks = getTasks();
    let id = new Date().getTime();
    let task = new Task(id, taskName, false);
    tasks.push(task);
    saveTasks(tasks);
    displayTasks();
    document.getElementById("taskName").value = "";
    console.log("mydata ", taskName);
  }
}

// function displayTasks(filter = "all") {
//   let tasks = getTasks();
//   let taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";
//   tasks = tasks.filter((task) => {
//     if (filter === "completed") {
//       return task.status;
//     }
//    else if (filter === "incomplete") {
//        return !task.status;
//      }

//     return true;
//   });

//   for (let i = 0; i < tasks.length; i++) {
//     let task = tasks[i];
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `

//                  ${task.name}
//                  <button id="complete-btn">${
//                    task.status ? "Complete" : "Incomplete"
//                  }</button>

//               <button onclick="editTask(${task.id})">Edit</button>
//               <button onclick="deleteTask(${task.id})">Delete</button>`;

//     taskList.appendChild(listItem);
//   }
// }

// function completeTask() {
//   const complete = document.getElementById("complete");
//   const isNodeIncomplete = complete.firstChild.nodeValue === "Incomplete";
//   complete.firstChild.nodeValue = isNodeIncomplete ? "complete" : "Incomplete";
// }

// // Add event listener to table
// const el = document.getElementById("complete-btn");
// el.addEventListener("click", modifyText, false);

//   // completeBtn.removeEventListener("click", incomplete);
//   // completeBtn.addEventListener("click", complete);
//   // completeBtn.innerText = "complete";
//   saveTasks(tasks);
//   displayTasks();
// }

function deleteTask(id) {
  console.log(id);
  let tasks = getTasks();
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks.splice(i, 1);
      break;
    }
  }
  saveTasks(tasks);
  displayTasks();
}
// function updateStatus(id, status) {
//   let tasks = getTasks();

//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id == id) {
//       tasks[i].status = status;
//     }
//   }
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   saveTasks();

//   displayTasks();
// }
function updateTask(event) {
  const button = event.target;
  const listItem = button.parentNode;
  const taskId = listItem.getAttribute("data-id");
  let tasks = getTasks();
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks[i].status = !tasks[i].status;
      break;
    }
  }
  saveTasks(tasks);
  displayTasks();
}

window.onload = function () {
  displayTasks();
};

function displayAllTasks() {
  displayTasks("all");
}

function displayCompletedTasks() {
  displayTasks("completed");
}

function displayIncompleteTasks() {
  displayTasks("incomplete");
}
function displayTasks() {
  let tasks = getTasks();
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  // tasks = tasks.filter((task) => {
  //   if (filter === "completed") {
  //     return task.status;
  //   }
  // else if (filter === "incomplete") {
  //   return !task.status;
  // }

  //   return true;
  // });

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let listItem = document.createElement("li");
    listItem.innerHTML = `
                 
                 ${task.name}
                 <button class="complete-btn" data-id="${
                   task.id
                 }" onclick="updateTask(event)">
  ${task.status ? "Complete" : "Incomplete"}
</button>

                 
              <button onclick="editTask(${task.id})">Edit</button>
              <button onclick="deleteTask(${task.id})">Delete</button>`;

    taskList.appendChild(listItem);
  }
}
