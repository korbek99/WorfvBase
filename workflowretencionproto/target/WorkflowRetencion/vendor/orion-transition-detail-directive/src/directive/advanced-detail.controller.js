(function(){
    angular.module( 'WebBancoChile.transitionDetailDirective')
        .controller('advancedDetailCtrl', advancedDetailCtrl);

    advancedDetailCtrl.$inject = ['$scope'];
    function advancedDetailCtrl($scope) {
        var vm = this;

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if(toState.name == vm.backState){
                angular.element('.boton-volver').trigger( "click" );
            }
        });
    }
})();
