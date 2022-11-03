// DON'T CHANGE THIS LINE
const myBadAssGarage = window.myBadAssGarage;
// //////////////////////


// //////////////////////
// Pseudo-code
// //////////////////////

// - Display the cars
// //////////////////
// create a controller  in the first div of the body
// Tips: use 'sch' shortcut to build the controller
// target the cars-list
// in the connector , fetch the cars data from the API
// check API, retrive data
// display 

// - Add a car
// //////////////////
// target the form input
// Action: Add a Car button clicked to get the target data: brand, plate, owner, etc.
// check API document
// post request to the API
// call display method

// ///////////////////////
// Code
// //////////////////////
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'list', 'form' ]

  connect() {
    console.log('Hello from garage_controller.js')
    this.fetchCars()
    // console.log(this.testTarget)
  }

  fetchCars() {
    const url= `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.displayCars(data)
    })
  }

  displayCars(cars) {
    this.listTarget.innerHTML=""
    cars.forEach(car => {
      this.listTarget.insertAdjacentHTML("beforeend", `<div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong>${car.owner}</p>
        <p><strong>Plate:</strong>${car.plate}</p>
      </div>
    </div>`)
    });
  }

  addCar(event) {
    event.preventDefault()
    console.log(event)
    console.log(this.formTarget.elements["model"].value)
    const formData = this.formTarget.elements
    const model = formData["model"].value
    const brand = formData["brand"].value
    const owner = formData["owner"].value
    const plate = formData["plate"].value
    const carData = {
      "brand": brand,
      "model": model,
      "owner": owner,
      "plate": plate
    }
    // can be written like this:
    // const carData = {
    //   brand,
    //   model,
    //   owner,
    //   plate
    // }
    const options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(carData)
    }
    const url= `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`
    fetch(url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.fetchCars()
      })
  }
}
