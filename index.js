
document.getElementById("button").addEventListener("click",()=>{
    let theme = document.body.getAttribute("data-theme");
    if(theme === "light"){
        document.body.setAttribute("data-theme","dark");
        document.getElementById("button").textContent = "Dark";
    }
    else{
        document.body.setAttribute("data-theme","light");
        document.getElementById("button").textContent = "Light";
    }
    
})