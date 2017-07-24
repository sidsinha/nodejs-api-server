//this setting page top set up default values for the app, these are used when page loads the first time
import angular from "angular";


class Settings {
  constructor() {
    //default value
  }

  //default data defining page title and api
  default() {
      const DATA_API = "http://localhost:8888/data";
      const PAGE_TITLE = "Node Server API";
      const ROWS = 5;
      
      return {
          API: DATA_API,
          pageTitle: PAGE_TITLE,
          rows: ROWS
      }
  }
}

export default angular.module('services.settings', [])
  .service('settings', Settings)
  .name;