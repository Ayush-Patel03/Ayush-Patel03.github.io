window.onload = () => {
    document.getElementById("button-show").onclick = showPicture;
    document.getElementById("button-hide").onclick = hidePicture;
    document.getElementById("button-start").onclick = start;
    document.getElementById("button-show-name").onclick = writeMessage;
}

const showPicture = () => {
    document.getElementById("picture").classList.remove("hide");
}

const hidePicture = () => {
    document.getElementById("picture").classList.add("hide");
}

const start = () => {
    document.getElementById("circle").classList.add("animate");
}

const writeMessage = () => {
    const productName = document.getElementById("txt-product-name").value;
    const comment = document.getElementById("txt-comment").value;
    const rating = document.getElementById("txt-rating").value;
    const userName = document.getElementById("txt-user-name").value;
    const messageP = document.getElementById("message1");
    const messagett = document.getElementById("message2");
    const messagettt = document.getElementById("message3");

    messageP.innerHTML = productName;
    messagett.innerHTML = rating+"/5 stars " + comment;
    messagettt.innerHTML = "by " +userName;
}

