console.log("Ayush");

const add = (a, b) => {
    return a + b;
}

console.log(add(5, 6));

const square = a => a*a;
console.log(square(5));

const hello = () => console.log("hello me");

hello();

const helloSpecific = username => console.log("hello" + username + "!");
helloSpecific("Ayush");

const helloFullName = (firstName, lastName) => {
    console.log("hello" + firstName + " " + lastName);
    console.log("you are awsome!");
};

helloFullName("Ayush", "Patel")

/*Not okay to change const
const myName = "Portia";
myName = "sally";
*/

const myFunct = () => console.log("hey you!");




const start = () => {
    document.getElementById("square").classList.add("animate");
}

const stop = () => {
    document.getElementById("square").classList.remove("animate");
}
 
const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
     document.getElementById("button-start").onclick = start;
     document.getElementById("button-stop").onclick = stop;
     document.getElementById("button-show-name").onclick = displayName;
}

