export default class RoomController {
    constructor(randomNames, $stateParams) {
      this.random = randomNames;
      this.name = $stateParams.roomId || 'World';
    }
  
    changeName() {
      this.name = 'angular-test';
    }
  
    randomName() {
      this.name = this.random.getName();
    }
  }
  
  RoomController.$inject = ['randomNames', '$stateParams'];