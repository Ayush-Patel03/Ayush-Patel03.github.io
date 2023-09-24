
const start = () => {
    const square = document.getElementById("square");

    //currentlu anuimating
    if (square.classList.contains("animate")) {
        square.classList.remove("animate");
        button.innerHTML = "Start";
    } else {
        square.classList.add("animate"); 
    }

}

 


window.onload = () => {
     document.getElementById("button-start").onclick = start;
     document.getElementById("button-stop").onclick = stop;
     document.getElementById("button-show-name").onclick = displayName;
}

