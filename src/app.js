// DON'T CHANGE THIS LINE
window.myBadAssGarage = "yannz-garage";
if (myBadAssGarage) document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");

// //////////////////////
// PSEUDOCODE
// //////////////////////

// Get all the cars
// //////////////////////

// select the elements i want to change - cars-list - adding to it
// addEventListener - no need since we are loading at each refresh
// fetch - GET
// go to documentation to get the URL to be used in the fetch
// change the DOM: insert the car data into the .cars-list
// guess is: insertAdjacentHTML

const carsList = document.querySelector(".cars-list");

const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;  

const getCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const cars = data;

      carsList.innerHTML = "";
      // carsList.replaceChildren(); does the same!

      cars.forEach((car) => {
        const brand = car.brand;
        const model = car.model;
        const owner = car.owner;
        const plate = car.plate;

        carsList.insertAdjacentHTML("beforeend", `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${brand},${model}" />
        </div>
        <div class="car-info">
          <h4>${brand} ${model}</h4>
          <p><strong>Owner:</strong> ${owner}</p>
          <p><strong>Plate:</strong> ${plate}</p>
        </div>
      </div>`);
      });
    });
}
getCars();

// Add a new car
// //////////////////////


const addCar = (event) => {
  // Select form (Brand, model, plate, owner and button)
  const brandInput = document.querySelector("#brand");
  const modelInput = document.querySelector("#model");
  const plateInput = document.querySelector("#plate");
  const ownerInput = document.querySelector("#owner");
  const submitInput = document.querySelector("#submit-btn");
  
  event.preventDefault();
  console.log(event);
  // Post car in the API
  const newCar = {
    brand: brandInput.value,
    model: modelInput.value,
    owner: ownerInput.value,
    plate: plateInput.value
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar)
  }

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // Call the function getCars
      getCars();
    })
};

// Listen to "click" on the button
submitInput.addEventListener("click", addCar)