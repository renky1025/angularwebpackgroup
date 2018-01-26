routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('rooms', {
      url: '/rooms',
      template: require('./rooms.html'),
      controller: 'RoomsController',
      controllerAs: 'rooms'
    });
}