const toastContainer = document.getElementById("toast-container");
const messages = {
    success : ["Success", "The submission is successfully processed."],
    error : ["error", "The submission encounters an error"],
    warning : ["Warning", "The submission encounters a warning"],
    info: ["info", "The submission looks for extra information"]
};

function showToast(type){
    let div1 = document.createElement("div");
    div1.classList.add("toast");
    let p1 = document.createElement("p");
    p1.textContent = messages[type][0];
    div1.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = messages[type][1];
    div1.appendChild(p2);
    toastContainer.appendChild(div1);

    setTimeout (()=>{
        div1.classList.add("show");
    }, 100)

}

document.querySelector(".container").addEventListener("click", (e)=>{
    if(e.target.tagName = "button"){
        const type = e.target.classList.contains("success")? "success":
        e.target.classList.contains("error")? "error": e.target.classList.contains("warning")? "warning": e.target.classList.contains("info")? "info": null;
        if(type){
            showToast(type);
        }
    }});
