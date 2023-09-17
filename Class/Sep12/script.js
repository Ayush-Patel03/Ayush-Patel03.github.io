const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi";
    helloP.classList.add("special")
}


window.onload = () => {
    const clickButton = document.getElementById("button-click");
    clickButton.onclick = changeText
    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-hide").onclick = hideJasper;
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}