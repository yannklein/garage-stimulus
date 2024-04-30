// DON'T CHANGE THIS LINE
window.myBadAssGarage = 'drift-container';
if (myBadAssGarage)
  document.querySelector('#garage-name').innerText = myBadAssGarage.replace(
    /-/g,
    ' ',
  );

// //////////////////////
// PSEUDOCODE
// //////////////////////
const url = 'https://wagon-garage-api.herokuapp.com/drift-container/cars';

// Get all the cars
// //////////////////////
const getCars = () => {
  // Select class cars-list
  const cars = document.querySelector('.cars-list');
  // fetch GET api returns an array
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // iterate over the array and for each car
      cars.innerHTML = '';
      data.forEach((car) => {
        const carDesc = `
      <div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand},${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong> ${car.owner}</p>
          <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
      </div>`;
        // Insert the car into the cars-list
        cars.insertAdjacentHTML('afterbegin', carDesc);
      });
    });
};

getCars();

// Add a new car
// //////////////////////
const addCar = document.querySelector('#submit-btn');

// add event listener(submit)
addCar.addEventListener("click", (event) => {
  event.preventDefault();
  // select the inputs from the user
  const brand = document.querySelector('#brand').value;
  const model = document.querySelector('#model').value;
  const plate = document.querySelector('#plate').value;
  const owner = document.querySelector('#owner').value;
  const data = { brand, model, plate, owner };
  // fetch post the user inputs
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      // refresh the cars-list
      getCars();
    });
})
