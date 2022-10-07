"use strict";

window.onload = function () {
  getRoomRate();
};

function getRoomRate() {
  // price depends on in-season and out-of-season rates based on the checkin-date.
  const checkInDate = new Date(
    document.getElementById("check-in-date") + "T00:00"
  );
  const numOfNights = document.getElementById("num-nights").value;
  const roomSelectElement = document.querySelector(
    'input[name="room-select"]:checked'
  );
  const discountElement = document.querySelector(
    'input[name="discount-radio"]:checked'
  );

  let priceOfRoom = 0;

  let currentMonth = checkInDate.getMonth();
  let inSeason = false;

  switch (currentMonth) {
    case 5:
    case 6:
    case 7:
      inSeason = true;
      break;
    default:
      inSeason = false;
  }

  if (
    (inSeason && roomSelectElement.value == "queen") ||
    roomSelectElement.value == "king"
  ) {
    priceOfRoom = 250.0 * numOfNights;
  } else if (
    (!inSeason && roomSelectElement.value == "queen") ||
    roomSelectElement.value == "king"
  ) {
    priceOfRoom = 150.0 * numOfNights;
  }

  if (inSeason && roomSelectElement.value == "2-bed-suite") {
    priceOfRoom = 350.0 * numOfNights;
  } else if (!inSeason && roomSelectElement.value == "2-bed-suite") {
    priceOfRoom = 210.0 * numOfNights;
  }
}
