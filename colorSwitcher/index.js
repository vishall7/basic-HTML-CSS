const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const bodyColor = window.getComputedStyle(body).backgroundColor;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if(window.getComputedStyle(e.target).backgroundColor){
        const backgroundColor = window.getComputedStyle(e.target).backgroundColor; 
        body.style.backgroundColor = backgroundColor;
        }
         
    });
});
