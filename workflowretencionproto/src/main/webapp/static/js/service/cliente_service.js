/**
 * Created by Carlos Negrón on 6/20/2018.
 */
'use strict';

angular.module('workflowRetencion').factory('ClientService', ['$http', '$q', function($http, $q) {

    var FICHA_FULL_URI = 'http://152.139.122.221:7001/miplataforma-satellite/WorkflowRetencion/retencion/fichafull?rutEntrada=';
    var ESCALAMIENTO_URI = 'http://152.139.122.221:7001/miplataforma-satellite/WorkflowRetencion/retencion/ejecutivo?rutEjecutivo='
    var factory = {
        fetchClientData: fetchClientData,
        fetchEjecutivoData: fetchEjecutivoData
    };

    return factory;

    function fetchClientData(rut) {
        var deferred = $q.defer();
        $http.get(FICHA_FULL_URI + rut)
            .then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(errResponse) {
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function fetchEjecutivoData(rut) {
        var deferred = $q.defer();
        $http.get(ESCALAMIENTO_URI + rut)
            .then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(errResponse) {
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

}]);