
let toastCount = 0;


function showToast(e){
    e.preventDefault();
    let toast = document.createElement("div");
    toast.classList.add("toast");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    if(e.target.classList.contains("success")){
        p1.textContent = "Success";
        p2.textContent = "The stage is cleared";
    }else if(e.target.classList.contains("error")){
        p1.textContent = "Error";
        p2.textContent = "The submission encountered an error";
    } else if (e.target.classList.contains("warning")) {
        p1.textContent = "Warning";
        p2.textContent = "The submission produces a warning";
    } else if (e.target.classList.contains("info")) {
        p1.textContent = "Info";
        p2.textContent = "The submission requires additional information";
    }
    toast.appendChild(p1);
    toast.appendChild(p2);
    document.body.appendChild(toast);
    
    const gap = 10;
    const offset = (toastCount * (toast.offsetHeight + gap)) + 20;
    toast.style.bottom = `${offset}px`;

    setTimeout(()=>{
        toast.classList.add("show");},100);

    
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () =>{
            toast.remove();
            toastCount--;
            document.querySelectorAll(".toast").forEach((t, i) =>{
                t.style.bottom =`${(i * (t.offsetHeight + gap))}px`;
            });
        });}, 3000);
        
        toastCount++;
}
const saveBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const warningBtn = document.getElementById("warning");
const infoBtn = document.getElementById("info");

saveBtn.addEventListener("click", showToast);
errorBtn.addEventListener("click", showToast);
warningBtn.addEventListener("click", showToast);
infoBtn.addEventListener("click", showToast);
