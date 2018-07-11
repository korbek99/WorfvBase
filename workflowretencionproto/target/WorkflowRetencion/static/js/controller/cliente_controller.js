/**
 * Created by Carlos Negrón on 6/20/2018.
 */

'use strict';

angular.module('workflowRetencion').controller('ClientController', ['$scope', 'ClientService', function($scope, ClientService) {
    var vm = this;
    //VARIABLES MODELO
    vm.clientData = {};
    vm.ejecutivoData = {};
    vm.showAntecedentes = false;
    vm.showHome = true;
    vm.showFormulario = false;
    vm.rutClientBusqueda = '';
    //FUNCIONES
    vm.fetchClientData = fetchClientData;
    vm.fetchEjecutivoData = fetchEjecutivoData;
    vm.cargarFormulario = cargarFormulario;
    vm.btnVolver = btnVolver;
    //fetchClientData();

    function fetchClientData(rut) {
        ClientService.fetchClientData(rut)
            .then(
                function(d) {
                    vm.clientData = d;
                    vm.showAntecedentes = true;
                },
                function(errResponse) {
                    console.error('Error while fetching data');
                }
            );
    }

    function fetchEjecutivoData(rut) {
        ClientService.fetchEjecutivoData(rut)
            .then(
                function(d) {
                    vm.ejecutivoData = d;
                },
                function(errResponse) {
                    console.error('Error while fetching data');
                }
            );
    }

    function cargarFormulario(rut) {
        vm.showHome = false;
        vm.showFormulario = true;
        fetchEjecutivoData(rut);
    }

    function btnVolver() {
        vm.showHome = true;
        vm.showFormulario = false;
    }


}]);