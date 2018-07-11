(function(){
    angular.module( 'WebBancoChile.transitionDetailDirective')
        .directive('advancedDetail', advancedDetail);

    advancedDetail.$inject = ['$timeout'];
    function advancedDetail($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'transition-detail-directive/src/directive/advanced-detail.tpl.html',
            controller: 'advancedDetailCtrl',
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                backState: '@',
                scrollFixButton: '@'
            },
            link: link

        };

        function link($scope, element){
            var prevAltura = 0;
            var divPrincipal = element.parent();
            var contenedorDetalle;
            var contenedorListado;
            var distanciaDirectivaTop;
            var scrollActual;
            var distAltura;
            var contenedorDetalleAltura;

            (function init(){
                // Se agrega clase para manejo de la vista principal
                divPrincipal.addClass('contenedor-transition-detail-directive');
                divPrincipal.parent().addClass('transition-min-height');
                // Se agrega clase para manejo de la vista Listado
                divPrincipal.children().first().addClass('contenedor-listado');

                contenedorDetalle = element.find(".contenedor-detalle");
                contenedorListado = divPrincipal.find(".contenedor-listado");

                divPrincipal.on("click", ".boton-detalle", function(){
                    // Calcula distancia entre directiva y top
                    distanciaDirectivaTop = $('.contenedor-transition-detail-directive').offset().top;
                    // Scroll actual de la ventana
                    scrollActual = $(window).scrollTop();
                    // Cálculo de scroll vs contenedor directiva
                    distAltura = distanciaDirectivaTop - scrollActual;
                    // Se agrega contenedor para generar scroll interior detalle-listado
                    $(".contenedor-listado").wrapInner("<div class='fixScroll'></div>");
                    // Scrolltop contenedor-listado
                    if(scrollActual > 0 && distAltura < 0){
                        $('.contenedor-listado .fixScroll').css('margin-top',(distAltura-36)+'px');
                    }

                    prevAltura = contenedorListado.css("height");
                    contenedorListado
                        .removeClass('mover-izquierda-volver')
                        .addClass('mover-izquierda');
                    contenedorDetalle
                        .removeClass('mover-detalle-volver')
                        .addClass('mover-detalle');
                    $(this).closest("tbody").addClass('breadAnimacion');
                    $(this).closest("tr").addClass('breadDetalle');
                    actualizarAltura(contenedorDetalle.css("height"));
                });

                element.on("click", ".contenedor-detalle a", function(){
                    actualizarAltura(contenedorDetalle.css("height"));
                    if(contenedorDetalle.css("height") || divPrincipal.css("height")){
                        $timeout(function(){ actualizarAltura(contenedorDetalle.css("height")); }, 10);
                        $timeout(function(){ actualizarAltura(contenedorDetalle.css("height")); }, 100);
                        $timeout(function(){ actualizarAltura(contenedorDetalle.css("height")); }, 500);
                    }
                });

                element.on("click", ".boton-volver", function(){
                    var tr = contenedorListado.find('tr.breadDetalle');
                    $(".contenedor-listado > .fixScroll").contents().unwrap();
                    contenedorDetalle
                        .removeClass('mover-detalle')
                        .addClass('mover-detalle-volver');
                    contenedorListado
                        .removeClass('mover-izquierda')
                        .addClass('mover-izquierda-volver');
                    tr.addClass('breadDetalleAnimacion');
                    // Scroll hacia fila seleccionada
                    if(tr.offset()){
                        // $("body").animate({scrollTop: scrollActual}, "normal");
                        $("body").scrollTop(scrollActual);
                    }

                    tr.closest("tbody").removeClass('breadAnimacion');

                    $timeout(function(){
                        tr.removeClass('breadDetalle');
                    }, 2000);
                    $timeout(function(){
                        tr.removeClass('breadDetalleAnimacion');
                    }, 3000);

                    actualizarAltura(prevAltura);
                });

                $scope.$watch(function(){
                    return contenedorDetalle.css("height");
                }, function (){
                    if(contenedorDetalle.hasClass("mover-detalle")) {
                        actualizarAltura(contenedorDetalle.css("height"));
                    }
                });
            })();

            function actualizarAltura(valor){
                divPrincipal.css("height", valor);

                //BUG: bajo ciertas condiciones el watcher en contenedorDetalle no se ejecuta
                //luego del renderizado de elementos con ngRepeat, sino antes de este.
                //El hack a continuacion permite forzar el watcher en un ciclo de digest posterior.
                $timeout(function(){
                    $scope.$digest();
                }, 0);
            }

        }

    }
})();

