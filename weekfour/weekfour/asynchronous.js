/*
These examples cover:

1 - ms in setTimeout
2 - resolve in Promises
3 - .then, .catch, .finally
4 - throw and try...catch
5 - await in async functions
6 - microtasks vs macrotasks */

// setTimeout with ms
// Example: setTimeout waits before running code
console.log("Start");

setTimeout(() => {
  console.log("This message appears after 2000 ms (2 seconds).");
}, 2000);

console.log("End");
// Output order: Start → End → (after 2 seconds) "This message..."

// 2. Promise with resolve and .then
// Example: Promise that resolves after 1 second
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished waiting " + ms + " ms!");
    }, ms);
  });
};

delay(1000).then((message) => {
  console.log(message);
});
// Output after 1 second: "Finished waiting 1000 ms!"

// 3. Using .catch for errors
// Example: Promise that rejects (fails)
const mightFail = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("It worked!");
    } else {
      reject("Something went wrong!");
    }
  });
};

// Try success
mightFail(true)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.error("Error:", err));

// Try failure
mightFail(false)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.error("Error:", err));

//   4. throw and try...catch
// Example: throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // Works
  console.log(divide(10, 0)); // Throws error
} catch (err) {
  console.error("Caught an error:", err.message);
}

// 5. Async/Await with await
// Example: async/await
async function fetchData() {
  console.log("Fetching data...");
  const data = await delay(2000); // waits 2 seconds
  console.log("Got data:", data);
}

fetchData();

// 6. Microtask vs Macrotask (Promise vs setTimeout)
console.log("A");

Promise.resolve().then(() => {
  console.log("B (microtask)");
});

setTimeout(() => {
  console.log("C (macrotask)");
}, 0);

console.log("D");
// Output order: A → D → B → C
