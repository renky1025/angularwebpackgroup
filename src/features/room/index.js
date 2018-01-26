import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './room.routes';
import RoomController from './room.controller';


export default angular.module('app.room', [uirouter])
  .config(routing)
  .controller('RoomController', RoomController)
  .name;