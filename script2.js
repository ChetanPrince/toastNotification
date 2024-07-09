
// const output = document.getElementById("output");

// const messages = {
//     success: ["success", "This submission has been successfully submitted"],
//     error: ["error", "This submission has encountered an error"],
//     warning: ["warning", "This submission is showing an error"],
//     info: ["info", "This submission requires additional information"]
// };

// function showToast(type){
//     let div1  = document.createElement("div");
//     div1.classList.add("toast");
//     let p1 = document.createElement("p");
//     p1.textContent = messages[type][0];
//     div1.appendChild(p1);
//     let p2 = document.createElement("p");
//     p2.textContent = messages[type][1];
//     div1.appendChild(p2);
//     output.appendChild(div1);

//     setTimeout(()=>{
//         div1.classList.add("show");
//     }, 100);

//     setTimeout(()=>{
//         div1.classList.remove("show");
//         div1.addEventListener("transitionend", ()=>{
//             div1.remove();
//         });
        
//     }, 3000);

// }
// const btnContainer = document.getElementById("container");

// btnContainer.addEventListener("click", (e)=>{
//     if(e.target.tagName = "BUTTON"){
//         const type = e.target.classList.contains("success")? "success": 
//         e.target.classList.contains("error")? "error" : 
//         e.target.classList.contains("warning")? "warning":
//         e.target.classList.contains("info")? "info": null;
        
//         console.log(type);
//     if(type){
//         showToast(type);
//     }
//     }
// });

const output = document.getElementById("output");
const messages = {
    success : ["Success", "The submission is successfully processed."],
    error : ["Error", "The submission encounters an error"],
    warning : ["Warning", "The submission encounters a warning"],
    info: ["Info", "The submission looks for extra information"]
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
    output.appendChild(div1);
    
    const names = {
        success : "success",
        error : "error",
        warning : "warning",
        info : "info",
    }

    setTimeout (()=>{
        div1.classList.add("show");
    }, 100);

    setTimeout(()=>{
div1.classList.remove("show");
div1.addEventListener("transitionend",()=>{
    div1.remove();
} );
    }, 3000);


}

document.querySelector("#container").addEventListener("click", (e)=>{
    if(e.target.tagName = "button"){
        const type = e.target.classList.contains("success")? "success":
        e.target.classList.contains("error")? "error": e.target.classList.contains("warning")? "warning": e.target.classList.contains("info")? "info": null;
        console.log(type)
        
        if(type){
            showToast(type);
        }
    }});
