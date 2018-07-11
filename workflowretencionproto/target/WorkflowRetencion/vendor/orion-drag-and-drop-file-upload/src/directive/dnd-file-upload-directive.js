/**
 * Created by ismael on 30-11-15.
 */
(function () {
    angular.module('WebBancoChile.dndFileUpload').directive('dndFileUpload', dndFileUpload);

    function dndFileUpload() {
        return {
            restrict: 'E',
            scope: {
                config: '=',
                successCallBack: '=',
                failCallBack: '=',
                progressCallBack: '=',
                cleanCallBack: '=',
                validator: '='
            },
            templateUrl: 'drag-and-drop-file-upload/src/directive/dnd-file-upload.tpl.html',
            controller: 'dndFileUploadController',
            controllerAs: 'dndUpload'
        };
    }
})();