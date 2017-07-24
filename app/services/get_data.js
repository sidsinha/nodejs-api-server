//this service is used for calling the node api returing the response to entry.js

import angular from 'angular';

class Data {
  constructor($http, settings) {
      this.$http = $http;
      this.settings = settings.default();
  }
  //use this method is called for sending http get request to the node server
  getData(){
      return this.$http.get(this.settings.API)
        .then(function(response){ 
            return response.data; 
        });
    };
}

export default angular.module('services.data', [])
  .service('Data', Data)
  .name;