function showDate() {
  const dateInput = document.getElementById("datePicker").value;
  const display = document.getElementById("selectedDate");

  if (dateInput) {
    display.textContent = "Seçilen Tarih: " + dateInput;
  } else {
    display.textContent = "";
  }
}

function goNext() {
  const dateInput = document.getElementById("datePicker").value;
  if (dateInput) {
    window.location.href = "Select_cloce.html?date=" + dateInput;
  } else {
    alert("Lütfen bir tarih seçiniz!");
  }
}
