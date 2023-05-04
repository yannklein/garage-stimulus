// DON'T CHANGE THIS LINE
const myBadAssGarage = window.myBadAssGarage;
// //////////////////////


// //////////////////////
// Pseudo-code
// //////////////////////
// Remember CAT!

// 1. Add data-controller attribute to the right html Element.

// Retrieve all the cars

// 2. no action, write the code in the connect method.
// 3. fetch api
// 4. target cars-list
// 5. add the car to the cars

// Create car

// 1. action for add car button "click"
// 2. target the four input fields get values
// 3. build an object owner, car, brand, and plate
// 4. make a post request with object json format
// 5. retrieve all cars and display

// ///////////////////////
// Code
// ///////////////////////

// Tips: use 'sch' shortcut to build the stimulus controller
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'carsList', 'brand', 'model', 'plate', 'owner' ]

  connect() {
    this.url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`
    this.getCars()
  }

  getCars() {
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.carsListTarget.innerHTML = ""
        data.forEach((car) => {
          this.carsListTarget.insertAdjacentHTML("afterbegin", 
          `<div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/${car.brand},${car.model}" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>`)
        });
      });
  }
  
  create(event) {
    event.preventDefault()
    console.log("any string")
    const newcar = { 
      brand: this.brandTarget.value,
      model: this.modelTarget.value,
      plate: this.plateTarget.value,
      owner: this.ownerTarget.value 
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newcar)
    }
    fetch(this.url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.getCars()
      })
  }
}