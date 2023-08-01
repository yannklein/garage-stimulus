/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// DON'T CHANGE THIS LINE
window.myBadAssGarage = "le-swagon";
if (myBadAssGarage) document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");

// //////////////////////

// //////////////////////
// PSEUDOCODE
// //////////////////////

// Get all the cars
// //////////////////////
var url = "https://wagon-garage-api.herokuapp.com/le-swagon/cars";
var displayCars = function displayCars() {
  //1.select the element containing the cars list class
  var carList = document.querySelector(".cars-list");
  //2. fetch the api using GET request
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    carList.innerHTML = "";
    data.forEach(function (car) {
      carList.insertAdjacentHTML("beforeend", "<div class=\"car\">\n              <div class=\"car-image\">\n                <img src=\"http://loremflickr.com/280/280/".concat(car.brand, ",").concat(car.model, "\"/>\n              </div>\n              <div class=\"car-info\">\n                <h4>").concat(car.brand, " ").concat(car.model, "</h4>\n                <p><strong>Owner:</strong> ").concat(car.owner, "</p>\n                <p><strong>Plate:</strong> ").concat(car.plate, "</p>\n              </div>\n            </div>"));
    });
  });
};
displayCars();
//3. iterate using .forEach to display
//4.change the Dom to display.insertHTML 
//5. put this in a function 

// Add a new car
//1. select the 4 inputs and the button
var brandInput = document.querySelector("#brand");
var modelInput = document.querySelector("#model");
var plateInput = document.querySelector("#plate");
var ownerInput = document.querySelector("#owner");
var submitBtn = document.querySelector("#submit-btn");
//2. add event listener click on Button or submit dealers choice ;)

var addCar = function addCar(event) {
  console.log(event);
  event.preventDefault();
  //3. Post request to add a new car
  var carData = {
    brand: brandInput.value,
    model: modelInput.value,
    owner: ownerInput.value,
    plate: plateInput.value
  };
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(carData)
  };
  fetch(url, options).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    displayCars();
  });
  //4. call display function after data 
};

submitBtn.addEventListener("click", addCar);

// //////////////////////

/***/ })

/******/ });
//# sourceMappingURL=main.js.map