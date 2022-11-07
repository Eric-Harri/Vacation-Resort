"use strict";

const totalRoomCost = document.getElementById('totalRoomCost');
const totalDiscountCost = document.getElementById("totalDiscountCost");
const totalAdultChildren = document.getElementById("totalAdultChildren");
const totalCost = document.getElementById("totalCost");



function getRoomRate(event) {
    event.preventDefault(); 
  // price depends on in-season and out-of-season rates based on the checkin-date.
  const checkInDate = new Date(
    document.getElementById("check-in-date").value + "T00:00"
  );
  const numOfNights = document.getElementById("num-nights").value;
  const roomSelectElement = document.querySelector(
    'input[name="room-select"]:checked'
  );
  const discountElement = document.querySelector(
    'input[name="discount-radio"]:checked'
  );
  const numOfAdults = Number(document.getElementById("num-adults").value);
  const numOfChildren = Number(document.getElementById("num-children").value);
   
    if (numOfAdults && numOfChildren > 4) {
        document.getElementById("num-adults").innerText = "Can't exceed 4 adults";
        document.getElementById("num-children").innerText = "Can't exceed 4 children";
    }

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
  //  function for the room price calculation
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

  // discount pricing if statement
  let priceOfDiscount = 0;
  if (discountElement.value == "none") {
    priceOfDiscount = 0;
  }
  if (discountElement.value == "aaa/senior") {
    priceOfDiscount = 0.1 * priceOfRoom;
  }
  if (discountElement.value == "military") {
    priceOfDiscount = 0.2 * priceOfRoom;
  }

   let taxes = 0.12 * (priceOfDiscount + priceOfRoom);
  console.log(taxes);
}

totalRoomCost.innerHTML = priceOfRoom




window.onload = () => {
  getRoomRate();
};