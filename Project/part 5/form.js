const submitHotel = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
}




document.getElementById("form-hotel").onsubmit = submitHotel;