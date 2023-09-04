angular
  .module("taskApp", [])
  .controller("TaskController", function ($scope, $http) {
    $scope.tasks = [];

    $http({
      method: "GET",
      url: "http://localhost:8080/api/tasks",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5500",
      },
    })
      .then(function (response) {
        $scope.tasks = response.data;
      })
      .catch(function (error) {
        console.error("Error fetching tasks:", error);
      });
  });
