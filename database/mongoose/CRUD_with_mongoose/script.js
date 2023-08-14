// Function to fetch reservations and update the list
async function fetchReservations() {
  const response = await fetch(
    "http://localhost:3000/reservations/getReservations"
  );
  const data = await response.json();

  const reservationList = document.getElementById("reservationList");
  reservationList.innerHTML = ""; // Clear the list

  data.data.reservations.forEach((reservation) => {
    // Change this line
    const listItem = document.createElement("li");
    listItem.textContent = `${reservation.eventName} - ${reservation.userName} - ${reservation.eventDate}`;
    reservationList.appendChild(listItem);
  });
}

// Fetch reservations when the page loads
window.onload = fetchReservations;

// Add event listener to the form submission
const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const formData = new FormData(reservationForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send POST request to create reservation
  const response = await fetch("http://localhost:3000/reservations/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("Reservation created successfully");
    fetchReservations(); // Update the list
  } else {
    console.error("Failed to create reservation");
  }
});
