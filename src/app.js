import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import rooms from './features/rooms';
import room from './features/room';
angular.module('app', [uirouter, home, rooms, room])
  .config(routing);