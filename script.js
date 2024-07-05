
const helloWorld = document.getElementById("hello-div");

function success(){
    helloWorld.innerHTML = `<div id="flag-success" class="toast-progress">Salaam Namaster || Good Morning</div>`; 
}
function error(){
    helloWorld.innerHTML = `<div id="flag-error" class="toast-progress">Error Message</div>`; 
}
function warning(){
    helloWorld.innerHTML = `<div id="flag-warning" class="toast-progress">Warning Message</div>`; 
}
function info(){
    helloWorld.innerHTML = `<div id="flag-info" class="toast-progress">Information Message</div>`; 
}



const saveBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const warningBtn = document.getElementById("warning");
const infoBtn = document.getElementById("info");

saveBtn.addEventListener("click", success);
errorBtn.addEventListener("click", error);
warningBtn.addEventListener("click", warning);
infoBtn.addEventListener("click", info);

