// Code goes here
var app = angular.module('testeRobson', []);
app.controller('TimLineCtrl', function($scope,$http) {
  
  //declaração de arrays a serem utilziadas dentro do codigo
  var listaTimeLineOriginal = [];
  
  $scope.lista = []
  
  $scope.categorias = []
  
  
  
  $scope.filtrarCategoria = function(cat){
    if(cat=='Todos'){
        $scope.lista = listaTimeLineOriginal;
    }else{
        console.log(listaTimeLineOriginal)
        $scope.lista = _.filter(listaTimeLineOriginal, {category : cat})
        console.log($scope.lista)
    }

  }
  
  function listarTimeline(){
    $http.get("https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline")
    .then(function(response) {
      
        $scope.lista = response.data;
        listaTimeLineOriginal = response.data;
        //implementando regra de listar dentro do combo box de categoria 
        //uso de undescore se fez necessario
        $scope.categorias = _.uniq(_.map(listaTimeLineOriginal,'category'))
        $scope.categorias.push('Todos');

    });
  }
  
  listarTimeline();
  
});
