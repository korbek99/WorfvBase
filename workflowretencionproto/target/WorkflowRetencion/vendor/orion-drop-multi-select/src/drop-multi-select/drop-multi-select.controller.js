(function(){
	angular
		.module('WebBancoChile.dropMultiSelect')
		.controller('dropMultiSelectCtrl', dropMultiSelectCtrl);

	dropMultiSelectCtrl.$inject = ['$scope'];

	function dropMultiSelectCtrl($scope){

		var vm = this;
		vm.data = $scope.data;
		// Functiones
		vm.seleccionar = seleccionar;
		vm.blurMultiselect = blurMultiselect;
		vm.placeholder = placeholder;
		vm.textoAceptar = textoAceptar;
		vm.abrir = abrir;
		vm.cancelar = cancelar;
		// Variables
		vm.multiSelectOpen = false;
		vm.seleccionesPrevias = [];

		$scope.$on("orionDropMultiSelect::refrescarData", function (event, data) {
            vm.data = data;
        });

		function cancelar(){
			vm.data.selecciones = [];
			for (var i = vm.seleccionesPrevias.length - 1; i >= 0; i--) {
				vm.data.selecciones.push(vm.seleccionesPrevias[i]);
			}
			vm.multiSelectOpen = false;
		}

		function abrir(){
			if (vm.data.opciones.length!==0 && !vm.data.disabled) {
				if(vm.multiSelectOpen){
					vm.multiSelectOpen = false;
				} else {
					vm.seleccionesPrevias = [];
					for (var i = vm.data.selecciones.length - 1; i >= 0; i--) {
						vm.seleccionesPrevias.push(vm.data.selecciones[i]);
					}
					vm.multiSelectOpen = true;
				}
			}
		}

		function textoAceptar(){
			if(vm.data.textoAceptar){
				return vm.data.textoAceptar;
			} else {
				return 'Aceptar';
			}
		}

		function placeholder(selecciones){
			vm.placeholderText = false;
			if (selecciones.length > 0) {
				
				if(vm.data.msjSeleccionados !== undefined){
					return vm.data.msjSeleccionados + " " + selecciones.length;
				} else {
					return 'Seleccionados: ' + selecciones.length;
				}
			}else if(vm.data.opciones.length === 0) {
				var mensajeVacio = (angular.isUndefined(vm.data.placeholderVacio)) ? 'Sin opciones' : vm.data.placeholderVacio;
				return mensajeVacio;
			}else {
				if (vm.data.disabled && !angular.isUndefined(vm.data.placeholderDisabled)) {
					return vm.data.placeholderDisabled;
				}else {
					vm.placeholderText = true;
					if(vm.data.placeholder !== undefined){
						return vm.data.placeholder;
					} else {
						return 'Seleccione...';
					}
				}
			}
		}

		vm.seleccionarTodos = seleccionarTodos;

		function seleccionarTodos(data){
			if (vm.selectorAll){
				angular.forEach(data, function(value, key) {
					if(vm.data.selecciones.indexOf(value) === -1){
						vm.data.selecciones = addString(vm.data.selecciones,value);
					}
				});
			}else{
				vm.data.selecciones=[];
			}
		}

		function seleccionar(item){
			if(vm.data.selecciones.indexOf(item) === -1){
				vm.data.selecciones = addString(vm.data.selecciones,item);
			} else {
				vm.data.selecciones = removeString(vm.data.selecciones,item);
			}
		}

		function addString(list, item){
			list.push(item);
			return list;
		}

		function removeString(list, item){
			for (var i = list.length - 1; i >= 0; i--) {
				if(list[i] === item){
					list.splice(i,1);
					break;
				}
			}
			return list;
		}

		function blurMultiselect(){
			vm.multiSelectOpen = false;
		}

	}

})();
