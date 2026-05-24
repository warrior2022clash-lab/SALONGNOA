const bookingForm = document.querySelector("#booking-form");
const formNote = document.querySelector("#form-note");
const dateInput = bookingForm?.querySelector('input[type="date"]');

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const name = data.get("name");
  const treatment = data.get("treatment");
  const date = data.get("date");
  const time = data.get("time");

  formNote.textContent = `Tack ${name}! Din forfragan for ${treatment} ${date} kl. ${time} ar redo att skickas.`;
  bookingForm.reset();
});
