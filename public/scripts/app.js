(function() {
  var app = angular.module('kdabraApp', []);
  
  app.directive("kdabraTabs", function() {
    return {
      restrict: "E",
      templateUrl: "/Content/Templates/kdabra-tabs.html",
      controller: function() {
        this.tab = 3;
        this.classTab = "tres";
        $("." + this.classTab).addClass("active");

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
        this.getName = function()
        {
          return app.eCommerce.nombre;
        }

        this.getDesc = function()
        {
          return app.eCommerce.descripcion;
        }
        this.setTab = function(activeTab, activeClassTab) {
          $("." + this.classTab).removeClass("active");
          this.tab = activeTab;
          this.classTab = activeClassTab;
          $("." + this.classTab).addClass("active");
        };
      },
      controllerAs: "tab"
    };
  });

  app.controller('KdabraController', ["$http", function($http) {
    var store = this;

    app.eCommerce = {};

    $http.get("/Content/JSONDemos/app-store.json")
    .then(function(data){
      app.eCommerce = data.data;
    });

    this.getName = function()
    {
      return app.eCommerce.nombre;
    }

    this.getDesc = function()
    {
      return app.eCommerce.descripcion;
    }

  }]);



})();
