(function () {
    var app =  angular.module('MODULE_NAME');
    app.controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope'];
    function homeCtrl ($scope) {
      alert("Hello, World!!");
    }
})();
