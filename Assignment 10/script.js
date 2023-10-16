class Toy {
    constructor(title, price, age, rating, pic) {
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        const toySection = document.createElement("section");
        toySection.classList.add("toy");

        const heading = document.createElement("h3");
        heading.innerText = this.title;
        toySection.appendChild(heading);

        toySection.appendChild(this.picture(this.pic));

        return toySection;
    }

    picture(pic) {
        const picItem = document.createElement("img");
        picItem.src = pic;
        return picItem;
    }
}

window.onload = () => {
    let toys = [];
    let toyList = document.getElementById("toy-list")

    toys.push(new Toy("Buzz", "75", "1-5", 4, "buzz.jpeg"));
    toys.push(new Toy("T-REX", "35", "3-5", 4, "rex.jpeg"));
    toys.push(new Toy("Car", "75", "1-5", 4, "car.jpeg"));
    toys.push(new Toy("Pop", "75", "1-5", 4, "pop.jpeg"));
    toys.push(new Toy("Unicorn", "75", "1-5", 4, "uni.jpeg"));
    toys.push(new Toy("Woody", "75", "1-5", 4, "woody.jpeg"));
    toys.push(new Toy("yoco", "75", "1-5", 4, "buzz.jpeg"));
    toys.push(new Toy("woco", "75", "1-5", 4, "buzz.jpeg"));


    for (let i in toys) {
        console.log(`Toy: ${toys[i].title}`);

        toyList.append(toys[i].item);
    }

};