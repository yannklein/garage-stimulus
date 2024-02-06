// DON'T CHANGE THIS LINE
window.myBadAssGarage = "dwayne-wayne";
if (myBadAssGarage) document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");

// //////////////////////
// PSEUDOCODE
// //////////////////////

// Get all the cars
// //////////////////////
// Steps
// 1. Get all the necessary HTML elements -> cars-list, 
// 2.5 Fetch an API -> Get the data about cars. 
// 3 Change the DOM -> Inserting cars cards into the cars-list. 

const displayCars = (carsInfo) => {
  const carsList = document.querySelector(".cars-list");
  carsList.innerHTML = '';
  carsInfo.forEach((carInfo) => {
    carsList.insertAdjacentHTML(
      'beforeend', 
      `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${carInfo.brand},${carInfo.model}" />
        </div>
        <div class="car-info">
          <h4>${carInfo.brand} ${carInfo.model}</h4>
          <p><strong>Owner:</strong> ${carInfo.owner}</p>
          <p><strong>Plate:</strong> ${carInfo.plate}</p>
        </div>
      </div>`
    );
  });
};

const getCars = () => {
  const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      displayCars(data);
  });
}

getCars();

// Add a new car
// //////////////////////
// 1. Get all the necessary HTML elements -> new-car and input: brand, model, plate, owner
const newCarForm = document.querySelector("#new-car");
const brandEl = document.querySelector("#brand");
const modelEl = document.querySelector("#model");
const ownerEl = document.querySelector("#owner");
const plateEl = document.querySelector("#plate");

// 2. Get the event listener -> submit on new-car
newCarForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  // 3. API (POST) the input (using .value)
  const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      brand: brandEl.value,
      model: modelEl.value,
      owner: ownerEl.value,
      plate: plateEl.value
    })
  }

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // 4. Get all the cars (once again)
    })
  getCars();
  console.log("hi")
});



