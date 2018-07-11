/**
 * taurus-dap-postventa-develop - v1.1.0-build.15 - 2018-06-28
 * Copyright (c) 2018 
 */
(function() {
    angular.module("WebBancoChile", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ui.utils", "ui.select", "ngAnimate", "templates-app", "templates-orion", "ui.bootstrap.modal", "ui.bootstrap.dropdown", "ui.bootstrap.carousel", "pascalprecht.translate", "afklStickyElement", "WebBancoChile.dropMultiSelect", "WebBancoChile.home", "WebBancoChile.header", "WebBancoChile.footer", "angular-loading-bar", "WebBancoChile.simulacredito", "WebBancoChile.reportes", "WebBancoChile.cheques", "WebBancoChile.refactor", "WebBancoChile.rbac", "WebBancoChile.regularizacion", "WebBancoChile.v360", "WebBancoChile.cuentaVista", "WebBancoChile.estadoSituacion", "WebBancoChile.tesoreria", "WebBancoChile.autorizacion", "WebBancoChile.sticky", "WebBancoChile.escalamiento", "WebBancoChile.escritorio", "WebBancoChile.solicitudes", "WebBancoChile.mantenedoresSet", "WebBancoChile.mantenedoresFuncionalidades", "WebBancoChile.mantenedorgral", "WebBancoChile.mantenedoresUsuario", "WebBancoChile.mantenedoresDirector", "WebBancoChile.mantenedoresVisualizacionDatosSensibles", "WebBancoChile.emergenciasBancarias", "WebBancoChile.elementosWebkit", "WebBancoChile.inversiones", "WebBancoChile.chequesV2", "WebBancoChile.informes", "WebBancoChile.venta", "WebBancoChile.seguros", "WebBancoChile.journalBandeja", "WebBancoChile.journalEjecutivo", "WebBancoChile.notificacionesSolicitudes", "WebBancoChile.notificaciones", "WebBancoChile.enrolamiento", "WebBancoChile.tarjetas", "WebBancoChile.tarjetasDetalle", "WebBancoChile.pac", "WebBancoChile.avanceTarjeta", "WebBancoChile.comportamiento", "WebBancoChile.creditos", "WebBancoChile.prepago", "WebBancoChile.orionTablas", "WebBancoChile.vinculacion", "WebBancoChile.documentos", "WebBancoChile.fabricaProductos", "WebBancoChile.TallerProductos", "WebBancoChile.asidesGestiones", "WebBancoChile.osTicket", "WebBancoChile.login", "WebBancoChile.vistaCampanias", "WebBancoChile.simulacionCredito", "WebBancoChile.CreacionProductos", "WebBancoChile.gestionBundle", "WebBancoChile.CreacionBundle", "WebBancoChile.contratarProducto", "WebBancoChile.vistaRequerimientos", "WebBancoChile.fichaInversiones", "WebBancoChile.asignarReemplazo", "WebBancoChile.chequeras", "WebBancoChile.factoring", "WebBancoChile.controlLimites", "WebBancoChile.notificacionesVersionDos", "angular-svg-round-progress", "WebBancoChile.busqueda_transversal", "WebBancoChile.cuentas", "WebBancoChile.icpTransferirArchivos", "WebBancoChile.seguros-nuevo", "WebBancoChile.herramientas", "WebBancoChile.icpMapeoReportes", "WebBancoChile.pricing", "WebBancoChile.tarjetaDebitoEmpresa", "WebBancoChile.dropMultiSelect", "highcharts-ng", "WebBancoChile.buscadorAvanzado", "WebBancoChile.chat", "WebBancoChile.prospecto", "WebBancoChile.previsado", "WebBancoChile.compraCartera", "WebBancoChile.resumenProductos", "WebBancoChile.administradorGrupos", "WebBancoChile.modFichaInversiones", "WebBancoChile.leerlink", "WebBancoChile.segurosRefactor", "WebBancoChile.carteraClientes", "dndLists", "WebBancoChile.testFront", "WebBancoChile.enrolamientoBasico", "WebBancoChile.mantenedorCarteras", "WebBancoChile.autorizacionesSuper", "WebBancoChile.inversionEmpresa", "WebBancoChile.segurosContratados", "WebBancoChile.mantenedorInformacion", "WebBancoChile.dolaresPremios", "WebBancoChile.garantias", "WebBancoChile.ventaEmpresa", "WebBancoChile.castigoFormulario", "WebBancoChile.retencionFormulario", "WebBancoChile.mandatoContrato" ]);
})();

(function() {
    angular.module("WebBancoChile.footer", [ "ui.router", "ui.bootstrap" ]);
})();

(function() {
    angular.module("WebBancoChile.header", [ "ui.router", "ui.bootstrap" ]);
})();

(function() {
    angular.module("WebBancoChile.castigoFormulario", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.retencionFormulario", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.administradorGrupos", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.refactor", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.asidesGestiones", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.autorizacionesSuper", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.reportes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.buscadorAvanzado", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.carteraClientes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.chat", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.chequeras", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.cheques", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.chequesV2", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.informes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.tesoreria", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.comportamiento", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.compraCartera", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.simulacredito", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.simulacredito", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.autorizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.solicitudes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.cuentaVista", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.documentos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.dolaresPremios", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.elementosWebkit", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.emergenciasBancarias", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.enrolamientoBasico", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion", "rzModule", "ui-rangeSlider" ]);
})();

(function() {
    angular.module("WebBancoChile.enrolamiento", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.prospecto", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.escalamiento", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.escalamiento", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.escalamiento", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.escritorio", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ui.bootstrap.carousel", "ngScrollbar", "angularjs-gauge", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.fabricaProductos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.factoring", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "highcharts-ng" ]);
})();

(function() {
    angular.module("WebBancoChile.inversionEmpresa", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.fichaInversiones", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.garantias", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.herramientas", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.home", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.icpMapeoReportes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.icpTransferirArchivos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.inversiones", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.venta", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.journalBandeja", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.journalEjecutivo", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.leerlink", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ui.bootstrap.carousel", "ngScrollbar", "angularjs-gauge", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.login", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.controlLimites", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.dropMultiSelect" ]);
})();

(function() {
    angular.module("WebBancoChile.controlLimites", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.controlLimites", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedorCarteras", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedoresDirector", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedoresFuncionalidades", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedorgral", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedorInformacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedoresSet", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedoresUsuario", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.mantenedoresVisualizacionDatosSensibles", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.modFichaInversiones", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.notificacionesVersionDos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.notificaciones", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.notificacionesSolicitudes", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.osTicket", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.innominada", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.pricing", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.rbac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.rbac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.rbac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.rbac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.rbac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.regularizacion", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.segurosContratados", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.seguros", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.seguros-nuevo", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "angular-progress-button-styles", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.segurosRefactor", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.simulacionCredito", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.CreacionBundle", []);
})();

(function() {
    angular.module("WebBancoChile.CreacionProductos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.TallerProductos", []);
})();

(function() {
    angular.module("WebBancoChile.gestionBundle", []);
})();

(function() {
    angular.module("WebBancoChile.tarjetaDebitoEmpresa", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.dropMultiSelect", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.avanceTarjeta", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.tarjetasDetalle", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.pac", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.tarjetas", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.testFront", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.busqueda_transversal", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.creditos", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.cuentas", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.estadoSituacion", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.mandatoContrato", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.prepago", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.resumenProductos", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.v360", [ "ui.bootstrap", "ui.router", "ui.router.state.events", "ngAnimate", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants", "WebBancoChile.estadoSituacion", "WebBancoChile.orionTablas" ]);
})();

(function() {
    angular.module("WebBancoChile.vinculacion", [ "ui.router", "ui.bootstrap", "ui.utils", "ui.select", "ngScrollbar", "WebBancoChile.constants" ]);
})();

(function() {
    angular.module("WebBancoChile.ventaEmpresa", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.previsado", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.contratarProducto", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.previsado", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select", "WebBancoChile.transitionDetailDirective", "templates-orion" ]);
})();

(function() {
    angular.module("WebBancoChile.vistaCampanias", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.vistaExperiencia", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos", [ "ui.router", "ui.bootstrap", "WebBancoChile.constants", "ui.select" ]);
})();

(function() {
    angular.module("WebBancoChile").config(myAppConfig);
    myAppConfig.$inject = [ "$stateProvider", "$urlRouterProvider", "$animateProvider", "$httpProvider", "$logProvider" ];
    function myAppConfig($stateProvider, $urlRouterProvider, $animateProvider, $httpProvider, $logProvider) {
        $animateProvider.classNameFilter(/animate-/);
        $stateProvider.state("root", {
            "abstract": true,
            views: {
                "header@": {
                    controller: "headerCtrl",
                    templateUrl: "commons/templates/header/header_tpl.html",
                    controllerAs: "headermenu"
                },
                "main@": {
                    controller: "homeCtrl",
                    templateUrl: "components/home/home_tpl.html",
                    controllerAs: "vm"
                },
                "footer@": {
                    controller: "footerCtrl",
                    templateUrl: "commons/templates/footer/footer_tpl.html",
                    controllerAs: "footermenu"
                }
            }
        });
        $urlRouterProvider.otherwise("/home");
    }
})();

(function() {
    angular.module("WebBancoChile.footer").config(footerConfig);
    function footerConfig($stateProvider) {
        $stateProvider.state("footer", {
            parent: "root",
            url: "/footer",
            views: {
                "footer@": {
                    controller: "footerCtrl",
                    templateUrl: "footer/footer_tpl.html",
                    controllerAs: "footermenu"
                }
            },
            data: {
                pageTitle: "bancoChile"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.header").config(headerConfig);
    function headerConfig($stateProvider) {
        $stateProvider.state("header", {
            parent: "root",
            url: "/header",
            views: {
                "header@": {
                    controller: "headerCtrl",
                    templateUrl: "header/header.tpl.html",
                    controllerAs: "menuheader"
                }
            },
            data: {
                pageTitle: "bancoChile"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.castigoFormulario").config(castigoFormularioConfig);
    function castigoFormularioConfig($stateProvider) {
        $stateProvider.state("castigo-formulario", {
            parent: "root",
            url: "/2020/castigo-formulario",
            views: {
                "main@": {
                    controller: "castigoFormularioCtrl",
                    templateUrl: "components/2020/castigo-formulario/castigo-formulario_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación de Crédito"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.retencionFormulario").config(retencionFormularioConfig);
    function retencionFormularioConfig($stateProvider) {
        $stateProvider.state("retencionformulario", {
            parent: "root",
            url: "/2020/retencion-formulario",
            views: {
                "main@": {
                    controller: "retencionFormularioCtrl",
                    templateUrl: "components/2020/retencion-formulario/retencion-formulario_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación de Crédito"
            }
        }).state("retencion-antecedentes", {
            parent: "retencionformulario",
            url: "/retencion-antecedentes",
            views: {
                "main@": {
                    controller: "retencionFormularioCtrl",
                    templateUrl: "components/2020/retencion-formulario/retencion-antecedentes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Crear grupo"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.administradorGrupos").config(administradorGruposConfig);
    function administradorGruposConfig($stateProvider) {
        $stateProvider.state("administrador-grupos", {
            parent: "root",
            url: "/administrador-grupos",
            views: {
                "main@": {
                    controller: "administradorGruposCtrl",
                    templateUrl: "components/administrador-grupos/administrador-grupos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Administrador de grupos"
            }
        }).state("crear-grupo", {
            parent: "administrador-grupos",
            url: "/crear-grupo",
            views: {
                "main@": {
                    controller: "administradorGruposCtrl",
                    templateUrl: "components/administrador-grupos/crear-grupo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Crear grupo"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.refactor").config(refactorConfig);
    function refactorConfig($stateProvider) {
        $stateProvider.state("refactor", {
            parent: "root",
            url: "/ahorro/refactor",
            views: {
                "main@": {
                    controller: "refactorCtrl",
                    templateUrl: "components/ahorro/refactor/refactor_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Refactor"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.asidesGestiones").config(asidesGestionesConfig);
    function asidesGestionesConfig($stateProvider) {
        $stateProvider.state("asides-gestiones", {
            parent: "root",
            url: "/asides-gestiones/asides-gestiones",
            views: {
                "main@": {
                    controller: "asidesGestionesCtrl",
                    templateUrl: "components/asides-gestiones/asides-gestiones/asides-gestiones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Asides de Gestiones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo").config(asignarReemplazoConfig);
    function asignarReemplazoConfig($stateProvider) {
        $stateProvider.state("asignar-reemplazo", {
            parent: "root",
            url: "/asignar-reemplazo",
            views: {
                "main@": {
                    controller: "asignarReemplazoCtrl",
                    templateUrl: "components/asignar-reemplazo/asignar/asignar-reemplazo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "asignar-reemplazo"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.autorizacionesSuper").config(autorizacionesSuperConfig);
    function autorizacionesSuperConfig($stateProvider) {
        $stateProvider.state("autorizacionesSuper", {
            parent: "root",
            url: "/autorizaciones/superadministrador",
            views: {
                "main@": {
                    controller: "autorizacionesSuperCtrl",
                    templateUrl: "components/autorizaciones/superadministrador/autorizacion-superadmin_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Autorizaciones"
            }
        }).state("tab-vigente", {
            parent: "autorizacionesSuper",
            url: "/tab-vigente",
            controller: "autorizacionesSuperCtrl",
            templateUrl: "components/autorizaciones/superadministrador/tab-vigente_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.reportes").config(reportesConfig);
    function reportesConfig($stateProvider) {
        $stateProvider.state("reportes", {
            parent: "root",
            url: "/base/reportes",
            views: {
                "main@": {
                    controller: "reportesCtrl",
                    templateUrl: "components/base/reportes/reportes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Reportes"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.buscadorAvanzado").config(buscadorAvanzadoConfig);
    function buscadorAvanzadoConfig($stateProvider) {
        $stateProvider.state("buscador-avanzado", {
            parent: "root",
            url: "/buscador-avanzado",
            views: {
                "main@": {
                    controller: "buscadorAvanzadoCtrl",
                    templateUrl: "components/buscador-avanzado/buscador-avanzado_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Buscador Avanzado"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.carteraClientes").config(carteraClientesConfig);
    function carteraClientesConfig($stateProvider) {
        $stateProvider.state("cartera-clientes", {
            parent: "root",
            url: "/cartera-clientes",
            views: {
                "main@": {
                    controller: "carteraClientesCtrl",
                    templateUrl: "components/cartera-clientes/cartera-clientes/cartera-clientes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Cartera clientes"
            }
        }).state("cartera-clientes-busquedas-guardadas", {
            parent: "root",
            url: "/cartera-clientes/busquedas-guardadas",
            views: {
                "main@": {
                    controller: "carteraClientesCtrl",
                    templateUrl: "components/cartera-clientes/cartera-clientes/busquedas-guardadas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Búsquedas guardadas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.chat").config(chatConfig);
    function chatConfig($stateProvider) {
        $stateProvider.state("chat", {
            parent: "root",
            url: "/chat",
            views: {
                "main@": {
                    controller: "chatCtrl",
                    templateUrl: "components/chat/chat/chat_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Chat"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.chequeras").config(chequerasConfig);
    function chequerasConfig($stateProvider) {
        $stateProvider.state("chequeras", {
            parent: "root",
            url: "/cheques/chequeras",
            views: {
                "main@": {
                    controller: "chequerasCtrl",
                    templateUrl: "components/cheques/chequeras/chequeras_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Chequeras"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.cheques").config(chequesConfig);
    function chequesConfig($stateProvider) {
        $stateProvider.state("cheques", {
            parent: "root",
            url: "/cheques/cheques",
            views: {
                "main@": {
                    controller: "chequesCtrl",
                    templateUrl: "components/cheques/cheques/cheques_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Cheques"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.chequesV2").config(chequesV2Config);
    function chequesV2Config($stateProvider) {
        $stateProvider.state("chequesV2", {
            parent: "root",
            url: "/cheques/chequesV2",
            views: {
                "main@": {
                    controller: "chequesV2Ctrl",
                    templateUrl: "components/cheques/chequesV2/chequesV2_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Cheques"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.informes").config(chequesConfig);
    function chequesConfig($stateProvider) {
        $stateProvider.state("informes", {
            parent: "root",
            url: "/cheques/informes",
            views: {
                "main@": {
                    controller: "informesCtrl",
                    templateUrl: "components/cheques/informe-chequeras/informe-chequeras_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Informes"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.tesoreria").config(tesoreriaCtrlConfig);
    function tesoreriaCtrlConfig($stateProvider) {
        $stateProvider.state("Tesoreria", {
            parent: "root",
            url: "/chile-fx/tesoreria",
            views: {
                "main@": {
                    controller: "tesoreriaCtrl",
                    templateUrl: "components/chile-fx/tesoreria/tesoreria_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Tesoreria"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.comportamiento").config(comportamientoConfig);
    function comportamientoConfig($stateProvider) {
        $stateProvider.state("comportamiento", {
            parent: "root",
            url: "/comportamiento/comportamiento",
            views: {
                "main@": {
                    controller: "comportamientoCtrl",
                    templateUrl: "components/comportamiento/comportamiento/comportamiento_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Comportamiento"
            }
        }).state("comportamientoPrint", {
            parent: "root",
            url: "/comportamiento/print",
            views: {
                "main@": {
                    controller: "comportamientoCtrl",
                    templateUrl: "components/comportamiento/comportamiento/comportamiento-print_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Comportamiento"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.compraCartera").config(compraCarteraConfig);
    function compraCarteraConfig($stateProvider) {
        $stateProvider.state("compra-cartera", {
            parent: "root",
            url: "/compra-cartera",
            views: {
                "main@": {
                    controller: "compraCarteraCtrl",
                    templateUrl: "components/compra-cartera/compra-cartera_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Compra de Cartera"
            }
        }).state("ingreso-acreedores", {
            parent: "compra-cartera",
            url: "/ingreso-acreedores",
            views: {
                "main@": {
                    controller: "compraCarteraCtrl",
                    templateUrl: "components/compra-cartera/ingreso-acreedores_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Compra de Cartera"
            }
        }).state("ingreso-productos", {
            parent: "compra-cartera",
            url: "/ingreso-productos",
            views: {
                "main@": {
                    controller: "compraCarteraCtrl",
                    templateUrl: "components/compra-cartera/ingreso-productos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Compra de Cartera"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.simulacredito").config(refundircreditoConfig);
    function refundircreditoConfig($stateProvider) {
        $stateProvider.state("refundir-credito", {
            parent: "root",
            url: "/credito/refundir",
            views: {
                "main@": {
                    controller: "refundircreditoCtrl",
                    templateUrl: "components/credito/refundir-credito/refundir_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación de Crédito"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.simulacredito").config(simulacreditoConfig);
    function simulacreditoConfig($stateProvider) {
        $stateProvider.state("simula-credito", {
            parent: "root",
            url: "/credito/simulacion-credito",
            views: {
                "main@": {
                    controller: "simulacreditoCtrl",
                    templateUrl: "components/credito/simulacion-credito/simulacredito_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación de Crédito"
            }
        }).state("simula-credito-renegociado", {
            parent: "root",
            url: "/credito/simulacion-credito-renegociado",
            views: {
                "main@": {
                    controller: "simulacreditoCtrl",
                    templateUrl: "components/credito/simulacion-credito/simulacion-credito-renegociado/simula-credito-renegociado_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación de Crédito"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.autorizacion").config(autorizacionCtrlConfig);
    function autorizacionCtrlConfig($stateProvider) {
        $stateProvider.state("Autorizacion", {
            parent: "root",
            url: "/cuenta/autorizacion-de-cuentas",
            views: {
                "main@": {
                    controller: "autorizacionCtrl",
                    templateUrl: "components/cuenta/autorizacion-de-cuentas/autorizacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Autorizacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.solicitudes").config(solicitudesCtrlConfig);
    function solicitudesCtrlConfig($stateProvider) {
        $stateProvider.state("solicitudes", {
            parent: "root",
            url: "/cuenta/solicitudes-ingresadas",
            views: {
                "main@": {
                    controller: "autorizacionCtrl",
                    templateUrl: "components/cuenta/solicitudes-ingresadas/solicitudes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Solicitudes"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.cuentaVista").config(cuentaVistaConfig);
    function cuentaVistaConfig($stateProvider) {
        $stateProvider.state("Cuenta-Vista", {
            parent: "root",
            url: "/cuenta/vista",
            views: {
                "main@": {
                    controller: "cuentaVistaCtrl",
                    templateUrl: "components/cuenta/vista/cuenta-vista_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Cuenta Vista"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.documentos").config(documentosConfig);
    function documentosConfig($stateProvider) {
        $stateProvider.state("documentos", {
            parent: "root",
            url: "/documentos",
            views: {
                "main@": {
                    controller: "documentosCtrl",
                    templateUrl: "components/documentos/documentos/documentos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "documentos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.dolaresPremios").config(dolaresPremiosConfig);
    function dolaresPremiosConfig($stateProvider) {
        $stateProvider.state("dolaresPremios", {
            parent: "root",
            url: "/dolares-premios",
            views: {
                "main@": {
                    controller: "dolaresPremiosCtrl",
                    templateUrl: "components/dolares-premios/dolares-premios_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Dolares Premios"
            }
        }).state("dolaresPremiosAcumalado", {
            parent: "dolaresPremios",
            url: "/dolares-premios/acumulados",
            controller: "dolaresPremiosCtrl",
            templateUrl: "components/dolares-premios/dolares-premios-acumulado_tpl.html",
            controllerAs: "vm"
        }).state("dolaresPremiosAcumaladoDetalle", {
            parent: "root",
            url: "/dolares-premios/acumulados/detalle",
            views: {
                "main@": {
                    controller: "dolaresPremiosCtrl",
                    templateUrl: "components/dolares-premios/dolares-premios-acumulado-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("dolaresPremiosPromociones", {
            parent: "dolaresPremios",
            url: "/dolares-premios/promociones",
            controller: "dolaresPremiosCtrl",
            templateUrl: "components/dolares-premios/dolares-premios-promociones_tpl.html",
            controllerAs: "vm"
        }).state("dolaresPremiosCanjes", {
            parent: "dolaresPremios",
            url: "/dolares-premios/Canjes",
            controller: "dolaresPremiosCtrl",
            templateUrl: "components/dolares-premios/dolares-premios-canjes_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.elementosWebkit").config(elementosWebkitConfig);
    function elementosWebkitConfig($stateProvider) {
        $stateProvider.state("elementosWebkit", {
            parent: "root",
            url: "/elementos-webkit/elementos-webkit",
            views: {
                "main@": {
                    controller: "elementosWebkitCtrl",
                    templateUrl: "components/elementos-webkit/elementos-webkit/elementos-webkit_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Elementos Webkit"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.emergenciasBancarias").config(emergenciasBancariasConfig);
    function emergenciasBancariasConfig($stateProvider) {
        $stateProvider.state("emergenciasBancarias", {
            parent: "root",
            url: "/emergencias-bancarias/emergencias-bancarias",
            views: {
                "main@": {
                    controller: "emergenciasBancariasCtrl",
                    templateUrl: "components/emergencias-bancarias/emergencias-bancarias/emergencias-bancarias_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Emergencias bancarias"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.enrolamientoBasico").config(enrolamientoBasicoConfig);
    function enrolamientoBasicoConfig($stateProvider) {
        $stateProvider.state("enrolamiento-basico", {
            parent: "root",
            url: "/enrolamiento-basico",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/enrolamiento-basico-main_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento Basico"
            }
        }).state("enrolamiento-prospecto", {
            parent: "enrolamiento-basico",
            url: "/enrolamiento-prospecto",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/enrolamiento-prospecto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento Basico"
            }
        }).state("ficha-cliente", {
            parent: "enrolamiento-basico",
            url: "/ficha-cliente",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente/ficha-cliente_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Cliente"
            }
        }).state("ficha-cliente.informacion-basica", {
            url: "/informacion-basica",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica_tpl.html",
            data: {
                pageTitle: "Información básica"
            }
        }).state("ficha-cliente.informacion-basica-datos-personales", {
            url: "/informacion-basica/datos-personales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-personales_tpl.html",
            data: {
                pageTitle: "Datos personales"
            }
        }).state("ficha-cliente.informacion-basica-datos-conyuge", {
            url: "/informacion-basica/datos-conyuge",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-conyuge_tpl.html",
            data: {
                pageTitle: "Datos del cónyuge"
            }
        }).state("ficha-cliente.informacion-basica-datos-contacto", {
            url: "/informacion-basica/datos-contacto",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-contacto_tpl.html",
            data: {
                pageTitle: "Datos de contacto"
            }
        }).state("ficha-cliente-informacion-basica-datos-contacto-direcciones", {
            parent: "enrolamiento-basico",
            url: "/ficha-cliente/informacion-basica/datos-contacto-direcciones",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-contacto-direcciones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento Basico"
            }
        }).state("ficha-cliente.informacion-basica-datos-laborales", {
            url: "/informacion-basica/datos-laborales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-laborales_tpl.html",
            data: {
                pageTitle: "Datos laborales básicos"
            }
        }).state("ficha-cliente.informacion-basica-datos-educacionales", {
            url: "/informacion-basica/datos-educacionales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/informacion-basica-datos-educacionales_tpl.html",
            data: {
                pageTitle: "Datos educacionales"
            }
        }).state("ficha-cliente.datos-evaluacion", {
            url: "/datos-evaluacion",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion_tpl.html",
            data: {
                pageTitle: "Datos de evaluación"
            }
        }).state("ficha-cliente.datos-evaluacion-datos-personales", {
            url: "/datos-evaluacion/datos-personales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-datos-personales_tpl.html",
            data: {
                pageTitle: "Datos personales"
            }
        }).state("ficha-cliente.datos-evaluacion-ajuste-deuda", {
            url: "/datos-evaluacion/ajuste-deuda",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-ajuste-deuda_tpl.html",
            data: {
                pageTitle: "Ajuste deuda"
            }
        }).state("ficha-cliente.datos-evaluacion-datos-laborales", {
            url: "/datos-evaluacion/datos-laborales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-datos-laborales_tpl.html",
            data: {
                pageTitle: "Datos laborales"
            }
        }).state("ficha-cliente.datos-evaluacion-estado-situacion", {
            url: "/datos-evaluacion/estado-situacion",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-estado-situacion_tpl.html",
            data: {
                pageTitle: "Estado de situación básico"
            }
        }).state("ficha-cliente.datos-evaluacion-ingresos-mensuales", {
            url: "/datos-evaluacion/ingresos-mensuales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-ingresos-mensuales_tpl.html",
            data: {
                pageTitle: "Ingresos mensuales"
            }
        }).state("ficha-cliente.datos-evaluacion-egresos-mensuales", {
            url: "/datos-evaluacion/egresos-mensuales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-egresos-mensuales_tpl.html",
            data: {
                pageTitle: "Egresos mensuales"
            }
        }).state("ficha-cliente.datos-evaluacion-segmentacion", {
            url: "/datos-evaluacion/segmentacion",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-segmentacion_tpl.html",
            data: {
                pageTitle: "Segmentación"
            }
        }).state("ficha-cliente.datos-evaluacion-aprobaciones-vigentes", {
            url: "/datos-evaluacion/aprobaciones-vigentes",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-aprobaciones-vigentes_tpl.html",
            data: {
                pageTitle: "Aprobaciones vigentes"
            }
        }).state("ficha-cliente.datos-evaluacion-fatca", {
            url: "/datos-evaluacion/fatca",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/datos-evaluacion-fatca_tpl.html",
            data: {
                pageTitle: "FATCA"
            }
        }).state("ficha-cliente.clasificacion-corporativa", {
            url: "/clasificacion-corporativa",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion", {
            url: "/clasificacion",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion-corporativa-equipo-cobertura", {
            url: "/equipo-cobertura",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa-equipo-cobertura_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion-corporativa-contratos-mandatos", {
            url: "/contratos-mandatos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa-contratos-mandatos_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion-corporativa-inhabilidades", {
            url: "/inhabilidades",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa-inhabilidades_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion-corporativa-indicadores-riesgo", {
            url: "/indicadores-riesgo",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa-indicadores-riesgo_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.clasificacion-corporativa-indicadores-monetarios", {
            url: "/indicadores-monetarios",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/clasificacion-corporativa-indicadores-monetarios_tpl.html",
            data: {
                pageTitle: "Clasificación"
            }
        }).state("ficha-cliente.estado-situacion", {
            url: "/estado-situacion",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion_tpl.html",
            data: {
                pageTitle: "Estado de situación"
            }
        }).state("ficha-cliente.estado-situacion-datos-laborales", {
            url: "/estado-situacion/datos-laborales",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-datos-laborales_tpl.html",
            data: {
                pageTitle: "Datos laborales"
            }
        }).state("ficha-cliente.estado-situacion-empleos", {
            url: "/estado-situacion/empleos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-empleos_tpl.html",
            data: {
                pageTitle: "Empleos"
            }
        }).state("ficha-cliente.estado-situacion-activos", {
            url: "/estado-situacion/activos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-activos_tpl.html",
            data: {
                pageTitle: "Activos"
            }
        }).state("ficha-cliente.estado-situacion-pasivos", {
            url: "/estado-situacion/pasivos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-pasivos_tpl.html",
            data: {
                pageTitle: "Pasivos"
            }
        }).state("ficha-cliente.estado-situacion-ingresos", {
            url: "/estado-situacion/ingresos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-ingresos_tpl.html",
            data: {
                pageTitle: "Ingresos"
            }
        }).state("ficha-cliente.estado-situacion-egresos", {
            url: "/estado-situacion/egresos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-egresos_tpl.html",
            data: {
                pageTitle: "Egresos"
            }
        }).state("ficha-cliente.estado-situacion-antecedentes-bancarios", {
            url: "/estado-situacion/antecedentes-bancarios",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-antecedentes-bancarios_tpl.html",
            data: {
                pageTitle: "Antec. Bancarios"
            }
        }).state("ficha-cliente.estado-situacion-relaciones-partes", {
            url: "/estado-situacion/relaciones-partes",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-relaciones-partes_tpl.html",
            data: {
                pageTitle: "Relaciones de las partes"
            }
        }).state("ficha-cliente.estado-situacion-validacion-riesgo", {
            url: "/estado-situacion/validacion-riesgo",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-validacion-riesgo_tpl.html",
            data: {
                pageTitle: "Validación riesgo"
            }
        }).state("ficha-cliente.estado-situacion-detalle-rut", {
            url: "/estado-situacion/detalle-rut",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/estado-situacion/estado-situacion-detalle-rut_tpl.html",
            data: {
                pageTitle: "Detalle RUT temporal"
            }
        }).state("ficha-cliente.detalle-persona", {
            url: "/detalle-persona",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/detalle-persona/detalle-persona_tpl.html",
            data: {
                pageTitle: "Detalle persona"
            }
        }).state("ficha-cliente.detalle-persona-montos-preaprobados", {
            url: "/detalle-persona/montos-preaprobados",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/detalle-persona/detalle-persona-montos-preaprobados_tpl.html",
            data: {
                pageTitle: "Montos Preaprobados"
            }
        }).state("ficha-cliente.detalle-persona-informacion-adicional", {
            url: "/detalle-persona/informacion-adicional",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/detalle-persona/detalle-persona-informacion-adicional_tpl.html",
            data: {
                pageTitle: "Información adicional"
            }
        }).state("ficha-cliente.detalle-persona-plan-tarifario", {
            url: "/detalle-persona/plan-tarifario",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/detalle-persona/detalle-persona-plan-tarifario_tpl.html",
            data: {
                pageTitle: "Plan Tarifario"
            }
        }).state("ficha-cliente.detalle-persona-rut-temporal", {
            url: "/detalle-persona/rut-temporal",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/detalle-persona/detalle-persona-rut-temporal_tpl.html",
            data: {
                pageTitle: "RUT Temporal"
            }
        }).state("ficha-cliente.plantillas-pre-evaluador", {
            url: "/plantillas-pre-evaluador",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/plantillas-pre-evaluador/plantillas-pre-evaluador_tpl.html",
            data: {
                pageTitle: "Plantillas Pre-evaluador"
            }
        }).state("ficha-cliente.plantillas-pre-evaluador-ejecutar-plantillas", {
            url: "/plantillas-pre-evaluador/ejecutar-plantillas",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/plantillas-pre-evaluador/plantillas-pre-evaluador-ejecutar-plantillas_tpl.html",
            data: {
                pageTitle: "Ejecutar plantillas"
            }
        }).state("plantillas-pre-evaluador-ejecutar-plantillas-detalle-ejecucion", {
            parent: "root",
            url: "/plantillas-pre-evaluador/ejecutar-plantillas/detalle-ejecucion",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente/plantillas-pre-evaluador/plantillas-pre-evaluador-ejecutar-plantillas-detalle-ejecucion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Detalle ejecución"
            }
        }).state("ficha-cliente.plantillas-pre-evaluador-historico-ejecuciones", {
            url: "/plantillas-pre-evaluador/historico-ejecuciones",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/plantillas-pre-evaluador/plantillas-pre-evaluador-historico-ejecuciones_tpl.html",
            data: {
                pageTitle: "Histórico de ejecuciones"
            }
        }).state("ficha-cliente.documentos", {
            url: "/documentos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente/documentos/documentos_tpl.html",
            data: {
                pageTitle: "Documentos"
            }
        }).state("ficha-cliente-empresa", {
            parent: "enrolamiento-basico",
            url: "/ficha-cliente-empresa",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/ficha-cliente-empresa_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Cliente Empresa"
            }
        }).state("ficha-cliente-empresa.informacion-basica-identificacion-empresa", {
            url: "/informacion-basica/identificacion-empresa",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-identificacion-empresa_tpl.html",
            data: {
                pageTitle: "Identificación Empresa"
            }
        }).state("ficha-cliente-empresa.informacion-basica-datos-contacto", {
            url: "/informacion-basica/datos-contacto",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-datos-contacto_tpl.html",
            data: {
                pageTitle: "Datos de contacto"
            }
        }).state("ficha-cliente-empresa-informacion-basica-datos-contacto-direcciones", {
            parent: "enrolamiento-basico",
            url: "/ficha-cliente-empresa/informacion-basica/datos-contacto-direcciones",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-datos-contacto-direcciones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento Basico"
            }
        }).state("ficha-cliente-empresa.informacion-basica-contactos-ambito", {
            url: "/informacion-basica/contactos-ambito",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-contactos-ambito_tpl.html",
            data: {
                pageTitle: "Contactos por ámbito"
            }
        }).state("ficha-cliente-empresa.informacion-basica-cliente-cosmos", {
            url: "/informacion-basica/cliente-cosmos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-cliente-cosmos_tpl.html",
            data: {
                pageTitle: "Cliente Cosmos"
            }
        }).state("ficha-cliente-empresa.informacion-basica-detalle-plan", {
            url: "/informacion-basica/detalle-plan",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-detalle-plan_tpl.html",
            data: {
                pageTitle: "Detalle Plan Tarifario"
            }
        }).state("ficha-cliente-empresa.informacion-basica-normalizacion-rut", {
            url: "/informacion-basica/normalizacion-rut",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/informacion-basica-normalizacion-rut_tpl.html",
            data: {
                pageTitle: "Normalización RUT"
            }
        }).state("ficha-cliente-empresa.plantillas-segmentador-negocio", {
            url: "/plantillas/segmentador-negocio",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-segmentador-negocio_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-segmentador-negocio.segmentador", {
            url: "/segmentador",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-segmentador-negocio-segmentador_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-segmentador-negocio.negocio", {
            url: "/negocio",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-segmentador-negocio-negocio_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-comportamiento-grupal", {
            url: "/plantillas/comportamiento-grupal",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-comportamiento-grupal_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa-plantillas-comportamiento-grupal-detalle", {
            parent: "root",
            url: "/enrolamiento-basico/ficha-cliente-empresa/plantillas/comportamiento-grupal/detalle",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-comportamiento-grupal-detalle_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa-plantillas-comportamiento-grupal-detalle-ejecucion", {
            parent: "root",
            url: "/enrolamiento-basico/ficha-cliente-empresa/plantillas/comportamiento-grupal/detalle/ejecucion",
            views: {
                "main@": {
                    controller: "enrolamientoBasicoCtrl",
                    templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-comportamiento-grupal-detalle-ejecucion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-historicos", {
            url: "/plantillas/historicos",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-historicos_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-historico.segmentador", {
            url: "/segmentador",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-historicos-segmentador_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-historico.negocio", {
            url: "/negocio",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-historicos-negocio_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        }).state("ficha-cliente-empresa.plantillas-historico.comportamiento-grupo", {
            url: "/comportamiento-grupo",
            templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/plantillas-historicos-comportamiento-grupo_tpl.html",
            data: {
                pageTitle: "Plantillas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.enrolamiento").config(enrolamientoConfig);
    function enrolamientoConfig($stateProvider) {
        $stateProvider.state("enrolamiento", {
            parent: "root",
            url: "/enrolamiento/enrolamiento",
            views: {
                "main@": {
                    controller: "enrolamientoCtrl",
                    templateUrl: "components/enrolamiento/enrolamiento/enrolamiento_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.prospecto").config(enrolamientoConfig);
    function enrolamientoConfig($stateProvider) {
        $stateProvider.state("prospecto", {
            parent: "root",
            url: "/enrolamiento/prospecto",
            views: {
                "main@": {
                    controller: "enrolamientoCtrl",
                    templateUrl: "components/enrolamiento/prospecto/prospecto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento"
            }
        }).state("prospecto-previo", {
            parent: "root",
            url: "/enrolamiento/prospecto-previo",
            views: {
                "main@": {
                    controller: "enrolamientoCtrl",
                    templateUrl: "components/enrolamiento/prospecto/prospecto_previo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento"
            }
        }).state("prospecto-resumen", {
            parent: "root",
            url: "/enrolamiento/prospecto/resumen",
            views: {
                "main@": {
                    controller: "enrolamientoCtrl",
                    templateUrl: "components/enrolamiento/prospecto/prospecto_resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Enrolamiento"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").config(agregarAutorizacionConfig);
    function agregarAutorizacionConfig($stateProvider) {
        $stateProvider.state("agregarAutorizacion", {
            parent: "root",
            url: "/escalamiento/agregar-autorizacion",
            views: {
                "main@": {
                    controller: "agregarAutorizacionCtrl",
                    templateUrl: "components/escalamiento/agregar-autorizacion/agregar-autorizacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "agregarAutorizacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").config(editarAutorizacionConfig);
    function editarAutorizacionConfig($stateProvider) {
        $stateProvider.state("editarAutorizacion", {
            parent: "root",
            url: "/escalamiento/editar-autorizacion",
            views: {
                "main@": {
                    controller: "editarAutorizacionCtrl",
                    templateUrl: "components/escalamiento/editar-autorizacion/editar-autorizacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "editarAutorizacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").config(mantenedorConfig);
    function mantenedorConfig($stateProvider) {
        $stateProvider.state("mantenedor", {
            parent: "root",
            url: "/escalamiento/mantenedor",
            views: {
                "main@": {
                    controller: "mantenedorCtrl",
                    templateUrl: "components/escalamiento/mantenedor/mantenedor_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedor"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.escritorio").config(escritorioConfig);
    function escritorioConfig($stateProvider) {
        $stateProvider.state("escritorio", {
            parent: "root",
            url: "/escritorio",
            views: {
                "main@": {
                    controller: "escritorioCtrl",
                    templateUrl: "components/escritorio/escritorio_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "escritorio"
            }
        }).state("escritorio-campanas", {
            parent: "root",
            url: "/escritorio-campanas",
            views: {
                "main@": {
                    controller: "escritorioCtrl",
                    templateUrl: "components/escritorio/escritorio-campanas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "escritorio"
            }
        }).state("escritorio-oportunidades", {
            parent: "root",
            url: "/escritorio-oportunidades",
            views: {
                "main@": {
                    controller: "escritorioCtrl",
                    templateUrl: "components/escritorio/escritorio-oportunidades_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "escritorio"
            }
        }).state("escritorio-solicitudes", {
            parent: "root",
            url: "/escritorio-solicitudes",
            views: {
                "main@": {
                    controller: "escritorioCtrl",
                    templateUrl: "components/escritorio/escritorio-solicitudes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "escritorio"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.fabricaProductos").config(fabricaProductosConfig);
    function fabricaProductosConfig($stateProvider) {
        $stateProvider.state("fabrica-productos", {
            parent: "root",
            url: "/fabrica-productos/fabrica-productos",
            views: {
                "main@": {
                    controller: "fabricaProductosCtrl",
                    templateUrl: "components/fabrica-productos/fabrica-productos/fabrica-productos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Fábrica de Productos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.factoring").config(factoringConfig);
    function factoringConfig($stateProvider) {
        $stateProvider.state("factoring", {
            parent: "root",
            url: "/factoring",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Factoring"
            }
        }).state("factoring-cliente", {
            parent: "root",
            url: "/factoring-cliente",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-cliente_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-cartera-cliente", {
            parent: "root",
            url: "/factoring-cartera-cliente",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-cartera-cliente_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-visualizar-operaciones-pendientes", {
            parent: "root",
            url: "/factoring-visualizar-operaciones-pendientes",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-visualizar-operaciones-pendientes_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-operacion-pendiente", {
            parent: "root",
            url: "/factoring-operacion-pendiente",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-operacion-pendiente_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-cliente-prorroga", {
            parent: "root",
            url: "/factoring-cliente-prorroga",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-cliente-prorroga_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-cliente-detalle-prorroga", {
            parent: "root",
            url: "/factoring-cliente-detalle-prorroga",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-cliente-detalle-prorroga_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-cliente-prorroga-autorizacion-detalle", {
            parent: "root",
            url: "/factoring-cliente-prorroga-autorizacion-detalle",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-cliente-prorroga-autorizacion-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-autorizaciones", {
            parent: "root",
            url: "/factoring-autorizaciones",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-autorizaciones_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-seguimiento", {
            parent: "root",
            url: "/factoring-seguimiento",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/factoring-seguimiento_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-autorizaciones", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-autorizaciones",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-autorizaciones_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-seguimiento", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-seguimiento",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-seguimiento_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-prorroga", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-prorroga",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-prorroga_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-detalle-prorroga", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-detalle-prorroga",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-detalle-prorroga_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-cliente-prorroga-autorizacion-detalle", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-cliente-prorroga-autorizacion-detalle",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-cliente-prorroga-autorizacion-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-resumen", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-resumen",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-resumen_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-operacion-simulada-resumen", {
            parent: "root",
            url: "/factoring-operacion-simulada-resumen",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/operacion-simulada/factoring-operacion-simulada-resumen_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-simulacion-cancelacion-cliente-prorroga-seguimiento-detalle", {
            parent: "root",
            url: "/factoring-simulacion-cancelacion-cliente-prorroga-seguimiento-detalle",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/simulacion-cancelacion/factoring-simulacion-cancelacion-cliente-prorroga-seguimiento-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("factoring-operacion-simulada-detalle", {
            parent: "root",
            url: "/factoring-operacion-simulada-detalle",
            views: {
                "main@": {
                    controller: "factoringCtrl",
                    templateUrl: "components/factoring/factoring/operacion-simulada/factoring-operacion-simulada-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("ofertas-disponibles", {
            parent: "factoring-cliente",
            url: "/ofertas-disponibles",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/ofertas-disponibles_tpl.html",
            controllerAs: "vm"
        }).state("operaciones-vigentes", {
            parent: "factoring-cliente",
            url: "/operaciones-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/operaciones-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("subtab-operaciones-vigentes-mora", {
            parent: "operaciones-vigentes",
            url: "/subtab-operaciones-vigentes-mora",
            controller: "factoringOperacionesVigenteMoraCtrl",
            templateUrl: "components/factoring/factoring/subtab-operaciones-vigentes-mora_tpl.html",
            controllerAs: "vm"
        }).state("subtab-ofertas-disponibles-listado-documentos-financiables", {
            parent: "ofertas-disponibles",
            url: "/subtab-ofertas-disponibles-listado-documentos-financiables",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/subtab-ofertas-disponibles-listado-documentos-financiables_tpl.html",
            controllerAs: "vm"
        }).state("subtab-ofertas-disponibles-listado-documentos-no-financiables", {
            parent: "ofertas-disponibles",
            url: "/subtab-ofertas-disponibles-listado-documentos-no-financiables",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/subtab-ofertas-disponibles-listado-documentos-no-financiables_tpl.html",
            controllerAs: "vm"
        }).state("operaciones-historicas", {
            parent: "factoring-cliente",
            url: "/operaciones-historicas",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/operaciones-historicas_tpl.html",
            controllerAs: "vm"
        }).state("operaciones-pendientes", {
            parent: "factoring-cliente",
            url: "/operaciones-pendientes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/operaciones-pendientes_tpl.html",
            controllerAs: "vm"
        }).state("lineas-sublineas", {
            parent: "factoring-cliente",
            url: "/lineas-sublineas",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/lineas-sublineas_tpl.html",
            controllerAs: "vm"
        }).state("listado-documentos-historicos", {
            parent: "operaciones-historicas",
            url: "/listado-documentos-historicos",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/listado-documentos-historicos_tpl.html",
            controllerAs: "vm"
        }).state("listado-documentos-pendientes", {
            parent: "operaciones-pendientes",
            url: "/listado-documentos-pendientes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/listado-documentos-pendientes_tpl.html",
            controllerAs: "vm"
        }).state("listado-documentos-vigentes", {
            parent: "operaciones-vigentes",
            url: "/listado-documentos-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/listado-documentos-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-detalle", {
            parent: "factoring-cliente-detalle-prorroga",
            url: "/tab-prorroga-detalle",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-prorroga-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-documentos", {
            parent: "factoring-cliente-detalle-prorroga",
            url: "/tab-prorroga-documentos",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-prorroga-documentos_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-deudores", {
            parent: "factoring-cliente-detalle-prorroga",
            url: "/tab-prorroga-deudores",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-prorroga-deudores_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-autorizaciones-vigentes", {
            parent: "factoring-autorizaciones",
            url: "/tab-factoring-autorizaciones-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-factoring-autorizaciones-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-autorizaciones-historicas", {
            parent: "factoring-autorizaciones",
            url: "/tab-factoring-autorizaciones-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-factoring-autorizaciones-historicas_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-seguimiento-vigentes", {
            parent: "factoring-seguimiento",
            url: "/tab-factoring-seguimiento-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-factoring-seguimiento-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-seguimiento-historicas", {
            parent: "factoring-seguimiento",
            url: "/tab-factoring-seguimiento-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-factoring-seguimiento-historicas_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-autorizacion-detalle", {
            parent: "factoring-cliente-prorroga-autorizacion-detalle",
            url: "/tab-prorroga-autorizacion-detalle",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-prorroga-autorizacion-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-simulacion-cancelacion-prorroga-detalle", {
            parent: "factoring-simulacion-cancelacion-detalle-prorroga",
            url: "/tab-simulacion-cancelacion-prorroga-detalle",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-simulacion-cancelacion-prorroga-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-simulacion-cancelacion-prorroga-deudores", {
            parent: "factoring-simulacion-cancelacion-detalle-prorroga",
            url: "/tab-simulacion-cancelacion-prorroga-deudores",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-simulacion-cancelacion-prorroga-deudores_tpl.html",
            controllerAs: "vm"
        }).state("tab-simulacion-cancelacion-prorroga-documentos", {
            parent: "factoring-simulacion-cancelacion-detalle-prorroga",
            url: "/tab-simulacion-cancelacion-prorroga-documentos",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-simulacion-cancelacion-prorroga-documentos_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-simulacion-cancelacion-autorizaciones-vigentes", {
            parent: "factoring-simulacion-cancelacion-autorizaciones",
            url: "/tab-factoring-simulacion-cancelacion-autorizaciones-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-factoring-simulacion-cancelacion-autorizaciones-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-simulacion-cancelacion-autorizaciones-historicas", {
            parent: "factoring-simulacion-cancelacion-autorizaciones",
            url: "/tab-factoring-simulacion-cancelacion-autorizaciones-historicas",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-factoring-simulacion-cancelacion-autorizaciones-historicas_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-simulacion-cancelacion-seguimiento-vigentes", {
            parent: "factoring-simulacion-cancelacion-seguimiento",
            url: "/tab-factoring-simulacion-cancelacion-seguimiento-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-factoring-simulacion-cancelacion-seguimiento-vigentes_tpl.html",
            controllerAs: "vm"
        }).state("tab-factoring-simulacion-cancelacion-seguimiento-historicas", {
            parent: "factoring-simulacion-cancelacion-seguimiento",
            url: "/tab-factoring-simulacion-cancelacion-seguimiento-vigentes",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/tab-factoring-simulacion-cancelacion-seguimiento-historicas_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-simulacion-cancelacion-autorizacion-detalle", {
            parent: "factoring-simulacion-cancelacion-cliente-prorroga-autorizacion-detalle",
            url: "/tab-prorroga-simulacion-cancelacion-autorizacion-detalle",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-prorroga-simulacion-cancelacion-autorizacion-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-simulacion-cancelacion-autorizacion-detalle-edicion", {
            parent: "factoring-simulacion-cancelacion-cliente-prorroga-autorizacion-detalle",
            url: "/tab-prorroga-simulacion-cancelacion-autorizacion-detalle-edicion",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-prorroga-simulacion-cancelacion-autorizacion-detalle-edicion_tpl.html",
            controllerAs: "vm"
        }).state("tab-prorroga-simulacion-cancelacion-seguimiento-detalle", {
            parent: "factoring-simulacion-cancelacion-cliente-prorroga-seguimiento-detalle",
            url: "/tab-prorroga-simulacion-cancelacion-seguimiento-detalles",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/simulacion-cancelacion/tab-prorroga-simulacion-cancelacion-seguimiento-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-operacion-simulada-detalle", {
            parent: "factoring-operacion-simulada-detalle",
            url: "/tab-operacion-simulada-detalle",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/operacion-simulada/tab-operacion-simulada-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tab-operacion-simulada-detalle-edicion-fecha", {
            parent: "factoring-operacion-simulada-detalle",
            url: "/tab-operacion-simulada-detalle-edicion-fecha",
            controller: "factoringCtrl",
            templateUrl: "components/factoring/factoring/operacion-simulada/tab-operacion-simulada-detalle-edicion-fecha_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.inversionEmpresa").config(inversionEmpresaConfig);
    function inversionEmpresaConfig($stateProvider) {
        $stateProvider.state("inversionEmpresa", {
            parent: "root",
            url: "/ficha-inversion-empresa/ficha-inversion",
            views: {
                "main@": {
                    controller: "inversionEmpresaCtrl",
                    templateUrl: "components/ficha-inversiones-empresa/ficha-inversion/ficha-inversion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Inversiones"
            }
        }).state("inversionEmpresaStep2", {
            parent: "root",
            url: "/ficha-inversion-empresa/ficha-inversion-step2",
            views: {
                "main@": {
                    controller: "inversionEmpresaCtrl",
                    templateUrl: "components/ficha-inversiones-empresa/ficha-inversion/ficha-inversion-step2_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Inversiones"
            }
        }).state("inversionEmpresaStep3", {
            parent: "root",
            url: "/ficha-inversion-empresa/ficha-inversion-step3",
            views: {
                "main@": {
                    controller: "inversionEmpresaCtrl",
                    templateUrl: "components/ficha-inversiones-empresa/ficha-inversion/ficha-inversion-step3_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Inversiones"
            }
        }).state("inversionEmpresaResumen", {
            parent: "root",
            url: "/ficha-inversion-empresa/ficha-inversion-resumen",
            views: {
                "main@": {
                    controller: "inversionEmpresaCtrl",
                    templateUrl: "components/ficha-inversiones-empresa/ficha-inversion/ficha-inversion-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha Inversiones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.fichaInversiones").config(fichaInversionesConfig);
    function fichaInversionesConfig($stateProvider) {
        $stateProvider.state("fichaInversiones", {
            parent: "root",
            url: "/ficha-inversiones/ficha-inversiones",
            views: {
                "main@": {
                    controller: "fichaInversionesCtrl",
                    templateUrl: "components/ficha-inversiones/views/ficha-inversiones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha de Inversiones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.garantias").config(controlLimitesCtrl);
    function controlLimitesCtrl($stateProvider) {
        $stateProvider.state("garantias", {
            parent: "root",
            url: "/garantias",
            views: {
                "main@": {
                    controller: "garantiasCtrl",
                    templateUrl: "components/garantias/garantias_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Garantías"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.herramientas").config(loginConfig);
    function loginConfig($stateProvider) {
        $stateProvider.state("herramientas", {
            parent: "root",
            url: "/herramientas",
            views: {
                "main@": {
                    controller: "herramientasCtrl",
                    templateUrl: "components/herramientas/herramientas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Herramientas"
            }
        }).state("herramientas.ahorro", {
            url: "/ahorro",
            templateUrl: "components/herramientas/informacion/manuales_ahorro_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.dap-manual", {
            url: "/dap-manual",
            templateUrl: "components/herramientas/informacion/manuales_dap_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.post-venta", {
            url: "/post-venta",
            templateUrl: "components/herramientas/informacion/manuales_post_venta_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.vista-360", {
            url: "/vista-360",
            templateUrl: "components/herramientas/informacion/manuales_vista_360_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.dap-pregunta", {
            url: "/dap-pregunta",
            templateUrl: "components/herramientas/informacion/preguntas_dap_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.plataforma-operativa", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/preguntas_plataforma_operativa_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.cuentas", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_cuentas_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.documentos-bancarios", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_documentos_bancarios_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.hipotecarios", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_hipotecarios_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.inversiones", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_inversiones_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.linea-credito", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_linea_credito_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.mercado-corredores", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_mercado_corredores_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.seguros", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_seguros_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.tarjetas", {
            url: "/plataforma-operativa",
            templateUrl: "components/herramientas/informacion/productos_tarjetas_tpl.html",
            data: {
                pageTitle: "Ahorro"
            }
        }).state("herramientas.manual", {
            url: "/manual",
            templateUrl: "components/herramientas/informacion/manual_tpl.html",
            data: {
                pageTitle: "Manual"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.home").config(homeConfig);
    function homeConfig($stateProvider) {
        $stateProvider.state("home", {
            parent: "root",
            url: "/home",
            views: {
                "main@": {
                    controller: "homeCtrl",
                    templateUrl: "components/home/home_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Home"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.icpMapeoReportes").config(icpMapeoReporteConfig);
    function icpMapeoReporteConfig($stateProvider) {
        $stateProvider.state("icp-mapeo-reporte", {
            parent: "root",
            url: "/icp-mapeo-reporte",
            views: {
                "main@": {
                    controller: "icpMapeoReporteCtrl",
                    templateUrl: "components/icp/mapeo-reportes-normativos/icp-mapeo-reportes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Transferir archivos"
            }
        }).state("icp-mapeo-reporte-detalle", {
            parent: "icp-mapeo-reporte",
            url: "/icp-mapeo-reporte-detalle",
            controller: "icpMapeoReporteCtrl",
            templateUrl: "components/icp/mapeo-reportes-normativos/icp-mapeo-reportes-detalle_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.icpTransferirArchivos").config(icpTransferirArchivosConfig);
    function icpTransferirArchivosConfig($stateProvider) {
        $stateProvider.state("icp-transferir-archivos", {
            parent: "root",
            url: "/icp-transferir-archivos",
            views: {
                "main@": {
                    controller: "icpTransferirArchivosCtrl",
                    templateUrl: "components/icp/transferir-archivos/icp-transferir-archivos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Transferir archivos"
            }
        }).state("icp-transferir-archivos-subir", {
            parent: "icp-transferir-archivos",
            url: "/icp-transferir-archivos-subir",
            controller: "icpTransferirArchivosCtrl",
            templateUrl: "components/icp/transferir-archivos/icp-transferir-archivos-subir_tpl.html",
            controllerAs: "vm"
        }).state("icp-transferir-archivos-descargar", {
            parent: "icp-transferir-archivos",
            url: "/icp-transferir-archivos-descargar",
            controller: "icpTransferirArchivosCtrl",
            templateUrl: "components/icp/transferir-archivos/icp-transferir-archivos-descargar_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.inversiones").config(inversionesConfig);
    function inversionesConfig($stateProvider) {
        $stateProvider.state("inversiones", {
            parent: "root",
            url: "/inversiones/inversiones",
            views: {
                "main@": {
                    controller: "inversionesCtrl",
                    templateUrl: "components/inversiones/inversiones/inversiones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Inversiones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.venta").config(ventaConfig);
    function ventaConfig($stateProvider) {
        $stateProvider.state("comprobante", {
            url: "/inversiones/comprobante",
            views: {
                "main@": {
                    controller: "ventaCtrl",
                    templateUrl: "components/inversiones/venta/venta-dap--comprobante_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "venta"
            }
        }).state("resumen", {
            parent: "root",
            url: "/inversiones/resumen",
            views: {
                "main@": {
                    controller: "ventaCtrl",
                    templateUrl: "components/inversiones/venta/venta-dap--resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "venta"
            }
        }).state("ingreso", {
            parent: "root",
            url: "/inversiones/ingreso",
            views: {
                "main@": {
                    controller: "ventaCtrl",
                    templateUrl: "components/inversiones/venta/venta-dap--ingreso_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("datosPago", {
            parent: "root",
            url: "/inversiones/datospago",
            views: {
                "main@": {
                    controller: "ventaCtrl",
                    templateUrl: "components/inversiones/venta/venta-dap--datos-pago_tpl.html",
                    controllerAs: "vm"
                }
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.journalBandeja").config(journalBandejaConfig);
    function journalBandejaConfig($stateProvider) {
        $stateProvider.state("journalBandeja", {
            parent: "root",
            url: "/journal/bandeja",
            views: {
                "main@": {
                    controller: "journalBandejaCtrl",
                    templateUrl: "components/journal/bandeja/bandeja_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Bandeja"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.journalEjecutivo").config(journalEjecutivoConfig);
    function journalEjecutivoConfig($stateProvider) {
        $stateProvider.state("journalEjecutivo", {
            parent: "root",
            url: "/journal/journal-ejecutivo",
            views: {
                "main@": {
                    controller: "journalEjecutivoCtrl",
                    templateUrl: "components/journal/journal-ejecutivo/journal-ejecutivo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Journal Ejecutivo"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.leerlink").config(leerlinkConfig);
    function leerlinkConfig($stateProvider) {
        $stateProvider.state("leerlink", {
            parent: "root",
            url: "/leerlink",
            views: {
                "main@": {
                    controller: "leerlinkCtrl",
                    templateUrl: "components/leerlink/leer_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "leer"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.login").config(loginConfig);
    function loginConfig($stateProvider) {
        $stateProvider.state("login", {
            parent: "root",
            url: "/login",
            views: {
                "main@": {
                    controller: "loginCtrl",
                    templateUrl: "components/login/login_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Login"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").config(controlLimitesCtrl);
    function controlLimitesCtrl($stateProvider, $urlRouterProvider) {
        $stateProvider.state("mac-workflow", {
            parent: "root",
            url: "/mac-workflow",
            views: {
                "main@": {
                    controller: "macWorkflowCtrl",
                    templateUrl: "components/mac-control-limites/MAC-workflow/mac-workflow_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Mac"
            }
        }).state("mac-workflow-detalle", {
            parent: "mac-workflow",
            url: "/detalle",
            controller: "macWorkflowCtrl",
            templateUrl: "components/mac-control-limites/MAC-workflow/detalle/mac-workflow-detalle_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Detalle"
            }
        }).state("mac-workflow-detalle-mac-grupo", {
            parent: "mac-workflow-detalle",
            url: "/mac-grupo",
            controller: "macWorkflowCtrl",
            templateUrl: "components/mac-control-limites/MAC-workflow/detalle/mac-workflow-detalle-mac-grupo_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Grupal"
            }
        }).state("mac-workflow-detalle-adjuntos", {
            parent: "mac-workflow-detalle",
            url: "/adjuntos",
            controller: "macWorkflowCtrl",
            templateUrl: "components/mac-control-limites/MAC-workflow/detalle/mac-workflow-detalle-adjuntos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Adjuntos"
            }
        }).state("mac-workflow-detalle-comentarios", {
            parent: "mac-workflow-detalle",
            url: "/comentarios",
            controller: "macWorkflowCtrl",
            templateUrl: "components/mac-control-limites/MAC-workflow/detalle/mac-workflow-detalle-comentarios_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Comentarios"
            }
        }).state("mac-workflow-detalle-comitentes", {
            parent: "mac-workflow-detalle",
            url: "/comitentes",
            controller: "macWorkflowCtrl",
            templateUrl: "components/mac-control-limites/MAC-workflow/detalle/mac-workflow-detalle-comitentes_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Comitentes"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").config(aprobacionesGrupalesCtrl);
    function aprobacionesGrupalesCtrl($stateProvider, $urlRouterProvider) {
        $stateProvider.state("aprobaciones-grupales", {
            parent: "root",
            url: "/aprobaciones-grupales",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/aprobaciones-grupales_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Aprobaciones Grupales"
            }
        }).state("ag-en-proceso-agregar-limite", {
            parent: "root",
            url: "/agregar-limite",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-limite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Límite"
            }
        }).state("ag-en-proceso-editar-limite", {
            parent: "root",
            url: "/editar-limite",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-editar-limite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Límite"
            }
        }).state("ag-en-proceso-agregar-sublimite", {
            parent: "root",
            url: "/agregar-sublimite",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-sublimite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Sublímite"
            }
        }).state("ag-en-proceso-editar-sublimite", {
            parent: "root",
            url: "/editar-sublimite",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-editar-sublimite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Sublímite"
            }
        }).state("aprobaciones-grupales-grupo", {
            parent: "aprobaciones-grupales",
            url: "/grupo",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/aprobaciones-grupales-grupo_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Aprobaciones Grupales"
            }
        }).state("aprobaciones-grupales-grupo-vigentes", {
            parent: "aprobaciones-grupales-grupo",
            url: "/aprobaciones-grupales-grupo-vigentes",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/aprobaciones-grupales-grupo--vigentes_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Aprobaciones Grupales"
            }
        }).state("aprobaciones-grupales-grupo-proceso", {
            parent: "aprobaciones-grupales-grupo",
            url: "/aprobaciones-grupales-grupo-proceso",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/aprobaciones-grupales-grupo--proceso_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Aprobaciones Grupales"
            }
        }).state("aprobaciones-grupales-grupo-historicas", {
            parent: "aprobaciones-grupales-grupo",
            url: "/aprobaciones-grupales-grupo-historicas",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/aprobaciones-grupales-grupo--historicas_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Aprobaciones Grupales"
            }
        }).state("ag-en-proceso", {
            parent: "aprobaciones-grupales",
            url: "/en-proceso",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "En Proceso"
            }
        }).state("ag-en-proceso-mac-grupal", {
            parent: "ag-en-proceso",
            url: "/mac-grupal",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-grupal_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Grupal"
            }
        }).state("ag-en-proceso-mac-comitentes", {
            parent: "ag-en-proceso",
            url: "/mac-comitentes",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comitentes_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Individual"
            }
        }).state("ag-en-proceso-mac-comentarios", {
            parent: "ag-en-proceso",
            url: "/mac-comentarios",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comentario_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Comentarios"
            }
        }).state("ag-en-proceso-mac-comentarios-comentarios", {
            parent: "ag-en-proceso-mac-comentarios",
            url: "/comentarios-grupo",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comentario--comentarios-grupo_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Comentarios grupo"
            }
        }).state("ag-en-proceso-mac-comentarios-consultas", {
            parent: "ag-en-proceso-mac-comentarios",
            url: "/consultas-comite",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comentario--consultas-comite_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Consultas comité"
            }
        }).state("ag-en-proceso-mac-comentarios-notas", {
            parent: "ag-en-proceso-mac-comentarios",
            url: "/notas",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comentario--notas_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Notas"
            }
        }).state("ag-en-proceso-mac-comentarios-resoluciones", {
            parent: "ag-en-proceso-mac-comentarios",
            url: "/resoluciones-comite",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-comentario--resoluciones-comite_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Resoluciones comité"
            }
        }).state("ag-en-proceso-mac-adjuntos", {
            parent: "ag-en-proceso",
            url: "/adjuntos",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-adjuntos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Adjuntos"
            }
        }).state("ag-en-proceso-mac-adjuntos-todos", {
            parent: "ag-en-proceso-mac-adjuntos",
            url: "/todos",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-adjuntos-todos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Adjuntos"
            }
        }).state("ag-en-proceso-mac-adjuntos-compaginar", {
            parent: "ag-en-proceso-mac-adjuntos",
            url: "/compaginar",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-adjuntos-compaginar_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Adjuntos"
            }
        }).state("ag-en-proceso-mac-individual", {
            parent: "ag-en-proceso",
            url: "/mac-individual",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Individual"
            }
        }).state("ag-en-proceso-mac-anverso", {
            parent: "ag-en-proceso-mac-individual",
            url: "/mac-individual-anverso",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual--anverso_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Individual"
            }
        }).state("ag-en-proceso-mac-reverso", {
            parent: "ag-en-proceso-mac-individual",
            url: "/mac-individual-reverso",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual--reverso_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Individual"
            }
        }).state("ag-en-proceso-mac-condiciones", {
            parent: "ag-en-proceso-mac-individual",
            url: "/condiciones",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual--condiciones_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Condiciones"
            }
        }).state("ag-en-proceso-mac-fichaPEP", {
            parent: "ag-en-proceso-mac-individual",
            url: "/fichaPEP",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual--fichaPEP_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "FichaPEP"
            }
        }).state("ag-en-proceso-mac-comentarios-justificativos", {
            parent: "ag-en-proceso-mac-individual",
            url: "/comentarios-justificativos",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual--comentarios_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Comentarios Justificativos"
            }
        }).state("crear-aprobacion", {
            parent: "aprobaciones-grupales",
            url: "/crear-aprobacion",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/crear-aprobacion_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Crear Aprobación"
            }
        }).state("crear-aprobacion-mac-grupal", {
            parent: "crear-aprobacion",
            url: "/mac-grupal",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-grupal_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Grupal"
            }
        }).state("crear-aprobacion-mac-individual", {
            parent: "crear-aprobacion",
            url: "/mac-individual",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-mac-individual-crear_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mac Individual"
            }
        }).state("crear-aprobacion-agregar-limite", {
            parent: "crear-aprobacion-mac-individual",
            url: "/agregar-limite",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-limite_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Agregar Límite"
            }
        }).state("crear-aprobacion-agregar-sublimite", {
            parent: "crear-aprobacion-mac-individual",
            url: "/agregar-sublimite",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-sublimite_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Agregar Sublímite"
            }
        }).state("vincular-cliente", {
            parent: "aprobaciones-grupales",
            url: "/vincular-cliente",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/vincular-cliente_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Vincular Cliente"
            }
        }).state("vincular-cliente-nuevo", {
            parent: "aprobaciones-grupales",
            url: "/vincular-cliente-nuevo",
            controller: "aprobacionesGrupalesCtrl",
            templateUrl: "components/mac-control-limites/aprobaciones-grupales/vincular-cliente-nuevo_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Vincular Cliente"
            }
        }).state("ag-en-proceso-agregar-mitigantes", {
            parent: "root",
            url: "/agregar-mitigantes",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-mitigantes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Mitigantes"
            }
        }).state("ag-en-proceso-editar-mitigantes", {
            parent: "root",
            url: "/editar-mitigantes",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-editar-mitigantes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Mitigantes"
            }
        }).state("ag-en-proceso-agregar-garantia", {
            parent: "root",
            url: "/agregar-garantia",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-agregar-garantia_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Garantía"
            }
        }).state("ag-en-proceso-editar-garantia", {
            parent: "root",
            url: "/editar-garantia",
            views: {
                "main@": {
                    controller: "aprobacionesGrupalesCtrl",
                    templateUrl: "components/mac-control-limites/aprobaciones-grupales/en-proceso/en-proceso-editar-garantia_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Garantía"
            }
        });
        $urlRouterProvider.when("/aprobaciones-grupales", "/aprobaciones-grupales/grupo");
        $urlRouterProvider.when("/aprobaciones-grupales/en-proceso", "/aprobaciones-grupales/en-proceso/mac-grupal");
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").config(controlLimitesCtrl);
    function controlLimitesCtrl($stateProvider) {
        $stateProvider.state("control-limites", {
            parent: "root",
            url: "/control-limites",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/mac-control-limites_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Control de Límites"
            }
        }).state("tab-control-limites", {
            parent: "control-limites",
            url: "/tab-control-limites",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/tab-control-limites_tpl.html",
            controllerAs: "vm"
        }).state("subtab-limites", {
            parent: "tab-control-limites",
            url: "/subtab-limites",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-limites_tpl.html",
            controllerAs: "vm"
        }).state("subtab-operaciones", {
            parent: "tab-control-limites",
            url: "/subtab-operaciones",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-operaciones_tpl.html",
            controllerAs: "vm"
        }).state("subtab-reservas", {
            parent: "tab-control-limites",
            url: "/subtab-reservas",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-reservas_tpl.html",
            controllerAs: "vm"
        }).state("sublimites-total", {
            parent: "subtab-limites",
            url: "/sublimites-total",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/sublimites-total_tpl.html",
            controllerAs: "vm"
        }).state("operaciones", {
            parent: "subtab-limites",
            url: "/operaciones",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/operaciones_tpl.html",
            controllerAs: "vm"
        }).state("tab-aprobaciones", {
            parent: "control-limites",
            url: "/tab-aprobaciones",
            controller: "MacCtrl",
            templateUrl: "components/mac-control-limites/MAC/tab-aprobaciones_tpl.html",
            controllerAs: "vm"
        }).state("tab-aprobaciones-detalle", {
            parent: "tab-aprobaciones",
            url: "/aprobaciones-detalle",
            controller: "MacCtrl",
            templateUrl: "components/mac-control-limites/MAC/tab-aprobaciones-detalle_tpl.html",
            controllerAs: "vm"
        }).state("anverso", {
            parent: "tab-aprobaciones-detalle",
            url: "/anverso",
            controller: "MacCtrl",
            templateUrl: "components/mac-control-limites/MAC/anverso_tpl.html",
            controllerAs: "vm"
        }).state("tab-contingencia", {
            parent: "control-limites",
            url: "/tab-contingencia",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/tab-contingencia_tpl.html",
            controllerAs: "vm"
        }).state("subtab-contingencia-limites", {
            parent: "tab-contingencia",
            url: "/subtab-contingencia-limites",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-contingencia-limites_tpl.html",
            controllerAs: "vm"
        }).state("subtab-contingencia-garantias-mitigantes", {
            parent: "tab-contingencia",
            url: "/subtab-contingencia-garantias-mitigantes",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-contingencia-garantias-mitigantes_tpl.html",
            controllerAs: "vm"
        }).state("subtab-limites-agregar-limite", {
            parent: "root",
            url: "/subtab-limites-agregar-limite",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-limites-agregar-limite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Límite"
            }
        }).state("subtab-limites-editar-limite", {
            parent: "root",
            url: "/subtab-limites-editar-limite",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-limites-editar-limite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Límite"
            }
        }).state("subtab-limites-agregar-sublimite", {
            parent: "root",
            url: "/subtab-limites-agregar-sublimite",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-limites-agregar-sublimite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar Sublímite"
            }
        }).state("subtab-limites-editar-sublimite", {
            parent: "root",
            url: "/subtab-limites-editar-sublimite",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-limites-editar-sublimite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Editar Sublímite"
            }
        }).state("subtab-operaciones-asignar-limite", {
            parent: "subtab-operaciones",
            url: "/asignar-limite",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-operaciones-asignar-limite_tpl.html",
            controllerAs: "vm"
        }).state("subtab-operaciones-reasignar-limite", {
            parent: "subtab-operaciones",
            url: "/reasignar-limite",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-operaciones-reasignar-limite_tpl.html",
            controllerAs: "vm"
        }).state("subtab-operaciones-renovar-limite", {
            parent: "root",
            url: "/control-limites/tab-control-limites/subtab-operaciones/renovar-limite",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-operaciones-renovar-limite_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Renovar límite"
            }
        }).state("subtab-reservas-agregar-reserva", {
            parent: "root",
            url: "/control-limites/tab-control-limites/subtab-reservas/subtab-reservas-agregar-reserva",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-reservas-agregar-reserva_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Agregar reserva"
            }
        }).state("modificar-reserva", {
            parent: "root",
            url: "/control-limites/tab-control-limites/subtab-reservas/subtab-reservas-modificar-reserva",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-reservas-modificar-reserva_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "modificar reserva"
            }
        }).state("ver-reserva", {
            parent: "root",
            url: "/control-limites/tab-control-limites/subtab-reservas/subtab-reservas-ver-reserva",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-reservas-ver-reserva_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "ver reserva"
            }
        }).state("subtab-limites-historico", {
            parent: "root",
            url: "/control-limites/tab-control-limites/subtab-limites/historico",
            views: {
                "main@": {
                    controller: "controlLimitesCtrl",
                    templateUrl: "components/mac-control-limites/control-limites/subtab-limites-historico_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Histórico bloqueos y desbloqueos"
            }
        }).state("subtab-limites-historico-general", {
            parent: "subtab-limites-historico",
            url: "/general",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-limites-historico-general_tpl.html",
            controllerAs: "vm"
        }).state("subtab-limites-historico-limites", {
            parent: "subtab-limites-historico",
            url: "/limites",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-limites-historico-limites_tpl.html",
            controllerAs: "vm"
        }).state("subtab-limites-historico-sublimites", {
            parent: "subtab-limites-historico",
            url: "/sublimites",
            controller: "controlLimitesCtrl",
            templateUrl: "components/mac-control-limites/control-limites/subtab-limites-historico-sublimites_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorCarteras").config(mantenedorCarterasConfig);
    function mantenedorCarterasConfig($stateProvider) {
        $stateProvider.state("mantenedor-cartera", {
            parent: "root",
            url: "/mantenedor-cartera",
            views: {
                "main@": {
                    controller: "mantenedorCarterasCtrl",
                    templateUrl: "components/mantenedores/mantenedor-carteras/mantenedor-cartera_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Mantenedor de Carteras"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresFuncionalidades").config(mantenedoresFuncionalidadesConfig);
    function mantenedoresFuncionalidadesConfig($stateProvider) {
        $stateProvider.state("mantenedoresFuncionalidades", {
            parent: "root",
            url: "/mantenedores/mantenedor-funcionalidades",
            views: {
                "main@": {
                    controller: "mantenedoresFuncionalidadesCtrl",
                    templateUrl: "components/mantenedores/mantenedor-funcionalidades/mantenedor-funcionalidades_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedores"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorgral").config(mantenedorgralConfig);
    function mantenedorgralConfig($stateProvider) {
        $stateProvider.state("mantenedorgral", {
            parent: "root",
            url: "/mantenedores/mantenedor-general",
            views: {
                "main@": {
                    controller: "mantenedorgralCtrl",
                    templateUrl: "components/mantenedores/mantenedor-general/mantenedor-general_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedor general"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorInformacion").config(mantenedorInformacionConfig);
    function mantenedorInformacionConfig($stateProvider) {
        $stateProvider.state("mantenedorInformacion", {
            parent: "root",
            url: "/mantenedores/mantenedor-informacion",
            views: {
                "main@": {
                    controller: "mantenedorInformacionCtrl",
                    templateUrl: "components/mantenedores/mantenedor-informacion/mantenedor-informacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Seguros Contratados"
            }
        }).state("mantenedorInformacionResumen", {
            parent: "root",
            url: "/seguros/seguros-contratados-resumen",
            views: {
                "main@": {
                    controller: "mantenedorInformacionCtrl",
                    templateUrl: "components/seguros/seguros-contratados/seguros-contratados-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Mantenedor atribuciones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresSet").config(mantenedoresSetConfig);
    function mantenedoresSetConfig($stateProvider) {
        $stateProvider.state("mantenedoresSet", {
            parent: "root",
            url: "/mantenedores/mantenedor-tipo-operacion",
            views: {
                "main@": {
                    controller: "mantenedoresSetCtrl",
                    templateUrl: "components/mantenedores/mantenedor-tipo-operacion/tipo-operacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedores"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.modFichaInversiones").config(modFichaInversionesConfig);
    function modFichaInversionesConfig($stateProvider) {
        $stateProvider.state("mod-ficha-inversiones", {
            parent: "root",
            url: "/mod-ficha-inversiones",
            views: {
                "main@": {
                    controller: "modFichaInversionesCtrl",
                    templateUrl: "components/mod-ficha-inversiones/ficha-inversiones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ficha de Inversiones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.notificacionesVersionDos").config(notificacionesVersion2Config);
    function notificacionesVersion2Config($stateProvider) {
        $stateProvider.state("notificaciones2", {
            parent: "root",
            url: "/notificaciones-v2/notificaciones-v2",
            views: {
                "main@": {
                    controller: "notificacionesVersionDosCtrl",
                    templateUrl: "components/notificaciones-v2/notificaciones-v2/notificaciones-v2_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Notificaciones Versión 2"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.notificaciones").config(notificacionesConfig);
    function notificacionesConfig($stateProvider) {
        $stateProvider.state("notificaciones", {
            parent: "root",
            url: "/notificaciones/notificaciones",
            views: {
                "main@": {
                    controller: "notificacionesCtrl",
                    templateUrl: "components/notificaciones/notificaciones/notificaciones_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Notificaciones"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.notificacionesSolicitudes").config(notificacionesSolicitudesConfig);
    function notificacionesSolicitudesConfig($stateProvider) {
        $stateProvider.state("notificacionesSolicitudes", {
            parent: "root",
            url: "/notificaciones/solicitudes",
            views: {
                "main@": {
                    controller: "notificacionesSolicitudesCtrl",
                    templateUrl: "components/notificaciones/solicitudes/solicitudes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Solicitudes"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.osTicket").config(osTicketConfig);
    function osTicketConfig($stateProvider) {
        $stateProvider.state("os-ticket", {
            parent: "root",
            url: "/os-ticket/os-ticket",
            views: {
                "main@": {
                    controller: "osTicketCtrl",
                    templateUrl: "components/os-ticket/os-ticket/osTicket_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Requerimientos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.innominada").config(innomindaConfig);
    function innomindaConfig($stateProvider) {
        $stateProvider.state("innominada", {
            parent: "root",
            url: "/prepago/innominada",
            views: {
                "main@": {
                    controller: "innominadaCtrl",
                    templateUrl: "components/prepago/innominada/innominada_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Innominada"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.pricing").config(pricingConfig);
    function pricingConfig($stateProvider) {
        $stateProvider.state("pricing", {
            parent: "root",
            url: "/pricing",
            views: {
                "main@": {
                    controller: "pricingCtrl",
                    templateUrl: "components/pricing/pricing_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Pricing"
            }
        }).state("pricing-formula", {
            parent: "root",
            url: "/pricing/formula",
            views: {
                "main@": {
                    controller: "pricingCtrl",
                    templateUrl: "components/pricing/formula_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Formula"
            }
        }).state("pricing-autorizacion", {
            parent: "root",
            url: "/pricing/autorizacion",
            views: {
                "main@": {
                    controller: "pricingCtrl",
                    templateUrl: "components/pricing/autorizacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Formula"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").config(asignacionOficinaConfig);
    function asignacionOficinaConfig($stateProvider) {
        $stateProvider.state("asignacionOficina", {
            parent: "root",
            url: "/rbac/asignacionOficina",
            views: {
                "main@": {
                    controller: "asignacionOficinaCtrl",
                    templateUrl: "components/rbac/asignacionOficina/asignacionOficina_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "asignacionOficina"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").config(asignacionOficinaNuevaConfig);
    function asignacionOficinaNuevaConfig($stateProvider) {
        $stateProvider.state("asignacionOficinaNueva", {
            parent: "root",
            url: "/rbac/asignacionOficinaNueva",
            views: {
                "main@": {
                    controller: "asignacionOficinaNuevaCtrl",
                    templateUrl: "components/rbac/asignacionOficinaNueva/asignacion-oficina-nueva_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "asignacionOficina"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").config(mantenedoresConfig);
    function mantenedoresConfig($stateProvider) {
        $stateProvider.state("mantenedores", {
            parent: "root",
            url: "/rbac/mantenedores",
            views: {
                "main@": {
                    controller: "mantenedoresCtrl",
                    templateUrl: "components/rbac/mantenedores/mantenedores_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedores"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").config(reemplazosConfig);
    function reemplazosConfig($stateProvider) {
        $stateProvider.state("reemplazos", {
            parent: "root",
            url: "/rbac/reemplazos",
            views: {
                "main@": {
                    controller: "asignacionOficinaCtrl",
                    templateUrl: "components/rbac/reemplazos/reemplazos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "reemplazos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").config(reemplazosNuevaConfig);
    function reemplazosNuevaConfig($stateProvider) {
        $stateProvider.state("reemplazosNueva", {
            parent: "root",
            url: "/rbac/reemplazosNueva",
            views: {
                "main@": {
                    controller: "reemplazosNuevaCtrl",
                    templateUrl: "components/rbac/reemplazosNueva/reemplazos-nueva_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "remplazo"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(abonosConfig);
    function abonosConfig($stateProvider) {
        $stateProvider.state("abonos", {
            parent: "root",
            url: "/regularizacion/abonos",
            views: {
                "main@": {
                    controller: "abonosCtrl",
                    templateUrl: "components/regularizacion/abonos/abonos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "abonos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(autorizacionConfig);
    function autorizacionConfig($stateProvider) {
        $stateProvider.state("autorizacion", {
            parent: "root",
            url: "/regularizacion/autorizacion",
            views: {
                "main@": {
                    controller: "autorizacionRegularizacionCtrl",
                    templateUrl: "components/regularizacion/autorizacion/autorizacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "autorizacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(cargaConfig);
    function cargaConfig($stateProvider) {
        $stateProvider.state("carga", {
            parent: "root",
            url: "/regularizacion/carga",
            views: {
                "main@": {
                    controller: "cargaCtrl",
                    templateUrl: "components/regularizacion/carga/carga_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "carga"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(cargosConfig);
    function cargosConfig($stateProvider) {
        $stateProvider.state("cargos", {
            parent: "root",
            url: "/regularizacion/cargos",
            views: {
                "main@": {
                    controller: "cargosCtrl",
                    templateUrl: "components/regularizacion/cargos/cargos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "cargos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(consultaConfig);
    function consultaConfig($stateProvider) {
        $stateProvider.state("consulta", {
            parent: "root",
            url: "/regularizacion/consulta",
            views: {
                "main@": {
                    controller: "consultaCtrl",
                    templateUrl: "components/regularizacion/consulta/consulta_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "consulta"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").config(reversaConfig);
    function reversaConfig($stateProvider) {
        $stateProvider.state("reversa", {
            parent: "root",
            url: "/regularizacion/reversa",
            views: {
                "main@": {
                    controller: "reversaCtrl",
                    templateUrl: "components/regularizacion/reversa/reversa_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "reversa"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.segurosContratados").config(segurosContratadosConfig);
    function segurosContratadosConfig($stateProvider) {
        $stateProvider.state("segurosContratados", {
            parent: "root",
            url: "/seguros/seguros-contratados",
            views: {
                "main@": {
                    controller: "segurosContratadosCtrl",
                    templateUrl: "components/seguros/seguros-contratados/seguros-contratados_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Seguros Contratados"
            }
        }).state("segurosContratadosResumen", {
            parent: "root",
            url: "/seguros/seguros-contratados-resumen",
            views: {
                "main@": {
                    controller: "segurosContratadosCtrl",
                    templateUrl: "components/seguros/seguros-contratados/seguros-contratados-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Seguros Contratados Resumen"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.seguros").config(segurosConfig);
    function segurosConfig($stateProvider) {
        $stateProvider.state("seguros", {
            parent: "root",
            url: "/seguros/seguros",
            views: {
                "main@": {
                    controller: "segurosCtrl",
                    templateUrl: "components/seguros/seguros/seguros_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.seguros-nuevo").config(segurosNuevoConfig);
    function segurosNuevoConfig($stateProvider) {
        $stateProvider.state("seguros-nuevo", {
            parent: "root",
            url: "/seguros/seguros-nuevo",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosNuevo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-salud", {
            parent: "root",
            url: "/seguros/seguros-salud",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosSalud_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-salud-simulador", {
            parent: "root",
            url: "/seguros/seguros-salud-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosSalud-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-salud-iram", {
            parent: "root",
            url: "/seguros/seguros-salud-iram",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosSalud-simulador-iram_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-salud-iram-resumen", {
            parent: "root",
            url: "/seguros/seguros-salud-iram-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosSalud-simulador-iram-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("simulacion-proteccion-personal", {
            parent: "root",
            url: "/seguros/simulacion-proteccion-personal",
            views: {
                "main@": {
                    controller: "proteccionPersonalCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros/proteccionPersonal_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación"
            }
        }).state("seguros-robo", {
            parent: "root",
            url: "/seguros/seguros-robo",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosRobo_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-robo-simulador", {
            parent: "root",
            url: "/seguros/seguros-robo-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosRobo-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-robo-simulador-plus", {
            parent: "root",
            url: "/seguros/seguros-robo-simulador-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/segurosRobo-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-robo-comprobante", {
            parent: "root",
            url: "/seguros/seguros-robo-comprobante",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-robo-comprobante_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-robo-simulador-plus-resumen", {
            parent: "root",
            url: "/seguros/seguros-robo-simulador-plus-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-robo-plus-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar", {
            parent: "root",
            url: "/seguros/seguros-hogar",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-simulador", {
            parent: "root",
            url: "/seguros/seguros-hogar-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-simulador-plus", {
            parent: "root",
            url: "/seguros/seguros-hogar-simulador-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-resumen", {
            parent: "root",
            url: "/seguros/seguros-hogar-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-permanencia-simulador", {
            parent: "root",
            url: "/seguros/seguros-hogar-permanencia-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-permanencia-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-permanencia-simulador-plus", {
            parent: "root",
            url: "/seguros/seguros-hogar-permanencia-simulador-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-permanencia-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-permanencia-comprobante", {
            parent: "root",
            url: "/seguros/seguros-hogar-permanencia-comprobante",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-permanencia-comprobante_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-hogar-permanencia-resumen", {
            parent: "root",
            url: "/seguros/seguros-hogar-permanencia-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-hogar-permanencia-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-estudios", {
            parent: "root",
            url: "/seguros/seguros-estudios",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-estudios_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-estudios-simulador", {
            parent: "root",
            url: "/seguros/seguros-estudios-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-estudios-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-estudios-simulador-plus", {
            parent: "root",
            url: "/seguros/seguros-estudios-simulador-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-estudios-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-estudios-resumen", {
            parent: "root",
            url: "/seguros/seguros-estudios-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-estudios-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-catastrofico-simulador", {
            parent: "root",
            url: "/seguros/seguros-catastrofico-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-catastrofico-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-permanencia-simulador", {
            parent: "root",
            url: "/seguros/seguros-permanencia-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-permanencia-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-permanencia-plus", {
            parent: "root",
            url: "/seguros/seguros-permanencia-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-permanencia-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-permanencia-resumen", {
            parent: "root",
            url: "/seguros/seguros-permanencia-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-permanencia-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-auto", {
            parent: "root",
            url: "/seguros/seguros-auto",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-auto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-auto-simulador", {
            parent: "root",
            url: "/seguros/seguros-auto-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-auto-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-auto-plus", {
            parent: "root",
            url: "/seguros/seguros-auto-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-auto-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-auto-resumen", {
            parent: "root",
            url: "/seguros/seguros-auto-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-auto-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes", {
            parent: "root",
            url: "/seguros/seguros-viajes",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajes_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-simulador", {
            parent: "root",
            url: "/seguros/seguros-viajes-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajes-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-plus", {
            parent: "root",
            url: "/seguros/seguros-viajes-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajes-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-resumen", {
            parent: "root",
            url: "/seguros/seguros-viajes-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajes-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-argentina-simulador", {
            parent: "root",
            url: "/seguros/seguros-viajes-argentina-simulador",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajesArgentina-simulador_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-argentina-plus", {
            parent: "root",
            url: "/seguros/seguros-viajes-argentina-plus",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajesArgentina-simulador-plus_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        }).state("seguros-viajes-argentina-resumen", {
            parent: "root",
            url: "/seguros/seguros-viajes-argentina-resumen",
            views: {
                "main@": {
                    controller: "segurosNuevoCtrl",
                    templateUrl: "components/seguros/segurosNuevo/seguros-viajesArgentina-resumen_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "seguros"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.segurosRefactor").config(segurosRefactorConfig);
    function segurosRefactorConfig($stateProvider) {
        $stateProvider.state("seguros-refactor", {
            parent: "root",
            url: "/seguros/seguros-refactor",
            views: {
                "main@": {
                    controller: "segurosRefactorCtrl",
                    templateUrl: "components/seguros/segurosRefactor/seguros_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Refactor Seguros"
            }
        }).state("seguro-contratado", {
            parent: "root",
            url: "/seguro-contratado",
            views: {
                "main@": {
                    controller: "segurosRefactorCtrl",
                    templateUrl: "components/seguros/segurosRefactor/seguro-contratado_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("tab-seguros-contratados", {
            parent: "seguros-refactor",
            url: "/tab-seguros-contratados",
            controller: "segurosRefactorCtrl",
            templateUrl: "components/seguros/segurosRefactor/tab-seguros-contratados_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.simulacionCredito").config(simulacionCreditoConfig);
    function simulacionCreditoConfig($stateProvider) {
        $stateProvider.state("simulacion-credito", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito/simulacion-credito_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        }).state("simulacion-credito-renegociado", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito-renegociado",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/simulacion-credito-renegociado_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        }).state("simulacion-credito-renegociado-ingreso-producto", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito-renegociado-ingreso-producto",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/simulacion-credito-renegociado-ingreso-producto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        }).state("simulacion-credito-renegociado-simulacion-guardada", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito-renegociado-simulacion-guardada",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/simulacion-credito-renegociado-simulacion-guardada_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        }).state("tab-simulacion-credito-renegociado", {
            parent: "simulacion-credito-renegociado",
            url: "/tab-simulacion-credito-renegociado",
            controller: "simulacionCreditoCtrl",
            templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/tab-simulacion-credito-renegociado_tpl.html",
            controllerAs: "vm"
        }).state("tab-simulacion-credito-rebaja-tasa", {
            parent: "simulacion-credito-rebaja-tasa",
            url: "/tab-simulacion-credito-rebaja-tasa",
            controller: "simulacionCreditoCtrl",
            templateUrl: "components/simulacion-credito/simulacion-credito-rebaja-tasa/tab-simulacion-credito-rebaja-tasa_tpl.html",
            controllerAs: "vm"
        }).state("simulacion-credito-rebaja-tasa", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito-rebaja-tasa",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito-rebaja-tasa/simulacion-credito-rebaja-tasa_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        }).state("simulacion-credito-rebaja-tasa-simulacion-guardada", {
            parent: "root",
            url: "/simulacion-credito/simulacion-credito-rebaja-tasa-simulacion-guardada",
            views: {
                "main@": {
                    controller: "simulacionCreditoCtrl",
                    templateUrl: "components/simulacion-credito/simulacion-credito-rebaja-tasa/simulacion-credito-rebaja-tasa-simulacion-guardada_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Simulación Crédito"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionBundle").config(creacionBundleConfig);
    function creacionBundleConfig($stateProvider) {
        $stateProvider.state("creacion-bundle", {
            parent: "root",
            url: "/creacion-bundle",
            views: {
                "main@": {
                    controller: "CreacionBundleCtrl",
                    templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-parametros-basicos", {
            parent: "creacion-bundle",
            url: "/parametros-basicos",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-parametros-basicos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-parametros-basicos-cero", {
            parent: "creacion-bundle-parametros-basicos",
            url: "/cero",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-parametros-basicos-cero_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-parametros-basicos-atributos", {
            parent: "creacion-bundle-parametros-basicos",
            url: "/atributos",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-parametros-basicos-atributos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-agregar-productos", {
            parent: "creacion-bundle",
            url: "/agregar-productos",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-agregar-productos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-agregar-atributos", {
            parent: "creacion-bundle",
            url: "/agregar-atributos",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-agregar-atributos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-asignar-valores", {
            parent: "creacion-bundle",
            url: "/asignar-valores",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-asignar-valores_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-valores-defecto", {
            parent: "creacion-bundle",
            url: "/valores-defecto",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-valores-defecto_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-dependencia", {
            parent: "creacion-bundle",
            url: "/dependencia",
            controller: "CreacionBundleCtrl",
            templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-dependencia_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Creación Bundle"
            }
        }).state("creacion-bundle-final", {
            parent: "root",
            url: "/creacion-bundle-final",
            views: {
                "main@": {
                    controller: "CreacionBundleCtrl",
                    templateUrl: "components/taller-productos/creacion-bundle/creacion-bundle-final_tpl.html",
                    controllerAs: "vm"
                }
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionProductos").config(creacionProductosConfig);
    function creacionProductosConfig($stateProvider) {
        $stateProvider.state("creacion-de-productos", {
            parent: "root",
            url: "/creacion-de-productos",
            views: {
                "main@": {
                    controller: "CreacionProductosCtrl",
                    templateUrl: "components/taller-productos/creacion-de-productos/creacion-de-productos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Fábrica de Productos"
            }
        }).state("creacion-producto-base", {
            parent: "creacion-de-productos",
            url: "/creacion-producto-base",
            controller: "CreacionProductoBaseCtrl",
            templateUrl: "components/taller-productos/creacion-de-productos/creacion-producto-base_tpl.html",
            controllerAs: "vm"
        }).state("creacion-producto-catalogo", {
            parent: "creacion-de-productos",
            url: "/creacion-producto-catalogo",
            controller: "CreacionProductoBaseCtrl",
            templateUrl: "components/taller-productos/creacion-de-productos/creacion-producto-catalogo_tpl.html",
            controllerAs: "vm"
        }).state("creacion-catalogo-parametros", {
            parent: "creacion-producto-catalogo",
            url: "/creacion-catalogo-parametros",
            views: {
                "view-creacion-catalogo": {
                    controller: "CreacionProductosCtrl",
                    templateUrl: "components/taller-productos/creacion-de-productos/creacion-catalogo-parametros_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("creacion-catalogo-reglas", {
            parent: "creacion-producto-catalogo",
            url: "/creacion-catalogo-reglas",
            views: {
                "view-creacion-catalogo": {
                    controller: "CreacionProductosCtrl",
                    templateUrl: "components/taller-productos/creacion-de-productos/creacion-catalogo-reglas_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("creacion-catalogo-tarifas", {
            parent: "creacion-producto-catalogo",
            url: "/creacion-catalogo-tarifas",
            views: {
                "view-creacion-catalogo": {
                    controller: "CreacionProductosCtrl",
                    templateUrl: "components/taller-productos/creacion-de-productos/creacion-catalogo-tarifas_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("creacion-catalogo-confirmar", {
            parent: "creacion-producto-catalogo",
            url: "/creacion-catalogo-confirmar",
            views: {
                "view-creacion-catalogo": {
                    controller: "CreacionProductosCtrl",
                    templateUrl: "components/taller-productos/creacion-de-productos/creacion-catalogo-confirmar_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("creacion-confirmar-parametros", {
            parent: "creacion-catalogo-confirmar",
            url: "/confirmar-parametros",
            controller: "CreacionProductosCtrl",
            templateUrl: "components/taller-productos/creacion-de-productos/creacion-confirmar-parametros_tpl.html",
            controllerAs: "vm"
        }).state("creacion-confirmar-reglas", {
            parent: "creacion-catalogo-confirmar",
            url: "/confirmar-reglas",
            controller: "CreacionProductosCtrl",
            templateUrl: "components/taller-productos/creacion-de-productos/creacion-confirmar-reglas_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").config(fabricaProductosConfig);
    function fabricaProductosConfig($stateProvider) {
        $stateProvider.state("taller-productos", {
            parent: "root",
            url: "/taller-productos",
            views: {
                "main@": {
                    controller: "tallerProductosCtrl",
                    templateUrl: "components/taller-productos/fabrica-productos/fabrica-productos_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("productos-base", {
            parent: "taller-productos",
            url: "/productos-base",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/productos-base_tpl.html",
            controllerAs: "vm"
        }).state("productos-catalogo", {
            parent: "taller-productos",
            url: "/productos-catalogo",
            controller: "productosCatalogoCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/productos-catalogo_tpl.html",
            controllerAs: "vm"
        }).state("catalogo-ultimos", {
            parent: "productos-catalogo",
            url: "/catalogo-ultimos",
            controller: "productosCatalogoCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/catalogo-ultimos_tpl.html",
            controllerAs: "vm"
        }).state("catalogo-todos", {
            parent: "productos-catalogo",
            url: "/catalogo-todos",
            controller: "productosCatalogoCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/catalogo-todos_tpl.html",
            controllerAs: "vm"
        }).state("detalle-catalogo", {
            parent: "catalogo-todos",
            url: "/detalle-catalogo",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/detalle-catalogo_tpl.html",
            controllerAs: "vm"
        }).state("detalle-catalogo-ultimo", {
            parent: "catalogo-ultimos",
            url: "/detalle-catalogo-ultimo",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/detalle-catalogo_tpl.html",
            controllerAs: "vm"
        }).state("parametros-basicos", {
            parent: "detalle-catalogo",
            url: "/parametros-basicos",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/contenido-detalle_tpl.html",
            controllerAs: "vm"
        }).state("parametros-especificos", {
            parent: "detalle-catalogo",
            url: "/parametros-especificos",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/contenido-detalle_tpl.html",
            controllerAs: "vm"
        }).state("reglas-asignadas", {
            parent: "detalle-catalogo",
            url: "/reglas-asignadas",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/contenido-detalle_tpl.html",
            controllerAs: "vm"
        }).state("tarifas-asignadas", {
            parent: "detalle-catalogo",
            url: "/tarifas-asignadas",
            controller: "productosBaseCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/contenido-detalle_tpl.html",
            controllerAs: "vm"
        }).state("detalle-productos", {
            parent: "productos-base",
            url: "/detalle-productos",
            controller: "productosCatalogoCtrl",
            templateUrl: "components/taller-productos/fabrica-productos/detalle-producto_tpl.html",
            controllerAs: "vm"
        }).state("editar-productos", {
            parent: "root",
            url: "/editar-productos",
            views: {
                "main@": {
                    controller: "productosBaseCtrl",
                    templateUrl: "components/taller-productos/fabrica-productos/editar-productos_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("editar-catalogo", {
            parent: "root",
            url: "/editar-catalogo",
            views: {
                "main@": {
                    controller: "productosCatalogoCtrl",
                    templateUrl: "components/taller-productos/fabrica-productos/editar-catalogo_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("productos-mantenedores", {
            parent: "taller-productos",
            url: "/productos-mantenedores",
            controller: "productosMantenedoresCtrl",
            templateUrl: "components/taller-productos/mantenedores/mantenedores_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Mantenedores"
            }
        }).state("mantenedores-tarifa", {
            parent: "productos-mantenedores",
            url: "/tarifas",
            controller: "productosMantenedoresCtrl",
            templateUrl: "components/taller-productos/mantenedores/mantenedores-tarifas_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Tarifas"
            }
        }).state("mantenedores-atributos", {
            parent: "productos-mantenedores",
            url: "/atributos",
            controller: "productosMantenedoresCtrl",
            templateUrl: "components/taller-productos/mantenedores/mantenedores-atributos_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Atributos"
            }
        }).state("mantenedores-categorias", {
            parent: "productos-mantenedores",
            url: "/categorias",
            controller: "productosMantenedoresCtrl",
            templateUrl: "components/taller-productos/mantenedores/mantenedores-categorias_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Categorías"
            }
        }).state("mantenedores-familia", {
            parent: "productos-mantenedores",
            url: "/familia",
            controller: "productosMantenedoresCtrl",
            templateUrl: "components/taller-productos/mantenedores/mantenedores-familia_tpl.html",
            controllerAs: "vm",
            data: {
                pageTitle: "Familia"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.gestionBundle").config(gestionBundleConfig);
    function gestionBundleConfig($stateProvider) {
        $stateProvider.state("gestion-bundle", {
            parent: "root",
            url: "/gestion-bundle",
            views: {
                "main@": {
                    controller: "gestionBundleCtrl",
                    templateUrl: "components/taller-productos/gestion-bundle/gestion-bundle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("consulta-bundle", {
            parent: "gestion-bundle",
            url: "/consulta-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/consulta-bundle_tpl.html",
            controllerAs: "vm"
        }).state("ultimos-bundle", {
            parent: "gestion-bundle",
            url: "/consulta-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/ultimos-bundle_tpl.html",
            controllerAs: "vm"
        }).state("detalle-bundle", {
            parent: "root",
            url: "/detalle-bundle",
            views: {
                "main@": {
                    controller: "gestionBundleCtrl",
                    templateUrl: "components/taller-productos/gestion-bundle/detalle-bundle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("parametros-basicos-bundle", {
            parent: "detalle-bundle",
            url: "/parametros-basicos-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/parametros-basicos-bundle_tpl.html",
            controllerAs: "vm"
        }).state("productos-agregados-bundle", {
            parent: "detalle-bundle",
            url: "/productos-agregados-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/productos-agregados-bundle_tpl.html",
            controllerAs: "vm"
        }).state("editar-bundle", {
            parent: "root",
            url: "/editar-bundle",
            views: {
                "main@": {
                    controller: "gestionBundleCtrl",
                    templateUrl: "components/taller-productos/gestion-bundle/editar-bundle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("editar-parametros-bundle", {
            parent: "editar-bundle",
            url: "/editar-parametros-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/parametros-editar-bundle_tpl.html",
            controllerAs: "vm"
        }).state("editar-agregar-bundle", {
            parent: "editar-bundle",
            url: "/editar-agregados-bundle",
            controller: "gestionBundleCtrl",
            templateUrl: "components/taller-productos/gestion-bundle/agregar-productos-bundle_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetaDebitoEmpresa").config(tarjetaDebitoEmpresaConfig);
    function tarjetaDebitoEmpresaConfig($stateProvider) {
        $stateProvider.state("crearTarjetaDebitoEmpresa", {
            parent: "root",
            url: "/crear-tarjeta-debito-empresa",
            views: {
                "main@": {
                    controller: "tarjetaDebitoEmpresaCtrl",
                    templateUrl: "components/tarjeta-debito-empresa/crear-tarjeta-empresa/crear-tarjeta-empresa_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "tarjeta debito empresa"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.avanceTarjeta").config(avanceTarjetaConfig);
    function avanceTarjetaConfig($stateProvider) {
        $stateProvider.state("avance-tarjeta", {
            parent: "root",
            url: "/tarjetas/avance-tarjeta",
            views: {
                "main@": {
                    controller: "avanceTarjetaCtrl",
                    templateUrl: "components/tarjetas/avance-tarjeta/avance-tarjeta_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Avance Tarjetas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetasDetalle").config(tarjetasDetalleConfig);
    function tarjetasDetalleConfig($stateProvider) {
        $stateProvider.state("tarjetasDetalle", {
            parent: "root",
            url: "/tarjetas/detalle",
            views: {
                "main@": {
                    controller: "tarjetasDetalleCtrl",
                    templateUrl: "components/tarjetas/detalle/detalle_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Tarjetas Detalle"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.pac").config(pacConfig);
    function pacConfig($stateProvider) {
        $stateProvider.state("pac", {
            parent: "root",
            url: "/tarjetas/pac",
            views: {
                "main@": {
                    controller: "pacCtrl",
                    templateUrl: "components/tarjetas/pac/pac_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Pago Automático de Cuentas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetas").config(tarjetasConfig);
    function tarjetasConfig($stateProvider) {
        $stateProvider.state("tarjetas", {
            parent: "root",
            url: "/tarjetas/tarjetas",
            views: {
                "main@": {
                    controller: "tarjetasCtrl",
                    templateUrl: "components/tarjetas/tarjetas/tarjetas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Tarjetas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.testFront").config(v360Config);
    function v360Config($stateProvider) {
        $stateProvider.state("testFront", {
            parent: "root",
            url: "/test-front",
            views: {
                "main@": {
                    controller: "testFrontCtrl",
                    templateUrl: "components/test-front/test-front_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Test Front"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.busqueda_transversal").config(busqueda_transversalConfig);
    function busqueda_transversalConfig($stateProvider) {
        $stateProvider.state("busqueda_transversal", {
            parent: "root",
            url: "/v360/busqueda_transversal",
            views: {
                "main@": {
                    controller: "busqueda_transversalCtrl",
                    templateUrl: "components/v360/busqueda-transversal/busqueda-transversal_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Busqueda Transversal"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.creditos").config(creditosConfig);
    function creditosConfig($stateProvider) {
        $stateProvider.state("creditos", {
            parent: "root",
            url: "/v360/creditos",
            views: {
                "main@": {
                    controller: "creditosCtrl",
                    templateUrl: "components/v360/creditos/creditos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Creditos"
            }
        }).state("creditosPago", {
            parent: "root",
            url: "/v360/creditos/detalleCuadrodePago/pagos",
            views: {
                "main@": {
                    controller: "creditosCtrl",
                    templateUrl: "components/v360/creditos/creditos-pagos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Creditos"
            }
        }).state("creditosDetalle", {
            url: "/v360/creditos/detalleCuadrodePago",
            views: {
                "main@": {
                    controller: "creditosCtrl",
                    templateUrl: "components/v360/creditos/creditos-cuadro-pago_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Creditos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.cuentas").config(cuentasConfig);
    function cuentasConfig($stateProvider) {
        $stateProvider.state("cuentas", {
            parent: "root",
            url: "/v360/cuentas",
            views: {
                "main@": {
                    controller: "cuentasCtrl",
                    templateUrl: "components/v360/cuentas/cuentas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Cuentas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.estadoSituacion").config(estadoSituacionConfig);
    function estadoSituacionConfig($stateProvider) {
        $stateProvider.state("estadoSituacion", {
            parent: "root",
            url: "/v360/estado-situacion",
            views: {
                "main@": {
                    controller: "estadoSituacionCtrl",
                    templateUrl: "components/v360/estado-situacion/estado-situacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Estado Situacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mandatoContrato").config(mandatoContratoConfig);
    function mandatoContratoConfig($stateProvider) {
        $stateProvider.state("mandatoContrato", {
            parent: "root",
            url: "/v360/mandatoContrato",
            views: {
                "main@": {
                    controller: "mandatoContratoCtrl",
                    templateUrl: "components/v360/mandato_contrato/mandato-contrato_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "v360"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.prepago").config(prepagoConfig);
    function prepagoConfig($stateProvider) {
        $stateProvider.state("prepago", {
            parent: "root",
            url: "/v360/prepago",
            views: {
                "main@": {
                    controller: "prepagoCtrl",
                    templateUrl: "components/v360/prepago/prepago_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Prepago"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.resumenProductos").config(resumenProductosConfig);
    function resumenProductosConfig($stateProvider) {
        $stateProvider.state("resumen-productos", {
            parent: "root",
            url: "/v360/resumen-productos",
            views: {
                "main@": {
                    controller: "resumenProductosCtrl",
                    templateUrl: "components/v360/resumen-productos/resumen-productos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Resumen de Productos"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.v360").config(v360Config);
    function v360Config($stateProvider) {
        $stateProvider.state("v360", {
            parent: "root",
            url: "/v360/v360",
            views: {
                "main@": {
                    controller: "v360Ctrl",
                    templateUrl: "components/v360/v360/v360_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("productos-tarjeta", {
            parent: "root",
            url: "/v360/productos-tarjeta",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/productos/productos-tarjeta_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("riesgo-resumen-productos", {
            parent: "root",
            url: "/v360/riesgo-resumen-producto",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/riesgo/riesgo_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("vistaCuentas", {
            parent: "v360",
            url: "/v360/vista-cuentas",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/vistasSinAside/cuentas_tpl.html",
                    controllerAs: "vm"
                },
                "ctaCte@vistaCuentas": {
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-corriente_tpl.html",
                    controller: "productosCtrl"
                },
                "ctaVista@vistaCuentas": {
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-vista_tpl.html",
                    controller: "productosCtrl"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("vistaComex", {
            parent: "v360",
            url: "/v360/vista-comex",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/vistasSinAside/comex_tpl.html",
                    controllerAs: "vm"
                },
                "ctaComex@vistaComex": {
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-comex_tpl.html",
                    controller: "productosCtrl"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("vistaLineas", {
            parent: "v360",
            url: "/v360/vista-lineas",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/vistasSinAside/lineas_tpl.html",
                    controllerAs: "vm"
                },
                "contLineas@vistaLineas": {
                    templateUrl: "components/v360/vistasSinAside/lineas-linea-credito_tpl.html",
                    controller: "productosCtrl"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("vistaAhorro", {
            parent: "v360",
            url: "/v360/vista-ahorro",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/vistasSinAside/ahorro_tpl.html",
                    controllerAs: "vm"
                },
                "contAhorro@vistaAhorro": {
                    templateUrl: "components/v360/vistasSinAside/ahorro-cuenta-ahorro_tpl.html",
                    controller: "productosCtrl"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("vistaTarjetas", {
            parent: "v360",
            url: "/v360/vista-tarjetas",
            views: {
                "main@": {
                    controller: "productosCtrl",
                    templateUrl: "components/v360/vistasSinAside/tarjetas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "v360"
            }
        }).state("tab-resumen", {
            parent: "v360",
            url: "/tab-resumen",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-resumen_tpl.html",
            controllerAs: "vm"
        }).state("tab-resumen-empresa", {
            parent: "v360",
            url: "/tab-resumen-empresa",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-resumen-empresa_tpl.html",
            controllerAs: "vm"
        }).state("tab-alertas", {
            parent: "v360",
            url: "/tab-alertas",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-alertas_tpl.html",
            controllerAs: "vm"
        }).state("tab-contactabilidad", {
            parent: "v360",
            url: "/tab-contactabilidad",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-contactabilidad_tpl.html",
            controllerAs: "vm"
        }).state("tab-equipo-cobertura", {
            parent: "v360",
            url: "/tab-equipo-cobertura",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-equipo-cobertura_tpl.html",
            controllerAs: "vm"
        }).state("tab-financiero", {
            parent: "v360",
            url: "/tab-financiero",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-financiero_tpl.html",
            controllerAs: "vm"
        }).state("tab-financiero-empresa", {
            parent: "v360",
            url: "/tab-financiero-empresa",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-financiero-empresa_tpl.html",
            controllerAs: "vm"
        }).state("tab-relacionados", {
            parent: "v360",
            url: "/tab-relacionados",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-relacionados_tpl.html",
            controllerAs: "vm"
        }).state("tab-rib", {
            parent: "v360",
            url: "/tab-rib",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-rib_tpl.html",
            controllerAs: "vm"
        }).state("tab-serv-no-desarrollado", {
            parent: "v360",
            url: "/tab-serv-no-desarrollado",
            controller: "v360Ctrl",
            templateUrl: "components/v360/v360/tabs/tab-serv-no-desarrollado_tpl.html",
            controllerAs: "vm"
        }).state("cuentas-cuenta-leasing-detalle", {
            parent: "root",
            url: "/v360/vista-comex/cuenta-leasing-detalle",
            views: {
                "main@": {
                    controller: "v360Ctrl",
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-leasing-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("cuentas-cuenta-comex-detalle", {
            parent: "root",
            url: "/v360/vista-comex/cuenta-comex-detalle",
            views: {
                "main@": {
                    controller: "v360Ctrl",
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-comex-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        }).state("cuentas-cuenta-hipotecario-detalle", {
            parent: "root",
            url: "/v360/vista-comex/cuenta-hipotecario-detalle",
            views: {
                "main@": {
                    controller: "v360Ctrl",
                    templateUrl: "components/v360/vistasSinAside/cuentas-cuenta-hipotecario-detalle_tpl.html",
                    controllerAs: "vm"
                }
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.vinculacion").config(vinculacionConfig);
    function vinculacionConfig($stateProvider) {
        $stateProvider.state("vinculacion", {
            parent: "root",
            url: "/v360/vinculacion",
            views: {
                "main@": {
                    controller: "vinculacionCtrl",
                    templateUrl: "components/v360/vinculacion/vinculacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Vinculacion"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.ventaEmpresa").config(ventaEmpresaConfig);
    function ventaEmpresaConfig($stateProvider) {
        $stateProvider.state("venta-empresa", {
            parent: "root",
            url: "/venta-empresa",
            views: {
                "main@": {
                    controller: "ventaEmpresaCtrl",
                    templateUrl: "components/ventas-empresa/contratar/contratar-producto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("venta-empresa-oportunidad", {
            parent: "venta-empresa",
            url: "/venta-empresa-oportunidad",
            views: {
                "main@": {
                    controller: "ventaEmpresaCtrl",
                    templateUrl: "components/ventas-empresa/contratar/oportunidad_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("venta-empresa-documentos", {
            parent: "venta-empresa",
            url: "/venta-empresa-documentos",
            views: {
                "main@": {
                    controller: "ventaEmpresaCtrl",
                    templateUrl: "components/ventas-empresa/contratar/contratar-documentos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.previsado").config(contratarProductoConfig);
    function contratarProductoConfig($stateProvider) {
        $stateProvider.state("venta-empresa-empresa", {
            parent: "venta-empresa",
            url: "/venta-empresa-previsado",
            views: {
                "main@": {
                    controller: "previsadoCtrl",
                    templateUrl: "components/ventas-empresa/previsado/previsado_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Previsado"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").config(caracteristicasProductoConfig);
    function caracteristicasProductoConfig($stateProvider) {
        $stateProvider.state("caracteristicas-producto", {
            parent: "root",
            url: "/caracteristicas-producto",
            views: {
                "main@": {
                    controller: "caracteristicasProductoConfig",
                    templateUrl: "components/ventas-personas/caracteristicas-producto/caracteristicas-producto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Características producto"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").config(contratarProductoConfig);
    function contratarProductoConfig($stateProvider) {
        $stateProvider.state("contratar-producto", {
            parent: "root",
            url: "/contratar-producto",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/contratar-producto_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("productoa-a-contratar", {
            parent: "contratar-producto",
            url: "/producto-a-contratar",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/producto-a-contratar_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("productoa-a-contratar-v2", {
            parent: "contratar-producto",
            url: "/producto-a-contratar-v2",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/producto-a-contratar-v2_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("documentos-adjuntos", {
            parent: "contratar-producto",
            url: "/documentos-adjuntos",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/contratar-documentos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("final-contratar", {
            parent: "contratar-producto",
            url: "/final-contratar",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/final-contratacion_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        }).state("auditoria-venta", {
            parent: "contratar-producto",
            url: "/autidoria-venta",
            views: {
                "main@": {
                    controller: "contratarProductoNewCtrl",
                    templateUrl: "components/ventas-personas/contratar/contratar-auditoria_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Ventas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.previsado").config(contratarProductoConfig);
    function contratarProductoConfig($stateProvider) {
        $stateProvider.state("previsado", {
            parent: "root",
            url: "/previsado",
            views: {
                "main@": {
                    controller: "previsadoCtrl",
                    templateUrl: "components/ventas-personas/previsado/previsado_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Previsado"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.vistaCampanias").config(vistaCampaniasConfig);
    function vistaCampaniasConfig($stateProvider) {
        $stateProvider.state("vistaCampanias", {
            parent: "root",
            url: "/vista-campanias/vista-campanias",
            views: {
                "main@": {
                    controller: "vistaCampaniasCtrl",
                    templateUrl: "components/vista-campanias/vista-campanias/vista-campanias_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Campañas"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.vistaExperiencia").config(vistaExperienciaConfig);
    function vistaExperienciaConfig($stateProvider) {
        $stateProvider.state("vistaExperiencia", {
            parent: "root",
            url: "/vista-campanias/vista-experiencia",
            views: {
                "main@": {
                    controller: "vistaExperienciaCtrl",
                    templateUrl: "components/vista-campanias/vista-experiencia/vista-experiencia_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Experiencia"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos").config(vistaRequerimientosConfig);
    function vistaRequerimientosConfig($stateProvider) {
        $stateProvider.state("vistaRequerimientos", {
            parent: "root",
            url: "/vista-campanias/vista-experiencia",
            views: {
                "main@": {
                    controller: "vistaRequerimientosCtrl",
                    templateUrl: "components/vista-campanias/vista-requerimientos/vista-requerimientos_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Experiencia"
            }
        }).state("vistaRequerimientosDetalle", {
            parent: "root",
            url: "/vista-campanias/vista-requerimientos",
            views: {
                "main@": {
                    controller: "vistaRequerimientosDetalleCtrl",
                    templateUrl: "components/vista-campanias/vista-requerimientos/requerimientos/vista-requerimientos-detalle_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Requerimientos"
            }
        }).state("busquedas-guardadas", {
            parent: "root",
            url: "/vista-campanias/busquedas-guardadas",
            views: {
                "main@": {
                    controller: "vistaOportunidadesEquipoCtrl",
                    templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/busquedas-guardadas_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Búsquedas guardadas"
            }
        }).state("tab-oportunidades-vigente", {
            parent: "vistaRequerimientos",
            url: "/tab-oportunidades-vigente",
            controller: "vistaRequerimientosCtrl",
            templateUrl: "components/vista-campanias/vista-requerimientos/experiencia/tab-oportunidades-vigente_tpl.html",
            controllerAs: "vm"
        }).state("tab-oportunidades-vigente-jefe", {
            parent: "vistaRequerimientos",
            url: "/tab-oportunidades-vigente-jefe",
            controller: "vistaOportunidadesEquipoCtrl",
            templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/tab-oportunidades-vigente-jefe_tpl.html",
            controllerAs: "vm"
        }).state("tab-oportunidades-vigente-jefe-comercial", {
            parent: "vistaRequerimientos",
            url: "/tab-oportunidades-vigente-jefe-comercial",
            controller: "vistaOportunidadesEquipoCtrl",
            templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/tab-oportunidades-vigente-jefe-comercial_tpl.html",
            controllerAs: "vm"
        }).state("tab-oportunidades-vigentes-siebel", {
            parent: "vistaRequerimientos",
            url: "/tab-oportunidades-vigentes-siebel",
            controller: "vistaRequerimientosCtrl",
            templateUrl: "components/vista-campanias/vista-requerimientos/experiencia/tab-oportunidades-vigentes-siebel_tpl.html",
            controllerAs: "vm"
        }).state("tab-oportunidades-historicas", {
            parent: "vistaRequerimientos",
            url: "/tab-oportunidades-historicas",
            controller: "vistaRequerimientosCtrl",
            templateUrl: "components/vista-campanias/vista-requerimientos/experiencia/tab-oportunidades-historicas_tpl.html",
            controllerAs: "vm"
        });
    }
})();

(function() {
    angular.module("WebBancoChile").controller("AppCtrl", appCtrl).directive("scroll", function($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if ($(".menu-v360__cerrar").is(".menu-v360__noAnimation") && !$(".menu-v360__cerrar").is(".fixed-top")) {
                    $(".menu-v360__cerrar").removeClass("menu-v360__noAnimation");
                }
            });
        };
    });
    appCtrl.$inject = [ "$scope", "$window", "$log", "$state" ];
    function appCtrl($scope, $window, $log, $state) {
        $scope.open = false;
        $scope.$on("$stateChangeSuccess", function(event, toState) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + " | Banco de Chile";
            }
        });
        $scope.uiState = $state;
        console.log($scope.uiState);
        console.log("================");
        console.log($state);
        $scope.openMenu = function() {
            $scope.open = !$scope.open;
            $scope.$broadcast("resizeMenuEvent", open);
        };
        $scope.mostrarMenu360 = false;
        $scope.openMostrarMenu360 = function() {
            if (!$(".menu-v360__cerrar").is(".menu-v360__noAnimation")) {
                $(".menu-v360__cerrar").addClass("menu-v360__noAnimation");
            }
            $scope.mostrarMenu360 = !$scope.mostrarMenu360;
        };
        $scope.mostrarClienteAutentificado = true;
    }
})();

(function() {
    "use strict";
    angular.module("WebBancoChile.constants", []).constant("rutBancoChile", "12112693-1").constant("dummy_productos", "assets/dummy-files/datos-usuario-dummy.json").constant("dummy_ultimoAcceso", "assets/dummy-files/datos-ultimoAcceso-dummy.json").constant("dummy_datos_usuario", "assets/dummy-files/datos-producto-dummy.json").constant("URL_API", "/miplataforma");
})();

(function() {
    angular.module("WebBancoChile.footer").controller("footerCtrl", footerCtrl);
    function footerCtrl($timeout, $sce) {
        var vm = this;
        vm.empty = false;
        $timeout(function() {
            vm.empty = true;
        }, 5e3);
        vm.htmlcontent = $sce.trustAsHtml("asegúrese de tener instalado el <br> aplicativo en su computador ");
    }
})();

(function() {
    angular.module("WebBancoChile.header").controller("headerAsideCtrl", headerAsideCtrl);
    var vm = this;
    function headerAsideCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.close();
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.header").controller("headerCtrl", headerCtrl);
    function headerCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        $scope.listaOpciones = [ "RUT", "Nombre", "Nº producto" ];
        $scope.listaOpciones = [ {
            nombre: "RUT",
            icono: ""
        }, {
            nombre: "Nombre",
            icono: ""
        }, {
            nombre: "Nº producto",
            icono: ""
        }, {
            nombre: "Avanzado",
            icono: "ion-ios-arrow-right"
        } ];
        $scope.mostrarAsideBusquedaAvanzada = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "commons/templates/header/aside/aside-busqueda-avanzada_tpl.html",
                animation: true,
                controller: "headerAsideCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.castigoFormulario").controller("castigoFormularioCtrl", castigoFormularioCtrl);
    function castigoFormularioCtrl($scope, $timeout) {
        $scope.openAlert = function() {
            swal({
                title: "",
                text: "Desea abandonar Selección de Créditos a refundir? Perderá la acción en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Permanecer",
                closeOnConfirm: false
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo").controller("modalasignarreemplazoCtrl", modalasignarreemplazoCtrl);
    var vm = this;
    function modalasignarreemplazoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        vm.showOne = true;
        vm.showTwo = true;
        vm.mensajes = true;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.retencionFormulario").controller("retencionFormularioCtrl", retencionFormularioCtrl);
    function retencionFormularioCtrl($scope, $modal) {
        var vm = this;
        vm.asideAsignarReemplazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/2020/retencion-formulario/asides/aside-asignar-reemplazo_tpl.html",
                animation: true,
                controller: "modalasignarreemplazoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAlert = function() {
            swal({
                title: "",
                text: "Desea abandonar Selección de Créditos a refundir? Perderá la acción en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Permanecer",
                closeOnConfirm: false
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.administradorGrupos").controller("administradorGruposCtrl", administradorGruposCtrl);
    function administradorGruposCtrl($scope) {
        var vm = this;
        vm.grupos = [ {
            grupo: "Grupo 1",
            distribucion: "Autoasignación por carga",
            administradores: 2,
            integrantes: 5
        }, {
            grupo: "Grupo 2",
            distribucion: "Autoasignación",
            administradores: 4,
            integrantes: 2
        }, {
            grupo: "Grupo 3",
            distribucion: "Round robin",
            administradores: 1,
            integrantes: 3
        }, {
            grupo: "Grupo 4",
            distribucion: "Round robin",
            administradores: 1,
            integrantes: 3
        } ];
        $scope.alertGrupos = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Administración de grupos?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.refactor").controller("refactorCtrl", refactorCtrl);
    function refactorCtrl() {
        var vm = this;
        vm.status = {
            isopen: false
        };
        vm.statusOne = {
            isopenOne: false
        };
        vm.statusTwo = {
            isopenTwo: false
        };
        vm.statusThree = {
            isopenThree: false
        };
        vm.statusFour = {
            isopenFour: false
        };
        vm.statusFive = {
            isopenFive: false
        };
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectPlatform = [ {
            name: "Todas"
        }, {
            name: "Centro de Negocios"
        } ];
        vm.selectPlatform.selected = {
            name: "Todas"
        };
        vm.selectObject = [ {
            name: "CDP"
        }, {
            name: "DAP"
        }, {
            name: "Visión 360"
        } ];
        vm.selectObject.selected = {
            name: "CDP"
        };
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
        vm.selectItem = [ {
            name: "Ahorro Total N° 002100243000"
        }, {
            name: "Tarjeta Multipropósito N° 22-333-55555-222"
        } ];
        vm.selectItem.selected = {
            name: "Ahorro Total N° 002100243000"
        };
        vm.selectMotivo = [ {
            name: "Carta Aviso Cierre"
        }, {
            name: "Cuenta ABV y/o Vivienda"
        }, {
            name: "Extravío Tarjeta / Libreta"
        }, {
            name: "Fallecimiento Titular"
        }, {
            name: "Orden Judicial"
        } ];
        vm.selectMotivo.selected = {
            name: "Carta Aviso Cierre"
        };
        vm.selectMotivoCierre = [ {
            name: "Motivo 1"
        }, {
            name: "Motivo 2"
        }, {
            name: "Motivo 3"
        } ];
        vm.selectMotivoCierre.selected = {
            name: "Motivo 1"
        };
        vm.selectMovement = [ {
            name: "Movimiento 1"
        }, {
            name: "Movimiento 2"
        }, {
            name: "Movimiento 3"
        } ];
        vm.selectMovement.selected = {
            name: "Movimiento 1"
        };
        vm.mostrarAsideBloqueo = function() {
            vm.mostrarBloqueo = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsideDesbloqueo = function() {
            vm.mostrarDesbloqueo = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsideCartola = function() {
            vm.mostrarEnvioCartola = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsideSolicitudGiro = function() {
            vm.mostrarSolicitudGiro = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsideSolicitudCierre = function() {
            vm.mostrarSolicitudCierre = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsaidCambioMotivoBloqueo = function() {
            vm.mostrarCambioMotivoBloqueo = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsaidAnulacionCierre = function() {
            vm.mostrarAnulacionCierre = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarAsideGiroEmergencia = function() {
            vm.mostrarGiroEmergencia = true;
            $("body").addClass("no-scroll");
        };
        vm.cerrarAside = function() {
            vm.mostrarBloqueo = false;
            $("body").removeClass("no-scroll");
            vm.mostrarDesbloqueo = false;
            $("body").removeClass("no-scroll");
            vm.mostrarEnvioCartola = false;
            $("body").removeClass("no-scroll");
            vm.mostrarSolicitudGiro = false;
            $("body").removeClass("no-scroll");
            vm.mostrarSolicitudCierre = false;
            $("body").removeClass("no-scroll");
            vm.mostrarCambioMotivoBloqueo = false;
            $("body").removeClass("no-scroll");
            vm.mostrarGiroEmergencia = false;
            $("body").removeClass("no-scroll");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asidesGestiones").controller("asidesGestionesCtrl", asidesGestionesCtrl);
    function asidesGestionesCtrl($scope, $modal) {
        var vm = this;
        vm.statusOne = {
            isopenOne: false
        };
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.openDrop = function() {
            vm.statusOne.isopenOne = true;
        };
        $scope.openAsideBloqueo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideBloqueo_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideDesbloqueo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideDesbloqueo_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsidePreliquidacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asidePreliquidacion_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideTefEntreProductosBi = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideTefEntreProductosBi_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideTefEntreProductosUni = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideTefEntreProductosUni_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideCierrecuenta = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideCierrecuenta_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideConfigurarAmortizacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideConfigurarAmortizacion_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideBloqueoLineaCredito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideBloqueoLineaCredito_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideDesbloqueoLineaCredito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideDesbloqueoLineaCredito_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideActivarCredichile = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideActivarCredichile_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideModificarCartola = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideModificarCartola_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideSolicitudChequeraEmergencia = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideSolicitudChequeraEmergencia_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideTransferenciaPactadaFondos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideTransferenciaPactadaFondos_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideTransferenciaPactadaFondosIngresada = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideTransferenciaPactadaFondosIngresada_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideDisminucionCupo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideDisminucionCupo_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideTarjetaDebito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/configuracionTarjeta_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideMantencionCuenta = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/mantencionCuenta_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideLimiteGastos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideLimiteGastos_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideCrearAdicional = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideCrearAdicional_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideModificarPago = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideModificarPago_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideModificarFechaVencimiento = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideModificarFechaVencimiento_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideActivarLimiterCredito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asides-gestiones/asides-gestiones/asides/asideActivarLimiteCredito_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asidesGestiones").controller("modalesGestionesCtrl", modalesGestionesCtrl);
    var vm = this;
    function modalesGestionesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.pasoOne = true;
        $scope.pasoTwo = false;
        $scope.pasoThree = false;
        $scope.showMessage = false;
        $scope.showEnrolamiento = false;
        $scope.selectEmail = [ {
            name: "Mail 1"
        }, {
            name: "Mail 2"
        }, {
            name: "Mail 3"
        }, {
            name: "Mail 4"
        } ];
        $scope.selectDia = [ {
            name: "1"
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        }, {
            name: "6"
        }, {
            name: "7"
        }, {
            name: "8"
        }, {
            name: "9"
        }, {
            name: "10"
        }, {
            name: "11"
        }, {
            name: "12"
        }, {
            name: "13"
        }, {
            name: "14"
        }, {
            name: "15"
        }, {
            name: "16"
        }, {
            name: "17"
        }, {
            name: "18"
        }, {
            name: "19"
        }, {
            name: "20"
        }, {
            name: "21"
        }, {
            name: "22"
        }, {
            name: "23"
        }, {
            name: "24"
        }, {
            name: "25"
        }, {
            name: "26"
        }, {
            name: "27"
        }, {
            name: "28"
        }, {
            name: "29"
        }, {
            name: "30"
        }, {
            name: "31"
        } ];
        $scope.selectRazonBloqueo = [ {
            name: "Razón 1"
        }, {
            name: "Razón 2"
        }, {
            name: "Razón 3"
        }, {
            name: "Razón 4"
        } ];
        $scope.selectOficinaDespacho = [ {
            name: "Oficina 1"
        }, {
            name: "Oficina 2"
        }, {
            name: "Oficina 3"
        }, {
            name: "Oficina 4"
        } ];
        $scope.selectPeriodicidad = [ {
            name: "Periodicidad 1"
        }, {
            name: "Periodicidad 2"
        }, {
            name: "Periodicidad 3"
        }, {
            name: "Periodicidad 4"
        } ];
        $scope.selectDiaGeneracion = [ {
            name: "Día 1"
        }, {
            name: "Día 2"
        }, {
            name: "Día 3"
        }, {
            name: "Día 4"
        } ];
        $scope.selectMotivoCierre = [ {
            name: "Motivo 1"
        }, {
            name: "Motivo 2"
        }, {
            name: "Motivo 3"
        }, {
            name: "Motivo 4"
        } ];
        $scope.selectCiudad = [ {
            name: "Ciudad 1"
        }, {
            name: "Ciudad 2"
        }, {
            name: "Ciudad 3"
        }, {
            name: "Ciudad 4"
        } ];
        $scope.selectTipoCuenta = [ {
            value: "ctaCorriente",
            name: "Cta Corriente 00-189-01603-05"
        }, {
            value: "ctaVista",
            name: "Cta Vista 00-189-01603-05"
        }, {
            value: "otra",
            name: "Otra"
        } ];
        $scope.selectTipoCuenta2 = [ {
            value: "ctaCorriente",
            name: "Cta Corriente 00-189-01603-05"
        }, {
            value: "ctaVista",
            name: "Cta Vista 00-189-01603-05"
        }, {
            value: "otra",
            name: "Otra"
        } ];
        $scope.selectTipoMoneda = [ {
            name: "UF"
        }, {
            name: "Pesos"
        } ];
        $scope.selectParentesco = [ {
            value: "parentesco",
            name: "Madre"
        }, {
            value: "parentesco",
            name: "Padre"
        }, {
            value: "parentesco",
            name: "Abuelo"
        }, {
            value: "parentesco",
            name: "Abuela"
        }, {
            value: "parentesco",
            name: "Otro"
        } ];
        $scope.alerta = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Configuración amortización?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaBloqueo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Bloqueo?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaDesbloqueo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Desbloqueo?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.activarLimite = false;
        $scope.activacionLimite = function() {
            $scope.activarLimite = true;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo").controller("modalasignarreemplazoCtrl", modalasignarreemplazoCtrl);
    var vm = this;
    function modalasignarreemplazoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        vm.showOne = true;
        vm.showTwo = true;
        vm.mensajes = true;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo").controller("asignarReemplazoCtrl", asignarReemplazoCtrl);
    function asignarReemplazoCtrl($scope, $modal) {
        var vm = this;
        vm.showOne = false;
        vm.showTwo = false;
        vm.mensajes = false;
        vm.asideAsignarReemplazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asignar-reemplazo/asignar/asides/aside-asignar-reemplazo_tpl.html",
                animation: true,
                controller: "modalasignarreemplazoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleReemplazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asignar-reemplazo/asignar/asides/aside-detalle-reemplazo_tpl.html",
                animation: true,
                controller: "modalasignarreemplazoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideModificarReemplazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/asignar-reemplazo/asignar/asides/aside-modificar-reemplazo_tpl.html",
                animation: true,
                controller: "modalasignarreemplazoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.demoListado = [ {
            dato1: "Lorem ipsum",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Powder lorem",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Babybel powder",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Bacon babybel",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Lorem ipsum",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Powder lorem",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Babybel powder",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Bacon babybel",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Lorem ipsum",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Powder lorem",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Babybel powder",
            dato2: "Trabajando",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        }, {
            dato1: "Bacon babybel",
            dato2: "Ausente",
            dato3: "1",
            dato4: "2",
            dato5: "1"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.autorizacionesSuper").controller("autorizacionesSuperCtrl", autorizacionesSuperCtrl).controller("AsidesAutorizacionesSuperCtrl", AsidesAutorizacionesSuperCtrl);
    function autorizacionesSuperCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.showAll = true;
        $scope.oportunidadesVigentes = [ {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            autorizador: "uromeroy",
            estado: "En autorización",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González"
        } ];
        vm.asideReasignar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/autorizaciones/superadministrador/asides/aside-reasignar_tpl.html",
                animation: true,
                controller: "AsidesAutorizacionesSuperCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function AsidesAutorizacionesSuperCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.reasignarBusqueda = "idUsuario";
        $scope.listadoOportunidades = [ {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.reportes").controller("reportesCtrl", reportesCtrl);
    function reportesCtrl() {
        var vm = this;
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectPlatform = [ {
            name: "Todas"
        }, {
            name: "Centro de Negocios"
        } ];
        vm.selectPlatform.selected = {
            name: "Todas"
        };
        vm.selectObject = [ {
            name: "CDP"
        }, {
            name: "DAP"
        }, {
            name: "Visión 360"
        } ];
        vm.selectObject.selected = {
            name: "CDP"
        };
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
    }
})();

(function() {
    angular.module("WebBancoChile.buscadorAvanzado").controller("buscadorAvanzadoCtrl", buscadorAvanzadoCtrl);
    function buscadorAvanzadoCtrl($scope) {
        var vm = this;
        vm.busquedaRut = [ {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            codigo: "12345679888",
            producto: "Tarjeta de Crédito"
        }, {
            rut: "12.828.271-3",
            nombre: "Maria Belen Ripa De La Calle",
            codigo: "1234567787123454T898T6",
            producto: "Crédito de Consumo"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.carteraClientes").controller("asideCarteraClientes", asideCarteraClientes);
    function asideCarteraClientes($scope, $modal, $uibModal, $modalInstance) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.tipoBusqueda = "modificar";
        $scope.inputNombreModificar = "Red BCH Regiones con Cred. Consumo";
        $scope.criterios = [ {
            campo: "Sector estructural / Siebel",
            criterioBusqueda: "Es igual a",
            patron: "Tradicional/selector"
        }, {
            campo: "RUT cónyuge",
            criterioBusqueda: "No está en blanco",
            patron: ""
        }, {
            campo: "Oficina",
            criterioBusqueda: "Empieza por",
            patron: "Las    Condes"
        } ];
        $scope.columnasVisibles = [ {
            orden: "1",
            filtro: "Recepción"
        }, {
            orden: "2",
            filtro: "Red"
        }, {
            orden: "3",
            filtro: "Creador"
        }, {
            orden: "4",
            filtro: "Sucursal"
        }, {
            orden: "5",
            filtro: "Asignado a"
        }, {
            orden: "6",
            filtro: "RUT cliente"
        }, {
            orden: "7",
            filtro: "Nombre cliente"
        }, {
            orden: "8",
            filtro: "Segmento"
        }, {
            orden: "9",
            filtro: "Tarea"
        }, {
            orden: "10",
            filtro: "Producto"
        }, {
            orden: "11",
            filtro: "Monto solicitado"
        }, {
            orden: "12",
            filtro: "Som. a aprobación"
        } ];
        $scope.detalleCliente = [ {
            equipoCobertura: "Jpalacios",
            oficinaEjecutivoRelacionamiento: "Huérfanos",
            segmento: "Tradicional",
            segmentoSiebel: "Selecto",
            estado: "Activo",
            clasificacionRiesgo: "A",
            rutConyuge: "12.435.873-K",
            abonoRemuneraciones: "Si",
            renta: "M$  4.000",
            cuentaCorriente: "3",
            lineaCredito: "2",
            tarjetaCredito: "2",
            rutEmpresaRelacionada: "46.343.456-7",
            preaprobado: "M$ 20.000"
        } ];
        $scope.informacion = [ {
            tipo: "Deuda SBIF",
            total: "M$ 60.000",
            consumo: "M$ 10.000",
            hipotecario: "M$ 40.000",
            comercial: "M$ 10.000"
        }, {
            tipo: "Deuda Banco",
            total: "M$ 60.000",
            consumo: "M$ 10.000",
            hipotecario: "M$ 40.000",
            comercial: "M$ 10.000"
        }, {
            tipo: "GAP",
            total: "M$ 60.000",
            consumo: "M$ 10.000",
            hipotecario: "M$ 40.000",
            comercial: "M$ 10.000"
        }, {
            tipo: "Penetración",
            total: "66%",
            consumo: "0%",
            hipotecario: "100%",
            comercial: "0%"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.carteraClientes").controller("carteraClientesCtrl", carteraClientesCtrl);
    function carteraClientesCtrl($scope, $modal, $uibModal) {
        var vm = this;
        $scope.busquedas = [ {
            nombre: "Clientes con cuenta corriente en sucursales del sur"
        }, {
            nombre: "Prospectos último mes"
        }, {
            nombre: "Con ahorros menores a $1M$"
        } ];
        vm.demoListado = [ {
            dato1: "12.345.678-9",
            dato2: "Soporte y gestión",
            dato3: "Siebel",
            dato4: "Jrodríguez",
            dato5: "A",
            dato6: "16.318.480-K",
            dato7: "M$ 150.000",
            dato8: "M$ 150.000",
            dato9: "M$ 50.000"
        }, {
            dato1: "12.345.678-9",
            dato2: "Soporte y gestión",
            dato3: "Siebel",
            dato4: "Jrodríguez",
            dato5: "A",
            dato6: "16.318.480-K",
            dato7: "M$ 150.000",
            dato8: "M$ 150.000",
            dato9: "M$ 50.000"
        }, {
            dato1: "12.345.678-9",
            dato2: "Soporte y gestión",
            dato3: "Siebel",
            dato4: "Jrodríguez",
            dato5: "A",
            dato6: "16.318.480-K",
            dato7: "M$ 150.000",
            dato8: "M$ 150.000",
            dato9: "M$ 50.000"
        }, {
            dato1: "12.345.678-9",
            dato2: "Soporte y gestión",
            dato3: "Siebel",
            dato4: "Jrodríguez",
            dato5: "A",
            dato6: "16.318.480-K",
            dato7: "M$ 150.000",
            dato8: "M$ 150.000",
            dato9: "M$ 50.000"
        } ];
        $scope.desgloseArray = [];
        $scope.busquedasGuardadas = [ {
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera"
        }, {
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera"
        }, {
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera"
        } ];
        vm.openAsideGuardarBusqueda = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cartera-clientes/cartera-clientes/asides/aside-guardar-busqueda_tpl.html",
                animation: true,
                controller: "asideCarteraClientes",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarBusqueda = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cartera-clientes/cartera-clientes/asides/aside-eliminar-busqueda_tpl.html",
                animation: true,
                controller: "asideCarteraClientes",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRenombrarBusqueda = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cartera-clientes/cartera-clientes/asides/aside-renombrar-busqueda_tpl.html",
                animation: true,
                controller: "asideCarteraClientes",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCambiarColumnasTabla = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cartera-clientes/cartera-clientes/asides/aside-ordenar-columnas-tabla_tpl.html",
                animation: true,
                controller: "asideCarteraClientes",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleCliente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cartera-clientes/cartera-clientes/asides/aside-detalle-cliente_tpl.html",
                animation: true,
                controller: "asideCarteraClientes",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.chat").controller("chatCtrl", chatCtrl);
    function chatCtrl() {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.chequeras").controller("modalesChequerasCtrl", modalesChequerasCtrl);
    var vm = this;
    function modalesChequerasCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.chequeras").controller("chequerasCtrl", chequerasCtrl);
    function chequerasCtrl($scope, $modal) {
        var vm = this;
        vm.warningProductos = true;
        vm.msjeAgregar = true;
        vm.productoAgregado = true;
        vm.asideInformes = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cheques/chequeras/asides/aside-informe_tpl.html",
                animation: true,
                controller: "modalesChequerasCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.cheques").controller("chequesCtrl", chequesCtrl);
    function chequesCtrl() {
        var vm = this;
        vm.mostrarAside = false;
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.mostrarSidebar = function() {
            vm.mostrarAside = true;
            $("body").addClass("no-scroll");
        };
        vm.cerrarSidebar = function() {
            vm.mostrarAside = false;
            $("body").removeClass("no-scroll");
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectAccount = [ {
            name: "00-787-88876-90"
        }, {
            name: "00-898-88876-91"
        }, {
            name: "00-351-88876-92"
        } ];
        vm.selectAccount.selected = {
            name: "00-787-88876-90"
        };
        vm.selectColilla = [ {
            name: "00-787-88876-90"
        }, {
            name: "00-898-88876-91"
        }, {
            name: "Sin Colilla"
        }, {
            name: "Carta de Instrucción"
        } ];
        vm.selectColilla.selected = {
            name: "00-787-88876-90"
        };
    }
})();

(function() {
    angular.module("WebBancoChile.chequesV2").controller("AsideChequesCtrl", AsideChequesCtrl);
    function AsideChequesCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.alertaBloqueo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Crear adicional?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaActivar = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Activar tarjeta?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaAnular = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Anular tarjeta?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaReseteo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Reseteo de tarjeta?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaReemitir = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Reemitir tarjeta?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaCierre = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Cierre tarjeta?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaMantencionTarjeta = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Mantención Tarjeta Débito?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.chequesV2").controller("modalesGestionesCtrl", modalesGestionesCtrl);
    var vm = this;
    function modalesGestionesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.pasoOne = true;
        $scope.pasoTwo = false;
        $scope.pasoThree = false;
        $scope.selectEmail = [ {
            name: "Mail 1"
        }, {
            name: "Mail 2"
        }, {
            name: "Mail 3"
        }, {
            name: "Mail 4"
        } ];
        $scope.selectDia = [ {
            name: "1"
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        }, {
            name: "6"
        }, {
            name: "7"
        }, {
            name: "8"
        }, {
            name: "9"
        }, {
            name: "10"
        }, {
            name: "11"
        }, {
            name: "12"
        }, {
            name: "13"
        }, {
            name: "14"
        }, {
            name: "15"
        }, {
            name: "16"
        }, {
            name: "17"
        }, {
            name: "18"
        }, {
            name: "19"
        }, {
            name: "20"
        }, {
            name: "21"
        }, {
            name: "22"
        }, {
            name: "23"
        }, {
            name: "24"
        }, {
            name: "25"
        }, {
            name: "26"
        }, {
            name: "27"
        }, {
            name: "28"
        }, {
            name: "29"
        }, {
            name: "30"
        }, {
            name: "31"
        } ];
        $scope.selectRazonBloqueo = [ {
            name: "Razón 1"
        }, {
            name: "Razón 2"
        }, {
            name: "Razón 3"
        }, {
            name: "Razón 4"
        } ];
        $scope.selectOficinaDespacho = [ {
            name: "Oficina 1"
        }, {
            name: "Oficina 2"
        }, {
            name: "Oficina 3"
        }, {
            name: "Oficina 4"
        } ];
        $scope.selectPeriodicidad = [ {
            name: "Periodicidad 1"
        }, {
            name: "Periodicidad 2"
        }, {
            name: "Periodicidad 3"
        }, {
            name: "Periodicidad 4"
        } ];
        $scope.selectDiaGeneracion = [ {
            name: "Día 1"
        }, {
            name: "Día 2"
        }, {
            name: "Día 3"
        }, {
            name: "Día 4"
        } ];
        $scope.alerta = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Mantención Tarjeta Débito?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaBloqueo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Bloqueo?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.alertaDesbloqueo = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Desbloqueo?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.chequesV2").controller("chequesV2Ctrl", chequesV2Ctrl);
    function chequesV2Ctrl($uibModal, $scope) {
        var vm = this;
        vm.status = {
            isopenOne: false
        };
        vm.openAsideDetalleCheque = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-detalle-cheque_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleMovimiento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-detalle-movimiento_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCrearTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-crear-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCierreTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-cierre-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideActivarTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-activar-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAnularTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-anular-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReemicionTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-reemicion-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReseteoTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-reseteo-tarjeta_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBloqueColilla = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/asideBloqueo_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesbloqueColilla = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/asideDesbloqueo_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCambioEstado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/asideCambioEstado_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMantencionChequera = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-mantencion-chequera_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSolicitudChequeraAdicional = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-solicitud-chequera-adicional_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideActivarChqueraEmergencia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-activar-chequera-emergencia_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideActivarChquera = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-activar-chequera_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRevisarChquera = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-revisar-chequera_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideFirmasDigitalizadas = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-firmas-digitalizadas_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideFirmasDigitalizadasLg = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-firmas-digitalizadas-lg_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideComprobateTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-comprobante-entrega-tarjeta_tpl.html",
                animation: true,
                controller: "modalesGestionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCrearTarjetaTitular = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/chequesV2/asides/aside-crear-tarjeta-titular_tpl.html",
                animation: true,
                controller: "AsideChequesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.informes").controller("informesCtrl", informesCtrl).controller("ModalCtrlInformes", ModalCtrlInformes);
    function informesCtrl($uibModal) {
        var vm = this;
        vm.openAsideInformes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/cheques/informe-chequeras/asides/aside-informes_tpl.html",
                animation: true,
                controller: "ModalCtrlInformes",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrlInformes($scope, $modalInstance, $timeout) {
        $scope.data = {
            informes: [ "Chequeras entregadas", "Chequeras reversadas", "Transacciones PAC" ]
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.tesoreria").controller("tesoreriaCtrl", tesoreriaCtrl).controller("ModalCtrl", ModalCtrl);
    var vm;
    function tesoreriaCtrl($scope, $modal) {
        vm = this;
        vm.cosa = "hola";
        vm.viewResult = false;
        vm.viewShell = false;
        vm.viewShellBank = false;
        vm.viewRefresh = true;
        vm.viewRefreshVenta = true;
        vm.viewShellVenta = false;
        vm.selectMoneda = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Euro",
            moneda: "EUR"
        }, {
            name: "Libra Esterlina",
            moneda: "GBP"
        }, {
            name: "Peso Argentino",
            moneda: "ARS"
        }, {
            name: "Chelín Autriaco",
            moneda: "ATS"
        }, {
            name: "Dólar Australiano",
            moneda: "AUD"
        }, {
            name: "Franco Belga",
            moneda: "BEF"
        } ];
        vm.selectMoneda.selected = {
            name: "Euro",
            moneda: "EUR"
        };
        vm.selectMoneda2 = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Peso Chileno",
            moneda: "CLP"
        } ];
        vm.openAlert = function() {
            swal({
                title: "Banco compra dólar estadounidense",
                text: "Cliente venderá USD 1.345,67 \n" + "Este cambio tiene una vigencia de 30 segundos.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Comprar",
                cancelButtonText: "Abandonar"
            }, function() {
                vm.compraSuccess();
            });
        };
        vm.openAlertVenta1 = function() {
            swal({
                title: "Banco vende dólar estadounidense",
                html: "Cliente comprará USD 1.345,67<br/>" + "Este cambio tiene una vigencia de <b>30</b> segundos.<br/><br/>" + "Operaciones Similares:<br/><br/>" + '<a id="bt1" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt1&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a><br/>' + '<a id="bt2" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt2&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a><br/>' + '<a id="bt3" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt3&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a>',
                type: "warning",
                customClass: "sweet-shell",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Abandonar",
                confirmButtonText: "Vender",
                confirmButtonClass: "btn primary pull-right",
                cancelButtonClass: "btn default pull-left",
                buttonsStyling: false
            }, function() {
                vm.ventaSuccess();
            });
        };
        $scope.openAsideConsulta = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/chile-fx/tesoreria/asides/aside-detalleConsulta_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideControlTrx = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/chile-fx/tesoreria/asides/aside-detalleControlTrx_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideSweet = function() {
            var modalInstance = $modal.open({
                templateUrl: "components/chile-fx/tesoreria/asides/aside-detalleSweet_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: "md",
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.compraSuccess = function() {
            vm.viewResult = false;
            vm.viewShell = true;
        };
        vm.ventaSuccess = function() {
            vm.viewShellBank = false;
            vm.viewShellVenta = true;
        };
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
        };
        vm.toggleMin();
        vm.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        };
        vm.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        vm.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        vm.format = vm.formats[0];
        vm.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalCtrl",
                size: size,
                resolve: {
                    items: function() {
                        return vm.items;
                    }
                }
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.confirmar = false;
    }
})();

(function() {
    angular.module("WebBancoChile.comportamiento").controller("comportamientoCtrl", comportamientoCtrl).controller("ModalCtrl", ModalCtrl);
    function comportamientoCtrl($uibModal) {
        var vm = this;
        vm.ocultaBoton = false;
        vm.expandAll = function() {
            var databar = $(".data-bar");
            var desglose = $(".data-bar--desglose");
            var flecha = $(".data-bar__actions .btn-fill .cont-animacion i");
            if (databar.hasClass("data-bar--active") && desglose.hasClass("expandido") && flecha.hasClass("voltea")) {
                databar.removeClass("data-bar--active");
                desglose.removeClass("expandido");
                flecha.removeClass("voltea");
            } else {
                databar.addClass("data-bar--active");
                desglose.addClass("expandido");
                flecha.addClass("voltea");
            }
        };
        vm.collapseAll = function() {
            var databar = $(".data-bar");
            var desglose = $(".data-bar--desglose");
            var flecha = $(".data-bar__actions .btn-fill .cont-animacion i");
            if (databar.hasClass("data-bar--active") && desglose.hasClass("expandido") && flecha.hasClass("voltea")) {
                databar.removeClass("data-bar--active");
                desglose.removeClass("expandido");
                flecha.removeClass("voltea");
            } else {
                databar.addClass("data-bar--active");
                desglose.addClass("expandido");
                flecha.addClass("voltea");
            }
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.compraCartera").controller("compraCarteraCtrl", compraCarteraCtrl).controller("asidesCompraCarteraCtrl", asidesCompraCarteraCtrl);
    function compraCarteraCtrl($scope, $modal, $state) {
        var vm = this;
        vm.productosElementos = [ {
            estado: "btn"
        }, {
            estado: "loader"
        }, {
            estado: "error"
        }, {
            estado: "datos"
        } ];
        vm.asideAvales = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/compra-cartera/asides/aside-avales_tpl.html",
                animation: true,
                controller: "asidesCompraCarteraCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideCredito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/compra-cartera/asides/aside-credito_tpl.html",
                animation: true,
                controller: "asidesCompraCarteraCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.alertaAcreedores = function(type, status, $state) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Ingreso de acreedores?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope, $state) {
                if (isConfirm) {
                    $state.go("compra-cartera");
                }
            });
        };
    }
    function asidesCompraCarteraCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.compraCartera").directive("ngClickCopy", [ "ngCopy", function(ngCopy) {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                element.bind("click", function(e) {
                    ngCopy(attrs.ngClickCopy);
                });
            }
        };
    } ]);
})();

(function() {
    angular.module("WebBancoChile.simulacredito").controller("refundircreditoCtrl", refundircreditoCtrl);
    function refundircreditoCtrl($scope, $timeout) {
        $scope.openAlert = function() {
            swal({
                title: "",
                text: "Desea abandonar Selección de Créditos a refundir? Perderá la acción en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Permanecer",
                closeOnConfirm: false
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.simulacredito").controller("simulacreditoCtrl", simulacreditoCtrl);
    function simulacreditoCtrl($timeout) {
        var vm = this;
        vm.status = {
            isopen: false
        };
        vm.simulatingProcess = false;
        vm.tipoprepago = [ {
            tipo: "Nominada"
        }, {
            tipo: "Innominada"
        } ];
        vm.typeCredit = [ {
            name: "Personal"
        }, {
            name: "Comercial"
        } ];
        vm.typeCredit.selected = {
            name: "Personal"
        };
        vm.selectCash = [ {
            name: "Pesos"
        }, {
            name: "UF"
        } ];
        vm.selectCash.selected = {
            name: "Pesos"
        };
        vm.typeGarantee = [ {
            name: "Sin Garantía"
        }, {
            name: "Depósitos a Plazo"
        }, {
            name: "Efectos de Comercio"
        }, {
            name: "Acciones y Bonos"
        }, {
            name: "Fondos Mutuos"
        }, {
            name: "Garantías Personal (Aval)"
        }, {
            name: "Warrants"
        }, {
            name: "Embarcaciones"
        }, {
            name: "Bienes Raíces"
        }, {
            name: "Otros Productos"
        } ];
        vm.typeGarantee.selected = {
            name: "Sin Garantía"
        };
        vm.noPayOne = [ {
            name: "Enero"
        }, {
            name: "Febrero"
        }, {
            name: "Marzo"
        }, {
            name: "Abril"
        }, {
            name: "Mayo"
        }, {
            name: "Junio"
        }, {
            name: "Julio"
        }, {
            name: "Agosto"
        }, {
            name: "Septiembre"
        }, {
            name: "Octubre"
        }, {
            name: "Noviembre"
        }, {
            name: "Diciembre"
        } ];
        vm.noPayTwo = [ {
            name: "Enero"
        }, {
            name: "Febrero"
        }, {
            name: "Marzo"
        }, {
            name: "Abril"
        }, {
            name: "Mayo"
        }, {
            name: "Junio"
        }, {
            name: "Julio"
        }, {
            name: "Agosto"
        }, {
            name: "Septiembre"
        }, {
            name: "Octubre"
        }, {
            name: "Noviembre"
        }, {
            name: "Diciembre"
        } ];
        vm.foundsDestiny = [ {
            name: "Fab. Prod. Metalic. Maq."
        }, {
            name: "Equipos"
        }, {
            name: "Créditos de Consumo"
        } ];
        vm.foundsDestiny.selected = {
            name: "Créditos de Consumo"
        };
        vm.planPagos = [ {
            name: "Inteligente"
        }, {
            name: "Estudiante"
        }, {
            name: "No Aplica"
        } ];
        vm.planPagos.selected = {
            name: "No Aplica"
        };
        vm.tasaInteres = [ {
            name: "Tasa Fija"
        }, {
            name: "Tasa Variable"
        }, {
            name: "Otras"
        } ];
        vm.tasaInteres.selected = {
            name: "Tasa Fija"
        };
        vm.frecuency = [ {
            name: "Diario"
        }, {
            name: "Mensual"
        }, {
            name: "Bimensual"
        }, {
            name: "Trimestral"
        }, {
            name: "Semestral"
        }, {
            name: "Anual"
        } ];
        vm.frecuency.selected = {
            name: "Mensual"
        };
        vm.bchAccount = [ {
            name: "Cuenta Corriente"
        }, {
            name: "Cuenta Ahorro"
        }, {
            name: "Cuenta Vista"
        } ];
        vm.bchAccount.selected = {
            name: "Cuenta Corriente"
        };
        vm.formaCargo = [ {
            name: "Cuenta Corriente"
        }, {
            name: "Cuenta Ahorro"
        }, {
            name: "Cuenta Vista"
        } ];
        vm.formaCargo.selected = {
            name: "Cuenta Corriente"
        };
        vm.instutionCargo = [ {
            name: "Banco de Chile"
        }, {
            name: "Otro Banco"
        } ];
        vm.instutionCargo.selected = {
            name: "Banco de Chile"
        };
        vm.automaticCharge = [ {
            name: "Automático"
        }, {
            name: "Manual"
        } ];
        vm.automaticCharge.selected = {
            name: "Automático"
        };
        vm.cargoSeguros = [ {
            name: "Cargo al Crédito"
        }, {
            name: "Opción 2"
        } ];
        vm.cargoSeguros.selected = {
            name: "Cargo al Crédito"
        };
        vm.tipoRelacion = [ {
            name: "Referencia"
        }, {
            name: "Opción 2"
        } ];
        vm.tipoRelacion.selected = {
            name: "Referencia"
        };
        vm.parentesco = [ {
            name: "Padre"
        }, {
            name: "Madre"
        }, {
            name: "Hijo/a"
        }, {
            name: "Cónyuge"
        } ];
        vm.parentesco.selected = {
            name: "Padre"
        };
        vm.mostrarSolicitud = function() {
            vm.mostrarAside = true;
            $("body").addClass("no-scroll");
        };
        vm.mostrarEnvioMail = function() {
            vm.mostrarAsideMAil = true;
            $("body").addClass("no-scroll");
        };
        vm.cerrarAside = function() {
            console.log("entro");
            vm.mostrarAside = false;
            vm.mostrarAsideMAil = false;
            $("body").removeClass("no-scroll");
        };
        vm.alerta = function(type, status) {
            switch (type) {
              case "basic":
                swal("Esto es un mensaje");
                break;

              case "title":
                swal("Titulo del mensaje", "texto del mensaj dasdas das d asd as d as d as das de");
                break;

              case "status":
                swal({
                    title: "Desea eliminar este referido?",
                    text: "Desea eliminar este referido?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                }).then(function() {
                    swal("Eliminado", "El referido ha sido eliminado", "success");
                });
                break;
            }
        };
        vm.confirmacionDeCerrar = function() {
            swal({
                title: "",
                text: "Desea cerrar la ventana lateral? Perderá el trabajo en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6baa1f ",
                confirmButtonText: "Cerrar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    vm.mostrarAsideMAil = false;
                    $timeout(function() {
                        vm.mostrarAsideMAil = false;
                    }, 1e3);
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.autorizacion").controller("autorizacionCtrl", autorizacionCtrl).controller("ModalCtrl", ModalCtrl);
    var vm;
    function autorizacionCtrl($scope, $modal) {
        vm = this;
        vm.cosa = "hola";
        vm.viewResult = false;
        vm.viewShell = false;
        vm.viewShellBank = false;
        vm.viewRefresh = true;
        vm.viewRefreshVenta = true;
        vm.viewShellVenta = false;
        vm.selectMoneda = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Euro",
            moneda: "EUR"
        }, {
            name: "Libra Esterlina",
            moneda: "GBP"
        }, {
            name: "Peso Argentino",
            moneda: "ARS"
        }, {
            name: "Chelín Autriaco",
            moneda: "ATS"
        }, {
            name: "Dólar Australiano",
            moneda: "AUD"
        }, {
            name: "Franco Belga",
            moneda: "BEF"
        } ];
        vm.selectMoneda.selected = {
            name: "Euro",
            moneda: "EUR"
        };
        vm.selectMoneda2 = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Peso Chileno",
            moneda: "CLP"
        } ];
        $scope.status = {
            isopen: false
        };
        $scope.statusDos = {
            isopenDos: false
        };
        vm.openAlert = function() {
            swal({
                title: "Banco compra dólar estadounidense",
                text: "Cliente venderá USD 1.345,67 \n" + "Este cambio tiene una vigencia de 30 segundos.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Comprar",
                cancelButtonText: "Abandonar"
            }, function() {
                vm.compraSuccess();
            });
        };
        vm.openAsideReparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/autorizacion-de-cuentas/asides/aside-reparar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideInfoAdicional = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/autorizacion-de-cuentas/asides/aside-infoAdicional_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAlertVenta1 = function() {
            swal({
                title: "Banco vende dólar estadounidense",
                html: "Cliente comprará USD 1.345,67<br/>" + "Este cambio tiene una vigencia de <b>30</b> segundos.<br/><br/>" + "Operaciones Similares:<br/><br/>" + '<a id="bt1" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt1&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a><br/>' + '<a id="bt2" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt2&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a><br/>' + '<a id="bt3" class="btn btn-link" onclick="angular.element(document.getElementById(&#39;bt3&#39;)).scope().openAsideSweet()">235765 / 22/03/2016 12:34 / USD 1.000 / 667,56 / Patricia Andrea Calderón Fredes</a>',
                type: "warning",
                customClass: "sweet-shell",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Abandonar",
                confirmButtonText: "Vender",
                confirmButtonClass: "btn primary pull-right",
                cancelButtonClass: "btn default pull-left",
                buttonsStyling: false
            }, function() {
                vm.ventaSuccess();
            });
        };
        vm.compraSuccess = function() {
            vm.viewResult = false;
            vm.viewShell = true;
        };
        vm.ventaSuccess = function() {
            vm.viewShellBank = false;
            vm.viewShellVenta = true;
        };
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
        };
        vm.toggleMin();
        vm.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        };
        vm.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        vm.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        vm.format = vm.formats[0];
        vm.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalCtrl",
                size: size,
                resolve: {
                    items: function() {
                        return vm.items;
                    }
                }
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
    }
})();

(function() {
    angular.module("WebBancoChile.solicitudes").controller("solicitudesCtrl", solicitudesCtrl).controller("ModalCtrl", ModalCtrl);
    var vm;
    function solicitudesCtrl($scope, $modal) {
        vm = this;
        vm.cosa = "hola";
        vm.viewResult = false;
        vm.viewShell = false;
        vm.viewShellBank = false;
        vm.viewRefresh = true;
        vm.viewRefreshVenta = true;
        vm.viewShellVenta = false;
        vm.selectMoneda = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Euro",
            moneda: "EUR"
        }, {
            name: "Libra Esterlina",
            moneda: "GBP"
        }, {
            name: "Peso Argentino",
            moneda: "ARS"
        }, {
            name: "Chelín Autriaco",
            moneda: "ATS"
        }, {
            name: "Dólar Australiano",
            moneda: "AUD"
        }, {
            name: "Franco Belga",
            moneda: "BEF"
        } ];
        vm.selectMoneda.selected = {
            name: "Euro",
            moneda: "EUR"
        };
        vm.selectMoneda2 = [ {
            name: "Dólar Estadounidense",
            moneda: "USD"
        }, {
            name: "Peso Chileno",
            moneda: "CLP"
        } ];
        $scope.status = {
            isopen: false
        };
        $scope.statusDos = {
            isopenDos: false
        };
        vm.openAlert = function() {
            swal({
                title: "Banco compra dólar estadounidense",
                text: "Cliente venderá USD 1.345,67 \n" + "Este cambio tiene una vigencia de 30 segundos.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Comprar",
                cancelButtonText: "Abandonar"
            }, function() {
                vm.compraSuccess();
            });
        };
        vm.compraSuccess = function() {
            vm.viewResult = false;
            vm.viewShell = true;
        };
        vm.ventaSuccess = function() {
            vm.viewShellBank = false;
            vm.viewShellVenta = true;
        };
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
        };
        vm.toggleMin();
        vm.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        };
        vm.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        vm.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        vm.format = vm.formats[0];
        vm.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalCtrl",
                size: size,
                resolve: {
                    items: function() {
                        return vm.items;
                    }
                }
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
    }
})();

(function() {
    angular.module("WebBancoChile.cuentaVista").controller("cuentaVistaCtrl", cuentaVistaCtrl).controller("ModalCtrl", ModalCtrl);
    function cuentaVistaCtrl($scope, $modal) {
        var vm = this;
        vm.showSteps1 = false;
        vm.showSteps2 = false;
        vm.showEvaluation = false;
        vm.showRepresentante = false;
        vm.showSolicitud = false;
        vm.showDelivery = false;
        vm.showDocumentation = false;
        vm.showHideInputEmail = false;
        vm.showResultMail = false;
        vm.showAtributosyDelivery = false;
        vm.status = {
            excelOne: false
        };
        vm.alerta = function(type, status) {
            switch (type) {
              case "status":
                swal({
                    title: "Perderá la acción en curso",
                    text: "Está seguro que desea abandonar Solicitud Cuenta Vista?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#E9F0F5",
                    cancelButtonColor: "#f1f1f3",
                    confirmButtonText: "Abandonar",
                    cancelButtonText: "Permanecer"
                });
            }
        };
        vm.listaCuentas = [ {
            name: "Cuenta Vista"
        }, {
            name: "Cuenta Corriente"
        } ];
        vm.listaPACPAT = [ {
            name: "0"
        }, {
            name: "1"
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        } ];
        vm.listaPACPAT.selected = {
            name: "1"
        };
        vm.listaEntregaProductos = [ {
            name: "Retiro en sucursal de solicitud"
        }, {
            name: "Retiro en otra sucursal"
        }, {
            name: "Despacho a domicilio - Con costo adicional"
        } ];
        vm.listaRegiones = [ {
            name: "Región Metropolitana"
        }, {
            name: "XV Arica y Parinacota"
        }, {
            name: "I Tarapacá"
        }, {
            name: "II Antofagasta"
        }, {
            name: "III Atacama"
        }, {
            name: "IV Coquimbo"
        }, {
            name: "V Valparaíso"
        }, {
            name: "VI O-Higgins"
        }, {
            name: "VII Maule"
        }, {
            name: "VIII Biobío"
        }, {
            name: "IX La Araucanía"
        }, {
            name: "XIV Los Ríos"
        }, {
            name: "X Los Lagos"
        }, {
            name: "XI Aysén"
        }, {
            name: "XII Magallanes y Antártica"
        } ];
        vm.listaComuna = [ {
            name: "Las Condes"
        }, {
            name: "Santiago"
        }, {
            name: "Vitacura"
        }, {
            name: "San Bernardo"
        } ];
        vm.listaSucursales = [ {
            name: "205 | 11 de Septiembre"
        }, {
            name: "210 | Bilbao"
        }, {
            name: "300 | Bombero Ossa"
        }, {
            name: "400 | Bustamante"
        } ];
        vm.listaHorarios = [ {
            name: "De 9:00 a 16:00 hrs."
        }, {
            name: "De 16:00 a 21:00 hrs."
        } ];
        vm.listaEnvioVisado = [ {
            name: "Centralizado"
        }, {
            name: "Sucursal"
        } ];
        vm.listaCuentasBanJoven = [ {
            name: "000-1234-56-00001234"
        }, {
            name: "001-5678-90-00009876"
        } ];
        vm.listaPeriocidadTransfer = [ {
            name: "Semanal"
        }, {
            name: "Quincenal"
        }, {
            name: "Mensual"
        }, {
            name: "Trimestral"
        }, {
            name: "Semestral"
        }, {
            name: "Anual"
        } ];
        vm.listaDiasTransfer = [ {
            name: "1"
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        }, {
            name: "6"
        }, {
            name: "7"
        }, {
            name: "8"
        }, {
            name: "9"
        }, {
            name: "10"
        }, {
            name: "11"
        }, {
            name: "12"
        }, {
            name: "13"
        }, {
            name: "14"
        }, {
            name: "15"
        }, {
            name: "16"
        }, {
            name: "17"
        }, {
            name: "18"
        }, {
            name: "19"
        }, {
            name: "20"
        }, {
            name: "21"
        }, {
            name: "22"
        }, {
            name: "23"
        }, {
            name: "24"
        }, {
            name: "25"
        }, {
            name: "26"
        }, {
            name: "27"
        }, {
            name: "28"
        }, {
            name: "29"
        }, {
            name: "30"
        }, {
            name: "31"
        } ];
        vm.listaReajustabilidad = [ {
            name: "Opción 1"
        }, {
            name: "Opción 2"
        }, {
            name: "Opción 3"
        } ];
        vm.listaPeriocidadReajustabilidad = [ {
            name: "Opción 1"
        }, {
            name: "Opción 2"
        }, {
            name: "Opción 3"
        } ];
        vm.openAsideCuentaInfo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/vista/asides/aside-info_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openInfoRequired = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/vista/asides/aside-info-required_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openEnvioMailBancaVirtual = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/vista/asides/aside-envioMailBancaVirtual_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openTaxDemo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/cuenta/vista/asides/aside-taxDemos_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.viewDelivery = function() {
            vm.showSolicitud = false;
            vm.showEvaluation = false;
            vm.showDelivery = true;
            vm.showDocumentation = false;
            $(".steps-horizontales-numerados__step:nth-child(1)").addClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(1)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(2)").addClass("steps-horizontales-numerados__step--active");
        };
        vm.viewDocumentation = function() {
            vm.showSolicitud = false;
            vm.showEvaluation = false;
            vm.showDelivery = false;
            vm.showDocumentation = true;
            $(".steps-horizontales-numerados__step:nth-child(1)").addClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(1)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(2)").addClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(2)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(3)").addClass("steps-horizontales-numerados__step--active");
        };
        vm.confirmBancaVirtual = function() {
            vm.showSteps1 = false;
            vm.showSteps2 = false;
            vm.showEvaluation = false;
            vm.showSolicitud = false;
            vm.showDelivery = false;
            vm.showDocumentation = false;
            vm.showHideInputEmail = false;
            vm.showResultMail = true;
            $(".steps-horizontales-numerados__step:nth-child(1)").removeClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(1)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(2)").removeClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(2)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(3)").removeClass("steps-horizontales-numerados__step--active");
        };
        vm.viewRepresentante = function() {
            vm.showSteps1 = false;
            vm.showSteps2 = true;
            vm.showEvaluation = false;
            vm.showSolicitud = false;
            vm.showDelivery = false;
            vm.showDocumentation = false;
            vm.showHideInputEmail = false;
            vm.showResultMail = false;
            vm.showRepresentante = true;
            vm.showAtributosyDelivery = false;
            $(".steps-horizontales-numerados__step:nth-child(1)").addClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(1)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(2)").addClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(2)").removeClass("steps-horizontales-numerados__step--done");
        };
        vm.viewAtributosyDelivery = function() {
            vm.showSteps1 = false;
            vm.showSteps2 = true;
            vm.showEvaluation = false;
            vm.showSolicitud = false;
            vm.showDelivery = false;
            vm.showDocumentation = false;
            vm.showHideInputEmail = false;
            vm.showResultMail = false;
            vm.showRepresentante = false;
            vm.showAtributosyDelivery = true;
            $(".steps-horizontales-numerados__step:nth-child(2)").addClass("steps-horizontales-numerados__step--done");
            $(".steps-horizontales-numerados__step:nth-child(2)").removeClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(3)").addClass("steps-horizontales-numerados__step--active");
            $(".steps-horizontales-numerados__step:nth-child(3)").removeClass("steps-horizontales-numerados__step--done");
        };
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
        $scope.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        $scope.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        $scope.format = $scope.formats[0];
        $scope.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalCtrl",
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
    }
})();

(function() {
    angular.module("WebBancoChile.documentos").controller("documentosCtrl", documentosCtrl);
    function documentosCtrl($scope) {
        vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.dolaresPremios").controller("asideDolaresPremiosCtrl", asideDolaresPremiosCtrl);
    var vm = this;
    function asideDolaresPremiosCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.dolaresPremios").controller("dolaresPremiosCtrl", dolaresPremiosCtrl);
    function dolaresPremiosCtrl($modal, $uibModal) {
        var vm = this;
        vm.datosAcumulado = [ {
            tipoTarjeta: "Visa Platinium",
            nTarjeta: "5226 3262 6590 7663",
            totalComprasNacionales: "0",
            comprasNacionalesExpresadas: "0,00",
            totalComprasInternacionales: "0,00",
            totalComprasExpresadasUSD: "30,90",
            montoAcumulaDolaresPremios: "0,00",
            dolaresPremiosAcumulados: "0,00"
        }, {
            tipoTarjeta: "Visa Platinium",
            nTarjeta: "1234 5678 9012 3456",
            totalComprasNacionales: "0",
            comprasNacionalesExpresadas: "0,00",
            totalComprasInternacionales: "0,00",
            totalComprasExpresadasUSD: "30,90",
            montoAcumulaDolaresPremios: "0,00",
            dolaresPremiosAcumulados: "0,00"
        }, {
            tipoTarjeta: "MasterCard Black",
            nTarjeta: "5189 0850 1946 9280",
            totalComprasNacionales: "0",
            comprasNacionalesExpresadas: "0,00",
            totalComprasInternacionales: "0,00",
            totalComprasExpresadasUSD: "30,90",
            montoAcumulaDolaresPremios: "0,00",
            dolaresPremiosAcumulados: "0,00"
        }, {
            tipoTarjeta: "MasterCard Black",
            nTarjeta: "5189 0850 1946 9280",
            totalComprasNacionales: "0",
            comprasNacionalesExpresadas: "0,00",
            totalComprasInternacionales: "0,00",
            totalComprasExpresadasUSD: "30,90",
            montoAcumulaDolaresPremios: "0,00",
            dolaresPremiosAcumulados: "0,00"
        }, {
            tipoTarjeta: "Visa Platinium",
            nTarjeta: "1234 5678 9012 3456",
            totalComprasNacionales: "0",
            comprasNacionalesExpresadas: "0,00",
            totalComprasInternacionales: "0,00",
            totalComprasExpresadasUSD: "30,90",
            montoAcumulaDolaresPremios: "0,00",
            dolaresPremiosAcumulados: "0,00"
        } ];
        vm.datosAcumuladoDetalle = [ {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "No Acumuló",
            canal: "Nueva internet"
        }, {
            fecha: "23/06/2017",
            descripcion: "En esta columna deberá aparecer la descripción de la transacción.",
            comprasNac: "0",
            comprasInt: "0,00",
            montoUsd: "0,00",
            montoDp: "0,00",
            dpAcumulados: "0,00",
            estado: "Acumuló",
            canal: "Duty Free"
        } ];
        vm.openAsideDolaresPremiosEnviarMail = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/dolares-premios/asides/aside-dolares-premios-enviar-mail_tpl.html",
                animation: true,
                controller: "asideDolaresPremiosCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.elementosWebkit").controller("AsidesEnvioCorreoCtrl", AsidesEnvioCorreoCtrl);
    var vm = this;
    function AsidesEnvioCorreoCtrl($scope, $uibModalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $uibModalInstance.close($scope.item);
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.elementosWebkit").controller("elementosWebkitCtrl", elementosWebkitCtrl);
    function elementosWebkitCtrl($scope, $uibModal) {
        var vm = this;
        vm.mostrarResumen = false;
        vm.mostrarConfirmacion = false;
        vm.mostrarInicio = true;
        vm.statusOne = {
            isopenOne: false
        };
        vm.selectMotivo = [ {
            name: "Bloqueo por robo o pérdida"
        }, {
            name: "Bloqueo por fraude"
        } ];
        vm.selectDestino = [ {
            name: "000 Central"
        }, {
            name: "001 Of. Huérfanos 744 OP."
        }, {
            name: "002 Constitución Plaza"
        } ];
        vm.selectMail = [ {
            name: "abcd@gmail.com"
        }, {
            name: "12345@hotmail.com"
        } ];
        vm.envioCorreo = function() {
            var modalInstance = $uibModal.open({
                templateUrl: "components/elementos-webkit/elementos-webkit/asides/asideEnvioDeCorreo_tpl.html",
                animation: true,
                controller: "AsidesEnvioCorreoCtrl",
                size: "lg",
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.emergenciasBancarias").controller("emergenciasBancariasCtrl", emergenciasBancariasCtrl);
    function emergenciasBancariasCtrl() {
        var vm = this;
        vm.mostrarResumen = false;
        vm.mostrarConfirmacion = false;
        vm.mostrarInicio = true;
        vm.selectedOtherSucursal = false;
        vm.statusOne = {
            isopenOne: false
        };
        vm.statusResumen = {
            isopenResumen: false
        };
        vm.selectDestino = [ {
            name: "000 Central"
        }, {
            name: "001 Of. Huérfanos 744 OP."
        }, {
            name: "002 Constitución Plaza"
        } ];
        vm.selectMail = [ {
            name: "abcd@gmail.com"
        }, {
            name: "12345@hotmail.com"
        } ];
        vm.selectTipoProducto = [ {
            name: "Todos los productos"
        }, {
            name: "Tarjetas de Débito"
        }, {
            name: "Tarjetas de Crédito"
        }, {
            name: "Digipas"
        }, {
            name: "Digicard"
        }, {
            name: "Mi Pass"
        } ];
        vm.selectCuentaCorriente = [ {
            name: "590-09000-56 Cta Cte. M/N"
        }, {
            name: "869-34256-09 Cta Cte. M/N"
        } ];
        vm.selectCuentaCorriente.selected = {
            name: "590-09000-56 Cta Cte. M/N"
        };
        vm.selectMotivoSolicitud = [ {
            name: "Motivo 1"
        }, {
            name: "Motivo 2"
        }, {
            name: "Motivo 3"
        } ];
        vm.selectRegion = [ {
            name: "Región 1"
        }, {
            name: "Región 2"
        }, {
            name: "Región 3"
        } ];
        vm.selectCiudad = [ {
            name: "Ciudad 1"
        }, {
            name: "Ciudad 2"
        }, {
            name: "Ciudad 3"
        } ];
        vm.selectComuna = [ {
            name: "Comuna 1"
        }, {
            name: "Comuna 2"
        }, {
            name: "Comuna 3"
        } ];
        vm.selectPrefix = [ {
            name: "0"
        }, {
            name: "2"
        }, {
            name: "9"
        } ];
        vm.isCollapsedChequeraOne = false;
        vm.isCollapsedChequeraTwo = false;
        vm.isCollapsedChequeraThree = false;
        vm.isCollapsedRevocarOne = false;
        vm.isCollapsedRevocarTwo = false;
        vm.isCollapsedRatificarOne = false;
        vm.isCollapsedRatificarTwo = false;
        vm.solicitantePortador = false;
        vm.muestraPublicacion = false;
        vm.muestraMensajePubli = false;
        vm.stepOneCursar = true;
        vm.stepTwoCursar = false;
        vm.stepThreeCursar = false;
        vm.stepOneRevocar = true;
        vm.stepTwoRevocar = false;
        vm.stepThreeRevocar = false;
        vm.stepOneRatificar = true;
        vm.stepTwoRatificar = false;
        vm.stepThreeRatificar = false;
        vm.isCollapsedSelectCursar = true;
        vm.isCollapsedSelectCursarPortador = true;
        vm.isCollapsedSelectRevocar = true;
        vm.isCollapsedSelectRatificar = true;
        vm.isCollapsedSelectHistorialOnpOne = false;
        vm.isCollapsedSelectHistorialOnpTwo = false;
        vm.isCollapsedSelectHistorialOnpThree = false;
    }
})();

(function() {
    angular.module("WebBancoChile.enrolamientoBasico").controller("enrolamientoBasicoCtrl", enrolamientoBasicoCtrl).controller("asideEnrolamientoBasicoCtrl", asideEnrolamientoBasicoCtrl);
    function enrolamientoBasicoCtrl($scope, $modal, $state) {
        var vm = this;
        vm.asideGestion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-gestion_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideTelefonos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-telefonos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmail = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-email_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRrss = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-rrss_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDireccionProducto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-direccion-productos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDireccionVerificacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-direccion-verificacion_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideProductosRelacionados = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-direccion-productos-relacionados_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresasRelacionadas = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/informacion-basica/asides/aside-empresas-relacionadas_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleEmpleador = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/asides/aside-detalle-empleador_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleConvenio = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/datos-evaluacion/asides/aside-detalle-convenio_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaSitioWeb = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/asides/aside-sitio-web_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaTelefonos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/asides/aside-telefonos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaEmail = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/asides/aside-email_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaRrss = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/asides/aside-rrss_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaDatos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/informacion-basica/asides/aside-datos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEmpresaResultado = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente-empresa/plantillas/asides/aside-resultado_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideCambioEjecutivo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/enrolamiento-basico/ficha-cliente/clasificacion-corporativa/asides/aside-cambiar-ejecutivo_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.toggleOpen = function() {
            console.log("hola");
            $(".bch-empresas-acordeon__nuevo").find(".panel-collapse").addClass("animate-acordeon");
        };
        vm.demoListado = [ {
            dato1: "2",
            dato2: "Monto máximo endeudamiento",
            dato3: "-",
            dato4: "0",
            dato5: "Preferencial",
            dato6: "0",
            dato7: "0"
        }, {
            dato1: "3",
            dato2: "Monto máximo endeudamiento",
            dato3: "-",
            dato4: "0",
            dato5: "Preferencial",
            dato6: "0",
            dato7: "0"
        }, {
            dato1: "4",
            dato2: "Monto máximo endeudamiento",
            dato3: "-",
            dato4: "0",
            dato5: "Preferencial",
            dato6: "0",
            dato7: "0"
        }, {
            dato1: "5",
            dato2: "Monto máximo endeudamiento",
            dato3: "-",
            dato4: "0",
            dato5: "Preferencial",
            dato6: "0",
            dato7: "0"
        }, {
            dato1: "6",
            dato2: "Monto máximo endeudamiento",
            dato3: "-",
            dato4: "0",
            dato5: "Preferencial",
            dato6: "0",
            dato7: "0"
        } ];
        $scope.models = {
            selected: null,
            lists: {
                A: [],
                B: []
            }
        };
        for (var i = 1; i <= 4; ++i) {
            $scope.models.lists.A.push({
                label: "00000" + i + " - Lorem ipsum dolor sit amet"
            });
            $scope.models.lists.B.push({
                label: "00000" + i + " - Lorem ipsum dolor sit amet"
            });
        }
        $scope.slider = {
            value: 55,
            options: {
                floor: 0,
                ceil: 10,
                showTicks: 1,
                showTicksValues: true
            }
        };
    }
    function asideEnrolamientoBasicoCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.enrolamiento").controller("enrolamientoCtrl", enrolamientoCtrl).controller("AsidesEnrolamientoCtrl", AsidesEnrolamientoCtrl);
    function enrolamientoCtrl($modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.openAlert = function() {
            swal({
                title: "",
                text: "Al continuar perderá la información ingresada",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#234E85",
                cancelButtonColor: "#d33",
                confirmButtonText: "Continuar",
                cancelButtonText: "Volver a enrolamiento"
            });
        };
        vm.selectEstadoCivil = [ {
            name: "Soltero/a"
        }, {
            name: "Casado/a"
        }, {
            name: "Divorciado/a"
        }, {
            name: "Viudo/a"
        } ];
        vm.selectNacionalidad = [ {
            name: "Chileno"
        }, {
            name: "Extranjero con residencia"
        }, {
            name: "Otra"
        } ];
        vm.selectPaisOrigen = [ {
            name: "España"
        }, {
            name: "Suiza"
        }, {
            name: "Alemania"
        } ];
        vm.selectTipoTelefono = [ {
            name: "Celular"
        }, {
            name: "Fijo"
        } ];
        vm.selectPrefijo = [ {
            name: "+56"
        }, {
            name: "+34"
        } ];
        vm.selectNumLocalidad = [ {
            name: "1"
        }, {
            name: "9"
        } ];
        vm.selectPrefijoFijo = [ {
            name: "+56"
        }, {
            name: "+34"
        } ];
        vm.selectNumLocalidadFijo = [ {
            name: "1"
        }, {
            name: "2"
        } ];
        vm.selectPrefijo.selected = {
            name: "+56"
        };
        vm.selectNumLocalidad.selected = {
            name: "9"
        };
        vm.selectPrefijoFijo.selected = {
            name: "+56"
        };
        vm.selectNumLocalidadFijo.selected = {
            name: "2"
        };
        vm.selectTipoEmail = [ {
            name: "Comercial"
        }, {
            name: "Personal"
        }, {
            name: "Empresa"
        } ];
        vm.selectTipoEmail.selected = {
            name: "Comercial"
        };
        vm.selectActividad = [ {
            name: "Actividad 01"
        }, {
            name: "Actividad 02"
        }, {
            name: "Actividad 03"
        } ];
        vm.selectCargo = [ {
            name: "Cargo 01"
        }, {
            name: "Cargo 02"
        }, {
            name: "Cargo 03"
        } ];
    }
    function AsidesEnrolamientoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.prospecto").controller("enrolamientoCtrl", enrolamientoCtrl).controller("AsidesEnrolamientoCtrl", AsidesEnrolamientoCtrl);
    function enrolamientoCtrl($modal) {
        var vm = this;
    }
    function AsidesEnrolamientoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").controller("agregarAutorizacionCtrl", agregarAutorizacionCtrl);
    function agregarAutorizacionCtrl() {
        var vm = this;
        vm.selectPool = [ {
            name: "Pool con firma"
        }, {
            name: "Pool sin firma"
        }, {
            name: "Pool por rol"
        } ];
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.eliminarResponsable = function() {
            swal({
                title: "Eliminar responsable",
                text: "Desea eliminar a este usuario del listado de responsables?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "Volver",
                closeOnConfirm: true
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").controller("editarAutorizacionCtrl", editarAutorizacionCtrl);
    function editarAutorizacionCtrl() {
        var vm = this;
        vm.selectPool = [ {
            name: "Pool con firma"
        }, {
            name: "Pool sin firma"
        }, {
            name: "Pool por rol"
        } ];
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.eliminarResponsable = function() {
            swal({
                title: "Eliminar responsable",
                text: "Desea eliminar a este usuario del listado de responsables?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "Volver",
                closeOnConfirm: true
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").controller("tipoAutorizacionCtrl", tipoAutorizacionCtrl);
    function tipoAutorizacionCtrl($scope, $modalInstance, $timeout, items) {
        $scope.items = items;
        $scope.mostrar = 1;
        $scope.cajaActiveMostrar = function(MostrarDatos) {
            $scope.mostrar = MostrarDatos;
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
    }
})();

(function() {
    angular.module("WebBancoChile.escalamiento").controller("mantenedorCtrl", mantenedorCtrl);
    function mantenedorCtrl($modal, $timeout) {
        var vm = this;
        vm.dropCols = false;
        vm.mostrarError = false;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.statusOne = {
            isopenOne: false
        };
        vm.statusTwo = {
            isopenTwo: false
        };
        vm.mostrarMensaje = function() {
            vm.mostrarError = true;
        };
        vm.volverAutorizar = function() {
            vm.mensaje = true;
        };
        vm.openAsideTipoAutorizacion = function(size, tipo) {
            console.log(tipo);
            var modalInstance = $modal.open({
                templateUrl: "components/escalamiento/mantenedor/asides/tipo-autorizacion_tpl.html",
                animation: true,
                controller: "tipoAutorizacionCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static",
                resolve: {
                    items: function() {
                        return tipo;
                    }
                }
            });
        };
        vm.openAlert = function() {
            swal({
                title: "Eliminar autorización",
                text: "Desea eliminar está autorización?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonText: "volver",
                closeOnConfirm: true
            }, function() {
                $timeout(function() {
                    vm.mostrarMensaje();
                }, 1e3);
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.escritorio").controller("escritorioCtrl", escritorioCtrl);
    function escritorioCtrl($timeout) {
        var vm = this;
        vm.empty = false;
        $timeout(function() {
            vm.empty = true;
        }, 5e3);
    }
})();

(function() {
    angular.module("WebBancoChile.fabricaProductos").controller("asidesFabricaProductosCtrl", asidesFabricaProductosCtrl);
    function asidesFabricaProductosCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.fabricaProductos").controller("fabricaProductosCtrl", fabricaProductosCtrl);
    function fabricaProductosCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.inicioVista = true;
        vm.inicioVistaDetalleProd = false;
        vm.inicioVistaEditarProd = false;
        vm.inicioVistaBundle = false;
        vm.inicioVistaDetalleBund = false;
        vm.inicioVistaEditarBund = false;
        vm.inicioVistaTituloProd = true;
        vm.inicioVistaTituloBund = false;
        vm.inicioVistaProductos = false;
        vm.inicioVistaBundle = false;
        vm.showProductos = false;
        vm.crearProducto = true;
        vm.crearBundle = true;
        vm.crearKit = false;
        vm.crearKits = false;
        vm.showEdit = false;
        vm.showEdits = true;
        vm.showFamilia = true;
        vm.stepOne = true;
        vm.stepOnes = true;
        vm.stepOneKit = true;
        vm.stepOneKits = true;
        vm.stepTwoKit = false;
        vm.stepTwoKits = false;
        vm.productosAgregados = false;
        vm.productosAgregadoss = false;
        vm.selectFamiliaProductos = [ {
            name: "Cuenta Corriente"
        }, {
            name: "Cuenta Vista"
        }, {
            name: "Familia 3"
        }, {
            name: "Familia 4"
        }, {
            name: "Familia 5"
        }, {
            name: "Familia 6"
        }, {
            name: "Familia 7"
        }, {
            name: "Familia 8"
        }, {
            name: "Familia 9"
        } ];
        vm.selectProductoBase = [ {
            name: "Cuenta Corriente"
        }, {
            name: "Cuenta Vista"
        }, {
            name: "Familia 3"
        }, {
            name: "Familia 4"
        } ];
        vm.selectProductoBases = [ {
            name: "Cuenta Corriente"
        }, {
            name: "Cuenta Vista"
        }, {
            name: "Familia 3"
        }, {
            name: "Familia 4"
        } ];
        vm.selectEstado = [ {
            name: "Aprobado"
        }, {
            name: "Borrador"
        }, {
            name: "Pendiente aprobación"
        }, {
            name: "Publicado"
        }, {
            name: "Rechazado"
        } ];
        $scope.status = {
            isopenOne: false,
            isopenTwo: false
        };
        $scope.openAsideEliminarProd = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asideEliminarProducto_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsidePublicarProd = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asidePublicarProducto_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideEliminarBund = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asideEliminarBundle_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsidePublicarBund = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asidePublicarBundle_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideAutorizar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asideAutorizar_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideRechazar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/fabrica-productos/fabrica-productos/asides/asideRechazar_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.asignarReemplazo").controller("asideAgregarAusenciaCtrl", asideAgregarAusenciaCtrl);
    var vm = this;
    function asideAgregarAusenciaCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
        $scope.comentarios = [ {
            usuario: "pjperez",
            usuarioNombre: "P J Perez",
            fecha: "MIE 22/09/2017 ・12:30 hrs",
            estado: "Desbloqueo temporal",
            comentarioEstado: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas."
        }, {
            usuario: "pmaldolor",
            usuarioNombre: "Paula Maldolor",
            fecha: "MIE 22/09/2017 ・12:30 hrs",
            estado: "Bloqueo",
            comentarioEstado: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien."
        }, {
            usuario: "yuihl",
            usuarioNombre: "Yuihl",
            fecha: "MIE 22/09/2017 ・12:30 hrs",
            estado: "Cuenta Vista - Solicita aprobación",
            comentarioEstado: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas."
        } ];
        $scope.historicoCobranza = [ {
            nombre: "Darío Murillo González",
            cargo: "Ejecutivo de riesgo",
            fecha: "MIE 22/09/2017 ・ 12:30 hrs",
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas."
        }, {
            nombre: "Darío Murillo González",
            cargo: "Ejecutivo de riesgo",
            fecha: "MIE 22/09/2017 ・ 12:30 hrs",
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas."
        }, {
            nombre: "Darío Murillo González",
            cargo: "Ejecutivo de riesgo",
            fecha: "MIE 22/09/2017 ・ 12:30 hrs",
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas. Incluso se puede poner un segundo párrafo y la caja se irá estirando según lo necesite el texto hasta un límite para evitar que un solo comentario ocupe mas."
        } ];
        $scope.periodo = [ {
            id: "123123123",
            fechaSolicitud: "18/05/2018",
            tasa1a15: "2,5",
            tasa16a30: "2,5",
            tasa30a60: "2,97",
            tasa61a90: "2,97",
            tasaMas90: "2,97",
            tipoTasa: "OP"
        }, {
            id: "123123123",
            fechaSolicitud: "18/05/2018",
            tasa1a15: "2,5",
            tasa16a30: "2,5",
            tasa30a60: "2,97",
            tasa61a90: "2,97",
            tasaMas90: "2,97",
            tipoTasa: "OP"
        }, {
            id: "123123123",
            fechaSolicitud: "18/05/2018",
            tasa1a15: "2,5",
            tasa16a30: "2,5",
            tasa30a60: "2,97",
            tasa61a90: "2,97",
            tasaMas90: "2,97",
            tipoTasa: "MC"
        }, {
            id: "123123123",
            fechaSolicitud: "18/05/2018",
            tasa1a15: "2,5",
            tasa16a30: "2,5",
            tasa30a60: "2,97",
            tasa61a90: "2,97",
            tasaMas90: "2,97",
            tipoTasa: "MC"
        }, {
            id: "123123123",
            fechaSolicitud: "18/05/2018",
            tasa1a15: "2,5",
            tasa16a30: "2,5",
            tasa30a60: "2,97",
            tasa61a90: "2,97",
            tasaMas90: "2,97",
            tipoTasa: "OT"
        } ];
        $scope.comentarioEstadoLimit = 280;
        $scope.isVerMas = true;
        _.each($scope.comentarios, function(comentario) {
            comentario["isVerMas"] = true;
            comentario["comentarioEstadoLimit"] = 280;
        });
    }
})();

(function() {
    angular.module("WebBancoChile.factoring").controller("factoringOperacionesVigenteMoraCtrl", factoringOperacionesVigenteMoraCtrl);
    function factoringOperacionesVigenteMoraCtrl() {
        var vm = this;
        vm.closeMensaje = true;
        chartResumeMora = new Highcharts.Chart({
            chart: {
                type: "column",
                renderTo: "grafico-mora",
                style: {
                    fontFamily: "robotoregular"
                }
            },
            credits: {
                enabled: false
            },
            title: {
                useHTML: true,
                text: 'Tramo de 16 a 30 días ● <a class="btn-link" href="javascript:void(0);">Ver todos los tramos</a>',
                style: {
                    color: "#333334",
                    "font-size": "14px"
                }
            },
            subtitle: {
                text: "Pulsa la columna de cada tramo para ver sus documentos",
                style: {
                    color: "#CFCFD2",
                    "font-size": "12px",
                    "font-style": "italic"
                },
                y: 27
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: [ "De 1 a 15 días", "De 16 a 30 días", "De 31 a 60 días", "De 61 a 90 días", "Más de 90 días" ],
                crosshair: false,
                labels: {
                    style: {
                        color: "#333334",
                        fontSize: "12px"
                    }
                },
                tickWidth: 2,
                lineWidth: 2
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Monto en Millones",
                    style: {
                        color: "#666668",
                        fontSize: "16px"
                    }
                },
                labels: {
                    format: "$ {value}",
                    style: {
                        color: "#666668",
                        fontSize: "12px"
                    }
                },
                gridLineColor: "#CFCFD2"
            },
            tooltip: {
                backgroundColor: "#333334",
                borderColor: "#333334",
                borderRadius: 5,
                shadow: false,
                headerFormat: "",
                pointFormat: '<div class="text-regular" style="width: 155px; text-align: center;">Ver los 1115 documentos y<br> 7 deudores del tramo</div>',
                shared: true,
                useHTML: true,
                style: {
                    color: "#FFFFFF",
                    whiteSpace: "normal",
                    fontSize: "12px"
                },
                positioner: function(labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX;
                    var tooltipY = point.plotY - 25;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                }
            },
            plotOptions: {
                column: {
                    pointPadding: .2,
                    borderWidth: 0
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        format: "{y} M$",
                        style: {
                            fontSize: "14px"
                        }
                    }
                }
            },
            series: [ {
                name: "Monto",
                data: [ 36, 240, 51.5, 0, 60 ],
                states: {
                    hover: {
                        color: "#24A7CD"
                    }
                },
                color: "#89CEE4"
            } ]
        });
    }
})();

(function() {
    angular.module("WebBancoChile.factoring").controller("factoringCtrl", factoringCtrl);
    function factoringCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        $scope.slide = "";
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        vm.status = {
            isopenDownload: false
        };
        vm.demoListado = [ {
            dato1: "123453255",
            dato2: "76.328.987-7",
            dato3: "Calzado Suarez",
            dato4: "12/09/2017",
            dato5: "$45.000.000",
            dato6: "$174.980.000",
            dato7: "21377",
            dato8: "33",
            dato9: "1,5%",
            dato10: "Financiable",
            dato11: "Cedido a BCH"
        }, {
            dato1: "123453255",
            dato2: "76.328.987-7",
            dato3: "Calzado Suarez",
            dato4: "12/09/2017",
            dato5: "$45.000.000",
            dato6: "$174.980.000",
            dato7: "21377",
            dato8: "33",
            dato9: "1,5%",
            dato10: "Financiable",
            dato11: "Cedido a BCH"
        }, {
            dato1: "123453255",
            dato2: "76.328.987-7",
            dato3: "Calzado Suarez",
            dato4: "12/09/2017",
            dato5: "$45.000.000",
            dato6: "$174.980.000",
            dato7: "21377",
            dato8: "33",
            dato9: "1,5%",
            dato10: "Financiable",
            dato11: "Cedido a BCH"
        }, {
            dato1: "123453255",
            dato2: "76.328.987-7",
            dato3: "Calzado Suarez",
            dato4: "12/09/2017",
            dato5: "$45.000.000",
            dato6: "$174.980.000",
            dato7: "21377",
            dato8: "33",
            dato9: "1,5%",
            dato10: "Financiable",
            dato11: "Cedido a BCH"
        } ];
        $scope.desgloseArray = [];
        $scope.listadoDeudores = [ {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        }, {
            rut: "09.376.474-9",
            nombre: "Cementos cordillera SPA",
            estado: "Vigente",
            clasificacionRiesgo: "A3",
            rating: "91%",
            protestos: "Si",
            montoCompradoFacturas: "$ 0",
            nroDocumentos: "0",
            deudaDirectaBCH: "$ 350.000.000",
            moraBCH: "$ 350.000.000"
        } ];
        $scope.solicitudes = [ {
            creacion: "MIE 04/05/2017 · 14:15",
            idOperacion: "PRO123456",
            solicitante: "alarraguibelp",
            segmento: "PYME",
            riesgo: "A3",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            prorroga: "1,45",
            tarea: "Autorización jefatura",
            estado: "Rechazado",
            autorizador: "hfuentesp",
            tramos: "1"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            idOperacion: "PRO123456",
            solicitante: "alarraguibelp",
            segmento: "PYME",
            riesgo: "A3",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            prorroga: "1,45",
            tarea: "Autorización jefatura",
            estado: "Rechazado",
            autorizador: "hfuentesp",
            tramos: "1"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            idOperacion: "PRO123456",
            solicitante: "alarraguibelp",
            segmento: "PYME",
            riesgo: "A3",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio",
            prorroga: "1,45",
            tarea: "Autorización jefatura",
            estado: "Rechazado",
            autorizador: "hfuentesp",
            tramos: "1"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            idOperacion: "PRO123456",
            solicitante: "alarraguibelp",
            segmento: "PYME",
            riesgo: "A3",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            prorroga: "1,45",
            tarea: "Autorización jefatura",
            estado: "Rechazado",
            autorizador: "hfuentesp",
            tramos: "1"
        } ];
        $scope.inputTasa = "1,67";
        $scope.inputDias = "0";
        $scope.inputFechaPago = "14/02/2018";
        $scope.periodo = [ {
            periodo: "1 a 15 días",
            nroTasa: "2",
            tipoTasa: "OP"
        }, {
            periodo: "16 a 30 días",
            nroTasa: "2,5",
            tipoTasa: "OP"
        }, {
            periodo: "31 a 60 días",
            nroTasa: "2,5",
            tipoTasa: "MC"
        }, {
            periodo: "61 a 90 días",
            nroTasa: "2,5",
            tipoTasa: "MC"
        }, {
            periodo: "Más de 90 días",
            nroTasa: "2,95",
            tipoTasa: "OT"
        } ];
        vm.openAsideAgregarAusencia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-agregar-ausencia_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarAusencia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-modificar-ausencia_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideInfoCliente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-info-cliente_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVistaDocumento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-vista-documento_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVistaDocumentoProrroga = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-vista-documento-prorroga_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAgregarDocumentos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-agregar-documentos_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarDocumentos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-eliminar-documentos_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVisualizafactura = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-visualizar-factura_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideConfiguracionCliente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-configuracion-cliente_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaConfirmaciones = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-confirmaciones_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaAutorizar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-autorizar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaReparar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-reparar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaEliminar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-eliminar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSimulacionCancelacionProrrogaEliminar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-simulacion-cancelacion-prorroga-eliminar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaBitacora = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-bitacora_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProrrogaComentarios = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-comentarios_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAutorizacionTasa = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-autorizacion-tasa_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideHistoricoTasas = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-historico-tasas_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideHistoricoOperaciones = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/factoring/factoring/asides/aside-prorroga-historico-operaciones_tpl.html",
                animation: true,
                controller: "asideAgregarAusenciaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.inversionEmpresa").controller("inversionEmpresaCtrl", inversionEmpresaCtrl).controller("AsidesinversionEmpresaCtrl", AsidesinversionEmpresaCtrl);
    function inversionEmpresaCtrl($scope, $window, $rootScope, $modal, $uibModal, $filter) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.showAll = true;
    }
    function AsidesinversionEmpresaCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.fichaInversiones").controller("fichaInversionesCtrl", fichaInversionesCtrl).controller("AsidesfichaInversionesCtrl", AsidesfichaInversionesCtrl);
    function fichaInversionesCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        $scope.stepOne = true;
        $scope.stepTwo = false;
        $scope.stepThree = false;
        $scope.stepFour = false;
        $scope.stepFive = false;
        vm.selectPrefijo = [ {
            name: "+56"
        }, {
            name: "+34"
        } ];
        vm.selectNumLocalidad = [ {
            name: "1"
        }, {
            name: "9"
        } ];
        vm.selectPrefijoFijo = [ {
            name: "+56"
        }, {
            name: "+34"
        } ];
        vm.selectNumLocalidadFijo = [ {
            name: "1"
        }, {
            name: "2"
        } ];
        $scope.listaSteps = [ {
            title: "Datos cliente"
        }, {
            title: "Datos cónyuge"
        }, {
            title: "Preguntas Adicionales"
        }, {
            title: "Declaración"
        } ];
        vm.openAsideFicha = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ficha-inversiones/asides/aside-ficha-inversiones-01_tpl.html",
                animation: true,
                controller: "AsidesfichaInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.setearSteps = function() {
            setTimeout(function() {
                var vm = this;
                var step = $(".steps-horizontales-numerados__step:first-child");
                step.addClass("steps-horizontales-numerados__step--active");
            }, 200);
        };
        vm.stepOne = function() {
            var stepOne = $(".steps-horizontales-numerados__step:nth-child(1)");
            var stepTwo = $(".steps-horizontales-numerados__step:nth-child(2)");
            var stepThree = $(".steps-horizontales-numerados__step:nth-child(3)");
            var stepFour = $(".steps-horizontales-numerados__step:nth-child(4)");
            var stepFive = $(".steps-horizontales-numerados__step:nth-child(5)");
            stepOne.addClass("steps-horizontales-numerados__step--active");
            stepOne.removeClass("steps-horizontales-numerados__step--done");
            stepTwo.removeClass("steps-horizontales-numerados__step--active");
            stepTwo.removeClass("steps-horizontales-numerados__step--done");
            stepThree.removeClass("steps-horizontales-numerados__step--active");
            stepThree.removeClass("steps-horizontales-numerados__step--done");
            stepFour.removeClass("steps-horizontales-numerados__step--active");
            stepFour.removeClass("steps-horizontales-numerados__step--done");
            stepFive.removeClass("steps-horizontales-numerados__step--active");
            stepFive.removeClass("steps-horizontales-numerados__step--done");
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = true;
            $scope.stepTwo = false;
            $scope.stepThree = false;
            $scope.stepFour = false;
            $scope.stepFive = false;
            $scope.stepSix = false;
        };
        vm.stepTwo = function() {
            var stepOne = $(".steps-horizontales-numerados__step:nth-child(1)");
            var stepTwo = $(".steps-horizontales-numerados__step:nth-child(2)");
            var stepThree = $(".steps-horizontales-numerados__step:nth-child(3)");
            var stepFour = $(".steps-horizontales-numerados__step:nth-child(4)");
            var stepFive = $(".steps-horizontales-numerados__step:nth-child(5)");
            stepOne.removeClass("steps-horizontales-numerados__step--active");
            stepOne.addClass("steps-horizontales-numerados__step--done");
            stepTwo.addClass("steps-horizontales-numerados__step--active");
            stepTwo.removeClass("steps-horizontales-numerados__step--done");
            stepThree.removeClass("steps-horizontales-numerados__step--active");
            stepThree.removeClass("steps-horizontales-numerados__step--done");
            stepFour.removeClass("steps-horizontales-numerados__step--active");
            stepFour.removeClass("steps-horizontales-numerados__step--done");
            stepFive.removeClass("steps-horizontales-numerados__step--active");
            stepFive.removeClass("steps-horizontales-numerados__step--done");
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = false;
            $scope.stepTwo = true;
            $scope.stepThree = false;
            $scope.stepFour = false;
            $scope.stepFive = false;
            $scope.stepSix = false;
        };
        vm.stepThree = function() {
            var stepOne = $(".steps-horizontales-numerados__step:nth-child(1)");
            var stepTwo = $(".steps-horizontales-numerados__step:nth-child(2)");
            var stepThree = $(".steps-horizontales-numerados__step:nth-child(3)");
            var stepFour = $(".steps-horizontales-numerados__step:nth-child(4)");
            var stepFive = $(".steps-horizontales-numerados__step:nth-child(5)");
            var allSteps = $(".steps-horizontales-numerados");
            allSteps.show();
            stepOne.removeClass("steps-horizontales-numerados__step--active");
            stepOne.addClass("steps-horizontales-numerados__step--done");
            stepTwo.removeClass("steps-horizontales-numerados__step--active");
            stepTwo.addClass("steps-horizontales-numerados__step--done");
            stepThree.addClass("steps-horizontales-numerados__step--active");
            stepThree.removeClass("steps-horizontales-numerados__step--done");
            stepFour.removeClass("steps-horizontales-numerados__step--active");
            stepFour.removeClass("steps-horizontales-numerados__step--done");
            stepFive.removeClass("steps-horizontales-numerados__step--active");
            stepFive.removeClass("steps-horizontales-numerados__step--done");
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = false;
            $scope.stepTwo = false;
            $scope.stepThree = true;
            $scope.stepFour = false;
            $scope.stepFive = false;
            $scope.stepSix = false;
        };
        vm.stepFour = function() {
            var stepOne = $(".steps-horizontales-numerados__step:nth-child(1)");
            var stepTwo = $(".steps-horizontales-numerados__step:nth-child(2)");
            var stepThree = $(".steps-horizontales-numerados__step:nth-child(3)");
            var stepFour = $(".steps-horizontales-numerados__step:nth-child(4)");
            var stepFive = $(".steps-horizontales-numerados__step:nth-child(5)");
            var allSteps = $(".steps-horizontales-numerados");
            allSteps.show();
            stepOne.removeClass("steps-horizontales-numerados__step--active");
            stepOne.addClass("steps-horizontales-numerados__step--done");
            stepTwo.removeClass("steps-horizontales-numerados__step--active");
            stepTwo.addClass("steps-horizontales-numerados__step--done");
            stepThree.removeClass("steps-horizontales-numerados__step--active");
            stepThree.addClass("steps-horizontales-numerados__step--done");
            stepFour.addClass("steps-horizontales-numerados__step--active");
            stepFour.removeClass("steps-horizontales-numerados__step--done");
            stepFive.removeClass("steps-horizontales-numerados__step--active");
            stepFive.removeClass("steps-horizontales-numerados__step--done");
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = false;
            $scope.stepTwo = false;
            $scope.stepThree = false;
            $scope.stepFour = true;
            $scope.stepFive = false;
            $scope.stepSix = false;
        };
        vm.stepFive = function() {
            var allSteps = $(".steps-horizontales-numerados");
            allSteps.hide();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = false;
            $scope.stepTwo = false;
            $scope.stepThree = false;
            $scope.stepFour = false;
            $scope.stepFive = true;
            $scope.stepSix = false;
        };
        vm.stepSix = function() {
            var allSteps = $(".steps-horizontales-numerados");
            allSteps.hide();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $scope.stepOne = false;
            $scope.stepTwo = false;
            $scope.stepThree = false;
            $scope.stepFour = false;
            $scope.stepFive = false;
            $scope.stepSix = true;
        };
    }
    function AsidesfichaInversionesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.antecedentesPersonales = [ {
            dato: "RUT / Pasaporte",
            dato2: "Profesión"
        }, {
            dato: "Nombres",
            dato2: "Nombre o Razón Social del empleador"
        }, {
            dato: "Apellido paterno"
        }, {
            dato: "Apellido materno"
        }, {
            dato: "Fecha de nacimiento"
        }, {
            dato: "Sexo"
        }, {
            dato: "Nacionalidad"
        }, {
            dato: "Estado civil"
        }, {
            dato: "Régimen patrimonial matrimonial"
        }, {
            dato: "Dirección particular"
        }, {
            dato: "Teléfono celular particular"
        }, {
            dato: "Email particular"
        }, {
            dato: "Nivel de estudios"
        } ];
        $scope.antecedentesLaborales = [ {
            dato: "Profesión"
        }, {
            dato: "Nombre o Razón Social del empleador"
        }, {
            dato: "RUT del empleador"
        }, {
            dato: "Dirección de la empresa"
        }, {
            dato: "Giro de la empresa"
        }, {
            dato: "Teléfono comercial"
        }, {
            dato: "Cargo"
        }, {
            dato: "Antigüedad en la empresa"
        } ];
        $scope.antecedentesFinancieros = [ {
            dato: "Renta mensual líquida"
        } ];
        $scope.relacionAdministracion = [ {
            dato: "Relación del Cliente con la Corporación"
        } ];
        $scope.conyuge = [ {
            dato: "RUT cónyuge"
        }, {
            dato: "Nombres cónyuge"
        }, {
            dato: "Apellido paterno cónyuge"
        }, {
            dato: "Apellido materno cónyuge"
        }, {
            dato: "Teléfono móvil particular cónyuge"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.garantias").controller("garantiasCtrl", garantiasCtrl);
    function garantiasCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        vm.demoListado = [ {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        }, {
            dato1: "779025",
            dato2: "Garantía Hipotecaria",
            dato3: "Departamento",
            dato4: "M$ 74.473",
            dato5: "M$ 60.120",
            dato6: "26/01/2018",
            dato7: "Colectivo",
            dato8: "Específica"
        } ];
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.herramientas").controller("asidePortalesInformativosCtrl", asidePortalesInformativosCtrl);
    var vm = this;
    function asidePortalesInformativosCtrl($scope, $modalInstance) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.herramientas").controller("herramientasCtrl", herramientasCtrl);
    function herramientasCtrl($uibModal, $scope) {
        var vm = this;
        vm.asidePortalesInformativos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/herramientas/asides/aside-portales-informativos_tpl.html",
                animation: true,
                controller: "asidePortalesInformativosCtrl",
                size: size,
                windowClass: "modal-detalle modal-portales-informativos",
                backdrop: "static"
            });
        };
        $scope.animateAccordion = function() {
            setTimeout(function() {
                $(".bch-empresas-acordeon__nuevo").find(".panel-collapse").addClass("animate-acordeon");
            }, 1e3);
        };
        $scope.toggleOpen = function() {
            console.log("hola");
            $(".bch-empresas-acordeon__nuevo").find(".panel-collapse").addClass("animate-acordeon");
        };
        vm.groups = [ {
            title: "Dynamic Title 1",
            content: "Dynamic content 1"
        }, {
            title: "Dynamic Title 2",
            content: "Dynamic content 2"
        }, {
            title: "Dynamic Title 3",
            content: "Dynamic content 3"
        }, {
            title: "Dynamic Title 4",
            content: "Dynamic content 4"
        }, {
            title: "Dynamic Title 5",
            content: "Dynamic content 5"
        }, {
            title: "Dynamic Title 6",
            content: "Dynamic content 6"
        } ];
        vm.datos = [ {
            dato1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, {
            dato1: "Proin sed enim at magna dictum faucibus."
        }, {
            dato1: "Duis viverra leo sit amet ipsum aliquam, eget gravida lorem elementum."
        }, {
            dato1: "Fusce venenatis odio quis lacinia malesuada."
        }, {
            dato1: "Nunc convallis tellus vel finibus aliquam."
        }, {
            dato1: "Nunc at sem ut neque dictum posuere."
        }, {
            dato1: "Nulla vel ante vulputate, egestas magna in, porttitor dolor."
        }, {
            dato1: "Suspendisse varius mi ut mauris fermentum, vel ultricies leo congue."
        }, {
            dato1: "Duis iaculis erat at sollicitudin aliquam."
        }, {
            dato1: "Mauris feugiat nibh vel mauris porttitor, sed varius felis placerat."
        }, {
            dato1: "Sed ut metus nec nisi euismod placerat."
        }, {
            dato1: "Curabitur nec ipsum nec neque finibus pellentesque eget nec lorem.  "
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.home").controller("homeCtrl", homeCtrl);
    function homeCtrl($uibModal) {
        var vm = this;
        vm.openFullScreen = function() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: "components/home/partials-full/modal-full.tpl.html",
                controller: "ModalFullCtrl",
                size: false,
                windowTopClass: "Full-modal"
            });
        };
        vm.home = [ {
            href: "#/chat",
            nombre: "Chat"
        }, {
            href: "#/cheques/cheques",
            nombre: "Cheques"
        }, {
            href: "#/credito/simulacion-credito",
            nombre: "Crédito"
        }, {
            href: "#/prepago/innominada",
            nombre: "Inominada"
        }, {
            href: "#/ahorro/refactor",
            nombre: "Refactor"
        }, {
            href: "#/rbac/mantenedores",
            nombre: "Rbac"
        }, {
            href: "#/cuenta/solicitudes-ingresadas",
            nombre: "Solicitudes ingresadas"
        }, {
            href: "#/mantenedores/mantenedor-general",
            nombre: "Mantenedores General"
        }, {
            href: "#/mantenedores/mantenedor-tipo-operacion",
            nombre: "Mantenedores Tipo Op."
        }, {
            href: "#/rbac/asignacionOficina",
            nombre: "Asignacion Oficina"
        }, {
            href: "#/mantenedores/mantenedor-directores",
            nombre: "Mantenedor Directores"
        }, {
            href: "#/tarjetas/pac",
            nombre: "PAC"
        }, {
            href: "#/herramientas",
            nombre: "Herramientas y Consultas"
        }, {
            href: "#/icp-transferir-archivos",
            nombre: "ICP"
        }, {
            href: "#/rbac/reemplazos",
            nombre: "Reemplazos"
        }, {
            href: "#/v360/v360",
            nombre: "V360"
        }, {
            href: "#/cuenta/vista",
            nombre: "Cuenta Vista"
        }, {
            href: "#/regularizacion/carga",
            nombre: "regularizacion/carga"
        }, {
            href: "#/seguros/seguros-refactor",
            nombre: "Refactor Seguros"
        }, {
            href: "#/mantenedores/mantenedor-funcionalidades",
            nombre: "Mantenedores Funcion."
        }, {
            href: "#/ficha-inversiones/ficha-inversiones",
            nombre: "Ficha Inversiones"
        }, {
            href: "#/vista-campanias/vista-experiencia",
            nombre: "Vista Requerimientos"
        }, {
            href: "#/factoring",
            nombre: "Factoring"
        }, {
            href: "#/v360/busqueda_transversal",
            nombre: "Busqueda Transversal"
        }, {
            href: "#/control-limites",
            nombre: "Control de Límites"
        }, {
            href: "#/aprobaciones-grupales",
            nombre: "Aprobaciones Grupales"
        }, {
            href: "#/journal/bandeja",
            nombre: "Bandeja Supervisor"
        }, {
            href: "#/journal/journal-ejecutivo",
            nombre: "Journal Ejecutivo"
        }, {
            href: "#/cheques/chequesV2",
            nombre: "Cheques V2 / TD"
        }, {
            href: "#/mantenedores/mantenedor-usuarios",
            nombre: "Mantenedores Usuarios"
        }, {
            href: "#/notificaciones/solicitudes",
            nombre: "Solicitudes"
        }, {
            href: "#/enrolamiento/enrolamiento",
            nombre: "Enrolamiento"
        }, {
            href: "#/cuenta/autorizacion-de-cuentas",
            nombre: "Autorización de Cuentas"
        }, {
            href: "#/tarjetas/tarjetas",
            nombre: "Tarjetas"
        }, {
            href: "#/v360/creditos",
            nombre: "Créditos de Consumo"
        }, {
            href: "#/comportamiento/comportamiento",
            nombre: "Sinacofi / Comportamiento"
        }, {
            href: "#/cheques/informes",
            nombre: "Informe Diario Chequeras"
        }, {
            href: "#/seguros/seguros-nuevo",
            nombre: "Seguros Nuevo"
        }, {
            href: "#/vista-campanias/vista-experiencia",
            nombre: "Experiencia"
        }, {
            href: "#/taller-productos",
            nombre: "Gestion Productos"
        }, {
            href: "#/notificaciones-v2/notificaciones-v2",
            nombre: "Notificaciones V. 2"
        }, {
            href: "#/gestion-bundle",
            nombre: "Gestion bundle"
        }, {
            href: "#/creacion-bundle",
            nombre: "creacion bundle"
        }, {
            href: "#/escritorio",
            nombre: "Escritorio"
        }, {
            href: "#/creacion-de-productos",
            nombre: "creacion productos"
        }, {
            href: "#/asides-gestiones/asides-gestiones",
            nombre: "Asides Gestiones"
        }, {
            href: "#/os-ticket/os-ticket",
            nombre: "Requerimientos OS - Ticket"
        }, {
            href: "#/vista-campanias/vista-campanias",
            nombre: "Reqtos. Vista Campañas"
        }, {
            href: "#/administrador-grupos",
            nombre: "Administrador de Grupos"
        }, {
            href: "#/simulacion-credito/simulacion-credito",
            nombre: "Simulación Créditos"
        }, {
            href: "#/simulacion-credito/simulacion-credito-renegociado",
            nombre: "Simulación Créditos - Renegociado"
        }, {
            href: "#/simulacion-credito/simulacion-credito-rebaja-tasa",
            nombre: "Simulación Créditos - Rebaja Tasa"
        }, {
            href: "#/tarjetas/avance-tarjeta",
            nombre: "Avance TC"
        }, {
            href: "#/v360/prepago",
            nombre: "Prepago Crédito"
        }, {
            href: "#/contratar-producto",
            nombre: "Venta Persona"
        }, {
            href: "#/mantenedores/mantenedor-visualizacion-datos-sensibles",
            nombre: "M Vis Datos Sensibles"
        }, {
            href: "#/notificaciones/notificaciones",
            nombre: "Notificaciones"
        }, {
            href: "#/asignar-reemplazo",
            nombre: "Asignar reemplazo"
        }, {
            href: "#/seguros/seguros-salud",
            nombre: "Seguro Salud"
        }, {
            href: "#/seguros/seguros-robo",
            nombre: "Seguro Robo"
        }, {
            href: "#/seguros/seguros-hogar",
            nombre: "Seguro Hogar"
        }, {
            href: "#/seguros/seguros-estudios",
            nombre: "Seguro Estudios"
        }, {
            href: "#/seguros/seguros-auto",
            nombre: "Seguro Full auto"
        }, {
            href: "#/pricing",
            nombre: "Pricing"
        }, {
            href: "#/enrolamiento/prospecto-previo",
            nombre: "Enrolamiento prospecto"
        }, {
            href: "#/previsado",
            nombre: "Previsado"
        }, {
            href: "#/compra-cartera",
            nombre: "Compra Cartera"
        }, {
            href: "#/cartera-clientes",
            nombre: "Cartera Clientes"
        }, {
            href: "#/mod-ficha-inversiones",
            nombre: "Mod Ficha Inversiones"
        }, {
            href: "#/test-front",
            nombre: "Test Front"
        }, {
            href: "#/enrolamiento-basico",
            nombre: "Enrolamiento Basico"
        }, {
            href: "#/mantenedor-cartera",
            nombre: "Mantenedor de Carteras"
        }, {
            href: "#/caracteristicas-producto",
            nombre: "Características de Producto"
        }, {
            href: "#/ficha-inversion-empresa/ficha-inversion",
            nombre: "Ficha Inversion Empresa"
        }, {
            href: "#/seguros/seguros-contratados",
            nombre: "Seguros Contratados"
        }, {
            href: "#/dolares-premios",
            nombre: "Dólares Premio"
        }, {
            href: "#/garantias",
            nombre: "Garantías"
        }, {
            href: "#/mantenedores/mantenedor-informacion",
            nombre: "Matenedor información"
        }, {
            href: "#/venta-empresa",
            nombre: "Venta Empresa"
        }, {
            href: "#/2020/castigo-formulario",
            nombre: "Formulario Castigo"
        }, {
            href: "#/2020/retencion-formulario/retencion-antecedentes",
            nombre: "Formulario Retención"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.home").controller("ModalFullCtrl", ModalFullCtrl);
    function ModalFullCtrl($scope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close("close");
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };
        $scope.mostrarView = false;
        $scope.repararView = function() {
            $scope.mostrarView = true;
        };
        $scope.VolverView = function() {
            $scope.mostrarView = false;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.icpMapeoReportes").controller("icpMapeoReporteCtrl", icpMapeoReporteCtrl);
    function icpMapeoReporteCtrl() {
        var vm = this;
        vm.demoListado = [ {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 4",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 2",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 3",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 4",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 2",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.icpTransferirArchivos").controller("icpTransferirArchivosCtrl", icpTransferirArchivosCtrl);
    function icpTransferirArchivosCtrl() {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.inversiones").controller("AsidesInversionesCtrl", AsidesInversionesCtrl);
    var vm = this;
    function AsidesInversionesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        vm.mensajeInitial = false;
        vm.stepPagar = false;
        vm.continuarFirst = false;
        vm.continuarSecond = false;
        vm.continuarThird = false;
        vm.formaPago = false;
        vm.modoAtencion = false;
        vm.agregaCuenta = false;
        vm.selectCuentaVigente = [ {
            name: "00-123-123456-78"
        }, {
            name: "12-345-678912-00"
        } ];
        vm.selectFormaContacto = [ {
            name: "00-123-123456-78"
        }, {
            name: "12-345-678912-00"
        } ];
        vm.selectEmailEnvio = [ {
            name: "00-123-123456-78"
        }, {
            name: "12-345-678912-00"
        } ];
        vm.continuarSecondBloqueoExtravio = false;
        vm.continuarThirdBloqueoExtravio = false;
        vm.utilizaRepresentante = true;
        vm.selectDireccionBeneficiario = [ {
            name: "Dirección 1"
        }, {
            name: "Dirección 2"
        } ];
        vm.selectCambiarCondicion = [ {
            name: "Condición 1"
        }, {
            name: "Condición 2"
        } ];
        vm.continuarSecondCambiarCondicionAbono = false;
        vm.continuarThirdCambiarCondicionAbono = false;
        vm.continuarSecondReimprimir = false;
        vm.mensajeInitialPagoAnticipado = false;
        vm.stepPagarPagoAnticipado = false;
        vm.solicitarPagoAnticipado = false;
        vm.continuarSecondSolicitarPagoAnticipado = false;
        vm.continuarThirdSolicitarPagoAnticipado = false;
        vm.selectDireccionPagoAnticipado = [ {
            name: "Opción 1"
        }, {
            name: "Opción 2"
        } ];
        vm.selectTasaBase = [ {
            name: "Opción 1"
        }, {
            name: "Opción 2"
        } ];
        vm.continuarSecondMantencionTasa = false;
        vm.continuarThirdMantencionTasa = false;
        vm.continuarFirstSolicitarDesbloqueo = false;
        vm.continuarFirstBloqueoJudicial = false;
        vm.selectCuentaCorriente = [ {
            name: "Opción 1"
        }, {
            name: "Opción 2"
        } ];
        vm.continuarFirstLiquidacion = false;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $(document).mouseup(function(e) {
            var container = $(".modal-content");
            var parentContainer = $(".modal");
            var shadowModal = $(".modal-backdrop");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                parentContainer.remove();
                shadowModal.remove();
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.inversiones").controller("inversionesCtrl", inversionesCtrl);
    function inversionesCtrl($uibModal) {
        var vm = this;
        vm.viewAllDepositos = true;
        vm.viewOneDeposito = false;
        vm.statusOne = {
            isopenOne: false
        };
        vm.openAsideCancelacionAbono = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/cancelacionAbono_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMantencionTasa = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/mantencionTasa_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBloqueoExtravio = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/bloqueoExtravio_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSolicitarDesbloqueo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/solicitarDesbloqueo_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCambiarCondicionAbono = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/cambiarCondicionAbono_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSolicitarPagoAnticipado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/solicitarPagoAnticipado_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideLiquidacionIntereses = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/liquidacionIntereses_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBloqueoOrdenJudicial = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/bloqueoOrdenJudicial_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideImprimirValorado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/imprimirValorado_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSolicitarReimprimirValorado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/inversiones/asides/solicitarReimprimirValorado_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.inversiones").controller("AsidesInversionesCtrl", AsidesInversionesCtrl);
    var vm = this;
    function AsidesInversionesCtrl($scope, $uibModalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $uibModalInstance.close($scope.item);
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.venta").controller("ventaCtrl", ventaCtrl);
    function ventaCtrl($uibModal, $scope) {
        var vm = this;
        vm.isClick = false;
        vm.openDatosDePago = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/inversiones/venta/asides/asideDatosDePago_tpl.html",
                animation: true,
                controller: "AsidesInversionesCtrl",
                size: "lg",
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.status = {
            isopen: false
        };
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
        vm.voltearSimulacion = false;
        vm.selectedCard = false;
        vm.selectedCardTwo = false;
        vm.selectedCardThree = false;
        vm.accionSimula = true;
        vm.simularFuncion = function() {
            vm.voltearSimulacion = true;
            angular.element(".block-cards .back").addClass("activo-card");
        };
        vm.selectedCard = function($event) {
            var elemActivo = angular.element($event.target);
            var resultadoSimula = angular.element(".back");
            resultadoSimula.removeClass("activo-card");
            elemActivo.addClass("activo-card");
        };
        vm.editarFuncion = function() {
            vm.voltearSimulacion = false;
        };
        vm.aceptarSimulacion = function() {
            vm.accionSimula = false;
        };
        vm.selectTypeInversion = [ {
            name: "DAP"
        }, {
            name: "DPRA"
        } ];
        vm.selectMoneda = [ {
            name: "CLP"
        }, {
            name: "USD"
        }, {
            name: "UF"
        } ];
        vm.isCollapsedThree = false;
    }
})();

(function() {
    angular.module("WebBancoChile.venta").controller("ingresoCtrl", ingresoCtrl);
    function ingresoCtrl($uibModal) {
        var vm = this;
        vm.isClick = false;
    }
})();

(function() {
    angular.module("WebBancoChile.journalBandeja").controller("journalBandejaCtrl", journalBandejaCtrl).controller("ModalCtrl", ModalCtrl);
    function journalBandejaCtrl($modal) {
        var vm = this;
        vm.isCollapsed = false;
        vm.isCollapsedOne = false;
        vm.isCollapsedTwo = false;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.autorizado = false;
        vm.openAsideRechazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/journal/bandeja/asides/asideNotificacionesRechazo_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/journal/bandeja/asides/asideNotificacionesReparar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBitacora = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/journal/bandeja/asides/asideNotificacionesBitacora_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.journalEjecutivo").controller("journalEjecutivoCtrl", journalEjecutivoCtrl).controller("ModalCtrl", ModalCtrl);
    function journalEjecutivoCtrl($modal) {
        var vm = this;
        vm.isClick = false;
        vm.isCollapsedThree = false;
        vm.isCollapsedFour = false;
        vm.isCollapsedFive = false;
        vm.isCollapsedSix = false;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.leerlink").controller("leerlinkCtrl", leerlinkCtrl);
    function leerlinkCtrl($http) {
        var vm = this;
        $http.get("assets/dummy-files/datos-link-escritorio.json").then(function(res) {
            vm.todos = res.data;
            console.log(vm.todos);
        });
    }
})();

(function() {
    angular.module("WebBancoChile.login").controller("loginCtrl", loginCtrl);
    function loginCtrl($uibModal) {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("asideMacWorkflowCtrl", asideMacWorkflowCtrl);
    var vm = this;
    function asideMacWorkflowCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
        vm.demoListadoTres = [ {
            dato1: "56.571.854-8",
            dato2: "Empresa 1"
        }, {
            dato1: "36.884.554-k",
            dato2: "Empresa 2"
        }, {
            dato1: "16.374.254-1",
            dato2: "Empresa 3"
        }, {
            dato1: "6.824.614-2",
            dato2: "Empresa 4"
        } ];
        $scope.alertClose = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Aprobar?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.cancel();
                }
            });
        };
        $scope.opcion = {
            causa: "porSi"
        };
        vm.aprobadorComitente = false;
        vm.clickAprobar = false;
        $scope.listaComitentes = [ {
            name: "Maritza Muller"
        }, {
            name: "Rolando Arias"
        }, {
            name: "Paola Alam"
        }, {
            name: "Marcela Castro"
        }, {
            name: "María Teresa Mena"
        } ];
        vm.archivoAdjuntado = false;
        vm.adjuntarArchivoCom = function() {
            vm.archivoAdjuntado = true;
        };
        vm.eliminarArchivoAdjunto = function() {
            vm.archivoAdjuntado = false;
        };
        vm.aprobacion = function() {
            vm.clickAprobar = true;
        };
        vm.listaComitentes = {
            opciones: [ "opcion1", "opcion2", "opcion3", "opcion4", "opcion5" ],
            selecciones: [],
            placeholder: "Seleccione...",
            placeholderDisabled: "Bloqueado por condicion",
            placeholderVacio: "Sin comitentes",
            msjSeleccionados: "Comitentes seleccionados:",
            buscador: false,
            botones: false,
            textoAceptar: "Seleccionar",
            disabled: false,
            selectAll: true,
            invalid: false
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("macWorkflowCtrl", macWorkflowCtrl);
    function macWorkflowCtrl($scope, $window, $rootScope, $modal, $uibModal, $timeout) {
        var vm = this;
        vm.openAsideMacWorkflowAprobar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-aprobar_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideListadoProblemas = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-listado-errores_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowRechazar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-rechazar_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowSolicitarInformacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-solicitar-informacion_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowSolicitarAprobador = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-solicitar-aprobador_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowDevolver = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-devolver_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowOmitir = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-omitir_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowAdjuntos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-adjuntos_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowEliminar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-eliminar_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowResponderComentarios = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-responder-comentario_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowReasignarComitente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-reasignar-comitente_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMacWorkflowAgregarComitenteAdicional = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC-workflow/asides/aside-mac-workflow-agregar-comitente-adicional_tpl.html",
                animation: true,
                controller: "asideMacWorkflowCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.demoListado = [ {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "0,0",
            dato4: "A5 ",
            dato5: "NO",
            dato6: "M $543",
            dato7: "M $0",
            dato8: "M $0",
            dato9: "M $1.486",
            dato10: "M $1.486 ",
            dato11: "37%"
        } ];
        vm.demoDnd = [ {
            label: "Item A1",
            estado: "omitido"
        }, {
            label: "Item A2",
            estado: "aprobado"
        }, {
            label: "Item A3",
            estado: "rechazado"
        }, {
            label: "Item A4",
            estado: ""
        }, {
            label: "Item A5",
            estado: ""
        }, {
            label: "Item A6",
            estado: ""
        }, {
            label: "Item A7",
            estado: ""
        }, {
            label: "Item A8",
            estado: ""
        }, {
            label: "Item A9",
            estado: ""
        }, {
            label: "Item A10",
            estado: ""
        }, {
            label: "Item A11",
            estado: ""
        }, {
            label: "Item A12",
            estado: ""
        }, {
            label: "Item A13",
            estado: ""
        }, {
            label: "Item A14",
            estado: ""
        }, {
            label: "Item A15",
            estado: ""
        }, {
            label: "Item A16",
            estado: ""
        }, {
            label: "Item A17",
            estado: ""
        } ];
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("asideMacCtrl", asideMacCtrl);
    var vm = this;
    function asideMacCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
        vm.demoListadoTres = [ {
            dato1: "56.571.854-8",
            dato2: "Empresa 1"
        }, {
            dato1: "36.884.554-k",
            dato2: "Empresa 2"
        }, {
            dato1: "16.374.254-1",
            dato2: "Empresa 3"
        }, {
            dato1: "6.824.614-2",
            dato2: "Empresa 4"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("MacCtrl", MacCtrl);
    function MacCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        $scope.slide = "";
        vm.descripcionLimit = 20;
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        vm.status = {
            isopenDownload: false
        };
        vm.objetoMac = {
            enProceso: [ {
                tipo: "MAC",
                descripcion: "Renovación de líneas",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "En comité",
                estado: "En proceso"
            }, {
                tipo: "MAC",
                descripcion: "Con garantia estatal de mercado",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "En proceso"
            }, {
                tipo: "MAC",
                descripcion: "Sin garantía",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "Devuelto"
            }, {
                tipo: "Com",
                descripcion: "Boletas de garantía",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "Rechazada"
            }, {
                tipo: "Esp",
                descripcion: "Waiver de Convenant",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "En proceso"
            }, {
                tipo: "Prod",
                descripcion: "Leasing Camiones",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Validación",
                estado: "En proceso"
            } ]
        };
        vm.isActive = true;
        vm.openAsideDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC/asides/aside-aprobaciones-detalle-limite_tpl.html",
                animation: true,
                controller: "asideMacCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAgregarAprobacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/MAC/asides/aside-agregar-aprobacion_tpl.html",
                animation: true,
                controller: "asideMacCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("aprobacionesGrupalesCtrl", aprobacionesGrupalesCtrl).filter("propsFilter", propsFilter);
    function propsFilter() {
        return function(items, props) {
            var out = [];
            if (angular.isArray(items)) {
                var keys = Object.keys(props);
                items.forEach(function(item) {
                    var itemMatches = false;
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }
                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                out = items;
            }
            return out;
        };
    }
    function aprobacionesGrupalesCtrl($scope, $window, $rootScope, $modal, $uibModal, $http, $timeout, $interval) {
        var vm = this;
        vm.descripcionLimit = 18;
        vm.viewAprobador = false;
        vm.openAsideAgregarEmpresa = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-agregar-empresa_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesvincularEmpresa = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-desvincular_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBuscarGrupoEmpresa = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-buscar-grupo-empresa_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarMAC = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-eliminar-MAC_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideMotivoNoRatingPyme = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-no-rating_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarNombre = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-nombre_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarRut = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-rut_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarDescripcion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-descripcion_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarEjecutivo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-ejecutivo_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-aprobaciones-detalle-limite_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleSubLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-aprobaciones-detalle-sublimite_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarFecha = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-fecha_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarTotalAprobado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-modificar-totalaprobado_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-eliminar-limite_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarSubLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-eliminar-sublimite_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleMitigantes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-detalle-mitigantes_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleGarantia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-detalle-garantia_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarGarantia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-eliminar-garantia_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarMitigantes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-eliminar-mitigantes_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAtributosNormativos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-atributos-normativos_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAdjuntos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-adjuntos_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAdjuntosEditar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-adjuntos-editar_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAgregarComitente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-agregar-comitente_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideOrdenarComitente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-ordenar-comitente_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideOrdenarLimites = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-ordenar-limites_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideListadoErrores = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-listado-errores_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideListadoErroresMacIndividual = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-listado-errores-MAC-individual_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideOrdenarClientes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-ordenar-clientes_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.demoDnd = [ {
            nombre: "Alejandro Marcelo González Contreras",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Claudio Arias",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Marcela Castro",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Maritza Muller",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Mauricio Buschmanm",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        } ];
        vm.demoListado = [ {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 4",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 2",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 3",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "45.362.782-5",
            dato2: "Empresa 4",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 2",
            dato3: "julloa",
            dato4: "30/10/2017 ",
            dato5: "M$ 1.486",
            dato6: "M$ 543",
            dato7: "M$ 0",
            dato8: "M$ 0",
            dato9: "15%",
            dato10: "30/10/2017 "
        } ];
        vm.demoListadoDos = [ {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        }, {
            dato1: "56.874.654-8",
            dato2: "Empresa 1",
            dato3: "5,5",
            dato4: "A5 ",
            dato5: "No",
            dato6: "M$ 7543",
            dato7: "M$ 0",
            dato8: "M$ 543",
            dato9: "M$ 0",
            dato10: "M$ 0",
            dato11: "15% "
        } ];
        vm.demoListadoTres = [ {
            dato1: "56.571.854-8",
            dato2: "Cliente 1"
        }, {
            dato1: "36.884.554-k",
            dato2: "Cliente 2"
        }, {
            dato1: "16.374.254-1",
            dato2: "Cliente 3"
        }, {
            dato1: "6.824.614-2",
            dato2: "Cliente 4"
        } ];
        vm.objetoMac = {
            enProceso: [ {
                tipo: "MAC",
                descripcion: "Renovación de líneas",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "En comité",
                estado: "En proceso"
            }, {
                tipo: "MAC",
                descripcion: "Con garantia estatal de mercado",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "En proceso"
            }, {
                tipo: "MAC",
                descripcion: "Sin garantía",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "Devuelto"
            }, {
                tipo: "Com",
                descripcion: "Boletas de garantía",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "Rechazada"
            }, {
                tipo: "Esp",
                descripcion: "Waiver de Convenant",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Configuración",
                estado: "En proceso"
            }, {
                tipo: "Prod",
                descripcion: "Leasing Camiones",
                ejecutivo: {
                    usuario: "mccastro",
                    nombre: "Marcela Cecilia Castro Corvalan",
                    area: "RRNN, Infraestruc. y Sector Público",
                    anexo: "ANEXO 85077"
                },
                ultimaActualizacion: "24/11/2017",
                creacion: "06/11/2017",
                etapa: "Validación",
                estado: "En proceso"
            } ]
        };
        vm.agregarlimite = [ {
            num: "1",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "2",
            tipo: "Línea Capital de Trabajo con Garantía Estatal ",
            som: "50.000"
        }, {
            num: "3",
            tipo: "Línea proyecto inversión (Concesiones)",
            som: "50.000"
        }, {
            num: "4",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "5",
            tipo: "Línea Capital de Trabajo con Garantía Estatal",
            som: "50.000"
        }, {
            num: "1",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "2",
            tipo: "Línea Capital de Trabajo con Garantía Estatal ",
            som: "50.000"
        }, {
            num: "3",
            tipo: "Línea proyecto inversión (Concesiones)",
            som: "50.000"
        }, {
            num: "4",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "5",
            tipo: "Línea Capital de Trabajo con Garantía Estatal",
            som: "50.000"
        } ];
        vm.openVerMas = true;
        vm.disabled = undefined;
        vm.searchEnabled = undefined;
        vm.setInputFocus = function() {
            $scope.$broadcast("UiSelectDemo1");
        };
        vm.enable = function() {
            vm.disabled = false;
        };
        vm.disable = function() {
            vm.disabled = true;
        };
        vm.enableSearch = function() {
            vm.searchEnabled = true;
        };
        vm.disableSearch = function() {
            vm.searchEnabled = false;
        };
        vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
        };
        vm.someGroupFn = function(item) {
            if (item.name[0] >= "A" && item.name[0] <= "M") {
                return "From A - M";
            }
            if (item.name[0] >= "N" && item.name[0] <= "Z") {
                return "From N - Z";
            }
        };
        vm.people = [ {
            name: "Adam",
            email: "adam@email.com",
            age: 12,
            country: "United States"
        }, {
            name: "Amalie",
            email: "amalie@email.com",
            age: 12,
            country: "Argentina"
        }, {
            name: "Estefanía",
            email: "estefania@email.com",
            age: 21,
            country: "Argentina"
        }, {
            name: "Adrian",
            email: "adrian@email.com",
            age: 21,
            country: "Ecuador"
        }, {
            name: "Wladimir",
            email: "wladimir@email.com",
            age: 30,
            country: "Ecuador"
        }, {
            name: "Samantha",
            email: "samantha@email.com",
            age: 30,
            country: "United States"
        }, {
            name: "Nicole",
            email: "nicole@email.com",
            age: 43,
            country: "Colombia"
        }, {
            name: "Natasha",
            email: "natasha@email.com",
            age: 54,
            country: "Ecuador"
        }, {
            name: "Michael",
            email: "michael@email.com",
            age: 15,
            country: "Colombia"
        }, {
            name: "Nicolás",
            email: "nicolas@email.com",
            age: 43,
            country: "Colombia"
        } ];
        vm.ejemploData = {
            opciones: [ "opcion1", "opcion2", "opcion3", "opcion4", "opcion5" ],
            selecciones: [ "opcion1", "opcion2", "opcion3", "opcion4" ],
            placeholder: "Seleccionar",
            placeholderDisabled: "Deshabilitado por condicion",
            placeholderVacio: "",
            msjSeleccionados: "Seleccionados:",
            buscador: false,
            botones: false,
            textoAceptar: "Seleccionar",
            disabled: false
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("asideAprobacionesGrupalesCtrl", asideAprobacionesGrupalesCtrl);
    var vm = this;
    function asideAprobacionesGrupalesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.options = {
            hstep: [ 1, 2, 3 ],
            mstep: [ 1, 5, 10, 15, 25, 30 ]
        };
        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };
        vm.demoListadoTres = [ {
            dato1: "56.571.854-8",
            dato2: "Empresa 1"
        }, {
            dato1: "36.884.554-k",
            dato2: "Empresa 2"
        }, {
            dato1: "16.374.254-1",
            dato2: "Empresa 3"
        }, {
            dato1: "6.824.614-2",
            dato2: "Empresa 4"
        } ];
        vm.demoDnd = [ {
            nombre: "Alejandro Marcelo González Contreras",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Claudio Arias",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Marcela Castro",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Maritza Muller",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        }, {
            nombre: "Mauricio Buschmanm",
            info: "Comercial · G5 · MUF 20 · Nivel 5",
            estado: ""
        } ];
        vm.demoDndLimites = [ {
            nombre: "Línea Capital de Trabajo",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Línea Capital de Trabajo con Garantía Estatal ",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Línea proyecto inversión (Concesiones)",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Boleta de Garantía",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Créditos Bullet",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Linea para Otros Fines",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Comex",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Factoring",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Leasing",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Leasing con Garantía Estatal",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Operación Leasback",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        }, {
            nombre: "Sustitución de Garantias",
            info: "Aprob. Actual MUF: 50.000 · Som. Aprob MUF: 50.000",
            estado: ""
        } ];
        vm.demoDndClientes = [ {
            nombre: "Los Conquistadores",
            info: "56.874.654-8	",
            estado: ""
        }, {
            nombre: "Cencosud",
            info: "56.874.654-8	",
            estado: ""
        }, {
            nombre: "Falabella",
            info: "56.874.654-8	",
            estado: ""
        }, {
            nombre: "Los Olmos",
            info: "56.874.654-8	",
            estado: ""
        }, {
            nombre: "Abrante",
            info: "56.874.654-8	",
            estado: ""
        }, {
            nombre: "Stihl",
            info: "56.874.654-8	",
            estado: ""
        } ];
        vm.alertClose = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Orden de Límites?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.cancel();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("ModalControlCtrl", ModalControlCtrl);
    function ModalControlCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.ObjtoBloqueo = {
            LimitesCompartidos: [ {
                estado: false,
                RUT: "56.874.654-8",
                cliente: "Los Conquistadores"
            }, {
                estado: false,
                RUT: "56.323.654-8",
                cliente: "Los Banagro"
            }, {
                estado: false,
                RUT: "56.874.323-8",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "56.222.644-8",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "56.123.321-8",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "56.874.654-2",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "56.874.654-2",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "65.874.654-2",
                cliente: "Los Banagro"
            }, {
                estado: false,
                RUT: "23.874.654-2",
                cliente: "Los Banagro"
            }, {
                estado: false,
                RUT: "23.874.654-1",
                cliente: "Los Banagro"
            }, {
                estado: false,
                RUT: "23.239.654-8",
                cliente: "Los Conquistadores"
            }, {
                estado: false,
                RUT: "32.874.034-8",
                cliente: "Sutil y CIA"
            }, {
                estado: false,
                RUT: "2.23.654-8",
                cliente: "Los Conquistadores"
            } ],
            ReservarDatos: [ {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            }, {
                estado: false,
                numero: "1.1",
                tipoDeLimite: "Crédito contingencia renegociado consumo (crédito en cuotas diferenciadas vigentes)",
                monto: "1.500.000"
            } ]
        };
        $scope.asignarLimiteDetalle = [ {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " M$ 4.634",
            montofin: " M$ 2.634"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " UF 5",
            montofin: " M$ 2.858"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " USD 22",
            montofin: " M$ 5.520"
        }, {
            productos: "Factoring tradicional sin notificaciones",
            montoini: " EUR 33",
            montofin: " M$ 2.634"
        } ];
        $scope.detalleReserva = [ {
            num: "1",
            numrango: "0 a 1",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "2",
            numrango: "1 a 2",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "3",
            numrango: "2 a 3",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "4",
            numrango: "3 a 4",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "5",
            numrango: "4 a 5",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "6",
            numrango: "5 a 6",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "7",
            numrango: "6 a 7",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "8",
            numrango: "7 a 8",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "9",
            numrango: "8 a 9",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "10",
            numrango: "9 a 10",
            monto: "100.000",
            fecha: "00/00/0000"
        }, {
            num: "11",
            numrango: "10 a 11",
            monto: "100.000",
            fecha: "00/00/0000"
        } ];
        $scope.detalleHistorico = [ {
            rut: "56.874.654-8",
            cliente: "Los Conquistadores"
        }, {
            rut: "56.323.654-8",
            cliente: "Los Banagro"
        }, {
            rut: "56.874.323-8",
            cliente: "Sutil y CIA"
        }, {
            rut: "56.222.644-8",
            cliente: "Sutil y CIA"
        }, {
            rut: "56.123.321-8",
            cliente: "Sutil y CIA"
        }, {
            rut: "56.874.654-2",
            cliente: "Sutil y CIA"
        }, {
            rut: "56.874.654-2",
            cliente: "Sutil y CIA"
        }, {
            rut: "65.874.654-2",
            cliente: "Los Banagro"
        }, {
            rut: "23.874.654-2",
            cliente: "Los Banagro"
        }, {
            rut: "23.874.654-1",
            cliente: "Los Banagro"
        }, {
            rut: "23.239.654-8",
            cliente: "Los Conquistadores"
        }, {
            rut: "32.874.034-8",
            cliente: "Sutil y CIA"
        }, {
            rut: "2.23.654-8",
            cliente: "Los Conquistadores"
        } ];
        $scope.verTabla = false;
        $scope.mostrarTabla = function() {
            $scope.verTabla = !$scope.verTabla;
        };
        $scope.validarVerMas = function(a) {
            var valor = a;
            console.log(a);
            if ($scope.ObjtoBloqueo.LimitesCompartidos.length > 5) {
                $scope.tablaMaxMostrar = true;
            }
            if (valor == "1") {
                $scope.tablaMaxMostrar = false;
            }
            if (valor == "2") {
                $scope.tablaMaxMostrar = true;
            }
        };
        $scope.comentario = {
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp "
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("controlLimitesCtrl", controlLimitesCtrl);
    function controlLimitesCtrl($scope, $window, $rootScope, $modal, $uibModal, $http, $timeout, $interval) {
        var vm = this;
        $scope.slide = "";
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        vm.status = {
            isopenDownload: false,
            isopen: true
        };
        vm.openAsideBloqueoSublimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-bloqueo-sublimite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesbloqueoSublimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-desbloqueo-sublimite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModifcarBloqueoSublimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-modificar-bloqueo-sublimite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBloqueoLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-bloqueo-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesbloqueoLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-desbloqueo-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModifcarBloqueoLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-modificar-bloqueo-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBloqueoGeneral = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-bloqueo-general_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesbloqueoGeneral = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-desbloqueo-total_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarBloqueoGeneral = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-modificar-bloqueo-total_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReserva = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-reserva_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReservaDetalle = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-reserva-detalle_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReservaModificar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-reserva-modificar_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReservaEliminar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-reserva-eliminar_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAdjuntarArchivos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-adjuntar-archivos_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-eliminar-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarSublimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-eliminar-sublimite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReservaDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-reserva-detalle-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAsignarLimiteDetalle = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-asignar-limite-detalle_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideHistoricoDetalleGeneral = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-historico-detalle-general_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideHistoricoDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-historico-detalle-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideHistoricoDetalleSublimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-historico-detalle-sublimite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-detalle-limite_tpl.html",
                animation: true,
                controller: "ModalControlCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAtributosNormativos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/aprobaciones-grupales/asides/aside-atributos-normativos_tpl.html",
                animation: true,
                controller: "asideAprobacionesGrupalesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideGarantiasMitigantes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/control-limites/asides/aside-garantias-mitigantes_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.agregarlimite = [ {
            num: "1",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "2",
            tipo: "Línea Capital de Trabajo con Garantía Estatal ",
            som: "50.000"
        }, {
            num: "3",
            tipo: "Línea proyecto inversión (Concesiones)",
            som: "50.000"
        }, {
            num: "4",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "5",
            tipo: "Línea Capital de Trabajo con Garantía Estatal",
            som: "50.000"
        }, {
            num: "1",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "2",
            tipo: "Línea Capital de Trabajo con Garantía Estatal ",
            som: "50.000"
        }, {
            num: "3",
            tipo: "Línea proyecto inversión (Concesiones)",
            som: "50.000"
        }, {
            num: "4",
            tipo: "Línea Capital de Trabajo",
            som: "50.000"
        }, {
            num: "5",
            tipo: "Línea Capital de Trabajo con Garantía Estatal",
            som: "50.000"
        } ];
        vm.ejemploData = {
            opciones: [ "opcion1", "opcion2", "opcion3", "opcion4", "opcion5" ],
            selecciones: [],
            placeholder: "Seleccionar",
            placeholderDisabled: "Deshabilitado por condicion",
            placeholderVacio: "",
            msjSeleccionados: "Opciones seleccionadas:",
            buscador: true,
            botones: false,
            textoAceptar: "Seleccionar",
            disabled: false
        };
        vm.subtabOperaciones = [ {
            check: "0",
            limite: "1.1",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "1",
            limite: "1.1",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "1",
            limite: "-",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "0",
            limite: "-",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "0",
            limite: "1.1",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "1",
            limite: "1.1",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "0",
            limite: "-",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        }, {
            check: "1",
            limite: "1.1",
            producto: "Factoring tradicional",
            to: "60111",
            inicio: "00/00/0000",
            venc: "00/00/0000",
            montoinicial: "M$ 1.000",
            montoactual: "M$ 2.000"
        } ];
        vm.subtabAsignarLimite = [ {
            check: "0",
            num: "1",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "1",
            num: "1.1",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "1",
            num: "1.2",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "0",
            num: "1.3",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "0",
            num: "1.1",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "1",
            num: "1.2",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "0",
            num: "1.3",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        }, {
            check: "1",
            num: "1.4",
            limite: "Crédito contingencia renego",
            aprob: "1.500.000",
            disp: "3.500.000"
        } ];
        vm.agregarReserva = [ {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        } ];
        vm.agregarReservaDos = [ {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        }, {
            num: "1",
            tipo: "Crédito contingencia renegociado",
            aprobado: "M$ 5.000",
            aprobadom: "M$ 5.000",
            disponible: "M$ 5.000"
        } ];
        vm.historicoGeneral = [ {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        }, {
            limite: "1",
            usuario: "manugarrido",
            fecha: "00/00/0000",
            tipo: "Bloqueo total",
            monto: "UF 10.000",
            rut: "4",
            comentario: "Muy lejos, más allá de las montañas Viven aislados en casas de letras, en la"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("macControlLimitesCtrl", macControlLimitesCtrl);
    function macControlLimitesCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        $scope.slide = "";
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        vm.status = {
            isopenDownload: false
        };
        vm.openAsideDetalleLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mac-control-limites/asides/aside-aprobaciones-detalle-limite_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAgregarAprobacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/control-limites/asides/aside-agregar-aprobacion_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorCarteras").controller("mantenedorCarterasCtrl", mantenedorCarterasCtrl);
    function mantenedorCarterasCtrl($scope, $modal, $uibModal) {
        var vm = this;
        $scope.servicios = [ {
            nombre: "Traspaso masivos de carteras"
        }, {
            nombre: "Cambia plan tarifario"
        }, {
            nombre: "Actualiza cliente"
        }, {
            nombre: "Agregar ejecutivo al equipo de cobertura"
        }, {
            nombre: "Asocia email a cliente producto"
        }, {
            nombre: "Enviar a cobranza"
        }, {
            nombre: "Inhibición correo"
        }, {
            nombre: "Recuperar de cobranza"
        }, {
            nombre: "Actualización fechas de defunción"
        }, {
            nombre: "Actualización fechas de nacimiento"
        } ];
        $scope.alertVolver = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar el Mandenedor de Carteras?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresDirector").config(mantenedoresDirectorConfig);
    function mantenedoresDirectorConfig($stateProvider) {
        $stateProvider.state("mantenedoresDirector", {
            parent: "root",
            url: "/mantenedores/mantenedor-directores",
            views: {
                "main@": {
                    controller: "mantenedoresDirectorCtrl",
                    templateUrl: "components/mantenedores/mantenedor-directores/mantenedor-directores_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedores"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresDirector").controller("mantenedoresDirectorCtrl", mantenedoresDirectorCtrl).controller("ModalCtrlDIrector", ModalCtrlDIrector);
    function mantenedoresDirectorCtrl($uibModal, $scope) {
        var vm = this;
        vm.listadoDirectores = true;
        vm.crearDirector = false;
        vm.directorCreado = false;
        vm.busquedaDirector = false;
        vm.crearDirectores = function() {
            vm.listadoDirectores = false;
            vm.crearDirector = true;
        };
        vm.buscarDirector = function() {
            vm.busquedaDirector = true;
        };
        vm.grabarDirector = function() {
            vm.crearDirector = false;
            vm.directorCreado = true;
        };
        vm.listarDirectores = function() {
            vm.directorCreado = false;
            vm.listadoDirectores = true;
            vm.busquedaDirector = false;
            vm.crearDirector = false;
        };
        vm.openAsideEliminarDirector = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-directores/asides/aside-eliminar-director_tpl.html",
                animation: true,
                controller: "ModalCtrlDIrector",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrlDIrector($scope, $modalInstance, $timeout) {
        $scope.eliminar = false;
        $scope.eliminarDirector = function() {
            $scope.eliminar = !$scope.eliminar;
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresFuncionalidades").controller("mantenedoresFuncionalidadesCtrl", mantenedoresFuncionalidadesCtrl);
    function mantenedoresFuncionalidadesCtrl() {
        var vm = this;
        vm.statusOne = {
            isopenOne: false
        };
        vm.funcionalidadEliminada = false;
        vm.mostrarxInput = false;
        vm.selectMetodo = [ {
            name: "No aplica"
        }, {
            name: "CHEQUCAR0B"
        }, {
            name: "ORJUCAR001"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorgral").controller("mantenedorgralCtrl", mantenedorgralCtrl);
    function mantenedorgralCtrl() {
        var vm = this;
        vm.mostrarConfirmacion = false;
        vm.mostrarLastConfirm = false;
        vm.clickPillOne = false;
        vm.clickPillTwo = false;
        vm.selectCanal = [ {
            name: "Internet"
        }, {
            name: "Plataforma comercial"
        } ];
        vm.selectProducto = [ {
            name: "Cuenta Vista"
        }, {
            name: "Cuenta de Ahorro"
        } ];
        vm.selectFuncionalidad = [ {
            name: "Regularización cargo unitario"
        }, {
            name: "Giro diferido"
        } ];
        vm.selectOperacion = [ {
            name: "Solicitar giro diferido emergencia"
        }, {
            name: "Anular solicitud giro diferido emergencia"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedorInformacion").controller("mantenedorInformacionCtrl", mantenedorInformacionCtrl).controller("modalmantenedorInformacionCtrl", modalmantenedorInformacionCtrl);
    function mantenedorInformacionCtrl($scope, $modal, $uibModal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contratados = [ {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "MIÉ 28/02/2018 ·",
            hora: "10:20 Hrs.",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "JUE 28/02/2018 ·",
            hora: "10:20 Hrs.",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "VIE 28/02/2018",
            hora: "10:20",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018 ·",
            hora: "10:20 Hrs.",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018 ·",
            hora: "10:20 Hrs.",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018 ·",
            hora: "10:20 Hrs.",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018",
            hora: "10:20",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018",
            hora: "10:20",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018",
            hora: "10:20",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            rut: "12.345.678-9",
            nombre: "Carlos Antonios Despispurre Salgado",
            fecha: "28/02/2018",
            hora: "10:20",
            scoring: "Si",
            admin: "Francisco Javier Desispurrus Valenzuela"
        } ];
        vm.resultados = [ {
            fecha: "28/02/2018",
            hora: "10:20",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            fecha: "23/02/2018",
            hora: "10:20",
            admin: "Ana María Desispurrus Silva"
        }, {
            fecha: "21/02/2018",
            hora: "10:20",
            admin: "Carlos Andres Desispurrus Valenzuela"
        }, {
            fecha: "18/02/2018",
            hora: "10:20",
            admin: "Francisco Javier Desispurrus Valenzuela"
        }, {
            fecha: "10/02/2018",
            hora: "10:20",
            admin: "Francisco Javier Desispurrus Valenzuela"
        } ];
        vm.openActualizarAtribucion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-informacion/asides/aside-actualizar-atribucion_tpl.html",
                animation: true,
                controller: "modalmantenedorInformacionCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function modalmantenedorInformacionCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresSet").controller("mantenedoresSetCtrl", mantenedoresSetCtrl);
    function mantenedoresSetCtrl() {
        var vm = this;
        vm.statusOne = {
            isopenOne: false
        };
        vm.statusTwo = {
            isopenTwo: false
        };
        vm.statusThree = {
            isopenThree: false
        };
        vm.statusFour = {
            isopenFour: false
        };
        vm.mostrarTabla = false;
        vm.mostrarConfirmacion = false;
        vm.mostrarLastConfirm = false;
        vm.clickPillOne = false;
        vm.clickPillTwo = false;
        vm.selectTipo = [ {
            name: "Monetaria"
        }, {
            name: "No monetaria"
        } ];
        vm.selectMoneda = [ {
            name: "CLP"
        }, {
            name: "USD"
        }, {
            name: "CLF"
        } ];
        vm.selectMetodo = [ {
            name: "No aplica"
        }, {
            name: "CHEQUCAR0B"
        }, {
            name: "ORJUCAR001"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresUsuario").config(mantenedoresUsuarioConfig);
    function mantenedoresUsuarioConfig($stateProvider) {
        $stateProvider.state("mantenedoresUsuario", {
            parent: "root",
            url: "/mantenedores/mantenedor-usuarios",
            views: {
                "main@": {
                    controller: "mantenedoresUsuarioCtrl",
                    templateUrl: "components/mantenedores/mantenedor-usuarios/mantenedor-usuarios_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "mantenedores"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresUsuario").controller("mantenedoresUsuarioCtrl", mantenedoresUsuarioCtrl).controller("ModalCtrl", ModalCtrl);
    function mantenedoresUsuarioCtrl($uibModal, $scope) {
        var vm = this;
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
        $scope.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        $scope.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        $scope.format = $scope.formats[0];
        $scope.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "myModalContent.html",
                controller: "ModalCtrl",
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };
        vm.cargaMasiva = true;
        vm.busquedaUsuario = true;
        vm.nuevaCarga = false;
        vm.nuevaCarga2 = false;
        vm.confirmarPermisos = false;
        vm.confirmarPermisos2 = false;
        vm.mostrarConfirmacion = false;
        vm.mostrarConfirmacion2 = false;
        vm.btnNuevaCarga = function() {
            vm.cargaMasiva = false;
            vm.nuevaCarga = true;
        };
        vm.btnVolverListado = function() {
            vm.cargaMasiva = true;
            vm.nuevaCarga = false;
        };
        vm.btnConfirmar = function() {
            vm.nuevaCarga = false;
            vm.confirmarPermisos = true;
        };
        vm.btnComprovante = function() {
            vm.confirmarPermisos = false;
            vm.mostrarConfirmacion = true;
        };
        vm.btnNuevaCarga2 = function() {
            vm.cargaMasiva2 = false;
            vm.nuevaCarga2 = true;
            vm.busquedaUsuario = false;
        };
        vm.btnVolverListado2 = function() {
            vm.busquedaUsuario = true;
            vm.nuevaCarga2 = false;
        };
        vm.btnConfirmar2 = function() {
            vm.nuevaCarga2 = false;
            vm.confirmarPermisos2 = true;
        };
        vm.btnComprovante2 = function() {
            vm.confirmarPermisos2 = false;
            vm.mostrarConfirmacion2 = true;
        };
        vm.openAsideAsignarRoles = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-usuarios/asides/aside-asignar-roles_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsidePermisos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-usuarios/asides/aside-rol-ejecutivo_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresVisualizacionDatosSensibles").config(mantenedoresVisualizacionDatosSensiblesConfig);
    function mantenedoresVisualizacionDatosSensiblesConfig($stateProvider) {
        $stateProvider.state("mantenedoresVisualizacionDatosSensibles", {
            parent: "root",
            url: "/mantenedores/mantenedor-visualizacion-datos-sensibles",
            views: {
                "main@": {
                    controller: "mantenedoresVisualizacionDatosSensiblesCtrl",
                    templateUrl: "components/mantenedores/mantenedor-visualizacion-datos-sensibles/mantenedor-visualizacion-datos-sensibles_tpl.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Mantenedor Visualización Datos Sensibles"
            }
        });
    }
})();

(function() {
    angular.module("WebBancoChile.mantenedoresVisualizacionDatosSensibles").controller("mantenedoresVisualizacionDatosSensiblesCtrl", mantenedoresVisualizacionDatosSensiblesCtrl).controller("ModalVisDatosSensiblesCtrl", ModalVisDatosSensiblesCtrl);
    function mantenedoresVisualizacionDatosSensiblesCtrl($uibModal, $scope) {
        var vm = this;
        vm.listadoPersonas = true;
        vm.busquedaPersona = false;
        vm.personaCreada = false;
        vm.crear = false;
        vm.data = {
            personas: [ {
                rut: "12.143.218-7",
                nombre: "Francisco Luis Moreno Parra",
                autorizado: true
            }, {
                rut: "13.634.146-7",
                nombre: "Juan Luis Moreno Parra",
                autorizado: false
            }, {
                rut: "13.864.145-7",
                nombre: "Pedro Luis Moreno Parra",
                autorizado: true
            }, {
                rut: "12.143.218-7",
                nombre: "Francisco Luis Moreno Parra",
                autorizado: true
            }, {
                rut: "12.143.218-7",
                nombre: "Francisco Luis Moreno Parra",
                autorizado: false
            }, {
                rut: "13.864.145-7",
                nombre: "Pedro Luis Moreno Parra",
                autorizado: true
            }, {
                rut: "12.143.218-7",
                nombre: "Francisco Luis Moreno Parra",
                autorizado: false
            } ]
        };
        vm.crearPersona = function() {
            vm.listadoPersonas = false;
            vm.crear = true;
        };
        vm.buscarPersona = function() {
            vm.busquedaPersona = true;
        };
        vm.grabarPersona = function() {
            vm.crear = false;
            vm.busquedaPersona = false;
            vm.listadoPersonas = false;
            vm.personaCreada = true;
        };
        vm.volverLista = function() {
            vm.personaCreada = false;
            vm.crear = false;
            vm.busquedaPersona = false;
            vm.listadoPersonas = true;
        };
        vm.openAsideEliminarPersona = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-visualizacion-datos-sensibles/asides/aside-eliminar-persona_tpl.html",
                animation: true,
                controller: "ModalVisDatosSensiblesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCambiarEstado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-visualizacion-datos-sensibles/asides/aside-cambiar-persona_tpl.html",
                animation: true,
                controller: "ModalVisDatosSensiblesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarEstado = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/mantenedores/mantenedor-visualizacion-datos-sensibles/asides/aside-cambiar-persona_tpl.html",
                animation: true,
                controller: "ModalVisDatosSensiblesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalVisDatosSensiblesCtrl($scope, $modalInstance, $timeout) {
        $scope.eliminar = false;
        $scope.cambiar = false;
        $scope.eliminarPersona = function() {
            $scope.eliminar = true;
        };
        $scope.cambiarPersona = function() {
            $scope.cambiar = true;
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.modFichaInversiones").controller("modFichaInversionesCtrl", modFichaInversionesCtrl);
    function modFichaInversionesCtrl() {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.notificacionesVersionDos").controller("notificacionesVersionDosCtrl", notificacionesVersionDosCtrl).controller("AsidesnotificacionesVersionDosCtrl", AsidesnotificacionesVersionDosCtrl);
    function notificacionesVersionDosCtrl($modal, $scope) {
        var vm = this;
        vm.openVerMas = true;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.openNotificaciones = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones-v2/notificaciones-v2/asides/asideNotificaciones-01_tpl.html",
                animation: true,
                controller: "AsidesnotificacionesVersionDosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.notifications = [ {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        } ];
    }
    function AsidesnotificacionesVersionDosCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.notificationsAside = [ {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        }, {
            title: "Autorización de Ahorro",
            span: "31/10/2017 17:50",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-android-arrow-forward px-24 text-color-6"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.notificaciones").controller("notificacionesCtrl", notificacionesCtrl).controller("AsidesNotificacionesCtrl", AsidesNotificacionesCtrl);
    function notificacionesCtrl($modal, $scope) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        $scope.notifications = [ {
            icon: "bch-q1-pago",
            title: "Autorización de Cuenta",
            detail: "pcalderon requiere crear una Cuenta Corriente"
        }, {
            icon: "icon-ad-leasing",
            title: "6 Autorizaciones de Sobretasa",
            detail: "pcalderon, rlabbe, psepulveda, dvalenzuela, cgonzalez y fsanchez"
        }, {
            icon: "icon-ad-Solicitaavance",
            title: "Autorización de Cuenta",
            detail: "pcalderon requiere crear una Cuenta Corriente"
        } ];
        vm.openNotificaciones = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones/notificaciones/asides/asideNotificaciones-01_tpl.html",
                animation: true,
                controller: "AsidesNotificacionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function AsidesNotificacionesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.notificationsAside = [ {
            icono: "bch-q1-pago",
            title: "Autorización de Ahorro",
            span: "hace 5min",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-creditoConsumo",
            title: "Autorización de Ahorro",
            span: "hace 5min",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-pago",
            title: "Autorización de Ahorro",
            span: "hace 1h",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-creditoConsumo",
            title: "Autorización de Ahorro",
            span: "hace 3h",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-pago",
            title: "Autorización de Ahorro",
            span: "hace 5min",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-creditoConsumo",
            title: "Autorización de Ahorro",
            span: "hace 5min",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-creditoConsumo",
            title: "Autorización de Ahorro",
            span: "hace 5min",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        }, {
            icono: "bch-q1-pago",
            title: "Autorización de Ahorro",
            span: "hace 2h",
            detail: "pcalderon requiere crear una Cuenta de Ahorro.",
            more: "ion-ios-close-empty"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.notificacionesSolicitudes").controller("notificacionesSolicitudesCtrl", notificacionesSolicitudesCtrl).controller("AsidesnotificacionesSolicitudesCtrl", AsidesnotificacionesSolicitudesCtrl);
    function notificacionesSolicitudesCtrl($modal) {
        var vm = this;
        vm.autorizado = false;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.selectTipe = [ {
            name: "Cuenta Vista"
        }, {
            name: "Cuenta Corriente"
        } ];
        vm.openAsideRechazo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones/solicitudes/asides/asideNotificacionesRechazo_tpl.html",
                animation: true,
                controller: "AsidesnotificacionesSolicitudesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones/solicitudes/asides/asideNotificacionesReparar_tpl.html",
                animation: true,
                controller: "AsidesnotificacionesSolicitudesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBitacora = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones/solicitudes/asides/asideNotificacionesBitacora_tpl.html",
                animation: true,
                controller: "AsidesnotificacionesSolicitudesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEmail = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/notificaciones/solicitudes/asides/asideNotificacionesEmail_tpl.html",
                animation: true,
                controller: "AsidesnotificacionesSolicitudesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function AsidesnotificacionesSolicitudesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        vm.rechazado = false;
        vm.reparada = false;
        vm.enviaMail = false, $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.osTicket").controller("modalesOsTicketCtrl", modalesOsTicketCtrl);
    var vm = this;
    function modalesOsTicketCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.pasoOne = true;
        $scope.pasoTwo = false;
        $scope.pasoThree = false;
        $scope.selectSubtipo = [ {
            name: "Subtipo 1"
        }, {
            name: "Subtipo 2"
        }, {
            name: "Subtipo 3"
        }, {
            name: "Subtipo 4"
        } ];
        $scope.selectCategoria = [ {
            name: "Categoria 1"
        }, {
            name: "Categoria 2"
        }, {
            name: "Categoria 3"
        }, {
            name: "Categoria 4"
        } ];
        $scope.selectEmailCliente = [ {
            name: "Email 1"
        }, {
            name: "Email 2"
        }, {
            name: "Email 3"
        }, {
            name: "Email 4"
        } ];
        $scope.selectFonoCliente = [ {
            name: "Fono 1"
        }, {
            name: "Fono 2"
        }, {
            name: "Fono 3"
        }, {
            name: "Fono 4"
        } ];
        $scope.alerta = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Configuración amortización?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.osTicket").controller("osTicketCtrl", osTicketCtrl);
    function osTicketCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        $scope.openAsideOsTicketOne = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/os-ticket/os-ticket/asides/asideOsTicketOne_tpl.html",
                animation: true,
                controller: "modalesOsTicketCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideOsTicketTwo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/os-ticket/os-ticket/asides/asideOsTicketTwo_tpl.html",
                animation: true,
                controller: "modalesOsTicketCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideOsTicketThree = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/os-ticket/os-ticket/asides/asideOsTicketThree_tpl.html",
                animation: true,
                controller: "modalesOsTicketCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideOsTicketFour = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/os-ticket/os-ticket/asides/asideOsTicketFour_tpl.html",
                animation: true,
                controller: "modalesOsTicketCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideComprobante = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/os-ticket/os-ticket/asides/asideComprobante_tpl.html",
                animation: true,
                controller: "modalesOsTicketCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.innominada").controller("innominadaCtrl", innominadaCtrl);
    function innominadaCtrl() {
        var vm = this;
        vm.tipoprepago = [ {
            tipo: "Nominada"
        }, {
            tipo: "Innominada"
        } ];
        vm.tipotarjeta = [ {
            tipo: "Hombre"
        }, {
            tipo: "Mujer"
        } ];
        vm.tipopago = [ {
            tipo: "Efectivo/ Cheque/ Vale Vista"
        }, {
            tipo: "Pago contra otro Banco"
        }, {
            tipo: "Cuenta Corriente o Vista"
        }, {
            tipo: "Tarjeta de Crédito"
        }, {
            tipo: "Tarjeta Prepago Nominada"
        } ];
        vm.cuenta = [ {
            tipo: "85378006 Cuenta Corriente | $ 700.000 disponible"
        }, {
            tipo: "85378006 Cuenta Vista | $ 200.000 disponible"
        }, {
            tipo: "85378006 Cuenta Corriente | $ 1.200.000 disponible"
        } ];
        vm.dynamicPopover = {
            templateUrl: "prepago/innominada/partials/tarjeta.html"
        };
        vm.clienteData = {
            rut: "10184906-6"
        };
    }
})();

(function() {
    angular.module("WebBancoChile.pricing").controller("pricingCtrl", pricingCtrl).controller("ModalPricingCtrl", ModalPricingCtrl);
    function pricingCtrl($uibModal, $scope) {
        var vm = this;
        vm.vigentes = [ {
            estado: "Borrador",
            nombre: "Formula 1",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Pendiente",
            nombre: "Formula 2",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Vigente",
            nombre: "Formula 3",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Rechazada",
            nombre: "Formula 4",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        } ];
        vm.historicas = [ {
            estado: "Rechazada",
            nombre: "Formula 1",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Rechazada",
            nombre: "Formula 2",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Rechazada",
            nombre: "Formula 3",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        }, {
            estado: "Rechazada",
            nombre: "Formula 4",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        } ];
        vm.porAprobar = [ {
            estado: "Pendiente",
            nombre: "Formula 1",
            producto: "Crédito de Consumo",
            tipo: "Tipo Base",
            usuario: "Fgarcia",
            fecha: "18-10-2017 14:15 hr."
        } ];
        vm.ingreso = true;
        vm.simulacion = false;
        vm.aprobacion = false;
        vm.resultado = false;
        vm.variablesSimulacion = [ {
            nombre: "TASABASEFORMULA",
            minima: "1,40%",
            sugerida: "1,14%",
            maxima: "1,09%"
        }, {
            nombre: "TASABASEFINAL",
            minima: "$190.000",
            sugerida: "$180.000",
            maxima: "$170.000"
        }, {
            nombre: "TASABASEFINAL",
            minima: "1,40%",
            sugerida: "1,14%",
            maxima: "1,09%"
        }, {
            nombre: "TASABASEFORMULA",
            minima: "$190.000",
            sugerida: "$180.000",
            maxima: "$170.000"
        }, {
            nombre: "TASABASEFINAL",
            minima: "1,40%",
            sugerida: "1,14%",
            maxima: "1,09%"
        } ];
        vm.formulasTabla = [ {
            nombre: "ROA",
            valor: "0,23"
        }, {
            nombre: "IP",
            valor: "0,23"
        }, {
            nombre: "Saldo medio",
            valor: "0,23"
        }, {
            nombre: "Margen de producto",
            valor: "0,23"
        }, {
            nombre: "Prima calculada",
            valor: "0,23"
        }, {
            nombre: "Monto bruto pricing",
            valor: "0,23"
        }, {
            nombre: "CR",
            valor: "0,23"
        }, {
            nombre: "CV",
            valor: "0,23"
        }, {
            nombre: "CO",
            valor: "0,23"
        }, {
            nombre: "CK",
            valor: "0,23"
        }, {
            nombre: "CF",
            valor: "0,23"
        }, {
            nombre: "FA1",
            valor: "0,23"
        }, {
            nombre: "FA2",
            valor: "0,23"
        }, {
            nombre: "FA3",
            valor: "0,23"
        }, {
            nombre: "FA4",
            valor: "0,23"
        }, {
            nombre: "FA5",
            valor: "0,23"
        }, {
            nombre: "VN1",
            valor: "0,23"
        }, {
            nombre: "VN2",
            valor: "0,23"
        }, {
            nombre: "VN3",
            valor: "0,23"
        }, {
            nombre: "VN4",
            valor: "0,23"
        }, {
            nombre: "VN5",
            valor: "0,23"
        }, {
            nombre: "Suma tasa 1",
            valor: "0,23"
        }, {
            nombre: "Suma tasa 2",
            valor: "0,23"
        }, {
            nombre: "Suma tasa 3",
            valor: "0,23"
        }, {
            nombre: "Suma tasa 4",
            valor: "0,23"
        }, {
            nombre: "Suma tasa 5",
            valor: "0,23"
        }, {
            nombre: "Multitasa 1",
            valor: "0,23"
        }, {
            nombre: "Multitasa 2",
            valor: "0,23"
        }, {
            nombre: "Multitasa 3",
            valor: "0,23"
        }, {
            nombre: "Multitasa 4",
            valor: "0,23"
        }, {
            nombre: "Multitasa 5",
            valor: "0,23"
        }, {
            nombre: "Tasa min",
            valor: "0,23"
        }, {
            nombre: "tasa sug",
            valor: "0,23"
        }, {
            nombre: "Tasa max",
            valor: "0,23"
        } ];
        vm.asideSolicitarDesactivacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/pricing/asides/aside-solicitar-desactivacion_tpl.html",
                animation: true,
                controller: "ModalPricingCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalPricingCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("asignacionOficinaCtrl", asignacionOficinaCtrl);
    function asignacionOficinaCtrl($uibModal) {
        var vm = this;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.$uibModal = $uibModal;
    }
    asignacionOficinaCtrl.prototype.modal = function() {
        var vm = this;
        vm.$uibModal.open({
            animation: false,
            templateUrl: "components/rbac/asignacionOficina/partials/modal-supervision_tpl.html",
            controller: "asignacionOficinaModalCtrl",
            controllerAs: "mc",
            size: "md"
        });
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("asignacionOficinaModalCtrl", asignacionOficinaModalCtrl);
    function asignacionOficinaModalCtrl($scope, $uibModalInstance) {
        var vm = this;
        vm.$uibModalInstance = $uibModalInstance;
    }
    asignacionOficinaModalCtrl.prototype.cerrar = function() {
        var vm = this;
        vm.$uibModalInstance.close("close");
    };
    asignacionOficinaModalCtrl.prototype.cancelar = function() {
        var vm = this;
        vm.$uibModalInstance.close("cancel");
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("asignacionOficinaNuevaCtrl", asignacionOficinaNuevaCtrl);
    function asignacionOficinaNuevaCtrl() {
        var vm = this;
        vm.status = {
            isopen: false
        };
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.AgregarUsuario = function() {
            vm.mostrarAside = true;
            $("body").addClass("no-scroll");
        };
        vm.cerrarAside = function() {
            vm.mostrarAside = false;
            $("body").removeClass("no-scroll");
        };
        vm.ElimarAsignacion = function() {
            swal({
                title: "",
                text: "El usurio dejará de estar asignado a esta oficina.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6baa1f ",
                confirmButtonText: "Confirmar",
                cancelButtonText: "Volver",
                closeOnConfirm: true,
                closeOnCancel: true
            });
        };
        vm.confirmacionDeCerrar = function() {
            swal({
                title: "",
                text: "Desea cerrar la ventana lateral? Perderá el trabajo en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6baa1f ",
                confirmButtonText: "Cerrar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    vm.mostrarAsideMAil = false;
                    $timeout(function() {
                        vm.mostrarAsideMAil = false;
                    }, 1e3);
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("mantenedoresCtrl", mantenedoresCtrl);
    function mantenedoresCtrl($uibModal) {
        var vm = this;
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
        vm.$uibModal = $uibModal;
    }
    mantenedoresCtrl.prototype.modal = function() {
        var vm = this;
        vm.$uibModal.open({
            animation: false,
            templateUrl: "components/rbac/mantenedores/partials/modal-supervision_tpl.html",
            controller: "mantenedoresModalCtrl",
            controllerAs: "mc",
            size: "md"
        });
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("mantenedoresModalCtrl", mantenedoresModalCtrl);
    function mantenedoresModalCtrl($scope, $uibModalInstance) {
        var vm = this;
        vm.$uibModalInstance = $uibModalInstance;
    }
    mantenedoresModalCtrl.prototype.cerrar = function() {
        var vm = this;
        vm.$uibModalInstance.close("close");
    };
    mantenedoresModalCtrl.prototype.cancelar = function() {
        var vm = this;
        vm.$uibModalInstance.close("cancel");
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("reemplazosCtrl", reemplazosCtrl);
    function reemplazosCtrl($scope, $uibModalInstance) {
        var vm = this;
        vm.$uibModalInstance = $uibModalInstance;
    }
    reemplazosCtrl.prototype.cerrar = function() {
        var vm = this;
        vm.$uibModalInstance.close("close");
    };
    reemplazosCtrl.prototype.cancelar = function() {
        var vm = this;
        vm.$uibModalInstance.close("cancel");
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("reemplazosCtrl", reemplazosCtrl);
    function reemplazosCtrl($uibModal) {
        var vm = this;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.$uibModal = $uibModal;
    }
    reemplazosCtrl.prototype.modal = function() {
        var vm = this;
        vm.$uibModal.open({
            animation: false,
            templateUrl: "components/rbac/reemplazos/partials/modal-supervision_tpl.html",
            controller: "reemplazosCtrl",
            controllerAs: "mc",
            size: "md"
        });
    };
})();

(function() {
    angular.module("WebBancoChile.rbac").controller("reemplazosNuevaCtrl", reemplazosNuevaCtrl);
    function reemplazosNuevaCtrl() {
        var vm = this;
        vm.status = {
            isopen: false
        };
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.AgregarUsuario = function() {
            vm.mostrarAside = true;
            $("body").addClass("no-scroll");
        };
        vm.cerrarAside = function() {
            vm.mostrarAside = false;
            $("body").removeClass("no-scroll");
        };
        vm.ElimarAsignacion = function() {
            swal({
                title: "",
                text: "Desea quitar el ejecutivo de reemplazo?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6baa1f ",
                confirmButtonText: "Quitar",
                cancelButtonText: "Volver",
                closeOnConfirm: true,
                closeOnCancel: true
            });
        };
        vm.confirmacionDeCerrar = function() {
            swal({
                title: "",
                text: " Desea cerrar la ventana lateral? Perderá el trabajo en curso",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6baa1f ",
                confirmButtonText: "Cerrar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    vm.mostrarAsideMAil = false;
                    $timeout(function() {
                        vm.mostrarAsideMAil = false;
                    }, 1e3);
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("abonosCtrl", abonosCtrl);
    function abonosCtrl() {
        var vm = this;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("rechazarAsideCtrl", rechazarAsideCtrl);
    function rechazarAsideCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
        $scope.enviarReparo = function() {
            $modalInstance.close();
            $scope.$root.$broadcast("modalinformacion::mensaje", true);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("informacionCuentaCtrl", informacionCuentaCtrl);
    function informacionCuentaCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("autorizacionRegularizacionCtrl", autorizacionRegularizacionCtrl);
    function autorizacionRegularizacionCtrl($modal, $scope) {
        var vm = this;
        vm.mensaje = false;
        vm.dropCols = false;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.mostrarMensaje = function() {
            vm.mensaje = true;
        };
        vm.volverAutorizar = function() {
            vm.mensaje = false;
        };
        vm.openAsideInfoTransaccion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/regularizacion/autorizacion/asides/informacion-cuenta_tpl.html",
                animation: true,
                controller: "informacionCuentaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRechazar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/regularizacion/autorizacion/asides/aside-reparar_tpl.html",
                animation: true,
                controller: "rechazarAsideCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.$on("modalinformacion::mensaje", function(event, args) {
            vm.mensaje = args;
        });
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("cargaCtrl", cargaCtrl);
    function cargaCtrl(dndFileUploadService) {
        var vm = this;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.dndFileUploadService = dndFileUploadService;
        vm.status = {
            isopen: false
        };
        vm.config = {
            dataUpload: {
                validMimeType: "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                maxFileSize: "5",
                url: "/deposito-gestion/administracion/upload"
            },
            validator: function() {
                return true;
            },
            cleanCallBack: function() {
                return true;
            },
            clean: function() {
                dndFileUploadService.setStatus("init");
            },
            progress: function(evt) {
                var progressPercentage = parseInt(100 * evt.loaded / evt.total, 10);
                $log.debug(progressPercentage + "% ", evt);
            },
            fail: function(err) {
                vm.config.clean();
                vm.config.error = true;
                vm.resultadoExcel({}, err);
            }
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("cargosCtrl", cargosCtrl);
    function cargosCtrl() {
        var vm = this;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("rechazarAsideCtrl", rechazarAsideCtrl);
    function rechazarAsideCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
        $scope.enviarReparo = function() {
            $modalInstance.close();
            $scope.$root.$broadcast("modalinformacion::mensaje", true);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("consultaCtrl", consultaCtrl);
    function consultaCtrl($modal) {
        var vm = this;
        vm.mensaje = true;
        vm.dropCols = false;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.mostrarMensaje = function() {
            vm.mensaje = false;
        };
        vm.volverAutorizar = function() {
            vm.mensaje = true;
        };
        vm.openAsideRechazar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/regularizacion/consulta/asides/aside-reparar_tpl.html",
                animation: true,
                controller: "rechazarAsideCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.regularizacion").controller("reversaCtrl", reversaCtrl);
    function reversaCtrl($modal) {
        var vm = this;
        vm.mensaje = true;
        vm.dropCols = false;
        vm.selectRol = [ {
            name: "Seleccionar oficina"
        }, {
            name: "11 de Septiembre"
        }, {
            name: "Agustinas"
        }, {
            name: "Ahumada-Preferencial"
        } ];
        vm.selectRol.selected = {
            name: "Seleccionar oficina"
        };
        vm.status = {
            isopen: false
        };
        vm.mostrarMensaje = function() {
            vm.mensaje = false;
        };
        vm.volverAutorizar = function() {
            vm.mensaje = true;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.segurosContratados").controller("segurosContratadosCtrl", segurosContratadosCtrl).controller("modalSegurosContratadosCtrl", modalSegurosContratadosCtrl);
    function segurosContratadosCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contratados = [ {
            "class": "icon-seguroproteccion",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-segurosalud",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroAuto",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-segurovida",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroproteccion",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroproteccion",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-segurosalud",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroAuto",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroAuto",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        }, {
            "class": "icon-seguroproteccion",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        } ];
        vm.contratadook = [ {
            "class": "icon-seguroproteccion",
            tipo: "Robo contenido Auto",
            agencia: "MAPFRE CIA DE SEGUROS DE CHILE S.A.",
            desde: "28/02/2018",
            hasta: "28/02/2019",
            uf: "0,23",
            cuotas: "12",
            medio: "BANCO BICE / XXXXXXXXXX 333",
            nseguro: "1000000102004002000023"
        } ];
    }
    function modalSegurosContratadosCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.seguros").controller("segurosCtrl", segurosCtrl).controller("ModalCtrl", ModalCtrl);
    function segurosCtrl($scope, $modal) {
        var vm = this;
        vm.selectedSure = false;
        vm.selectedSureTwo = false;
        vm.editPoliza = false;
        vm.editPolizaTwo = false;
        vm.editFormaPago = false;
        vm.editFormaPagoTwo = false;
        vm.aceptedButton = false;
        vm.selectedItemOne = true;
        vm.selectedItemTwo = true;
        vm.selectedItemThree = true;
        $scope.viewProducto = false;
        vm.selectMedio = [ {
            name: "Cuenta Corriente Moneda Local 00-1892399-0897-00"
        }, {
            name: "Cuenta Corriente Moneda Local 00-1892399-0897-00"
        } ];
        vm.selectDia = [ {
            name: "1"
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        }, {
            name: "6"
        }, {
            name: "7"
        }, {
            name: "8"
        }, {
            name: "9"
        }, {
            name: "10"
        } ];
        vm.openAsideEjecutivo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/seguros/asides/aside-contratadosEjecutivos_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideBeneficios = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/seguros/asides/aside-beneficiosCoberturas_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideComparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/seguros/asides/aside-comparativo_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSiniestros = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/seguros/asides/aside-siniestros_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.seguros-nuevo").controller("proteccionPersonalCtrl", proteccionPersonalCtrl).controller("ModalPersonalesCtrl", ModalPersonalesCtrl);
    function proteccionPersonalCtrl($scope, $modal) {
        var vm = this;
        vm.mostrarSimulacion = false;
        vm.mostrarVenta = false;
        vm.mostrarResumen = true;
        vm.mostrarContratacion = false;
        vm.esCliente = true;
        vm.simulacionStep2 = true;
        vm.simulacionStep3 = true;
        vm.ventaStep3 = false;
        vm.ventaStep4 = false;
        vm.ventaPaso4 = false;
        vm.autorizaConDispositivo = false;
        vm.contratar = false;
        vm.pasoExtra = 0;
        vm.seleccionados = 0;
        vm.planSeleccionado = 0;
        vm.libre = true;
        vm.seguros = [ {
            id: 932739232237,
            img: "https://w5s.bnamericas.com/bnamericas/site/img/logo-color.png",
            sugerido: true,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,21",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        }, {
            id: 755427572547,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,20",
            referencialMensual: "$5.129",
            valorAnual: "UF 2.14",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 390",
            transferenciaCheques: "UF 392"
        }, {
            id: 435575456,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,25",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        }, {
            id: 45236463234,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,28",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        } ];
        vm.agregarPaso = function() {
            vm.pasoExtra = 1;
        };
        vm.quitarPaso = function() {
            vm.pasoExtra = 0;
        };
        vm.seleccionar = function(v) {
            if (vm.seleccionados <= 4) {
                if (v) {
                    vm.seleccionados++;
                } else {
                    vm.seleccionados--;
                }
            }
        };
        vm.openAsideBeneficios = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/segurosNuevo/asides/aside-beneficiosCoberturas_tpl.html",
                animation: true,
                controller: "ModalPersonalesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideComparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/segurosNuevo/asides/aside-comparativo_tpl.html",
                animation: true,
                controller: "ModalPersonalesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalPersonalesCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.segurosAComparar = [ {
            tipo: "Estandar",
            asistenciaMedica: "UF 3",
            malUsoTransferencia: "UF 350",
            malUsoCheques: "UF 300",
            roboCedula: "UF 300",
            asistenciaRobo: "UF 4",
            asaltoCajero: "UF 4",
            compraProtegida: "UF 4",
            asistenciaLegal: "Ilimitada"
        }, {
            tipo: "Preferente",
            asistenciaMedica: "UF 3",
            malUsoTransferencia: "UF 350",
            malUsoCheques: "UF 300",
            roboCedula: "UF 300",
            asistenciaRobo: "UF 4",
            asaltoCajero: "UF 4",
            compraProtegida: "UF 4",
            asistenciaLegal: "Ilimitada"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.seguros-nuevo").controller("segurosNuevoCtrl", segurosNuevoCtrl).controller("ModalSegurosCtrl", ModalSegurosCtrl);
    function segurosNuevoCtrl($scope, $modal) {
        var vm = this;
        vm.mostrandoSimulacion = false;
        vm.esCliente = true;
        vm.simulacionStep2 = true;
        vm.simulacionStep3 = true;
        vm.pasoExtra = 0;
        vm.pasosCotizacion = false;
        vm.noCliente = true;
        vm.mostrandoSimulacion = false;
        vm.esCliente = true;
        vm.seguroPadres = false;
        vm.grupoFamiliar = false;
        vm.pagoOtroBanco = false;
        vm.aseguradoClienteNo = false;
        vm.aseguradoClienteSi = false;
        vm.pasoExtra = 0;
        vm.imc = false;
        vm.listaSeguros = [ "Seguro Protección Personal" ];
        vm.seguros = [ {
            id: 932739232237,
            img: "https://w5s.bnamericas.com/bnamericas/site/img/logo-color.png",
            sugerido: true,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,21",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        }, {
            id: 755427572547,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,20",
            referencialMensual: "$5.129",
            valorAnual: "UF 2.14",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 390",
            transferenciaCheques: "UF 392"
        }, {
            id: 435575456,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,25",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        }, {
            id: 45236463234,
            img: "http://www.sura.cl/SiteAssets/logo_sura.png",
            sugerido: false,
            titulo: "Plan Estándar",
            referencialUf: "UF 0,28",
            referencialMensual: "$5.529",
            valorAnual: "UF 2.24",
            ofertaPresencial: "Primeras dos cuotas sin costo",
            ofertaInternet: "Primeras cuatro cuotas sin costo",
            transferenciaTarjetas: "UF 350",
            transferenciaCheques: "UF 392"
        } ];
        vm.agregarPaso = function() {
            vm.pasoExtra = 1;
        };
        vm.quitarPaso = function() {
            vm.pasoExtra = 0;
        };
        vm.deseleccionar = function() {
            vm.seguros = {
                auto: false,
                perosnal: false,
                salud: false,
                viejes: false,
                vida: false,
                estudio: false,
                accidentes: false,
                robo: false,
                hogar: false
            };
            console.log("limpio :)");
        };
        $scope.mySeguro = {
            selected: {}
        };
        vm.segurosCatastroficos = [ {
            nombre: "Alteraciones congénitas",
            value: "alteracionesCongenitas"
        }, {
            nombre: "Amputaciones",
            value: "amputaciones"
        }, {
            nombre: "Asma",
            value: "asma"
        }, {
            nombre: "Desviación de columna vertebral",
            value: "desviacionColumnaVertebral"
        }, {
            nombre: "Discopatías",
            value: "discopatias"
        }, {
            nombre: "Enfermedad de chagas",
            value: "enfermedadChagas"
        }, {
            nombre: "Enfermedades a la tiroides",
            value: "enfermedadesTiroides"
        }, {
            nombre: "Enfermedades a las articulaciones",
            value: "enfermedadesArticulaciones"
        }, {
            nombre: "Enfermedades a ligamentos",
            value: "enfermedadesLigamentos"
        }, {
            nombre: "Enfermedades a los huesos",
            value: "enfermedadesHuesos"
        }, {
            nombre: "Enfermedades a los músculos",
            value: "enfermedadesMusculos"
        }, {
            nombre: "Enfermedades a tendones",
            value: "enfermedadesTendones"
        }, {
            nombre: "Enfermedades al colon",
            value: "enfermedadesColon"
        }, {
            nombre: "Enfermedades al hígado",
            value: "enfermedadesHigado"
        }, {
            nombre: "Enfermedades al páncreas",
            value: "enfermedadesPancreas"
        }, {
            nombre: "Enfermedades de transmisión sexual",
            value: "enfermedadesTransmisionSexual"
        }, {
            nombre: "Enfermedades gástricas",
            value: "enfermedadesGastricas"
        }, {
            nombre: "Enfermedades neurológicas",
            value: "enfermedadesNeurologicas"
        }, {
            nombre: "Enfermedades renales",
            value: "enfermedadRenales"
        }, {
            nombre: "Hernia vertebral",
            value: "herniaVertebral"
        }, {
            nombre: "Hígado graso",
            value: "higadoGraso"
        }, {
            nombre: "Intolerancia a la glucosa",
            value: "intoleranciaGlucosa"
        }, {
            nombre: "Problemas de audición o visión",
            value: "problemasAudicionVision"
        }, {
            nombre: "Problemas de la columna vertebral",
            value: "problemasColumnaVertebral"
        }, {
            nombre: "Resistencia a la insulina",
            value: "resistenciaInsulina"
        }, {
            nombre: "Sobrepeso u obesidad",
            value: "sobrepesoObesidad"
        }, {
            nombre: "Trastornos mentales y/o psiquiátricos",
            value: "trastornosMentalesPsiquiatricos"
        }, {
            nombre: "Triquinosis o hidatidosis",
            value: "triquinosisHidatidosis"
        } ];
        vm.listaRespaldo = [];
        $scope.dividirLista = function(l) {
            var j = 0;
            var ob = [];
            tope = 10;
            for (var i = 0; i < l.length; i++) {
                ob.push(l[i]);
                j++;
                if (j == tope) {
                    vm.listaRespaldo.push(ob);
                    ob = [];
                    j = 0;
                } else {
                    if (i + 1 == l.length) {
                        vm.listaRespaldo.push(ob);
                    }
                }
            }
        };
        $scope.dividirLista(vm.segurosCatastroficos);
        vm.openAsideBeneficios = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/seguros/segurosNuevo/asides/aside-beneficiosCoberturas_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalSegurosCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.segurosRefactor").controller("asideSegurosRefactor", asideSegurosRefactor);
    function asideSegurosRefactor($scope, $modal, $uibModal, $modalInstance) {
        var vm = this;
        vm.descripcionLimit = 25;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.seguro = [ {
            nombre: "Robo Contenido Auto",
            compania: "MAPFRE CIA DE SEGUROS DE CONTENIDO AUTO DOS",
            asegurado: "ROBO CONTENIDO AUTO",
            tipo: "ROBO: Prueba Riesgo",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        }, {
            nombre: "Oncológico Familiar",
            compania: "BANCHILE SEGUROS DE VIDA S.A",
            asegurado: "Titular 2 cargas",
            tipo: "SALUD: FABIOLA ANDREA CORNEJO",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        }, {
            nombre: "Soap 2017",
            compania: "HDI SEGUROS S.A",
            asegurado: "Plan Auto - Jeep Sw",
            tipo: "SEGURO OBLIGATORIO: KIA MOTOR",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE",
            nroSeguro: "1110002"
        }, {
            nombre: "Desgravamen Asociado",
            compania: "BANCHILE SEGUROS",
            asegurado: "",
            tipo: "",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.segurosRefactor").controller("segurosRefactorCtrl", segurosRefactorCtrl);
    function segurosRefactorCtrl($scope, $modal, $uibModal) {
        var vm = this;
        vm.descripcionLimit = 40;
        vm.openAsideSegurosContratados = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/seguros/segurosRefactor/asides/asideSegurosContratados_tpl.html",
                animation: true,
                controller: "asideSegurosRefactor",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.seguro = [ {
            nombre: "Robo Contenido Auto",
            compania: "MAPFRE CIA DE SEGUROS DE CONTENIDO AUTO DOS",
            asegurado: "ROBO CONTENIDO AUTO",
            tipo: "ROBO: Prueba Riesgo",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        }, {
            nombre: "Oncológico Familiar",
            compania: "BANCHILE SEGUROS DE VIDA S.A",
            asegurado: "Titular 2 cargas",
            tipo: "SALUD: FABIOLA ANDREA CORNEJO",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        }, {
            nombre: "Soap 2017",
            compania: "HDI SEGUROS S.A",
            asegurado: "Plan Auto - Jeep Sw",
            tipo: "SEGURO OBLIGATORIO: KIA MOTOR",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE",
            nroSeguro: "1110002"
        }, {
            nombre: "Desgravamen Asociado",
            compania: "BANCHILE SEGUROS",
            asegurado: "",
            tipo: "",
            desde: "23/01/2018",
            hasta: "23/01/2019",
            cuotas: "12",
            medioPago: "BANCO BICE / XXXX-XXXX-XXXX",
            nroSeguro: "11100020023012491231"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.simulacionCredito").controller("modalesSimulacionCreditoCtrl", modalesSimulacionCreditoCtrl);
    var vm = this;
    function modalesSimulacionCreditoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.simulacionCredito").controller("simulacionCreditoCtrl", simulacionCreditoCtrl);
    function simulacionCreditoCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.status = {
            isopenTasa: false
        };
        vm.isClose = true;
        vm.isHide = true;
        vm.showSimulador = true;
        vm.seeDetailsSimulation = true;
        vm.showRebaja = false;
        vm.selectTipoCredito = [ {
            name: "Tipo 1"
        }, {
            name: "Tipo 2"
        }, {
            name: "Tipo 3"
        }, {
            name: "Tipo 4"
        } ];
        vm.selectNumCuotas = [ {
            name: "Cuotas 1"
        }, {
            name: "Cuotas 2"
        }, {
            name: "Cuotas 3"
        }, {
            name: "Cuotas 4"
        } ];
        vm.selectMesesOne = [ {
            name: "MesOne 1"
        }, {
            name: "MesOne 2"
        }, {
            name: "MesOne 3"
        }, {
            name: "MesOne 4"
        } ];
        vm.selectMesesTwo = [ {
            name: "MesTwo 1"
        }, {
            name: "MesTwo 2"
        }, {
            name: "MesTwo 3"
        }, {
            name: "MesTwo 4"
        } ];
        vm.selectEmail = [ {
            name: "Mail 1"
        }, {
            name: "Mail 2"
        }, {
            name: "Mail 3"
        }, {
            name: "Mail 4"
        } ];
        vm.selectCuotasPagar = [ {
            name: "Cuotas 1"
        }, {
            name: "Cuotas 2"
        }, {
            name: "Cuotas 3"
        }, {
            name: "Cuotas 4"
        } ];
        vm.selectInstitucion = [ {
            name: "Institución 1"
        }, {
            name: "Institución 2"
        }, {
            name: "Institución 3"
        }, {
            name: "Institución 4"
        } ];
        vm.selectPlazo = [ {
            name: "Plazo 1"
        }, {
            name: "Plazo 2"
        }, {
            name: "Plazo 3"
        }, {
            name: "Plazo 4"
        } ];
        vm.selectCanalVenta = [ {
            name: "Canal 1"
        }, {
            name: "Canal 2"
        }, {
            name: "Canal 3"
        }, {
            name: "Canal 4"
        } ];
        vm.selectMotivo = [ {
            name: "Motivo 1"
        }, {
            name: "Motivo 2"
        }, {
            name: "Motivo 3"
        }, {
            name: "Motivo 4"
        } ];
        vm.demoListado = [ {
            dato1: "9254",
            dato2: "Vigente",
            dato3: "4/10",
            dato4: "15.000",
            dato5: "20.000",
            dato6: "15.000",
            dato7: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "Vigente",
            dato3: "4/10",
            dato4: "15.000",
            dato5: "20.000",
            dato6: "15.000",
            dato7: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "Vigente",
            dato3: "4/10",
            dato4: "15.000",
            dato5: "20.000",
            dato6: "15.000",
            dato7: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "Vigente",
            dato3: "4/10",
            dato4: "15.000",
            dato5: "20.000",
            dato6: "15.000",
            dato7: "15.000.000"
        } ];
        vm.condiciones = [ {
            dato1: "9254",
            dato2: "15.000",
            dato3: "0",
            dato4: "20.000",
            dato5: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "15.000",
            dato3: "0",
            dato4: "20.000",
            dato5: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "15.000",
            dato3: "0",
            dato4: "20.000",
            dato5: "15.000.000"
        }, {
            dato1: "9254",
            dato2: "15.000",
            dato3: "0",
            dato4: "20.000",
            dato5: "15.000.000"
        } ];
        vm.cambioCondiciones = [ {
            dato1: "Interés penal",
            dato2: "$ 84.000",
            dato3: "$ 21.000"
        }, {
            dato1: "Comisión prepago",
            dato2: "$ 45.000",
            dato3: "$ 0"
        }, {
            dato1: "Recargo cobranza",
            dato2: "$ 71.000",
            dato3: "$ 71.000"
        } ];
        $scope.openAsideSimulacionCredito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/asidesimulacion-credito01_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideSimulacionVenta = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/asidesimulacion-credito02_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideSimulacionComparacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/asidesimulacion-credito03_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideAutorizarSimulacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/aside-autorizar-simulacion_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideRechazarConReparo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/aside-rechazar-con-reparo_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideApelarSimulacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito/asides/aside-apelar-simulacion_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideAutorizarSimulacionRenegociado = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/asides/aside-autorizar-simulacion-credito-renegociado_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideAvalesSimulacionRenegociado = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito-renegociado/asides/aside-avales-simulacion-credito-renegociado_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideAvalesSimulacionRebajaTasa = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito-rebaja-tasa/asides/aside-avales-simulacion-credito-rebaja-tasa_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideVerDetalleSimulacionRebajaTasa = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/simulacion-credito/simulacion-credito-rebaja-tasa/asides/aside-ver-detalle-simulacion-credito-rebaja-tasa_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionBundle").controller("CreacionBundleAsidesCtrl", CreacionBundleAsidesCtrl);
    function CreacionBundleAsidesCtrl($scope, $window, $rootScope, $modal, $state) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        vm.demoListado = [ {
            nombre: "Cuenta Joven 1",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 2",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 3",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 4",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 5",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 6",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 7",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 8",
            codigo: "ATVH0005"
        }, {
            nombre: "Cuenta Joven 9",
            codigo: "ATVH0005"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionBundle").controller("CreacionBundleCtrl", CreacionBundleCtrl);
    function CreacionBundleCtrl($scope, $window, $rootScope, $modal, $state, $uibModal) {
        var vm = this;
        vm.stateCero = "creacion-bundle-parametros-basicos-cero";
        vm.stateAtributo = "creacion-bundle-parametros-basicos-atributos";
        vm.getState = function(state) {
            console.log(state);
            $state.go(state);
        };
        vm.openAsideVincularProductos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/taller-productos/creacion-bundle/asides/creacion-bundle-asides-vincular-productos_tpl.html",
                animation: true,
                controller: "CreacionBundleAsidesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVincularAtributos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/taller-productos/creacion-bundle/asides/creacion-bundle-asides-vincular-atributos_tpl.html",
                animation: true,
                controller: "CreacionBundleAsidesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDetalleAtributos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/taller-productos/creacion-bundle/asides/creacion-bundle-asides-detalle-atributos_tpl.html",
                animation: true,
                controller: "CreacionBundleAsidesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.demoListado = [ {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        }, {
            vinculado: "",
            nombre: "Código de Banco SBIF",
            codigo: "ATVH0005",
            descripcion: "Descrip. Código de Banco",
            tipo: "Selección simple",
            familia: "2"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionProductos").controller("CreacionProductosCtrl", CreacionProductosCtrl);
    function CreacionProductosCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.CreacionProductos").controller("CreacionProductoBaseCtrl", CreacionProductoBaseCtrl);
    function CreacionProductoBaseCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
        vm.selectFamilia = true;
        vm.familiaSelected = false;
        vm.selectProductoBase = false;
        vm.configuracionParametros = false;
        vm.productoCreado = false;
        vm.selectProductoBaseCatalogo = true;
        vm.parametrosBasicos = false;
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").controller("asidesFabricaProductosCtrl", asidesFabricaProductosCtrl);
    function asidesFabricaProductosCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").controller("tallerProductosCtrl", tallerProductosCtrl);
    function tallerProductosCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
        $scope.slide = "";
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        $scope.openAsideEliminarProd = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/fabrica-productos/asides/asideEliminarProducto_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").controller("productosBaseCtrl", productosBaseCtrl);
    function productosBaseCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
        $scope.openAsidePublicarProd = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/fabrica-productos/asides/asidePublicarProducto_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideEliminarCatac = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/fabrica-productos/asides/asideEliminarCatalogo_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").controller("productosCatalogoCtrl", productosCatalogoCtrl);
    function productosCatalogoCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
        $scope.slide = "";
        $rootScope.$on("$stateChangeStart", function() {
            $scope.slide = $scope.slide || "slide-left";
        });
        $rootScope.back = function() {
            $scope.slide = "slide-right";
            $window.history.back();
        };
        $rootScope.forward = function() {
            $scope.slide = "slide-left";
            $window.history.forward();
        };
        $scope.openAsidePublicarProd = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/fabrica-productos/asides/asidePublicarProducto_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideEliminarCatac = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/fabrica-productos/asides/asideEliminarCatalogo_tpl.html",
                animation: true,
                controller: "asidesFabricaProductosCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.gestionBundle").controller("asidesBundleCtrl", asidesBundleCtrl);
    function asidesBundleCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.gestionBundle").controller("gestionBundleCtrl", gestionBundleCtrl);
    function gestionBundleCtrl($scope, $modal) {
        var vm = this;
        $scope.openAsideEliminarBundle = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/gestion-bundle/asides/asideEliminarBundle_tpl.html",
                animation: true,
                controller: "asidesBundleCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsidePublicarBundle = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/gestion-bundle/asides/asidePublicarBundle_tpl.html",
                animation: true,
                controller: "asidesBundleCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.controlLimites").controller("asideProductorMantenedoresCtrl", asideProductorMantenedoresCtrl);
    var vm = this;
    function asideProductorMantenedoresCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        vm.demoListadoTres = [ {
            dato1: "56.571.854-8",
            dato2: "Empresa 1"
        }, {
            dato1: "36.884.554-k",
            dato2: "Empresa 2"
        }, {
            dato1: "16.374.254-1",
            dato2: "Empresa 3"
        }, {
            dato1: "6.824.614-2",
            dato2: "Empresa 4"
        } ];
        $scope.listadoSeleccionMultiple = [ {
            nombre: "Cuenta Joven 1",
            codigo: "TBCHCV005"
        }, {
            nombre: "Cuenta Joven 2",
            codigo: "TBCHCV005"
        }, {
            nombre: "Cuenta Joven 3",
            codigo: "TBCHCV005"
        }, {
            nombre: "Cuenta Joven 4",
            codigo: "TBCHCV005"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.TallerProductos").controller("productosMantenedoresCtrl", productosMantenedoresCtrl);
    function productosMantenedoresCtrl($scope, $window, $rootScope, $modal) {
        var vm = this;
        vm.demoListado = [ {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "1"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "2"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "3"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "4"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "5"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "6"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "7"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "8"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista",
            dato4: "Lorem ipsum dolor sit amet",
            dato5: "0",
            dato6: "Lorem ipsum dolor sit amet.pdf",
            dato7: "9"
        } ];
        vm.demoListado2 = [ {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "1"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "2"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "3"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "4"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "5"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "6"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "7"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "8"
        }, {
            dato1: "Código de Banco SBIF",
            dato2: "Selección simple",
            dato3: "Descrip. Código de Banco SBIF",
            dato4: "No vinculado",
            dato5: "Cuenta Corriente",
            dato6: "9"
        } ];
        vm.demoListado3 = [ {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "1"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "2"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "3"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "4"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "5"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "6"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "7"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "8"
        }, {
            dato1: "BanJoven",
            dato2: "TBCHCV001",
            dato3: "Cuenta Vista ",
            dato4: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            dato5: "9"
        } ];
        vm.demoListado4 = [ {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "2",
            dato6: "1"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "0",
            dato6: "2"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "3",
            dato6: "3"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "0",
            dato6: "4"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "5",
            dato6: "5"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "1",
            dato6: "6"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "0",
            dato6: "7"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "1",
            dato6: "8"
        }, {
            dato1: "Productos Seguro",
            dato2: "SE",
            dato3: "Role_tproductos_autorizar",
            dato4: "Role_tproductos_administrar",
            dato5: "3",
            dato6: "9"
        } ];
        vm.openAsideAgregarTarifa = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-agregar-tarifa_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarTarifa = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-modificar-tarifa_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarTarifa = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-eliminar-tarifa_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCrearAtributo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-crear-atributo_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVincularAtributo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-vincular-atributo_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideDesvincularAtributo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-desvincular-atributo_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarAtributo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-modificar-atributo_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarAtributo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-eliminar-atributo_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCrearCategoria = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-crear-categoria_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarCategoria = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-modificar-categoria_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarCategoria = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-eliminar-categoria_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCrearFamilia = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-crear-familia_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideModificarFamilia = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-modificar-familia_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEliminarFamilia = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/taller-productos/mantenedores/asides/aside-mantenedores-eliminar-familia_tpl.html",
                animation: true,
                controller: "asideProductorMantenedoresCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetaDebitoEmpresa").controller("modalTarjetaDebitoEmpresaCtrl", modalTarjetaDebitoEmpresaCtrl);
    var vm = this;
    function modalTarjetaDebitoEmpresaCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.TipoCuenta = {
            cuentas: [ "Cta Cte 590090005612345612 M/N", "Cta Cte 590090005612345614 M/N", "Cta Cte 590090005612345645 M/N", "Cta Cte 590090005612345641 M/N", "Cta Cte 590090005612345679 M/N", "Cta Cte 590090005612345678 M/N", "Cta Cte 590090005612345676 M/N", "Cta Cte 590090005612345634 M/N", "Cta Cte 590090005612345234 M/N", "Cta Cte 590090005612345227 M/N", "Cta Cte 590090005612345122 M/N", "Cta Cte 590090005612345680 M/N", "Cta Cte 590090005612344682 M/N", "Cta Cte 590090005612341069 M/N" ]
        };
        $scope.isVerMas = $scope.TipoCuenta.cuentas.length > 3 ? true : false;
        $scope.VerMas = function() {
            $scope.isVerMas = !$scope.isVerMas;
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        vm.listaOtroMonto = false;
        $scope.alerta = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Configuración amortización?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetaDebitoEmpresa").controller("tarjetaDebitoEmpresaCtrl", tarjetaDebitoEmpresaCtrl);
    function tarjetaDebitoEmpresaCtrl($scope, $modal) {
        var vm = this;
        $scope.openAsideCrearDebito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/tarjeta-debito-empresa/crear-tarjeta-empresa/asides/aside-crear-tarjeta-empresa_tpl.html",
                animation: true,
                controller: "modalTarjetaDebitoEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideMantencionDebito = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/tarjeta-debito-empresa/crear-tarjeta-empresa/asides/aside-mantencion-tarjeta-empresa_tpl.html",
                animation: true,
                controller: "modalTarjetaDebitoEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.ejemploData = {
            opciones: [ "opcion1", "opcion2", "opcion3", "opcion4", "opcion5" ],
            selecciones: [],
            placeholder: "Seleccionar rubros...",
            placeholderDisabled: "Bloqueado por condicion",
            placeholderVacio: "Sin rubros",
            msjSeleccionados: "Rubros seleccionados:",
            buscador: true,
            botones: true,
            textoAceptar: "Seleccionar",
            funcionAceptar: funcionAceptar,
            disabled: false
        };
        function funcionAceptar() {
            for (var i = $scope.ejemploData.selecciones.length - 1; i >= 0; i--) {
                var index = $scope.ejemploData.opciones.indexOf($scope.ejemploData.selecciones[i]);
                if (index > -1) {
                    $scope.ejemploData.opciones.splice(index, 1);
                }
            }
        }
    }
})();

(function() {
    angular.module("WebBancoChile.avanceTarjeta").controller("avanceTarjetaCtrl", avanceTarjetaCtrl).controller("ModalOCtrl", ModalOCtrl);
    function avanceTarjetaCtrl($modal) {
        var vm = this;
        vm.selectTipoAvance = [ {
            name: "Avance normal TEF"
        }, {
            name: "Avance normal caja"
        }, {
            name: "Avance cuotas TEF"
        }, {
            name: "Avance cuotas caja"
        } ];
        vm.formAvance = true;
        vm.resumenAvance = true;
        vm.certificado = false;
        vm.resumenAvanceCaja = true;
        vm.resumenCuotasTef = true;
        vm.resumenCuotasCaja = true;
    }
    function ModalOCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetasDetalle").controller("tarjetasDetalleCtrl", tarjetasDetalleCtrl).controller("ModalPagoTarjetaCtrl", ModalPagoTarjetaCtrl);
    function tarjetasDetalleCtrl($uibModal, $location, $window) {
        var vm = this;
        vm.statusOne = {
            isopenOne: false
        };
        vm.openDrop = function() {
            vm.statusOne.isopenOne = true;
        };
        vm.pagoTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-pago-tarjeta-nacional_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.pagoTarjetaInternacional = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-pago-tarjeta-internacional_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openDetalleTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-detalle-tarjeta_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openDisminucionCupo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-disminuir-cupo_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openActivarDesactivarCanales = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-activar-desactivar-canales_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openBloqueoRoboPerdida = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-bloqueo-robo-perdida_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openBloqueo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-bloqueo-tarjeta_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openActivarTarjeta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-activar-tarjeta_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleDeposito = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/detalle/asides/aside-detalle-deposito_tpl.html",
                animation: true,
                controller: "ModalPagoTarjetaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.goTarjetas = function() {
            $window.location.href = "./#/tarjetas/tarjetas";
        };
    }
    function ModalPagoTarjetaCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.pasoOne = true;
        $scope.pasoThree = false;
        $scope.bloquear = function() {
            $scope.pasoOne = false;
            $scope.pasoThree = true;
        };
    }
})();

(function() {
    angular.module("WebBancoChile.pac").controller("pacCtrl", pacCtrl).controller("ModalCtrlPAC", ModalCtrlPAC);
    function pacCtrl($uibModal) {
        var vm = this;
        vm.isCollapsedDropdown = false;
        vm.status = {
            isopen1: false,
            isopen2: false,
            isopen3: false,
            isopen4: false
        };
        vm.collapsed = {
            dropdown1: false,
            dropdown2: false,
            dropdown3: false,
            dropdown4: false
        };
        vm.data = {
            pagos: [ {
                servicio: "Agua",
                empresa: "Aguas Andinas S.A.",
                identificador: "1123992942814021",
                fecha: "12/07/2017",
                estado: "Efectuado",
                monto: "$ 31.739"
            }, {
                servicio: "Gas",
                empresa: "Metrogas",
                identificador: "8972135879147204",
                fecha: "12/07/2017",
                estado: "Efectuado",
                monto: "$ 13.827"
            } ]
        };
        vm.suspenderPac = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-suspender-pac_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.modificarSuspension = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-modificar-suspension-pac_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.modificarLimite = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-modificar-limite-pac_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.eliminarPac = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-eliminar-pac_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.inscribirPac = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-inscribir-pac_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.enviarCartola = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/tarjetas/pac/asides/aside-enviar-cartola_tpl.html",
                animation: true,
                controller: "ModalCtrlPAC",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrlPAC($scope, $modalInstance, $timeout) {
        $scope.inscribir = true;
        $scope.enviarCopia = false;
        $scope.eliminar = true;
        $scope.modificar = true;
        $scope.modificarSuspension = true;
        $scope.suspender = true;
        $scope.dataSelect = {
            options: [ "opcion1", "opcion2", "opcion3" ]
        };
        $scope.inscribir = function() {
            $scope.inscribir = false;
            $scope.enviarCopia = true;
        };
        $scope.inscribirOtro = function() {
            $scope.inscribir = true;
            $scope.enviarCopia = false;
            $scope.enviado = false;
        };
        $scope.eliminarPac = function() {
            $scope.eliminar = false;
        };
        $scope.modificarPac = function() {
            $scope.modificar = false;
        };
        $scope.modificarSuspensionPac = function() {
            $scope.modificarSuspension = false;
        };
        $scope.suspenderPac = function() {
            $scope.suspender = false;
        };
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.tarjetas").controller("tarjetasCtrl", tarjetasCtrl).controller("ModalCtrl", ModalCtrl);
    function tarjetasCtrl($uibModal) {
        var vm = this;
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.testFront").controller("testFrontCtrl", testFrontCtrl);
    function testFrontCtrl($modal, $uibModal) {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.busqueda_transversal").controller("busqueda_transversalCtrl", busqueda_transversalCtrl);
    function busqueda_transversalCtrl() {
        var vm = this;
        vm.busquedaRut = [ {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle"
        } ];
        vm.busquedaProducto = [ {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        }, {
            rut: "12.828.271-3",
            nombre: "Anastasia Paula Derresistopulus Carva",
            cod: 9812493649364,
            producto: "Tarjeta de Crédito"
        }, {
            rut: "11.642.341-3",
            nombre: "Maria Belen Ripa De La Calle",
            cod: 0x6ddc41df229ff800,
            producto: "Crédito de Consumo"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.creditos").controller("creditosCtrl", creditosCtrl);
    function creditosCtrl($modal, $uibModal) {
        var vm = this;
        vm.status = {
            isopenDownload: false
        };
        vm.openAsideMantencionPagoCredito = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/creditos/asides/aside-mantencion-pago-credito_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEnviarResumen = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/creditos/asides/enviarResumen_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsidePagar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/creditos/asides/aside-pagar_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCertificadoLey = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/creditos/asides/aside-certificado-ley_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function ModalCtrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.cuentas").controller("cuentasCtrl", cuentasCtrl);
    function cuentasCtrl($modal, $uibModal) {
        var vm = this;
        vm.status = {
            isopenDownload: false
        };
        vm.openAsideEnvioEmail = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/cuentas/asides/aside-envio-email_tpl.html",
                animation: true,
                controller: "ModalCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.v360").controller("Aside360Ctrl", Aside360Ctrl);
    function Aside360Ctrl($scope, $modalInstance, $timeout) {
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
        $scope.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        $scope.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        $scope.format = $scope.formats[0];
    }
})();

(function() {
    angular.module("WebBancoChile.estadoSituacion").controller("estadoSituacionCtrl", estadoSituacionCtrl);
    function estadoSituacionCtrl($modal, $uibModal) {
        var vm = this;
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectPlatform = [ {
            name: "Todas"
        }, {
            name: "Centro de Negocios"
        } ];
        vm.selectPlatform.selected = {
            name: "Todas"
        };
        vm.selectObject = [ {
            name: "CDP"
        }, {
            name: "DAP"
        }, {
            name: "Visión 360"
        } ];
        vm.selectObject.selected = {
            name: "CDP"
        };
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
        vm.openAsideEmpleos = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/estado-situacion/asides/empleos_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.mandatoContrato").controller("mandatoContratoCtrl", mandatoContratoCtrl);
    function mandatoContratoCtrl($modal, $uibModal) {
        var vm = this;
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectPlatform = [ {
            name: "Todas"
        }, {
            name: "Centro de Negocios"
        } ];
        vm.selectPlatform.selected = {
            name: "Todas"
        };
        vm.selectObject = [ {
            name: "CDP"
        }, {
            name: "DAP"
        }, {
            name: "Visión 360"
        } ];
        vm.selectObject.selected = {
            name: "CDP"
        };
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
        vm.openAsideEstadoCivil = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/estadoCivil_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.simulacionCredito").controller("modalesSimulacionCreditoCtrl", modalesSimulacionCreditoCtrl);
    var vm = this;
    function modalesSimulacionCreditoCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.prepago").controller("prepagoCtrl", simulacionCreditoCtrl);
    function simulacionCreditoCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.status = {
            isopenTasa: false
        };
        vm.isClose = true;
        vm.isHide = true;
        vm.showSimulador = true;
        vm.seeDetailsSimulation = true;
        vm.showRebaja = false;
        vm.selectTipoCredito = [ {
            name: "Total"
        }, {
            name: "Parcial"
        } ];
        vm.selectNumCuotas = [ {
            name: "Cuotas 1"
        }, {
            name: "Cuotas 2"
        }, {
            name: "Cuotas 3"
        }, {
            name: "Cuotas 4"
        } ];
        vm.selectMesesOne = [ {
            name: "MesOne 1"
        }, {
            name: "MesOne 2"
        }, {
            name: "MesOne 3"
        }, {
            name: "MesOne 4"
        } ];
        vm.selectMesesTwo = [ {
            name: "MesTwo 1"
        }, {
            name: "MesTwo 2"
        }, {
            name: "MesTwo 3"
        }, {
            name: "MesTwo 4"
        } ];
        vm.selectEmail = [ {
            name: "Mail 1"
        }, {
            name: "Mail 2"
        }, {
            name: "Mail 3"
        }, {
            name: "Mail 4"
        } ];
        vm.selectCuotasPagar = [ {
            name: "Cuotas 1"
        }, {
            name: "Cuotas 2"
        }, {
            name: "Cuotas 3"
        }, {
            name: "Cuotas 4"
        } ];
        vm.selectInstitucion = [ {
            name: "Institución 1"
        }, {
            name: "Institución 2"
        }, {
            name: "Institución 3"
        }, {
            name: "Institución 4"
        } ];
        vm.selectPlazo = [ {
            name: "Plazo 1"
        }, {
            name: "Plazo 2"
        }, {
            name: "Plazo 3"
        }, {
            name: "Plazo 4"
        } ];
        vm.selectCanalVenta = [ {
            name: "Canal 1"
        }, {
            name: "Canal 2"
        }, {
            name: "Canal 3"
        }, {
            name: "Canal 4"
        } ];
        vm.selectMotivo = [ {
            name: "Motivo 1"
        }, {
            name: "Motivo 2"
        }, {
            name: "Motivo 3"
        }, {
            name: "Motivo 4"
        } ];
        $scope.openAsideComparativo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/v360/prepago/asides/asidesimulacion-comparativo_tpl.html",
                animation: true,
                controller: "modalesSimulacionCreditoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.v360").controller("productosCtrl", productosCtrl);
    function productosCtrl($modal, $uibModal) {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.resumenProductos").controller("resumenProductosCtrl", resumenProductosCtrl);
    function resumenProductosCtrl() {
        var vm = this;
        vm.cuentas = [ {
            dato1: "Cta Cte ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "23/07/2015",
            dato4: "M $ 1500"
        }, {
            dato1: "Cta Cte ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "23/07/2015",
            dato4: "M $ 1500"
        }, {
            dato1: "Cta Cte ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "23/07/2015",
            dato4: "M $ 1500"
        }, {
            dato1: "Cta Cte ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "23/07/2015",
            dato4: "M $ 1500"
        }, {
            dato1: "Cta Cte ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "23/07/2015",
            dato4: "M $ 1500"
        } ];
        vm.rotativos = [ {
            dato1: "Línea ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "M $ 1500 / M USD 15",
            dato4: "M $ 1500 / M USD 15",
            dato5: "M $ 1500 / M USD 15"
        }, {
            dato1: "Línea ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "M $ 1500 / M USD 15",
            dato4: "M $ 1500 / M USD 15",
            dato5: "M $ 1500 / M USD 15"
        }, {
            dato1: "Línea ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "M $ 1500 / M USD 15",
            dato4: "M $ 1500 / M USD 15",
            dato5: "M $ 1500 / M USD 15"
        }, {
            dato1: "Línea ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "M $ 1500 / M USD 15",
            dato4: "M $ 1500 / M USD 15",
            dato5: "M $ 1500 / M USD 15"
        }, {
            dato1: "Línea ● 000 1234 56789 4321 5678 M/N",
            dato2: "Activo",
            dato3: "M $ 1500 / M USD 15",
            dato4: "M $ 1500 / M USD 15",
            dato5: "M $ 1500 / M USD 15"
        } ];
        vm.creditos = [ {
            dato1: "Hipotecario ● 9876 7362882 238282",
            dato2: "Inactivo",
            dato3: "M $5100",
            dato4: "M $3500",
            dato5: "M $230 ● 28/36"
        }, {
            dato1: "Hipotecario ● 9876 7362882 238282",
            dato2: "Inactivo",
            dato3: "M $5100",
            dato4: "M $3500",
            dato5: "M $230 ● 28/36"
        }, {
            dato1: "Hipotecario ● 9876 7362882 238282",
            dato2: "Inactivo",
            dato3: "M $5100",
            dato4: "M $3500",
            dato5: "M $230 ● 28/36"
        }, {
            dato1: "Hipotecario ● 9876 7362882 238282",
            dato2: "Inactivo",
            dato3: "M $5100",
            dato4: "M $3500",
            dato5: "M $230 ● 28/36"
        }, {
            dato1: "Hipotecario ● 9876 7362882 238282",
            dato2: "Inactivo",
            dato3: "M $5100",
            dato4: "M $3500",
            dato5: "M $230 ● 28/36"
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.v360").controller("productosCtrl", productosCtrl);
    function productosCtrl($modal, $uibModal) {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.v360").controller("Aside360Ctrl", Aside360Ctrl);
    function Aside360Ctrl($scope, $modalInstance, $timeout) {
        var vm = this;
        vm.isClick = false;
        vm.isClickTwo = false;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $timeout(function() {
            $scope.$broadcast("rebuild:me");
        });
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
        $scope.disabled = function(date, mode) {
            return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
        };
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.datepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            showWeeks: false
        };
        $scope.formats = [ "dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate" ];
        $scope.format = $scope.formats[0];
        $scope.vinculacion = [ {
            vinculacion: "Segmento",
            actual: "Vinculado",
            anterior: "Básico",
            variacion: "+20"
        }, {
            vinculacion: "Puntaje",
            actual: "50",
            anterior: "30",
            variacion: "+20"
        } ];
        $scope.principalidad = [ {
            principalidad: "Segmento",
            ctaCte: "Vinculado",
            deuda: "Básico"
        }, {
            principalidad: "Nº Bancos",
            ctaCte: "3",
            deuda: "3"
        } ];
        $scope.infoFinanciera = [ {
            tipoDeuda: "Comercial",
            deudaSBIF: "-",
            deudaBanco: "-",
            penetracion: "-",
            gap: "-"
        }, {
            tipoDeuda: "Consumo",
            deudaSBIF: "-",
            deudaBanco: "-",
            penetracion: "-",
            gap: "-"
        }, {
            tipoDeuda: "Vivienda",
            deudaSBIF: "-",
            deudaBanco: "-",
            penetracion: "-",
            gap: "-"
        }, {
            tipoDeuda: "Leasing",
            deudaSBIF: "-",
            deudaBanco: "-",
            penetracion: "-",
            gap: "-"
        } ];
        $scope.garantiasReales = [ {
            tipoGarantia: "Hipotecas",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Prendas",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Acciones",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Stand by Letter of Credit",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Leasing",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Estatales",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Otras garantías reales",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        } ];
        $scope.garantiasPersonales = [ {
            tipoGarantia: "Avales",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        }, {
            tipoGarantia: "Otras garantías",
            cantidad: "2",
            valorComercial: "100",
            valorLiquidacion: "80"
        } ];
        $scope.volumenRentabilidad = [ {
            tipo: "Colocaciones",
            individual: "100",
            individualVariacion: "10",
            grupal: "100",
            grupalVariacion: "10"
        }, {
            tipo: "Captaciones Vistas",
            individual: "30",
            individualVariacion: "24",
            grupal: "30",
            grupalVariacion: "10"
        }, {
            tipo: "Captaciones Plazo",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        } ];
        $scope.margenRentabilidad = [ {
            tipo: "Colocaciones",
            individual: "100",
            individualVariacion: "10",
            grupal: "100",
            grupalVariacion: "10"
        }, {
            tipo: "Captaciones Vistas",
            individual: "30",
            individualVariacion: "24",
            grupal: "30",
            grupalVariacion: "10"
        }, {
            tipo: "Captaciones Plazo",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Comisiones",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Filiales y otros",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Margen Bruto",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Gasto Operacionales",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Gastos por Riesgo",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Otros ajustes y gastos",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Margen Neto",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        } ];
        $scope.indicadoresRentabilidad = [ {
            tipo: "Spread Colocaciones",
            individual: "100",
            individualVariacion: "10",
            grupal: "100",
            grupalVariacion: "10"
        }, {
            tipo: "Spread Vistas",
            individual: "30",
            individualVariacion: "24",
            grupal: "30",
            grupalVariacion: "10"
        }, {
            tipo: "Spread Captaciones Plazo",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Margen Bruto / Colocaciones (ROA)",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Cross Sell",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Gasto Cartera",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Spread Colocaciones neto de Riesgo",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "Margen neto / Colocaciones",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "ROE antes gasto de Cartera",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        }, {
            tipo: "ROE después gasto de Cartera",
            individual: "30",
            individualVariacion: "56",
            grupal: "30",
            grupalVariacion: "56"
        } ];
        $scope.comportamiento = [ {
            tipo: "Comportamiento individual",
            info: "Actualizado al 23/09/2017",
            estado: "vigente"
        }, {
            tipo: "Comportamiento grupo",
            info: "Actualizado al 23/09/2017",
            estado: "vigente"
        }, {
            tipo: "Comportamiento de riesgo",
            info: "A6 • Actualizado al 23/09/2017",
            estado: ""
        }, {
            tipo: "Provisiones",
            info: "M $ 100 / 14%",
            estado: ""
        }, {
            tipo: "Vigilancia",
            info: "V1 • Actualizado al 23/09/2017",
            estado: ""
        } ];
        $scope.rating = [ {
            tipo: "Rating individual",
            info: "7.5 • Actualizado al 23/09/2017",
            estado: ""
        }, {
            tipo: "Estado rating individual",
            info: "Histórico",
            estado: "error"
        }, {
            tipo: "Rating grupo",
            info: "6.5 • Actualizado al 23/09/2017",
            estado: ""
        }, {
            tipo: "Estado rating grupo",
            info: "Histórico",
            estado: "error"
        } ];
        $scope.riesgo = [ {
            tipo: "Aprobación último MAC Grupal • Vencimiento",
            info: "23/09/2017 • 23/09/2017",
            estado: ""
        }, {
            tipo: "Último informe de riesgo individual",
            info: "Acero • Actualizado al 23/09/2017",
            estado: "error"
        }, {
            tipo: "Informe sectorial",
            info: "Sí • Actualizado al 23/09/2017",
            estado: ""
        }, {
            tipo: "Clasificación internacional",
            info: "BB+ • Actualizado al 23/09/2017",
            estado: "error"
        } ];
        $scope.marcas = [ {
            tipo: "PEP",
            info: "",
            estado: "success"
        }, {
            tipo: "Funcionario",
            info: "",
            estado: "error"
        }, {
            tipo: "Accionista Banco",
            info: "",
            estado: "error"
        }, {
            tipo: "Relacionado Banco",
            info: "",
            estado: "error"
        } ];
        $scope.inhabilidades = [ {
            tipo: "PEP",
            info: "Sí • Agustina Rosa Céspedes Toledo",
            estado: ""
        }, {
            tipo: "Riesgo reputacional",
            info: "Sí",
            estado: ""
        }, {
            tipo: "Inhabilidad riesgo",
            info: "DGC1",
            estado: ""
        }, {
            tipo: "Descripción",
            info: "Pago con condonación",
            estado: ""
        }, {
            tipo: "Detalle",
            info: "Al validar ingresos con empleador, indican que trabaja en la empresa pero que los ingresos declarados no corresponden",
            estado: ""
        }, {
            tipo: "Jefatura responsable",
            info: "Rafael Smith",
            estado: ""
        } ];
    }
})();

(function() {
    angular.module("WebBancoChile.v360").controller("v360Ctrl", v360Ctrl);
    function v360Ctrl($modal, $uibModal) {
        var vm = this;
        vm.status = {
            excelOne: false
        };
        vm.status = {
            excelTwo: false
        };
        vm.order = function(predicate, reverse) {
            vm.friends = orderBy(predicate, reverse);
        };
        vm.selectPlatform = [ {
            name: "Todas"
        }, {
            name: "Centro de Negocios"
        } ];
        vm.selectPlatform.selected = {
            name: "Todas"
        };
        vm.selectObject = [ {
            name: "CDP"
        }, {
            name: "DAP"
        }, {
            name: "Visión 360"
        } ];
        vm.selectObject.selected = {
            name: "CDP"
        };
        vm.selectRol = [ {
            name: "Todos"
        }, {
            name: "Rol Uno"
        }, {
            name: "Rol 2"
        } ];
        vm.selectRol.selected = {
            name: "Todos"
        };
        vm.openAsideEstadoCivil = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/estadoCivil_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideGarantiasViegentes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/garantiasVigentes_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAntiguedadCliente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/antiguedadCliente_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideContactabilidadFono = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/contactabilidad-fonos_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideContactabilidadEmail = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/contactabilidad-email_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideContactabilidadDirecciones = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/contactabilidad-direcciones_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideContactabilidadResumen = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/contactabilidad-resumen_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCuentas = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/cuentas_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideVinculacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/vinculacion_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideComportamiento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/comportamientoRiesgo_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRentabilidadSaldo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/rentabilidadSaldo_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsidePlanTarifario = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/planTarifario_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSegmento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/segmento_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideExperiencia = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/experiencia_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCampana = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/campanas_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideOportunidad = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/oportunidad_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideSolicitudes = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/solicitudes_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideProblema = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/problema_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRemuneraciones = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/remuneraciones_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideEjecutivo = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/ejecutivo_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideInversiones = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/inversiones_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideRenta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/renta_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCredito = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides/creditos-consumo_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideFichaInversion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ficha-inversiones/asides/aside-ficha-inversiones-01_tpl.html",
                animation: true,
                controller: "AsidesfichaInversionesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoSegmento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-segmento_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoPlanTarifario = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-plan-tarifario_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoVinculacion = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-vinculacion_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoRentabilidad = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-rentabilidad_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoGarantias = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-garantias_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoComportamiento = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-comportamiento_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoContactabilidadDetalle1 = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-contactabilidad-detalle1_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideNuevoContactabilidadDetalle2 = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/v360/v360/asides-nuevos/aside-contactabilidad-detalle2_tpl.html",
                animation: true,
                controller: "Aside360Ctrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vinculacion").controller("vinculacionCtrl", vinculacionCtrl);
    function vinculacionCtrl() {
        var vm = this;
    }
})();

(function() {
    angular.module("WebBancoChile.ventaEmpresa").controller("ventaEmpresaCtrl", ventaEmpresaCtrl).controller("asidesVentaEmpresaCtrl", asidesVentaEmpresaCtrl);
    function ventaEmpresaCtrl($scope, $modal) {
        var vm = this;
        vm.warningProductos = true;
        vm.msjeAgregar = true;
        vm.productoAgregado = true;
        vm.familiar = false;
        vm.bipersonal = false;
        $scope.comentarios = [ {
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp "
        } ];
        vm.documentos = [ {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: false,
            bajar: true
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: false,
            bajar: true
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        } ];
        vm.auditoria = [ {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Oportunidad",
            producto: "Cuenta Vista",
            campo: "ID",
            operacion: "Nuevo registro",
            valorAnterior: "-",
            valorNuevo: "Creada"
        }, {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Producto",
            producto: "Credito Consumo, Cuenta Vista",
            campo: "BCH Sales Slage",
            operacion: "Modificar",
            valorAnterior: "Creada",
            valorNuevo: "En Configuración"
        }, {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Producto",
            producto: "Credito Consumo",
            campo: "",
            operacion: "Nuevo registro",
            valorAnterior: "En Configuración",
            valorNuevo: "En apelación"
        } ];
        vm.tipoCuentas = [ {
            cuentas: [ "Cuenta Vista Directa", "Cuenta Vista Familia" ],
            ahorro: [ "Cuenta Ahorro Giro Incondicional", "Cuenta Ahorro Giro Incondicional Diferido", "Cuenta Ahorro Armada" ]
        } ];
        vm.representantes = [ {
            rut: "12.324.125-2",
            representante: false,
            patrocinador: false,
            nombre: "Andrea Veronica",
            apellidoPat: "Sarmiento",
            apellidoMat: "Carva",
            parentesco: "Madre",
            direccion: "Av Tobalaba 3456, depto 808, Providencia"
        } ];
        vm.AsideFacilitador = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-facilitador_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDatosAdicionales = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-datos-adicionales_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAdicionalesTarjetas = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-adicionales-tarjetas_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDatosAdicionalesBancaPrivada = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-datos-adicionales-banca-privada_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRepresentantes = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-representantes_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleProducto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-detalle-producto_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleProductos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-detalle-productos_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideCursar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-cursar_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideReparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-reparar_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRepararVisado = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-reparar-visado_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRechazar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-rechazar_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAprobar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-aprobar_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideInhabilidades = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-inhabilidades_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAnular = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-anular_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAval = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-aval_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDatosProducto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-datos-producto_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideUsuarioTarjeta = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-empresa/contratar/asides/aside-usuario-tarjeta_tpl.html",
                animation: true,
                controller: "asidesVentaEmpresaCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function asidesVentaEmpresaCtrl($scope) {
        var vm = this;
        vm.editable = false;
        $scope.facilitadores = [ {
            editar: false,
            rutVendedor: "4.234.123-4",
            oficinaRelacionamiento: "000 Casa Matriz",
            oficinas: [ "000 Casa Matriz", "001 Sucursal 1", "001 Sucursal 2" ]
        } ];
        $scope.alertaRepresentante = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Rep.Legal y/o Patrocinante?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
        $scope.representantes = [ {
            rut: "12.324.125-2",
            representante: false,
            patrocinador: false,
            nombre: "Andrea Veronica",
            apellidoPat: "Sarmiento",
            apellidoMat: "Carva",
            parentesco: "Madre",
            direccion: "Av Tobalaba 3456, depto 808, Providencia",
            genero: "Femenino",
            civil: "Casada",
            email: "francisca@gmail.com",
            telefono: "+56 9 12345678"
        } ];
        $scope.parentescos = [ "Padre", "Madre", "Hermano", "Otro" ];
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.done = function() {
            $modalInstance.close();
        };
        vm.editar = function() {
            vm.editable = true;
            console.log(vm.editable);
        };
        vm.guardar = function() {
            vm.editable = false;
            console.log(vm.editable);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.previsado").controller("previsadoCtrl", previsadoCtrl).controller("asideModalRepresentantesCtrl", asideRepresentantesCtrl);
    function previsadoCtrl($scope, $modal) {
        var vm = this;
        vm.adjuntos = false;
        vm.adjuntar = false;
        vm.action01 = false;
        vm.modalAdjuntar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/previsado/asides/aside-adjuntar_tpl.html",
                animation: true,
                controller: "asideModalRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function asideRepresentantesCtrl($scope) {
        var vm = this;
        vm.editable = false;
        vm.editar = function() {
            vm.editable = true;
            console.log(vm.editable);
        };
        vm.guardar = function() {
            vm.editable = false;
            console.log(vm.editable);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").controller("asideCaracteristicasProducto", asideCaracteristicasProducto);
    function asideCaracteristicasProducto($scope, $modal, $uibModal, $modalInstance) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").controller("caracteristicasProductoConfig", caracteristicasProductoConfig);
    function caracteristicasProductoConfig($scope, $modal, $uibModal) {
        var vm = this;
        vm.openAsideTarjetasCredito = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-tarjetas-credito_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAhorroNominalGiroDiferido = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cuenta-ahorro-nominal-giro-diferido_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAhorroNominalGiroIncondicional = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cuenta-ahorro-nominal-giro-incondicional_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAhorroReajustableGiroDiferido = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cuenta-ahorro-reajustable-giro-diferido_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAhorroReajustableGiroDiferidoConvenioArmada = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cuenta-ahorro-reajustable-giro-diferido-convenio-armada_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideAhorroReajustableGiroIncondicional = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cuenta-ahorro-reajustable-giro-incondicional_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaCorrienteTarjetaDebitoCajero = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-corriente-tarjeta-debito-cajero_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideLineaCreditoAutomaticaCtaCorriente = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-linea-credito-automatica-cta-corriente_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaCorrienteMonedaNacionalPersonas = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-corriente-moneda-nacional-personas_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaCorrienteLineaCreditoAutomatico = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-corriente-linea-credito-automatico_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaVista = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-vista_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaVistaBECdirecta = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-vista-bec-directa_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaVistaBECfamiliar = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-vista-bec-familiar_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCtaVistaBCCHILECuentaChile = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/ventas-personas/caracteristicas-producto/asides/aside-cta-vista-bcchile-cuenta-chile_tpl.html",
                animation: true,
                controller: "asideCaracteristicasProducto",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").controller("modalesFacilitadorCtrl", modalesFacilitadorCtrl);
    var vm = this;
    function modalesFacilitadorCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.facilitadores = [ {
            editar: false,
            rutVendedor: "4.234.123-4",
            oficinaRelacionamiento: "000 Casa Matriz",
            oficinas: [ "000 Casa Matriz", "001 Sucursal 1", "001 Sucursal 2" ]
        } ];
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").controller("modalesRepresentantesCtrl", modalesRepresentantesCtrl);
    function modalesRepresentantesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.representantes = [ {
            rut: "12.324.125-2",
            representante: false,
            patrocinador: false,
            nombre: "Andrea Veronica",
            apellidoPat: "Sarmiento",
            apellidoMat: "Carva",
            parentesco: "Madre",
            direccion: "Av Tobalaba 3456, depto 808, Providencia",
            genero: "Femenino",
            civil: "Casada",
            email: "francisca@gmail.com",
            telefono: "+56 9 12345678"
        } ];
        $scope.parentescos = [ "Padre", "Madre", "Hermano", "Otro" ];
        $scope.agregaRepresentante = false;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.done = function() {
            $modalInstance.close();
        };
        $scope.alertaRepresentante = function(type, status) {
            swal({
                title: "Perderá trabajo en curso",
                text: "¿Está seguro que desea abandonar Rep.Legal y/o Patrocinante?",
                type: "warning",
                customClass: "sweet-modales",
                showCancelButton: true,
                animation: "slide-from-top",
                confirmButtonColor: "#002058",
                confirmButtonText: "Abandonar",
                cancelButtonText: "Volver",
                closeOnConfirm: false,
                closeOnCancel: true
            }, function(isConfirm, $modalInstance, $scope) {
                if (isConfirm) {
                    $modalInstance.close();
                }
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.contratarProducto").controller("contratarProductoNewCtrl", contratarProductoNewCtrl).controller("asideModalRepresentantesCtrl", asideRepresentantesCtrl);
    function contratarProductoNewCtrl($scope, $modal) {
        var vm = this;
        vm.warningProductos = true;
        vm.msjeAgregar = true;
        vm.productoAgregado = true;
        vm.familiar = false;
        vm.bipersonal = false;
        $scope.comentarios = [ {
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp "
        }, {
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp "
        }, {
            comentario: "Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se expresa acerca de algo o alguien. Esto es un comentario, un Juicio, opinión u observación personal que se hace o se kdjfnl fkf oasihfosa fisajf saj fisajf ipsafioj spfjsapf jpsaj fposajfposa fojsaopf sapof psofj poajf pdasjfpoasjd fpoksa pofke pof jpsaojf posaj fposajdpfo dsapfj podfj podsaj fpoasj pofj apdsfjoidajfd fld ifjdpifjpdj fpdjfpodjfp jdpfojdpofj pdofjpdsj fpsodj pjp "
        } ];
        vm.documentos = [ {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: false,
            bajar: true
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: false,
            bajar: true
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        }, {
            producto: "Cuenta Vista Familiar",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: false,
            ver: true,
            bajar: false
        }, {
            producto: "Oportunidad",
            tipoDocumento: "Regularización de Visado",
            archivo: "IFIN0012201610F22.pdf",
            usuario: "ftapia",
            fecha: "15/11/2017 · 14:15",
            eliminar: true,
            ver: true,
            bajar: false
        } ];
        vm.auditoria = [ {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Oportunidad",
            producto: "Cuenta Vista",
            campo: "ID",
            operacion: "Nuevo registro",
            valorAnterior: "-",
            valorNuevo: "Creada"
        }, {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Producto",
            producto: "Credito Consumo, Cuenta Vista",
            campo: "BCH Sales Slage",
            operacion: "Modificar",
            valorAnterior: "Creada",
            valorNuevo: "En Configuración"
        }, {
            fecha: "01/11/2016 · 17:20",
            usuario: "fgarcia",
            componente: "Producto",
            producto: "Credito Consumo",
            campo: "",
            operacion: "Nuevo registro",
            valorAnterior: "En Configuración",
            valorNuevo: "En apelación"
        } ];
        vm.tipoCuentas = [ {
            cuentas: [ "Cuenta Vista Directa", "Cuenta Vista Familia" ],
            ahorro: [ "Cuenta Ahorro Giro Incondicional", "Cuenta Ahorro Giro Incondicional Diferido", "Cuenta Ahorro Armada" ]
        } ];
        vm.representantes = [ {
            rut: "12.324.125-2",
            representante: false,
            patrocinador: false,
            nombre: "Andrea Veronica",
            apellidoPat: "Sarmiento",
            apellidoMat: "Carva",
            parentesco: "Madre",
            direccion: "Av Tobalaba 3456, depto 808, Providencia"
        } ];
        vm.AsideFacilitador = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-facilitador_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDatosAdicionales = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-datos-adicionales-v2_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRepresentantes = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-representantes_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleProducto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-detalle-producto_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleProductos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-detalle-productos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideReferencias = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-referencias_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDocumentos = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-documentos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideSolicitudAprobacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-solicitud-aprobacion_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideReparar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-reparar_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRepararVisado = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-reparar-visado_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideRechazar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-rechazar_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAprobarNormal = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-aprobar-normal_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAprobarRiesgo = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-aprobar-riesgo_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideInhabilidades = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-inhabilidades_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDerivar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-derivar_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAnular = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-anular_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideEliminarDocto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-eliminar-documentos_tpl.html",
                animation: true,
                controller: "modalesFacilitadorCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAval = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-aval_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDatosProducto = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-datos-producto_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideBeneficiarioSeguro = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-beneficiarios-seguro_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideAdicionalesTarjetas = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-adicionales-tarjetas_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideDetalleSimulacion = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-detalle-simulacion_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.asideActivar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/contratar/asides/aside-activar_tpl.html",
                animation: true,
                controller: "modalesRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function asideRepresentantesCtrl($scope) {
        var vm = this;
        vm.editable = false;
        vm.editar = function() {
            vm.editable = true;
            console.log(vm.editable);
        };
        vm.guardar = function() {
            vm.editable = false;
            console.log(vm.editable);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.previsado").controller("previsadoCtrl", previsadoCtrl).controller("asideModalRepresentantesCtrl", asideRepresentantesCtrl);
    function previsadoCtrl($scope, $modal) {
        var vm = this;
        vm.adjuntos = false;
        vm.adjuntar = false;
        vm.action01 = false;
        vm.modalAdjuntar = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/ventas-personas/previsado/asides/aside-adjuntar_tpl.html",
                animation: true,
                controller: "asideModalRepresentantesCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function asideRepresentantesCtrl($scope) {
        var vm = this;
        vm.editable = false;
        vm.editar = function() {
            vm.editable = true;
            console.log(vm.editable);
        };
        vm.guardar = function() {
            vm.editable = false;
            console.log(vm.editable);
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vistaCampanias").controller("vistaCampaniasCtrl", vistaCampaniasCtrl).controller("AsidesVistaCampaniasCtrl", AsidesVistaCampaniasCtrl);
    function vistaCampaniasCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.showAll = true;
    }
    function AsidesVistaCampaniasCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vistaExperiencia").controller("vistaExperienciaCtrl", vistaExperienciaCtrl).controller("AsidesvistaExperienciaCtrl", AsidesvistaExperienciaCtrl);
    function vistaExperienciaCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.showAll = true;
    }
    function AsidesvistaExperienciaCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos").controller("vistaOportunidadesEquipoCtrl", vistaOportunidadesEquipoCtrl);
    function vistaOportunidadesEquipoCtrl($scope, $modal, $uibModal) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        vm.openAsideGuardarBusqueda = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/asides/aside-guardar-busqueda_tpl.html",
                animation: true,
                controller: "vistaOportunidadesEquipoCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos").controller("vistaOportunidadesEquipoCtrl", vistaOportunidadesEquipoCtrl).controller("asideOportunidadesCtrl", asideOportunidadesCtrl);
    function vistaOportunidadesEquipoCtrl($scope, $window, $rootScope, $modal, $uibModal) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.draggableObjects = [ {
            name: "one"
        }, {
            name: "two"
        }, {
            name: "three"
        } ];
        $scope.onDropComplete = function(index, obj, evt) {
            var otherObj = $scope.draggableObjects[index];
            var otherIndex = $scope.draggableObjects.indexOf(obj);
            $scope.draggableObjects[index] = obj;
            $scope.draggableObjects[otherIndex] = otherObj;
        };
        $scope.busquedas = [ {
            nombre: "En evaluación riesgo con Cuenta Corriente"
        }, {
            nombre: "En evaluación riesgo con Consumo"
        }, {
            nombre: "En visado"
        } ];
        vm.demoListado = [ {
            dato1: "JUE 04/05/2017",
            dato2: "BCH Regional",
            dato3: "alarraguibelp",
            dato4: "12.345.674-9",
            dato5: "Preferencial",
            dato6: "Evaluar riesgo",
            dato7: "Créd. Consumo",
            dato8: "MM$ 150.000",
            dato9: "MM$ 50.000"
        }, {
            dato1: "JUE 04/05/2017",
            dato2: "BCH Regional",
            dato3: "alarraguibelp",
            dato4: "12.345.674-9",
            dato5: "Preferencial",
            dato6: "Evaluar riesgo",
            dato7: "Créd. Consumo",
            dato8: "MM$ 150.000",
            dato9: "MM$ 50.000"
        }, {
            dato1: "JUE 04/05/2017",
            dato2: "BCH Regional",
            dato3: "alarraguibelp",
            dato4: "12.345.674-9",
            dato5: "Preferencial",
            dato6: "Evaluar riesgo",
            dato7: "Créd. Consumo",
            dato8: "MM$ 150.000",
            dato9: "MM$ 50.000"
        }, {
            dato1: "JUE 04/05/2017",
            dato2: "BCH Regional",
            dato3: "alarraguibelp",
            dato4: "12.345.674-9",
            dato5: "Preferencial",
            dato6: "Evaluar riesgo",
            dato7: "Créd. Consumo",
            dato8: "MM$ 150.000",
            dato9: "MM$ 50.000"
        } ];
        $scope.oportunidadesVigentes = [ {
            creacion: "MIE 04/05/2017 · 14:15",
            tarea: "Evaluar riesgo · Autorizar ven",
            productos: "Créd. Consumo, Cta. Corriente",
            creador: "BCH Metro · fparraguez · Of 106",
            asignado: "alarraguibelp",
            solicitado: "M$ 5.000",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            segmento: "Tradicional"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            tarea: "Evaluar riesgo · Autorizar ven",
            productos: "Créd. Consumo, Cta. Corriente",
            creador: "BCH Metro · fparraguez · Of 106",
            asignado: "alarraguibelp",
            solicitado: "M$ 5.000",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            segmento: "Tradicional"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            tarea: "Evaluar riesgo · Autorizar ven",
            productos: "Créd. Consumo, Cta. Corriente",
            creador: "BCH Metro · fparraguez · Of 106",
            asignado: "alarraguibelp",
            solicitado: "M$ 5.000",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            segmento: "Tradicional"
        }, {
            creacion: "MIE 04/05/2017 · 14:15",
            tarea: "Evaluar riesgo · Autorizar ven",
            productos: "Créd. Consumo, Cta. Corriente",
            creador: "BCH Metro · fparraguez · Of 106",
            asignado: "alarraguibelp",
            solicitado: "M$ 5.000",
            rutCliente: "14.678.635-2",
            nombre: "Juan Antonio Rosales González",
            segmento: "Tradicional"
        } ];
        $scope.desgloseArray = [];
        $scope.busquedasGuardadas = [ {
            orden: "1",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "2",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "3",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "4",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "5",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "6",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        }, {
            orden: "7",
            nombre: "Red BCH Regiones con Cred. Consumo",
            fecha: "12/09/2017",
            ultimaEjecucion: "08/02/2017",
            tipo: "Mi cartera",
            montoSolicitadoDesde: "M$ 300",
            montoSolicitadoHasta: "M$ 300",
            producto: "Crédito de consumo",
            red: "BCH Metro"
        } ];
        vm.openAsideGuardarBusqueda = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/asides/aside-guardar-busqueda_tpl.html",
                animation: true,
                controller: "asideOportunidadesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideCambiarColumnasTabla = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/asides/aside-ordenar-columnas-tabla_tpl.html",
                animation: true,
                controller: "asideOportunidadesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        vm.openAsideReasignarOportunidad = function(size) {
            var modalInstance = $uibModal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/oportunidades/asides/aside-reasignar-oportunidad_tpl.html",
                animation: true,
                controller: "asideOportunidadesCtrl",
                controllerAs: "vm",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function asideOportunidadesCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
        $scope.tipoBusqueda = "modificar";
        $scope.inputNombreModificar = "Red BCH Regiones con Cred. Consumo";
        $scope.criterios = [ {
            filtro: "Monto solicitado desde",
            parametro: "M$ 1000"
        }, {
            filtro: "Monto solicitado hasta",
            parametro: "M$ 2000"
        }, {
            filtro: "Monto sometido a aprob. desde",
            parametro: "UF 1500"
        }, {
            filtro: "Monto sometido a aprob. hasta",
            parametro: "UF 2500"
        }, {
            filtro: "Tarea",
            parametro: "Tarea 1"
        } ];
        $scope.columnasVisibles = [ {
            orden: "1",
            filtro: "Recepción"
        }, {
            orden: "2",
            filtro: "Red"
        }, {
            orden: "3",
            filtro: "Creador"
        }, {
            orden: "4",
            filtro: "Sucursal"
        }, {
            orden: "5",
            filtro: "Asignado a"
        }, {
            orden: "6",
            filtro: "RUT cliente"
        }, {
            orden: "7",
            filtro: "Nombre cliente"
        }, {
            orden: "8",
            filtro: "Segmento"
        }, {
            orden: "9",
            filtro: "Tarea"
        }, {
            orden: "10",
            filtro: "Producto"
        }, {
            orden: "11",
            filtro: "Monto solicitado"
        }, {
            orden: "12",
            filtro: "Som. a aprobación"
        } ];
        $scope.reasignarBusqueda = "idUsuario";
        $scope.listadoOportunidades = [ {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        }, {
            recepcion: "MIE 04/05/2017 · 14:15",
            rutCliente: "12.345.678-9",
            asignado: "jpalmaf",
            productos: "Cuenta corriente",
            tarea: "Regularización de reparo de patro regularización de reparo de patro"
        } ];
        $scope.listadoUsuariosReasignar = [ {
            nombre: "Alejandro Marcelo Gonzalez Contreras ",
            cargo: "Jefe de proyecto"
        }, {
            nombre: "Alejandro Marcelo Gonzalez Contreras ",
            cargo: "Jefe de proyecto"
        }, {
            nombre: "Alejandro Marcelo Gonzalez Contreras ",
            cargo: "Jefe de proyecto"
        }, {
            nombre: "Alejandro Marcelo Gonzalez Contreras ",
            cargo: "Jefe de proyecto"
        }, {
            nombre: "Alejandro Marcelo Gonzalez Contreras ",
            cargo: "Jefe de proyecto"
        } ];
        vm.openVerMas = true;
    }
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos").controller("vistaRequerimientosDetalleCtrl", vistaRequerimientosDetalleCtrl).controller("AsidesvistaRequerimientosDetalleCtrl", AsidesvistaRequerimientosDetalleCtrl);
    function vistaRequerimientosDetalleCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        $scope.detalles = [ {
            clase: "green",
            letter: "S",
            tooltip: "Realizada",
            tipo: "Solicitudes Ctas.(Cte.- Vista)",
            subtipo: "Constancias/Cartas/Certificado",
            categoria: "Carta Aclaratoria",
            numreq: "1-19773149343",
            compromiso: "MIÉ 31/10/2012",
            responsable: "josotoa"
        } ];
        $scope.openAsideCierreReq = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/views/requerimientos/asides/asideCierreReq_tpl.html",
                animation: true,
                controller: "AsidesvistaRequerimientosDetalleCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
        $scope.openAsideMensajeResolutor = function(size) {
            var modalInstance = $modal.open({
                templateUrl: "components/vista-campanias/vista-requerimientos/views/requerimientos/asides/asideMensajeRes_tpl.html",
                animation: true,
                controller: "AsidesvistaRequerimientosDetalleCtrl",
                size: size,
                windowClass: "modal-detalle",
                backdrop: "static"
            });
        };
    }
    function AsidesvistaRequerimientosDetalleCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.showResult = true;
        $scope.showResultDos = true;
        $scope.selectCierre = [ {
            name: "Respuesta email"
        }, {
            name: "Teléfono"
        }, {
            name: "Presencial"
        } ];
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();

(function() {
    angular.module("WebBancoChile.vistaRequerimientos").controller("vistaRequerimientosCtrl", vistaRequerimientosCtrl).controller("AsidesvistaRequerimientosCtrl", AsidesvistaRequerimientosCtrl);
    function vistaRequerimientosCtrl($scope, $modal) {
        var vm = this;
        vm.today = function() {
            vm.dt = new Date();
        };
        vm.clear = function() {
            vm.dt = null;
        };
        vm.contador = function() {};
        vm.viewAllReq = true;
        $scope.isActivo2 = true;
        $scope.isActivo3 = true;
        $scope.requerimientos = [ {
            clase: "green",
            letter: "S",
            tooltip: "Realizada",
            tipo: "Solicitudes Ctas.(Cte.- Vista)",
            subtipo: "Constancias/Cartas/Certificado",
            categoria: "Carta Aclaratoria",
            numreq: "1-19773149343",
            compromiso: "MIÉ 31/10/2012",
            responsable: "josotoa"
        }, {
            clase: "red",
            letter: "P",
            tooltip: "Rechazada",
            tipo: "Problemas Ctas.(Cte.- Vista)",
            subtipo: "Constancias/Cartas/Certificado",
            categoria: "Carta Aclaratoria",
            numreq: "1-19773149343",
            compromiso: "MIÉ 31/10/2012",
            responsable: "mavilches"
        }, {
            clase: "blue",
            letter: "S",
            tooltip: "En proceso",
            tipo: "Solicitudes Ctas.(Cte.- Vista)",
            subtipo: "Constancias/Cartas/Certificado",
            categoria: "Carta Aclaratoria",
            numreq: "1-19773149343",
            compromiso: "MIÉ 31/10/2012",
            responsable: "pcalderon"
        }, {
            clase: "warning",
            letter: "P",
            tooltip: "Pendiente",
            tipo: "Problemas Ctas.(Cte.- Vista)",
            subtipo: "Constancias/Cartas/Certificado",
            categoria: "Carta Aclaratoria",
            numreq: "1-19773149343",
            compromiso: "MIÉ 31/10/2012",
            responsable: "vsotol"
        } ];
    }
    function AsidesvistaRequerimientosCtrl($scope, $modalInstance, $timeout) {
        var vm = this;
        $scope.ok = function() {
            $modalInstance.close();
        };
        $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
        };
    }
})();