const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";


    try{
        const response = await fetch(url);
        return await response.json();
    }catch(error)
    {
        console.log(error);
    }
}; 


const showMovies =async()=> {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");
    movies.forEach(movie => {
        moviesSection.append(getMovieItem(movie));
    });
};

const getMovieItem= (movie)=>{
    let section = document.createElement("section");
    let section2 = document.createElement("section");
    let section3 = document.createElement("section");
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;


    section.append(section2);
    section.append(section3);

    section.classList.add("section");
    section.classList.add("border");
    section2.classList.add("img-flexing");

    section3.classList.add("p-flex");



    section3.append(h3);
    let ul = document.createElement("ul");
    section3.append(ul);
    ul.append(getLi(`Director: ${movie.director}`));
    ul.append(getLi(`Actors: ${movie.actors}`));
    ul.append(getLi(`Year released: ${movie.year}`));
    ul.append(getLi(`Genres: ${movie.genres}`));
    ul.append(getLi(movie.description));


   let img = document.createElement("img");
   img.src = "https://portiaportia.github.io/json/" + movie.img;
   img.classList.add("img-sizer");
   section2.append(img);





   section.append(movie.img);




    return section;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};

window.onload =() => showMovies();