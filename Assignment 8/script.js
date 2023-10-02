const run = () => {
    let count = 0;
    var width = 0;
    let p = document.querySelector("#count");

    const updateCount = setInterval(() => {
        count++;
        width+=10;
        document.getElementById("man").style.setProperty("--x", width + "px");

        if (count >= 25) {
            clearInterval(updateCount);
        }
    }, 1000);
}

const fill = () => {
    const dollars = parseInt(document.getElementById("txt-funds").value);
    let count = 0;
    var fill = 0;
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    let p = document.querySelector("#count");
    var per = dollars/100;
    const updateCount = setInterval(() => {
        count++;
        fillh++;
        document.getElementById("square").style.setProperty("--num", per +"%");

        if (count >= per) {
            clearInterval(updateCount);
        }
    }, 1000);
}



const color = () => {
    const dollars = parseInt(document.getElementById("txt-funds").value);
    console.log(dollars);
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue('--num'));
    var per = dollars/100;
    document.getElementById("square").style.setProperty("--num", per +"%");
}



window.onload = () => {
    document.getElementById("man").onclick = run;
    document.getElementById("button-display").onclick = color;
}