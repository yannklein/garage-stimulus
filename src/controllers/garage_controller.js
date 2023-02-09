// DON'T CHANGE THIS LINE
const myBadAssGarage = window.myBadAssGarage;
// //////////////////////


// //////////////////////
// Pseudo-code
// //////////////////////

// Remember CAT!

// ✅ 1.Add data-controller attribute to the right html Element.

// Retrieve all the cars

// 2.In the connect, fetch le wagon-garage.api and get our cars info
// 3.Create the target for the cars list.
// 4. Display the cars using the method insertAdjacentHTML.

// Create cars

// Create an action for the AddCar button
// Create 4 targets for each input
// POST request to the wagon garage api
// Retrieve all the cars

// ///////////////////////
// Code
// ///////////////////////

import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['cars', 'brand', 'plate', 'owner', 'model']

  connect() {
    console.log("Hello from the controller!")
    // console.log(this.testTarget)
    this.displayCars();
  }

  displayCars() {
    const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        console.log(this.carsTarget);
        this.carsTarget.innerHTML = "";
        data.forEach((car) => {
          this.carsTarget.insertAdjacentHTML("beforeend",
          `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`
          );
        });
      })
  }

  addCar(event) {
    event.preventDefault()
    const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        brand: this.brandTarget.value,
        owner: this.ownerTarget.value,
        plate: this.plateTarget.value,
        model: this.modelTarget.value
      })
    }
    fetch(url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.displayCars()
      });
  }

  // verb: POST
  // url: https://wagon-garage-api.herokuapp.com/:garage/cars
  // headers: Content-Type: application/json
  // body:
  //   {
  //     "brand": "PEUGEOT",
  //     "model": "106",
  //     "owner": "ssaunier",
  //     "plate": "123AZ56"
  //   }

}
