// Save to Local Storage
function saveLocal() {
  let name = document.getElementById("username").value;
  localStorage.setItem("username", name); // name is automatically converted to a string
  alert("Saved to Local Storage!");
}

// Save to Session Storage
function saveSession() {
  let name = document.getElementById("username").value;
  sessionStorage.setItem("username", name);
  alert("Saved to Session Storage!");
 }

// // Show stored data from both
 function showData() {
   let localName = localStorage.getItem("username");
   let sessionName = sessionStorage.getItem("username"); // helps trhe local item to remember when to bring back what you stored

  document.getElementById(
    "output"
  ).innerHTML = `<strong>Local Storage:</strong> ${
    localName || "Nothing saved"
  }<br>
     <strong>Session Storage:</strong> ${sessionName || "Nothing saved"}`;
}

// // | Feature           | Local Storage                             | Session Storage                      |
// // | ----------------- | ----------------------------------------- | ------------------------------------ |
// // | Data Lifetime | Stays until manually deleted              | Disappears when tab is closed        |
// // | Storage Size  | \~5–10 MB                                 | \~5–10 MB                            |
// // | Scope         | Shared across all tabs of the same origin | Only available in the tab it was set |
// | Use Case      | Persistent user preferences, saved data   | Temporary data during a session      |
// local storage can store strings
// ; localStorage.setItem("age", "25"); // Explicit string
// or
localStorage.setItem("age", 25); // Will be converted to "25" automatically

localStorage.setItem("age", 25);
console.log(localStorage.getItem("age")); // "25" (string)
// use of JSON.stringify() and JSON.parse() for objects
let user = { name: "Pream", age: 20 };

// Store object as string
localStorage.setItem("user", JSON.stringify(user));

// Get and convert back to object
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Pream


// Real-life analogy:

// Local Storage = like writing in a notebook and keeping it on your desk forever.

// Session Storage = like writing on a sticky note that you throw away when you leave the room.


