//entry.js - Main angular js file for initializing the app and controller

import angular from "angular"; //import angular to the app

import settings from "./app/services/settings.js"; //import setting service whihc holding all default values

import Data from "./app/services/get_data.js"; //import DATA service for calling NodeJS API for getting data

import Sort from "./app/services/sort.js"; //import DATA service for calling NodeJS API for getting data

var app = angular.module('app', [settings, Data, Sort]); //initializing the app and injecting services


//Main controller for the app injected with all the services
app.controller('mainController', ['$scope', '$filter', 'settings', 'Data', 'Sort', '$http', ($scope, $filter, settings, Data, Sort, $http) => {
    
    const deafult = settings.default();//getting object for calling all default values
    
    $scope.title = deafult.pageTitle; //setting the page title
    $scope.rows = deafult.rows; //setting the default number of rows to be shown in the list
    $scope.reactionIDMap = {}; //Hash/Object for mapping user reaction with with individual ids
    $scope.getData = [];
    
    //calling promise to get all data for the list
    Data.getData().then(res =>{
        $scope.data = res.data;   
        var tempData = $scope.data.slice(0);//creating a clone of an array
        $scope.getData = tempData.splice(0, $scope.rows);//retriving only first 5 records the result
    });
    
    // this function called when user cliked on 'up' or 'down' icon in the list. And this function store every records in the hash and also checks if user reacted more than 3 times then appends the list with reast all of the records.
    $scope.iconClicked = (id, action) => {
    
        $scope.reactionIDMap[id] = action;
        
        let size = Object.keys($scope.reactionIDMap).length;
        
        if(size === 3){//if user reacted atleast 3 times and append the UI list with all records;
            $scope.getData = $scope.data;
        }
    }
    
    //function sorting by column name
    $scope.sort = function(label){
        if ($scope.sortType == label) {
			$scope.sortType = Sort.sortReverse($scope.sortType);//calling sorting service
        } else {
			$scope.sortType = label;
        }
    }
    
}]);

