/**
 * Created by Ismael on 06-07-16.
 */
(function(){
    angular.module('WebBancoChile.dndFileUpload').factory('dndFileUploadService', dndFileUploadService);
    
    function dndFileUploadService(){

        var service = {
            name: null,
            size: null,
            status: 'init',
            file: null,
            setName: setName,
            getName: getName,
            setSize: setSize,
            getSize: getSize,
            getStatus: getStatus,
            setStatus: setStatus,
            setFile: setFile,
            getFile: getFile
        };
        
        function setName(name){
            service.name = name;
        }
        
        function getName(){
            return service.name;
        }
        
        function setSize(size){
            service.size = size;
        }
        
        function getSize(){
            return service.size;
        }

        function getStatus(){
            return service.status;
        }
        
        function setStatus(stat){
            return service.status = stat;
        }

        function setFile(file){
            service.file = file;
        }
        
        function getFile(){
            return service.file;
        }

        return service;
    }
    
})();