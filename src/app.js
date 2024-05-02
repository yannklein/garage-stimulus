// DON'T CHANGE THIS LINE
window.myBadAssGarage = 'juns-stash';
if (myBadAssGarage)
  document.querySelector('#garage-name').innerText = myBadAssGarage.replace(
    /-/g,
    ' ',
  );

import { Application } from "@hotwired/stimulus"
window.Stimulus = Application.start()

import GarageController from "./controllers/garage_controller.js"
Stimulus.register("garage", GarageController)


// //////////////////////
// PSEUDOCODE
// //////////////////////



const url = 'https://wagon-garage-api.herokuapp.com/juns-stash/cars';


// Get all the cars
// //////////////////////


// Add a new car
// //////////////////////

