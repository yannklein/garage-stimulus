// DON'T CHANGE THIS LINE
window.myBadAssGarage = "le-swagon";
if (myBadAssGarage) document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");



// //////////////////////

// //////////////////////
// PSEUDOCODE
// //////////////////////

// Get all the cars
// //////////////////////
const url = "https://wagon-garage-api.herokuapp.com/le-swagon/cars";

const displayCars = () => {
  //1.select the element containing the cars list class
  const carList = document.querySelector(".cars-list")
  //2. fetch the api using GET request
  fetch(url).then(response => response.json())
  .then((data) => {
    console.log(data);
    carList.innerHTML = "";
    data.forEach((car)=> {
      carList.insertAdjacentHTML("beforeend",
      `<div class="car">
              <div class="car-image">
                <img src="http://loremflickr.com/280/280/${car.brand},${car.model}"/>
              </div>
              <div class="car-info">
                <h4>${car.brand} ${car.model}</h4>
                <p><strong>Owner:</strong> ${car.owner}</p>
                <p><strong>Plate:</strong> ${car.plate}</p>
              </div>
            </div>`
      )
    })
  })
};

displayCars();
//3. iterate using .forEach to display
//4.change the Dom to display.insertHTML 
//5. put this in a function 



// Add a new car
//1. select the 4 inputs and the button
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");
const plateInput = document.querySelector("#plate");
const ownerInput = document.querySelector("#owner");
const submitBtn = document.querySelector("#submit-btn");
//2. add event listener click on Button or submit dealers choice ;)

const addCar = (event) => {
  console.log(event);
  event.preventDefault();
  //3. Post request to add a new car
  const carData = {
    brand: brandInput.value,
    model: modelInput.value,
    owner: ownerInput.value,
    plate: plateInput.value
  };

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(carData)
  };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayCars();
    })
  //4. call display function after data 
};

submitBtn.addEventListener("click", addCar);

// //////////////////////
