import './rooms.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './rooms.routes';
import RoomsController from './rooms.controller';


export default angular.module('app.rooms', [uirouter])
  .config(routing)
  .controller('RoomsController', RoomsController)
  .name;