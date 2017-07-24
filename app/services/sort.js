//this service is used for sorting on column base in table

import angular from 'angular';

class Sort {
    constructor() {
        //
    }
    //use this method when we want to toggle sorting
    sortReverse(sortType, set){
        set = set || false;
        if (set || ! this.matchFirstChar('-', sortType)) {
            var sortType = this.addDash(sortType);
        } else {
            var sortType = this.removeDash(sortType);
        }
        return sortType;
    }
    
    matchFirstChar(c, string) {
		return (string.charAt(0) == c);
	}
	
	removeFirstChar(string) {
		return string.slice(1);
	}
	
	removeDash(label) {
		if (this.matchFirstChar('-', label)) {
			return this.removeFirstChar(label);
		}
		return label;
	}
	addDash(label) {
		if (!this.matchFirstChar('-', label)) {
			return '-' + label;
		}
		return label;
	}
}

export default angular.module('services.sort', [])
  .service('Sort', Sort)
  .name;