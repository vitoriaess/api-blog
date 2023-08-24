angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});

angular.module('blogdetalhes', []);
angular.module('blogdetalhes').controller('Restdetalhes', function ($scope, $http){
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagem/5').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});