let body = document.querySelector("body");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let h1 = document.querySelector("#heading");

/* BOX 1 */
box1.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#FFD400";
    box1.style.backgroundColor = "#FF004D";
    box1.style.fontFamily = "serif";
});

box1.addEventListener("mouseout", () => {
    body.style.backgroundColor = "skyblue";
    box1.style.backgroundColor = "red";
});

/* BOX 2 */
box2.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#3A9AFF";
    box2.style.backgroundColor = "#84B9EF";
    box2.style.fontFamily = "sans-serif";
});

box2.addEventListener("mouseout", () => {
    body.style.backgroundColor = "skyblue";
    box2.style.backgroundColor = "blue";
});

/* BOX 3 */
box3.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#48A111";
    box3.style.backgroundColor = "#237227";
    box3.style.fontFamily = "monospace";
});

box3.addEventListener("mouseout", () => {
    body.style.backgroundColor = "skyblue";
    box3.style.backgroundColor = "green";
});

/* H1 */
h1.addEventListener("mouseover", () => {
    h1.style.backgroundColor = "yellow";
    h1.style.fontFamily = "cursive";
});

h1.addEventListener("mouseout", () => {
    h1.style.backgroundColor = "chartreuse";
});