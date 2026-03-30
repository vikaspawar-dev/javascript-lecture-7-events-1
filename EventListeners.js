// node.addEventListener(event,callback)
let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("Button Was Clicked !");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button Was Clicked !");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("Button Was Clicked !");
// });




// node.removeEventListener(event,callback)

btn1.addEventListener("click", () => {
    console.log("Button Was Clicked ! - handler1");
});
btn1.addEventListener("click", () => {
    console.log("Button Was Clicked ! - handler2");
});

const handler3 = ()=>{
    
    console.log("Button Was Clicked !- handler3");
};



btn1.addEventListener("click", () => {
    console.log("Button Was Clicked !- handler4");
});

btn1.removeEventListener("click",handler3);
