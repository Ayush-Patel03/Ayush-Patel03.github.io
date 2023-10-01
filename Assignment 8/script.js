

var width = 0;
const run = () => {
    for (let i = 0; i < 40; i++) {
        
        width+=10;
        document.getElementById("man").style.setProperty("--x", width + "px");

        setTimeout(function(){
            console.log(i);
          }, 3000 * i)
    }
    console.log(width);
}

const interval = setInterval(() => {

}, 5000);

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