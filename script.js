
const helloWorld = document.getElementById("hello-div");

function showToast(e){
    e.preventDefault();
    let toast = document.createElement("div");
    toast.classList.add("toast");
    let p1 = document.createElement("p");
    p1.textContent = "Success";
    toast.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = "The stage is cleared";
    toast.appendChild(p2);
    document.body.appendChild(toast);
    
}
const saveBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const warningBtn = document.getElementById("warning");
const infoBtn = document.getElementById("info");

saveBtn.addEventListener("click", showToast);
errorBtn.addEventListener("click", showToast);
warningBtn.addEventListener("click", showToast);
infoBtn.addEventListener("click", showToast);


// let msg = () =>{
//     if(element.classList.contains === success){
//         return (`<p>Success</p><p>The submission is successfully uploaded</p>`);
//     }
//     if(element.classList.contains === error){
//         return (`<p>Success</p><p>The submission encounters an eror.</p>`);
//     }
//     if(element.classList.contains === warning){
//         return (`<p>Success</p><p>The submission produces a warning.</p>`);
//     }
//     if(element.classList.contains === info){
//         return (`<p>Success</p><p>The submission requires additional information</p>`);
//     }
// };