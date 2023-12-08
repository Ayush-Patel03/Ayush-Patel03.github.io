function fetchHotelData(callback) {
    fetch('hotels.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching hotel data:', error));
}

function displayHotelList(data) {
    const hotelList = document.getElementById('hotel-list');

    data.hotels.forEach(hotel => {
        const hotelItem = document.createElement('div');
        hotelItem.className = 'hotel-item';

        hotelItem.innerHTML = `
            <h1>${hotel.name}</h1>
            <h3>${hotel.location} ${hotel.rate}</h3>
            <p>${hotel.description}</p>
        `;

        hotelList.appendChild(hotelItem);
    });
}

fetchHotelData(displayHotelList);
