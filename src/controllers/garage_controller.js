// DON'T CHANGE THIS LINE
const myBadAssGarage = window.myBadAssGarage;
// //////////////////////


// //////////////////////
// Pseudo-code
// //////////////////////


// - Initalize Stimulus
// //////////////////
// Tips: use 'sch' shortcut to build the controller
// sch
// add the data controller to html page




// - Add a car
// //////////////////
// target the #car-form
// add an action (click on submit-button (disableDefault))
// fetch (post) from the input values
// dispay the cars (like above)


// ///////////////////////
// Code
// ///////////////////////

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'list', 'brand', 'owner', 'plate', 'model' ]

  connect() {
    // - Display the cars
    // //////////////////
    // get the url and api key(possibly)
    
    // fetch data from the url in connect 
    // set the targets from the cars-list 
    // create cards
    // insertAdjacentHTML (image, title, information etc) beforeend 
    console.log('Hello from garage_controller.js')
    this.url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`
    this.displayCars()
  }

  displayCars() {
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // console.log(this.listTargets)
      this.listTarget.innerHTML = ""
      data.forEach((car) => {
        const newCar =
        `<div class="car">
        <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
        </div>`;
        this.listTarget.insertAdjacentHTML("beforeend", newCar); 
      })
    })
    // console.log(this.testTarget)
  }

  // - Add a car
  // //////////////////
  // target the #car-form
  // add an action (click on submit-button (disableDefault))
  // fetch (post) from the input values
  // dispay the cars (like above)

  addCar(event) {
    event.preventDefault()
    console.log(event)
    fetch(this.url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        brand: this.brandTarget.value,
        model: this.modelTarget.value,
        owner: this.ownerTarget.value,
        plate: this.plateTarget.value
      })
    })
      .then( response => response.json())
      .then((data) => {
        console.log(data)
        this.displayCars()
      })
  }

}
