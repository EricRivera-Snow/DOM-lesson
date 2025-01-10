const heading = document.querySelector("h1");
const headingTwo = document.querySelector("h2");
const paragraphs = Array.from(document.querySelectorAll("p"));
const demoParagraphs = document.querySelectorAll("p.demo-class");
const anchorHome = document.querySelector("#anchor-home");
console.log(demoParagraphs);
console.log(paragraphs);
// paragraphs.forEach((para) => para.classList.add("body-text"));
demoParagraphs.forEach((para) => para.classList.add("body-text"));

// console.log(heading);
// heading.classList.add("blue");
// heading.style.color = "green";
// heading.style.fontSize = "70px";
headingTwo.innerText = "World";
heading.classList.add("blue");

const newAnchor = document.createElement("a");

const newAnchorTwo = document.createElement("a");

newAnchorTwo.innerText = "Read";
newAnchorTwo.setAttribute("href", "https://www.wikipedia.com");
// console.log(newAnchor);
anchorHome.appendChild(newAnchorTwo);

newAnchor.innerText = "Search";
newAnchor.setAttribute("href", "https://www.google.com");
console.log(newAnchor);
anchorHome.appendChild(newAnchor);