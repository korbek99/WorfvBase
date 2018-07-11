(function () {
    angular.module('WebBancoChile.orionTablas')
        .directive('tablaSelect', tableSelectDirective);

    function tableSelectDirective() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element) {

            //Mi elemento con directiva
            var tabla = $(angular.element(element[0]));

            tabla
                .on("click", "td.actions .bch-custom-check input", toggleCheck)
                .on("click", "thead > tr > th .bch-custom-check input.seleccionar-todo[type='checkbox']", toggleCheckAll);

            function check(checked) {
                var elem = $(this);
                if(checked) {
                    elem.addClass('clicked')
                        .closest('tr')
                        .addClass('selected-row');
                } else {
                    elem.removeClass('clicked')
                        .closest('tr')
                        .removeClass('selected-row');
                }
                this.checked = !!checked;
            }

            function toggleCheck() {
                check.call(this, this.checked);
            }

            function toggleCheckAll() {
                var allChecked = this.checked;
                tabla.find('td.actions .bch-custom-check input').each(function(){
                    check.call(this, allChecked);
                });
            }
        }
    }
})();
