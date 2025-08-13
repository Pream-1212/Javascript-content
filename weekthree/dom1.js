console.log(document.title);
console.log("my file is connected");
console.log(document.body);
console.log(document.forms);
console.log(document.links);


let heading = document.getElementById("heading")
heading.textContent = "Welcome to Mayondo Wood"
heading.style.color="blue"
console.log(heading)


let header = document.getElementById("First")
header.innerHTML = "<h1>For quality furniture products</h1>";

//EVENTS 

//MORE DOM METHODS
let subHeadings = document.getElementsByTagName("h2")
console.log(subHeadings)


for (let i = 0; i < subHeadings.length; i++) {
    console.log(subHeadings[i])
}

let paragragh = document.getElementsByClassName("about")
console.log(paragragh.length)


//  let thirdTitle = document.querySelector("h3")  //it selects the first available element that matches the selector
// let thirdTitle = document.querySelector("#third-title");
// let thirdTitle = document.querySelector(".thirdTitle"); //it selects the first available element that matches the selector


let headingsArray = document.querySelectorAll("h2")//this captures everything
headingsArray[1].className = "container"
headingsArray[1].id = "sub-headings"

headingsArray[1].setAttribute("class", "container")
headingsArray[1].setAttribute("id", "sub-headings")
headingsArray[1].textContent = "Login"
headingsArray[1].style.backgroundColor = "green"


