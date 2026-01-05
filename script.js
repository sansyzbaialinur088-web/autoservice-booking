const serviceSelect = document.getElementById("service");
const priceSpan = document.getElementById("price");
const bookingList = document.getElementById("bookingList");

serviceSelect.addEventListener("change", () => {
    priceSpan.innerText = serviceSelect.value;
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const price = serviceSelect.value;
    const date = document.getElementById("date").value;

    const booking = { name, serviceText, date, price };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    displayBookings();
    this.reset();
    priceSpan.innerText = serviceSelect.value;
});

function displayBookings() {
    bookingList.innerHTML = "";
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.forEach(b => {
        bookingList.innerHTML += `
            <tr>
                <td>${b.name}</td>
                <td>${b.serviceText}</td>
                <td>${b.date}</td>
                <td>${b.price}</td>
            </tr>
        `;
    });
}

displayBookings();