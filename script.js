
const helloWorld = document.getElementById("hello-div");
let msg = () =>{
    if(element.classList.contains === success){
        return (`<p>Success</p><p>The submission is successfully uploaded</p>`);
    }
    if(element.classList.contains === error){
        return (`<p>Success</p><p>The submission encounters an eror.</p>`);
    }
    if(element.classList.contains === warning){
        return (`<p>Success</p><p>The submission produces a warning.</p>`);
    }
    if(element.classList.contains === info){
        return (`<p>Success</p><p>The submission requires additional information</p>`);
    }
    
};

function 


// function success(msg){
//     let outputDiv = document.createElement("div");
//     outputDiv.classList.add("toast");
//     outputDiv.innerHTML = `msg;

//     helloWorld.innerHTML = `<div id="flag-success" class="toast-progress">${msg}</div>`; 
// }
// function error(){
//     helloWorld.innerHTML = `<div id="flag-error" class="toast-progress">Error Message</div>`; 
// }
// function warning(){
//     helloWorld.innerHTML = `<div id="flag-warning" class="toast-progress">Warning Message</div>`; 
// }
// function info(){
//     helloWorld.innerHTML = `<div id="flag-info" class="toast-progress">Information Message</div>`; 
// }



const saveBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const warningBtn = document.getElementById("warning");
const infoBtn = document.getElementById("info");

saveBtn.addEventListener("click", success(successMsg));
errorBtn.addEventListener("click", error);
warningBtn.addEventListener("click", warning);
infoBtn.addEventListener("click", info);

