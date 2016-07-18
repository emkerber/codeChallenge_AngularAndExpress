var app = angular.module('studentApp', []);

app.controller('StudentController', function($http) {
  var vm = this;

  var configObject = {
    method: 'GET',
    url: '/students'
  };

  function handleSuccess(response) {
    vm.students = response.data;
    console.log('Great success:', response);
  }

  function handleFailure(response) {
    console.log('Super fail:', response);
  }

  vm.getStudents = function() {
    console.log('Click');
    $http(configObject).then(handleSuccess, handleFailure);
  }

  // vm.displayStudents = function() {
    // var data = {};
    // $http.post('/routes/students', data);
  // }

})
