display();

// fetch the data from the localStorage
function getUserData() {
  return JSON.parse(localStorage.getItem("userdata"));
}

// store the data by CURD operation in localStorage
function setUserData(data) {
  if (data) {
    return localStorage.setItem("userdata", JSON.stringify(data));
  }
  return localStorage.setItem("userdata", JSON.stringify(userData));
}

// User fill up the form and add the data in localstarge
function add() {
  let username = document.getElementById("name").value;
  let age = +document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let userID = Math.floor(Math.random() * 1000);
  if (userData == null) {
    console.log("userData = =  =", userData);
    setUserData([
      {
        userID: userID,
        username: username,
        age: age,
        city: city,
        state: state,
      },
    ]);
  } else {
    userData.push({
      userID: userID,
      username: username,
      age: age,
      city: city,
      state: state,
    });
    setUserData();
  }
  // myJson = JSON.stringify(userData)
  console.log(userData);
  display();
}

// Display the data from the localStorage and print on table rows
function display(sortedData) {
  if (sortedData) {
    userData = sortedData;
  } else {
    userData = getUserData();
  }
  let str = "";
  if (userData == null) {
    document.getElementById("tbody").innerHTML = str;
  } else {
    userData.forEach((value, index) => {
      str += `<tr><td>${value.userID}</td><td>${value.username}</td><td>${value.age}</td><td>${value.city}</td><td>${value.state}</td><td><button onclick="deleteUser(${value.userID})" class="btn btn-danger">Delete</button></td><td><button onclick="updateUser(${value.userID})" class="btn btn-dark">Edit</button></td>`;
      // console.log(value.userID)
    });
    document.getElementById("tbody").innerHTML = str;
  }
}

// Delete the user from the local storage
function deleteUser(id) {
  console.log(id);
  let userData = getUserData();
  const deletedData = userData.filter((data) => data.userID != id);
  console.log(deletedData);
  localStorage.setItem("userdata", JSON.stringify(deletedData));

  display();
}

// Update the user data and get value on form back and print on table
function updateUser(id) {
  let userData = getUserData();
  console.log(userData);
  userData.map((value) => {
    if (value.userID == id) {
      document.getElementById("name").value = value.username;
      document.getElementById("age").value = value.age;
      document.getElementById("city").value = value.city;
      document.getElementById("state").value = value.state;
      document.getElementById(
        "updatebtn"
      ).innerHTML = `<button onclick="updateData(${id})" class="btn btn-dark">Edit</button>`;
      console.log(id);
    }
  });
  display();
}
// Update userdata in localstorage
function updateData(id) {
  let username = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  userData = getUserData();
  // let updateUserId = id
  // userData.splice({"userID":userID,"username":username,"age":age,"city":city,"state":state});
  // localStorage.setItem("userdata",JSON.stringify(userData))
  // console.log(userData[index].userID);
  // let b = userData.filter((value,index)=> value.userID=updateUserId);
  // console.log(b[index]);
  userData.map((value) => {
    if (value.userID == id) {
      userData.splice(userData.indexOf(value), 1, {
        userID: id,
        username: username,
        age: age,
        city: city,
        state: state,
      });
    }
  });
  setUserData();
  display();
}

// Searching string for the all field of the table

function searchbar() {
  let search = document.getElementById("searchbar").value.toLowerCase();
  let userData = getUserData();
  console.log(userData);
  // debugger
  if (search !== "") {
    let searchStr = "";
    userData.forEach((value) => {
      if (
        value.username.toLowerCase().includes(search) ||
        value.userID.toString().includes(search) ||
        value.age.toString().includes(search) ||
        value.city.toLowerCase().includes(search) ||
        value.state.toLowerCase().includes(search)
      ) {
        searchStr += `<tr><td>${value.userID}</td><td>${value.username}</td><td>${value.age}</td><td>${value.city}</td><td>${value.state}</td><td><button onclick="deleteUser(${value.userID})" class="btn btn-danger">Delete</button></td><td><button onclick="updateUser(${value.userID})" class="btn btn-dark">Edit</button></td>`;
      }
    });
    document.getElementById("tbody").innerHTML = searchStr;
  } else {
    display();
  }
}

// sort all field with the ascending and descending order
clicked = false;
function sortData(key) {
  let userData = getUserData();
  let userCloneData = [...userData];
  if (clicked) {
    userCloneData
      .sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
      .reverse();
  } else {
    userCloneData.sort((a, b) =>
      a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
    );
  }
  clicked = !clicked;
  display(userCloneData);
}

// Clear Local storage
function clearLocalStorage() {
  localStorage.removeItem("userdata");
  display();
}
