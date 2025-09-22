document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roomType = document.getElementById("roomType").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  const confirmation = `
    <h3>Booking Confirmed!</h3>
    <p>Thank you, ${name}. You've booked a ${roomType} room from ${checkIn} to ${checkOut}.</p>
  `;

  document.getElementById("confirmation").innerHTML = confirmation;
});