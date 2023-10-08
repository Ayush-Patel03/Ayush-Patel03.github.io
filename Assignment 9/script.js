const rainbow = () => {
    let count = 0;
    var width = 0;
    let p = document.querySelector("#count");

    const updateCount = setInterval(() => {
        count++;
        width+=10;
        document.getElementById("man").style.setProperty("--x", width + "px");

        if (count >= 35) {
            clearInterval(updateCount);
        }
    }, 1000);
}

i=0;
const resultDiv = document.getElementById("quote");
const ulElem = document.createElement("ul");
const liElem = document.createElement("li");
ulElem.append(liElem);
const quote = () => {
    ulElem.remove(liElem);
    console.log("test");
    
    resultDiv.append(ulElem);

    const quotes = ["test", "two", "three", "four", "five"]

    const liElem = document.createElement("li");
    liElem.textContent = quotes[i];
    ulElem.append(liElem);
    i++;
    if(i>4)
    {
        i=0;
    }
    
    
}

 


window.onload = () => {
    document.getElementById("button-rainbow").onclick = rainbow;
    setInterval(quote,2000);
}