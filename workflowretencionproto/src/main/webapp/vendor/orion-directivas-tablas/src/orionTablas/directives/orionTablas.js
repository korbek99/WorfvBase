(function () {

    angular.module('WebBancoChile.orionTablas')
        .directive('tablasInteractivas', tablasInteractivasDirective);

    tablasInteractivasDirective.$inject = ['$timeout', '$compile', 'orionTablas.MINIMO_COLUMNAS_VISIBLES', 'orionTablas.MAXIMO_COLUMNAS_VISIBLES'];
    function tablasInteractivasDirective($timeout, $compile, MINIMO_COLUMNAS_VISIBLES, MAXIMO_COLUMNAS_VISIBLES) {
        return {
            restrict: 'A',
            link: link,
            scope: {
                loadingSuccess: '=?',
                columnasOcultas: '@?',
                columnasNoOcultables: '@?',
                statusColumnas: '=?',
                cantidadMinimaColumnas: '=?',
                cantidadMaximaColumnas: '=?'
            }
        };

        function link(scope, element, attrs) {

            function hasOptionalParam(name) {
                return typeof attrs[name] !== "undefined";
            }

            if (hasOptionalParam("loadingSuccess")) {
                scope.$watch(function () {
                    return scope.loadingSuccess;
                }, function () {
                    if (scope.loadingSuccess) {
                        $timeout(init, 0);
                    }
                });
            } else {
                //Compatibilidad para proyectos antiguos que no incorporen el atributo loading-success
                $timeout(init, 0);
            }

            function init() {
                var tabla = angular.element(element[0]),
                    headersDatos = $(tabla).find('.tabla-interactiva > thead th:not(.actions)'),
                    headersAccion = $(tabla).find('.tabla-interactiva > thead th.actions'),
                    anchoTotalAcciones = 0,
                    anchoColumnaDatos = 0,
                    alturaCeldaInicial = 0;

                if(!hasOptionalParam("cantidadMinimaColumnas")) {
                    scope.cantidadMinimaColumnas = MINIMO_COLUMNAS_VISIBLES;
                }
                if(!hasOptionalParam("cantidadMaximaColumnas")) {
                    scope.cantidadMaximaColumnas = MAXIMO_COLUMNAS_VISIBLES;
                }
                if(scope.cantidadMaximaColumnas < scope.cantidadMinimaColumnas) {
                    console.warn("Cantidad de columnas maximas y minimas mal configuradas, estableciendo maximo = minimo");
                    scope.cantidadMaximaColumnas = scope.cantidadMinimaColumnas;
                }
                scope.cantidadSeleccionados = 0;

                establecerTamanios();
                agregarLogicaExpansionColumnas();
                agregarLogicaColumnasOcultables();

                function establecerTamanios(){
                    headersAccion.each(function () {
                        anchoTotalAcciones += Number($(this).attr('width').replace('%', ''));
                    });

                    anchoColumnaDatos = (100 - anchoTotalAcciones) / headersDatos.length;

                    headersDatos.each(function () {
                        $(this).attr('width', anchoColumnaDatos + '%');
                    });

                    alturaCeldaInicial = $(tabla).find('.tabla-interactiva > tbody tr:not(".contenido-oculto") td:not(".actions")')
                        .not('.tabla-interactiva > tbody .contenido-oculto td td').outerHeight();
                }

                function agregarLogicaExpansionColumnas() {
                    // por cada click en un td de la tabla principal que no sea un td de accion ni contenido-oculto
                    $(tabla).on("click", ".tabla-interactiva > tbody tr:not('.contenido-oculto') td:not('.actions')", function () {
                        var tdSeleccionado = $(this);
                        var tds = $(tabla).find('.tabla-interactiva > tbody td:not(.actions)');
                        if (tdSeleccionado.hasClass('activa')) {
                            //si se clickeo el mismo td activo
                            tdSeleccionado.stop().animate({'height': alturaCeldaInicial}, 'fast');
                            tds.removeClass('activa').css('height', '');
                            headersDatos.stop().animate({"width": anchoColumnaDatos + '%'}, 'slow');
                        } else {
                            //computar nuevo ancho suficiente para mostrar el contenido
                            var anchoContenidoSeleccionado_px;
                            var anchoTabla_px = $(tabla).find('.tabla-interactiva').prop('clientWidth');

                            if (headersAccion.length > 0) {
                                anchoContenidoSeleccionado_px = obtenerLargoTexto(tdSeleccionado) * 7.9;
                            } else {
                                anchoContenidoSeleccionado_px = obtenerLargoTexto(tdSeleccionado) * 9;
                            }

                            var anchoColumnaSeleccionada = (anchoContenidoSeleccionado_px / anchoTabla_px) * 100;
                            var anchoRestoColumnas = (100 - anchoColumnaSeleccionada - anchoTotalAcciones) / headersDatos.length;

                            if (anchoRestoColumnas < 0) {
                                anchoRestoColumnas = 2;
                            }

                            var tdSeleccionadoIndex = tdSeleccionado.index();

                            if (anchoRestoColumnas < anchoColumnaSeleccionada) {
                                //la celda seleccionada necesita mas espacio que el comun
                                tds.removeClass('activa').css('height', '');

                                headersDatos.each(function () {
                                    var currentIndex = $(this).prop('cellIndex');
                                    if (currentIndex === tdSeleccionadoIndex) {
                                        $(this).stop().animate({"width": anchoColumnaSeleccionada + '%'}, 'slow', function () {
                                            tdSeleccionado.addClass('activa');
                                            var alturaNueva = tdSeleccionado.outerHeight();
                                            tdSeleccionado.removeClass('activa')
                                                .animate({'height': alturaNueva}, 'fast', function () {
                                                    tdSeleccionado.addClass('activa');
                                                });
                                        });
                                    } else {
                                        $(this).stop().animate({"width": anchoRestoColumnas + '%'}, 'slow');
                                    }
                                });
                            } else {
                                //la celda seleccionada ya tiene el espacio adecuado
                                if(tds.hasClass("activa")) {
                                    tds.removeClass('activa').css('height', '');
                                    headersDatos.stop().animate({"width": anchoColumnaDatos + '%'}, 'slow');
                                }
                            }
                        }
                    });
                }

                function obtenerLargoTexto(elem) {
                    var total = 1;
                    var childrenNodes = elem[0].childNodes;
                    if (childrenNodes.length > 1) {
                        //validar el tipo de datos para descartar los comentarios
                        for (var i = 0; i < childrenNodes.length; i++) {
                            if (childrenNodes[i].nodeName !== "#text") {
                                continue;
                            }
                            var childLength = childrenNodes[i].textContent.trim().length;
                            if (total < childLength) {
                                total = childLength;
                            }
                        }
                    } else {
                        var countNormalLetters = 0;
                        var countCapitalLetters = 0;
                        for (var j = 0; j< elem[0].outerText.length; j++){
                            if(isUpperCase(elem[0].outerText[j])){
                                countCapitalLetters++;
                            }else {
                                countNormalLetters++;
                            }
                        }
                        total = countNormalLetters + countCapitalLetters*1.2;
                    }

                    return Math.min(total, 60);
                }

                function isUpperCase(str){
                    return str.toUpperCase() === str;
                }

                function agregarLogicaColumnasOcultables() {
                    var listadoHeader = $(tabla).find('.tabla-interactiva > thead .listado-header');
                    //estado
                    scope.statusColumnas = [];
                    scope.columnaDisabled = columnaDisabled;
                    scope.mostrarOcultarColumnas = mostrarOcultarColumnas;

                    (function agregarInputs(){
                        //construye el selector de columnas para ocultar
                        headersDatos.each(function () {
                            var th = $(this);
                            var nombre = th.text(),
                                index = th.prop('cellIndex');

                            scope.statusColumnas.push({
                                nombre: nombre,
                                index: index,
                                visible: true
                            });
                        });

                        listadoHeader.append("<ng-include src=\"'directivas-tablas/src/orionTablas/directives/orionTablas.tpl.html'\"></ng-include>");

                        $compile(listadoHeader)(scope);
                    })();

                    (function agregarWatchers(){
                        var tbody = $(tabla).find('.tabla-interactiva > tbody')[0];

                        scope.$watchCollection(function () {
                            return tbody.children;
                        }, function (newVal, oldVal) {
                            if (newVal !== oldVal) {
                                mostrarOcultarColumnas();
                            }
                        });
                    })();

                    (function iniciarColumnasOcultas() {

                        function extractStrArray(name) {
                            var arr = [];
                            if(hasOptionalParam(name) && scope[name].length > 0) {
                                arr = scope[name].split(",");
                                angular.forEach(arr, function(val, i){
                                    arr[i] = val.trim().toLowerCase();
                                });
                            }
                            return arr;
                        }

                        var thOcultos = extractStrArray("columnasOcultas");
                        var thNoOcultables = extractStrArray("columnasNoOcultables");

                        angular.forEach(scope.statusColumnas, function(status){
                            var nombre = status.nombre.toLowerCase();
                            status.ocultable = thNoOcultables.indexOf(nombre) === -1;
                            var checked = thOcultos.indexOf(nombre) === -1;
                            if(!status.ocultable && !checked) {
                                console.warn("Configuracion de columnas no ocultables y ocultas por defecto contradictorias, dejando visible columna", status.nombre);
                                checked = true;
                            }
                            actualizarStatusColumnas(status.index, checked);
                        });

                        mostrarOcultarColumnas();
                    })();

                    function celdasOcultables() {
                        //se debe llamar siempre a esta funcion para obtener la ultima lista de celdas,
                        //ya que estas se llenan de forma dinamica con ngRepeat
                        return $(tabla).find('.tabla-interactiva > thead th:not(.actions), .tabla-interactiva > tbody td:not(.actions)');
                    }

                    function columnaDisabled(status) {
                        if(!status.ocultable) {
                            return true;
                        }
                        if(status.visible) {
                            return scope.cantidadSeleccionados <= scope.cantidadMinimaColumnas;
                        } else {
                            return scope.cantidadSeleccionados >= scope.cantidadMaximaColumnas;
                        }
                    }

                    function mostrarOcultarColumnas(status) {
                        var tds = celdasOcultables();

                        if(status) {
                            doMostrarOcultar(status, tds);
                        } else {
                            angular.forEach(scope.statusColumnas, function(status){
                                doMostrarOcultar(status, tds);
                            });
                        }

                        function doMostrarOcultar(status, tds) {
                            var checked = validarMinimosMaximos(status.visible);
                            if(!status.ocultable) {
                                checked = true;
                            }

                            tds.filter(function(){
                                return $(this).prop('cellIndex') == status.index;
                            }).each(function () {
                                var td = $(this);
                                if (checked) {
                                    td.show();
                                } else {
                                    td.hide();
                                }
                            });

                            actualizarStatusColumnas(status.index, checked);
                        }
                    }

                    function actualizarStatusColumnas(index, checked) {
                        scope.cantidadSeleccionados = 0;

                        angular.forEach(scope.statusColumnas, function(status){
                            if(status.index == index && status.ocultable) {
                                status.visible = checked;
                            }
                            if(status.visible) {
                                ++scope.cantidadSeleccionados;
                            }
                        });
                    }

                    function validarMinimosMaximos(checked) {
                        var visibles = 0;
                        angular.forEach(scope.statusColumnas, function(status){
                            if(status.visible) {
                                ++visibles;
                            }
                        });
                        if(visibles > scope.cantidadMaximaColumnas) {
                            checked = false;
                        }
                        if(visibles < scope.cantidadMinimaColumnas) {
                            checked = true;
                        }
                        return checked;
                    }
                }
            }
        }
    }
})();