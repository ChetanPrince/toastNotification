const output = document.getElementById("output");
const messages =



const container = document.getElementById("container");
container.addEventListener/("click", (e)=>{
    if(e.target.tagName = "button"){
        const type = 
        e.target.classList.contains("success")?"success":
        e.target.classList.contains("error")?"error":
        e.target.classList.contains("warning")?"warning":
        e.target.classList.contains("info")?"info": null;
        if(type){
            showToast(type);
        }
    }
})