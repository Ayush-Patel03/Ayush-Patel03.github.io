function fetchStaffData(callback) {
    fetch('staff.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching staff data:', error));
}


function displayStaffList(data) {
    const staffList = document.getElementById('staff-list');

    data.staff.forEach(member => {
        const staffItem = document.createElement('div');
        staffItem.className = 'staff-item';

        staffItem.innerHTML = `
            <h1>${member.name}</h1>
            <h3>${member.position}</h3>
            <p>${member.description}</p>
        `;

        staffList.appendChild(staffItem);
    });
}
fetchStaffData(displayStaffList);
