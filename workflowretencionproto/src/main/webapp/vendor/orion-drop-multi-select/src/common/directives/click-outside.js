(function(){
	angular
		.module('WebBancoChile.dropMultiSelect')
		.directive('dmsClickOutside', dmsClickOutside);

	dmsClickOutside.$inject = ['$document'];

	function dmsClickOutside($document){
		return {
			link: function postLink(scope, element, attrs) {

				function onClick(event) {
					var isChild = element[0].contains(event.target);
					var isSelf = element[0] === event.target;
					var isInside = isChild || isSelf;
					if (!isInside) {
						scope.$apply(attrs.dmsClickOutside);
					}
				}

				scope.$watch(attrs.dmsIsActive, function(newValue, oldValue) {
					if (newValue !== oldValue && newValue === true) {
						$document.bind('click', onClick);
					}
					else if (newValue !== oldValue && newValue === false) {
						$document.unbind('click', onClick);
					}
				});
			}
		};
	}
})();