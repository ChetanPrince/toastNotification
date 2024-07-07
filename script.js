const toastContainer = document.getElementById('toast-container');

        const messages = {
            success: ["Success", "The submission is successfully uploaded"],
            error: ["Error", "The submission encountered an error"],
            warning: ["Warning", "The submission produces a warning"],
            info: ["Info", "The submission requires additional information"]
        };

        function showToast(type) {
            if (!messages[type]) {
                console.error(`Unknown toast type: ${type}`);
                return;
            }

            let div1 = document.createElement("div");
            div1.classList.add("toast");

            let p1 = document.createElement("p");
            p1.textContent = messages[type][0];
            div1.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent = messages[type][1];
            div1.appendChild(p2);

            toastContainer.appendChild(div1);

            // Show the toast
            setTimeout(() => {
                div1.classList.add("show");
            }, 100);

            // Automatically remove the toast after a certain time
            setTimeout(() => {
                div1.classList.remove("show");
                div1.addEventListener('transitionend', () => {
                    div1.remove();
                });
            }, 3000);
        }

        document.querySelector(".container").addEventListener("click", function(e){
            if(e.target.tagName = "button"){
                const type = e.target.classList.contains("success")? "success":
                e.target.classList.contains("error")? "error": e.target.classList.contains("warning")? "warning":e.target.classList.contains("info")? "info": null;
            if(type){
                showToast(type);
            }
            }

        });