routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('room', {
      url: '/rooms/:roomId',
      template: require('./room.html'),
      controller: 'RoomController',
      controllerAs: 'room'
    });
}