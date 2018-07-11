(function(){
	angular
		.module('WebBancoChile.dropMultiSelect')
		.directive('dropMultiSelect', dropMultiSelect);

	function dropMultiSelect() {
		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			templateUrl:'drop-multi-select/src/drop-multi-select/drop-multi-select.tpl.html',
			controller: 'dropMultiSelectCtrl',
			controllerAs: 'dmsCtrl'
		};
	}
})();