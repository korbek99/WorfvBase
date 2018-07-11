/**
 * Created by Ismael on 06-07-16.
 */
(function () {

    angular.module('WebBancoChile.dndFileUpload').controller('dndFileUploadController', dndFileUploadController);

    function dndFileUploadController($scope, Upload, URL_API, dndFileUploadService) {
        var vm = this;

        var data = angular.isUndefined($scope.config.data)? {} : $scope.config.data;
        vm.validMimeType = $scope.config.dataUpload.validMimeType;
        vm.maxFileSize = $scope.config.dataUpload.maxFileSize;
        vm.url = $scope.config.dataUpload.url;
        vm.iniciaEscucha = $scope.config.escucha;
        
        var upload = function (files) {
            var file = void 0;
            var i = void 0;
            vm.errorFormato = false;
            if (files && files.length) {
                for (i = 0; i < files.length; i++) {
                    file = files[i];
                    if($scope.validator(file)){
                        uploadFile(file);
                    }
                }
            }
        };

        var uploadFile = function (file) {
            if (dndFileUploadService.getStatus() == 'progress') {
                return;
            }
            if (dndFileUploadService.getStatus() === 'done' || dndFileUploadService.getStatus() === 'fail' || dndFileUploadService.getStatus() === 'init') {
                $scope.cleanCallBack();
            }
            dndFileUploadService.setName(file.name);
            dndFileUploadService.setSize(file.size);
            dndFileUploadService.setFile(file);
            dndFileUploadService.setStatus('progress');
            data.file = file;
            Upload.upload({
                url: URL_API + vm.url,
                data: data
            }).then($scope.successCallBack, $scope.failCallBack, $scope.progressCallBack);
        };

        $scope.$watch('dndUpload.files', function () {
            if (angular.isUndefined(vm.files)) {
                return;
            }
            upload(vm.files);
        });

        $scope.$watch('dndUpload.file', function () {
            if (vm.file != null) {
                vm.files = [vm.file];
            }
        });

    }


})();