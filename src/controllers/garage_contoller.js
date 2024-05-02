import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from garage_contoller.js')
    // console.log(this.testTarget)
  }
}