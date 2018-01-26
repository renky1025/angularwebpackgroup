export default class RoomsController {
    constructor(randomNames) {
      this.random = randomNames;
      this.name = 'World';
    }
  
    changeName() {
      this.name = 'angular-test';
    }
  
    randomName() {
      this.name = this.random.getName();
    }
  }
  
  RoomsController.$inject = ['randomNames'];