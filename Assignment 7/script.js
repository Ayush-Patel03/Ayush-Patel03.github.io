const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const compareAge = () => {
    const name1 = document.getElementById("txt-name1").value;
    const name2 = document.getElementById("txt-name2").value;
    const name3 = document.getElementById("txt-name3").value;
    const age1 = parseInt(document.getElementById("txt-Age1").value);
    const age2 = parseInt(document.getElementById("txt-Age2").value);
    const age3 = parseInt(document.getElementById("txt-Age3").value);
    const res1 = document.getElementById("res1");

    if(age1 > age2 && age1 > age3 && age2 > age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name1 +", "+ name2 +", " +name3;
    } else if (age1 > age2 && age1 > age3 && age2 < age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name1 +", "+ name3 +", " +name2;
    } else if (age1 < age2 && age1 > age3 && age2 > age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name2 +", "+ name1 +", " +name3;
    } else if (age1 < age2 && age1 < age3 && age2 > age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name2 +", "+ name3 +", " +name1;
    } else if (age1 < age2 && age1 < age3 && age2 < age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name3 +", "+ name2 +", " +name1;
    } else if (age1 > age2 && age1 < age3 && age2 < age3) {
        res1.innerHTML = 'Oldest to youngest: ' + name3 +", "+ name1 +", " +name2;
    } else {
        res1.innerHTML = 'Oldest to youngest: Invalid Information';
    }
}

const color = () => {
    const dollars = parseInt(document.getElementById("txt-funds").value);
    if(dollars >= 25000 && dollars < 50000) {
        document.getElementById("square").classList.add("quarter");
        document.getElementById("square").classList.remove("half");
        document.getElementById("square").classList.remove("threequarter");
        document.getElementById("square").classList.remove("full");
    } else if (dollars >= 50000 && dollars < 75000) {
        document.getElementById("square").classList.add("half");
        document.getElementById("square").classList.remove("quarter");
        document.getElementById("square").classList.remove("threequarter");
        document.getElementById("square").classList.remove("full");
    } else if (dollars >= 75000 && dollars < 100000) {
        document.getElementById("square").classList.add("threequarter");
        document.getElementById("square").classList.remove("half");
        document.getElementById("square").classList.remove("quarter");
        document.getElementById("square").classList.remove("full");
    } else if (dollars >= 100000) {
        document.getElementById("square").classList.add("full");
        document.getElementById("square").classList.remove("half");
        document.getElementById("square").classList.remove("threequarter");
        document.getElementById("square").classList.remove("quarter");
    }
}

const exone = () => {
    document.getElementById("exercise2").classList.add("hidden");
    document.getElementById("exercise1").classList.remove("hidden");
 
}
const extwo = () => {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-compare-age").onclick = compareAge;
    document.getElementById("button-display").onclick = color;
    document.getElementById("one").onclick = exone;
    document.getElementById("two").onclick = extwo;
}