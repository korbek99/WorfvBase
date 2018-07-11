<%--
Created by IntelliJ IDEA.
User: Carlos Negrón
Date: 6/22/2018
Time: 13:15
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="workflowRetencion"
    class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths ng-scope centro-negocios"
    ng-class="{'centro-negocios': uiState.current.name != 'login' , '' : uiState.current.name === 'login' }" style="">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <style type="text/css">.ng-animate.item:not(.left):not(.right) {
        -webkit-transition: 0s ease-in-out left;
        transition: 0s ease-in-out left
        }</style>
        <style type="text/css">.ng-animate.item:not(.left):not(.right) {
        -webkit-transition: 0s ease-in-out left;
        transition: 0s ease-in-out left
        }</style>
        <style type="text/css">@charset "UTF-8";
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak, .ng-hide:not(.ng-hide-animate) {
        display: none !important;
        }
        ng\:form {
        display: block;
        }</style>
        <title ng-bind="pageTitle" class="ng-binding">Crear grupo | Banco de Chile</title>
        <!-- social media tags -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- compiled CSS -->
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="vendor/angular-ui-select/dist/select.css">
        <link rel="stylesheet" type="text/css" href="vendor/ng-scrollbar/dist/ng-scrollbar.css">
        <link rel="stylesheet" type="text/css" href="vendor/ionicons/css/ionicons.css">
        <link rel="stylesheet" type="text/css" href="vendor/ladda/dist/ladda-themeless.min.css">
        <link rel="stylesheet" type="text/css" href="vendor/sweetalert-ui/lib/sweet-alert.css">
        <link rel="stylesheet" type="text/css" href="vendor/clockpicker/dist/bootstrap-clockpicker.css">
        <link rel="stylesheet" type="text/css" href="vendor/clockpicker/dist/jquery-clockpicker.css">
        <link rel="stylesheet" type="text/css" href="vendor/ng-sticky-element/dist/ng-sticky-element.min.css">
        <link rel="stylesheet" type="text/css" href="vendor/font-awesome/css/font-awesome.css">
        <link rel="stylesheet" type="text/css" href="vendor/angular-loading-bar/build/loading-bar.min.css">
        <link rel="stylesheet" type="text/css" href="vendor/angular-toastr/dist/angular-toastr.css">
        <link rel="stylesheet" type="text/css"
            href="vendor/angular-progress-button-styles/dist/angular-progress-button-styles.min.css">
            <link rel="stylesheet" type="text/css" href="vendor/angular-xeditable/dist/css/xeditable.css">
            <link rel="stylesheet" type="text/css" href="vendor/angular-ui-grid/ui-grid.css">
            <link rel="stylesheet" type="text/css" href="vendor/slick-carousel/slick/slick.css">
            <link rel="stylesheet" type="text/css" href="vendor/slick-carousel/slick/slick-theme.css">
            <link rel="stylesheet" type="text/css" href="vendor/angularjs-slider/dist/rzslider.css">
            <link rel="stylesheet" type="text/css" href="assets/taurus-dap-postventa-develop--1.1.0-build.15.css">
            <!-- compiled JavaScript -->
            <script type="text/javascript" src="vendor/jquery/dist/jquery.js"></script>
            <script type="text/javascript" src="vendor/angular/angular.js"></script>
            <script type="text/javascript" src="vendor/angular-bootstrap/ui-bootstrap.min.js"></script>
            <script type="text/javascript" src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
            <script type="text/javascript" src="vendor/angular-animate/angular-animate.js"></script>
            <script type="text/javascript" src="vendor/angular-loading-bar/build/loading-bar.min.js"></script>
            <script type="text/javascript" src="vendor/angular-input-masks/angular-input-masks-standalone.js"></script>
            <script type="text/javascript" src="vendor/angular-toastr/dist/angular-toastr.tpls.js"></script>
            <script type="text/javascript" src="vendor/angular-float-thead/angular-floatThead.js"></script>
            <script type="text/javascript" src="vendor/angular-sweetalert/SweetAlert.js"></script>
            <script type="text/javascript" src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
            <script type="text/javascript" src="vendor/angular-ui-router/release/stateEvents.js"></script>
            <script type="text/javascript" src="vendor/angular-i18n/angular-locale_es-cl.js"></script>
            <script type="text/javascript" src="vendor/angular-messages/angular-messages.js"></script>
            <script type="text/javascript" src="vendor/angular-ui-utils/ui-utils.js"></script>
            <script type="text/javascript" src="vendor/angular-sanitize/angular-sanitize.js"></script>
            <script type="text/javascript" src="vendor/angular-xeditable/dist/js/xeditable.js"></script>
            <script type="text/javascript" src="vendor/angular-ui-select/dist/select.js"></script>
            <script type="text/javascript" src="vendor/angular-rangeslider/angular.rangeSlider.js"></script>
            <script type="text/javascript" src="vendor/angularjs-slider/dist/rzslider.js"></script>
            <script type="text/javascript" src="vendor/angular-ladda/dist/angular-ladda.min.js"></script>
            <script type="text/javascript"
            src="vendor/angular-progress-button-styles/dist/angular-progress-button-styles.min.js"></script>
            <script type="text/javascript" src="vendor/angular-ui-grid/ui-grid.js"></script>
            <script type="text/javascript" src="vendor/clockpicker/dist/bootstrap-clockpicker.js"></script>
            <script type="text/javascript" src="vendor/clockpicker/dist/jquery-clockpicker.js"></script>
            <script type="text/javascript" src="vendor/modernizr/modernizr.js"></script>
            <script type="text/javascript" src="vendor/lodash/dist/lodash.js"></script>
            <script type="text/javascript" src="vendor/orion-directivas-tablas/src/orionTablas/orionTablas.module.js"></script>
            <script type="text/javascript"
            src="vendor/orion-drag-and-drop-file-upload/src/drag-and-drop-file-upload.module.js"></script>
            <script type="text/javascript" src="vendor/orion-drop-multi-select/src/drop-multi-select.module.js"></script>
            <script type="text/javascript"
            src="vendor/orion-transition-detail-directive/src/directive/advanced-detail.module.js"></script>
            <script type="text/javascript" src="vendor/ladda/js/spin.js"></script>
            <style type="text/css"></style>
            <script type="text/javascript" src="vendor/file-saver.js/FileSaver.js"></script>
            <script type="text/javascript" src="vendor/ladda/js/ladda.js"></script>
            <script type="text/javascript" src="vendor/ng-scrollbar/dist/ng-scrollbar.js"></script>
            <script type="text/javascript" src="vendor/highcharts/highcharts.src.js"></script>
            <script type="text/javascript" src="vendor/highcharts-ng/dist/highcharts-ng.js"></script>
            <script type="text/javascript" src="vendor/sweetalert-ui/lib/sweet-alert.js"></script>
            <script type="text/javascript" src="vendor/floatThead/dist/jquery.floatThead.min.js"></script>
            <script type="text/javascript" src="vendor/ng-sticky-element/dist/ng-sticky-element.min.js"></script>
            <script type="text/javascript" src="vendor/moment/moment.js"></script>
            <script type="text/javascript" src="vendor/angular-translate/angular-translate.js"></script>
            <script type="text/javascript"
            src="vendor/angular-translate-loader-partial/angular-translate-loader-partial.js"></script>
            <script type="text/javascript" src="vendor/angular-off-click/dist/angular-off-click.js"></script>
            <script type="text/javascript" src="vendor/angular-click-outside/clickoutside.directive.js"></script>
            <script type="text/javascript" src="vendor/angular-svg-round-progressbar/build/roundProgress.min.js"></script>
            <script type="text/javascript"
            src="vendor/orion-transition-detail-directive/src/directive/advanced-detail.controller.js"></script>
            <script type="text/javascript"
            src="vendor/orion-transition-detail-directive/src/directive/advanced-detail.directive.js"></script>
            <script type="text/javascript" src="vendor/angularjs-gauge/src/angularjs-gauge.js"></script>
            <script type="text/javascript" src="vendor/angular-slick/dist/slick.js"></script>
            <script type="text/javascript" src="vendor/slick-carousel/slick/slick.js"></script>
            <script type="text/javascript"
            src="vendor/orion-drop-multi-select/src/drop-multi-select/drop-multi-select.directive.js"></script>
            <script type="text/javascript"
            src="vendor/orion-drop-multi-select/src/drop-multi-select/drop-multi-select.controller.js"></script>
            <script type="text/javascript" src="vendor/orion-drop-multi-select/src/common/directives/click-outside.js"></script>
            <script type="text/javascript" src="vendor/dndLists/angular-drag-and-drop-lists.min.js"></script>
            <script type="text/javascript" src="assets/taurus-dap-postventa-develop-1.1.0-build.15_taurus.js"></script>
            <script type="text/javascript" src="assets/taurus-dap-postventa-develop-1.1.0-build.15_html.js"></script>
            <script type="text/javascript" src="assets/taurus-dap-postventa-develop-1.1.0-build.15_app.js"></script>
            <script type="text/javascript" src="http://bootstrapdocs.com/v2.0.3/docs/assets/js/bootstrap-carousel.js"></script>
            <script type="text/javascript" src="static/js/app.js"></script>
            <script type="text/javascript" src="static/js/service/cliente_service.js"></script>
            <script type="text/javascript" src="static/js/controller/cliente_controller.js"></script>
        </head>
        <!--[if IE 9]>
        <body class="ie9"><![endif]-->
            <!--[if !IE9]><!-->
            <body ng-class="{'home-view': uiState.current.name === 'home', '':uiState.current.name !== 'home', 'login-view' : uiState.current.name === 'login'}"
                class="body-bch-escritorios" scroll=""> <!--<![endif]-->
                <div class="loader-fullscreen hidden">
                    <div class="loader-fullscreen--group">
                        <div class="loader-fullscreen--bigSqr">
                            <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In  -->
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="173.2px"
                                height="200px" viewBox="0 0 173.2 200" style="enable-background:new 0 0 173.2 200;"
                                xml:space="preserve">
                                <style type="text/css">
                                .st0 {
                                fill: #002464;
                                }
                                </style>
                                <defs>
                                </defs>
                                <g>
                                    <path class="st0" d="M72.7,61.8c-9.9,0-19.5,8.4-23.2,10.9c1.2,0.1,4.6-1.9,7.6-2c3.1-0.1,4.3-0.1,7.4,0c0,0,9.5,2,9.5,4.4
                                        c0,2.5-16.3,11.2-16.3,13.6v31c0,2.4-2.2,3.9-2.4,5.6l16.9-12V81.8c0-2.5,5.2-5.1,5.2-5.1l17.2-12.5c-0.4-0.3-0.6-0.4-0.9-0.4
                                    c-0.4,0.4-1.5,0.9-2.2,0.9h-1.7c0,0-10-2.9-13-2.9H72.7z"></path>
                                    <path class="st0" d="M77.1,83.8v36.5c0,1.6-2.4,4.2-2.4,4.2v0.7c2.7-1.4,5.6-4,10.2-6.7c3-1.8,8.7-6.3,8.7-7.8V77.1
                                        c0-0.2,1.7-4.7,4.1-4.7c1.1,0,1.8,1,1.8,1.6v56.6c-1.6-0.5-7.8-3.1-9.6-3.1h-8.7c-13.1,0-25.8,12.9-25.8,12.9
                                        c0.6,0,9.1-3.1,12.6-3.1h8.2c6.2,0,18.9,7.1,18.9,7.1c0.8,0,11.9-7.7,15.2-10.3c7.4-5.8,13.4-7.4,13.4-12v-7.6
                                        c0-3-1.6-8.2-5.2-10.7c-3.8-2.6-12.4-1.8-12.4-3.6c0-2.7,16.3-9,16.3-15.4v-2.5c0-3.1-5.2-9.6-6.3-11.1c-4.5-6-6.1-8.9-8.7-8.9
                                        c-3.8,0-10,6.2-16.1,9.8C80.9,78.5,77.1,83.4,77.1,83.8z M102.4,77.8c0,0,7,7.8,7,12.5c0,3.5-2.7,4.9-7,7.6V77.8z M102.4,104.1
                                    c0.7,0.2,4.6,2.6,4.6,4.2v25.6c-1.1,0.5-0.2,0-0.9,0c-1.4,0-3.7-1.1-3.7-2.4V104.1z"></path>
                                    <path class="st0" d="M86.6,0L0,50v100l86.6,50l86.6-50V50L86.6,0z M164.1,144.7l-77.5,44.7L9.1,144.7V55.3l77.5-44.7l77.5,44.7
                                    V144.7z"></path>
                                </g>
                            </svg>
                        </div>
                        <h3 class="col-xs-12 mt-20 padd-none text-center">Cargando datos</h3>
                    </div>
                </div>
                <div class="bch-escritorios padd-none">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="dropdown dropdown-btn" uib-dropdown="" is-open="status.isopen6">
                                    <a id="dropDownUser" class="btn dropdown-toggle pl-0" uib-dropdown-toggle="" aria-haspopup="true"
                                        aria-expanded="false"><span><i class="ion-ios-eye"></i></span> Visión como
                                        <strong>mparraguez</strong> <span class="pl-5"><i class="ion-ios-arrow-down"></i></span></a>
                                        <ul class="dropdown-menu" role="menu" uib-dropdown-menu="" aria-labelledby="dropDownUser">
                                            <li><a href="javascript:void(0);"> Opción 1</a></li>
                                            <li><a href="javascript:void(0);"> Opción 2</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ngIf: uiState.current.name != 'login' -->
                    <div ng-if="uiState.current.name != 'login'" class="ng-scope">
                        <!-- uiView: header -->
                        <header ui-view="header" class="header header-escritorios ng-scope">
                            <div class="bch-header container padd-none ng-scope">
                                <div class="col-lg-3 col-md-3 col-sm-3 padd-none"><a href="#/home" class="bch-header-logo"
                                ui-sref="home"></a></div>
                                <div class="form-group col-lg-6 col-md-6 col-sm-6 pl-25 pr-25">
                                    <form action="" class="bch-header-buscador ng-pristine ng-valid">
                                        <div class="width-20 bch-header-buscador__selector">
                                            <div class="ui-select-container ui-select-bootstrap dropdown ng-valid"
                                                ng-class="{open: $select.open}" ng-model="DemoDisabled">
                                                <div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled"
                                                    ng-class="{'btn-default-focus':$select.focus}" placeholder="Todos"><span tabindex="-1"
                                                        class="btn btn-default form-control ui-select-toggle"
                                                        aria-label="Select box activate"
                                                        ng-disabled="$select.disabled"
                                                        ng-click="$select.activate()"
                                                        style="outline: 0;"><span
                                                        ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted ng-binding">Todos</span> <span
                                                        ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left ng-hide"
                                                        ng-class="{'ui-select-allow-clear': $select.allowClear &amp;&amp; !$select.isEmpty()}"
                                                        ><span class="ng-binding ng-scope"></span></span> <i
                                                        class="caret pull-right" ng-click="$select.toggle($event)"></i> <a
                                                            ng-show="$select.allowClear &amp;&amp; !$select.isEmpty()"
                                                            aria-label="Select box clear" style="margin-right: 10px"
                                                            ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right ng-hide"><i
                                                        class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>
                                                        <input autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="Select box"
                                                        aria-owns="ui-select-choices-0" aria-activedescendant="ui-select-choices-row-0-0"
                                                        class="form-control ui-select-search ng-pristine ng-untouched ng-valid ng-hide"
                                                        placeholder="Todos" ng-model="$select.search"
                                                        ng-show="$select.searchEnabled &amp;&amp; $select.open" type="text">
                                                        <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope"
                                                            role="listbox" ng-show="$select.items.length > 0" repeat="item in listaOpciones">
                                                            <li class="ui-select-choices-group" id="ui-select-choices-0">
                                                                <div class="divider ng-hide"
                                                                ng-show="$select.isGrouped &amp;&amp; $index > 0"></div>
                                                                <div ng-show="$select.isGrouped"
                                                                    class="ui-select-choices-group-label dropdown-header ng-binding ng-hide"
                                                                ng-bind="$group.name"></div>
                                                                <!-- ngRepeat: item in $select.items --><!-- ngIf: $select.open -->
                                                                <!-- end ngRepeat: item in $select.items --><!-- ngIf: $select.open -->
                                                                <!-- end ngRepeat: item in $select.items --><!-- ngIf: $select.open -->
                                                                <!-- end ngRepeat: item in $select.items --><!-- ngIf: $select.open -->
                                                                <!-- end ngRepeat: item in $select.items --></li>
                                                            </ul>
                                                            <input ng-disabled="$select.disabled"
                                                            class="ui-select-focusser ui-select-offscreen ng-scope" id="focusser-0"
                                                        aria-label="Select box focus" aria-haspopup="true" role="button" type="text"></div>
                                                    </div>
                                                    <input class="form-control bch-header-buscador__input input-md ng-valid" placeholder=""
                                                    tooltip-append-to-body="false" tooltip="Intenta con un mínimo de 2 caracteres"
                                                    tooltip-placement="bottom" tooltip-trigger="mouseenter" tooltip-animation="false"
                                                    maxlength="200"> <a class="contenedor-icono contenedor-icono--historial" href="#"><i
                                                    class="ion-android-time"></i> </a><a class="contenedor-icono" href="#"><i
                                                class="ion-android-search"></i> </a><a class="contenedor-icono contenedor-icono--close"
                                            href="#"><i class="ion-android-close"></i></a></form>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 padd-none">
                                            <ul class="menu-header">
                                                <li>
                                                    <div class="dropdown" uib-dropdown="" is-open="statusOne.isopenOne"><a id="dropdownHeaderMenu"
                                                        href="#"
                                                        class="dropdown-toggle menu-header__boton"
                                                        uib-dropdown-toggle=""
                                                        aria-haspopup="true"
                                                        aria-expanded="false"><i
                                                    class="icono-info"></i></a>
                                                    <ul class="dropdown-menu indicadores-economicos" ole="menu" uib-dropdown-menu=""
                                                        aria-labelledby="dropdownHeaderMenu">
                                                        <li class="pb-0 text-bold">Indicadores Económicos</li>
                                                        <li>USD 662,35 (Obs)</li>
                                                        <li>UF 26.454,88</li>
                                                        <li>UTM 46.368,00</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" class="menu-header__boton"><i class="icono-bell"></i> <span
                                            class="menu-header__boton-notificacion">9</span></a></li>
                                            <li><a href="#" class="menu-header__boton"><i class="icono-user"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="clearfix ng-isolate-scope fixed-element" sticky="" sticky-hight="60"
                                sticky-element-hide="['client-box__info--rut','client-box__info--banca']">
                                <div class="client-box col-md-12 client-box-credichile clearfix">
                                    <div class="container">
                                        <!-- ngIf: false -->
                                        <div class="client-box__info pull-left">
                                            <p class="client-box__info--rut">12.345.678-K</p>
                                            <h2><b>Pamela Natalie Del Jesúes Carrasco Leiva</b></h2>
                                            <p class="client-box__info--banca">Banca Personas / PEP</p>
                                        </div>
                                        <div class="client-box__defuncion">
                                            <i class="icon-size" tooltip-append-to-body="true" tooltip="Defunción: 23/03/2014"
                                            tooltip-placement="top" tooltip-trigger="mouseenter" tooltip-animation="false">✝</i>
                                        </div>
                                        <div class="client-box__nav">
                                            <i class="ion-grid client-box__v360" ng-click="openMostrarMenu360()"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--DESPLEGABLE MENU-->
                            <section class="container">
                                <div class="menu-v360__overlay animate-show-hide ng-hide" ng-show="mostrarMenu360"
                                ng-click="openMostrarMenu360()"></div>
                                <div class="col-xs-12 pull-right menu-v360 padd-none ng-isolate-scope fixed-element ng-hide"
                                    ng-show="mostrarMenu360" sticky="" sticky-hight="60">
                                    <span class="menu-v360__arrow-top"></span>
                                    <div class="col-xs-4 col-sm-12 col-md-12 col-lg-12 menu-v360__contenedor pull-right pt-15 pb-15 ng-isolate-scope fixed-element"
                                        sticky="" sticky-hight="60">
                                        <div class="col-xs-12 col-sm-9 bch-caja-producto-izq pl-0">
                                            <div class="col-xs-12 border bch-caja-producto pl-0 pr-0">
                                                <div class="col-xs-12 color-16 pt-10 pb-10">
                                                    <h5 class="pull-left mb-0 mt-5">Productos</h5>
                                                    <button type="button" class="btn primary pull-right mr-0 ml-10">Contratar</button>
                                                    <button type="button" class="btn default pull-right">Simular</button>
                                                </div>
                                                <div class="col-xs-12 bch-caja-producto__contenedor">
                                                    <div class="bch-caja-producto__item__activo text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="bch-q1-cuenta"></i>
                                                            </div>
                                                            <p class="text-color-11">Cuentas</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="icon-pec-donaciones"></i>
                                                            </div>
                                                            <p class="text-color-11">Líneas</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item__activo text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="bch-q1-tarjeta"></i>
                                                            </div>
                                                            <p class="text-color-11">Tarjetas</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="icon-ad-PagoCreditoConsumo"></i>
                                                            </div>
                                                            <p class="text-color-11">Ahorro</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="bch-q1-creditoConsumo"></i>
                                                            </div>
                                                            <p class="text-color-11">Créditos</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item__activo text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="icon-custom-casa"></i>
                                                            </div>
                                                            <p class="text-color-11">Hipotecario</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-3 bch-caja-producto-der pull-right pr-0">
                                            <div class="col-xs-12 border bch-caja-producto pl-0 pr-0">
                                                <div class="col-xs-12 color-16 pt-10 pb-10">
                                                    <h5 class="pull-left mb-0 mt-5">Filiales</h5>
                                                    <div class="dropdown dropdown-btn pull-right mr-0" uib-dropdown="" is-open="status.isopen">
                                                        <a id="dropDownDos" class="btn primary btn dropdown-toggle mr-0" uib-dropdown-toggle=""
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <span>
                                                                <i class="ion-chevron-down px-13"></i>
                                                            </span>
                                                            Contratar
                                                        </a>
                                                        <ul class="dropdown-menu" role="menu" uib-dropdown-menu=""
                                                            aria-labelledby="dropDownDos">
                                                            <li><a href="javascript:void(0);"> Seguros</a></li>
                                                            <li><a href="javascript:void(0);"> Inversiones</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 bch-caja-producto__contenedor__mini">
                                                    <div class="bch-caja-producto__item__activo text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="icon-pec-seguros"></i>
                                                            </div>
                                                            <p class="text-color-11">Seguros</p>
                                                        </a>
                                                    </div>
                                                    <div class="bch-caja-producto__item text-center">
                                                        <a href="javascript:void(0)" class="bch-caja-producto__elemento"
                                                            ng-click="vm.openAsideCuentas('lg')">
                                                            <div class="bch-caja-producto__circulo">
                                                                <i class="icon-custom-inversiones"></i>
                                                            </div>
                                                            <p class="text-color-11">Inversiones</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!--DESPLEGABLE MENU-->
                            <!--MENSAJE CLIENTE AUTENTIFICADO-->
                            <div class="view-v360__cli-auth view-v360__cli-auth--true col-xs-12 ng-hide"
                                ng-show="mostrarClienteAutentificado &amp;&amp; uiState.current.name === 'v360'"
                                ng-click="mostrarClienteAutentificado = !mostrarClienteAutentificado">
                                <div class="container">
                                    <div class="col-xs-12 padd-none text-center">
                                        <p class="view-v360__cli-auth--texto text-regular mb-0">Cliente autentificado</p>
                                    </div>
                                </div>
                            </div>
                            <div class="view-v360__cli-auth view-v360__cli-auth--false col-xs-12 ng-hide"
                                ng-show="!mostrarClienteAutentificado &amp;&amp; uiState.current.name === 'v360'"
                                ng-click="mostrarClienteAutentificado = !mostrarClienteAutentificado">
                                <div class="container">
                                    <div class="col-xs-12 padd-none text-center">
                                        <p class="view-v360__cli-auth--texto text-regular mb-0">Cliente no autentificado</p>
                                    </div>
                                </div>
                            </div>
                            <!--MENSAJE CLIENTE AUTENTIFICADO-->
                            <div class="" ng-controller="ClientController as ctrl">
                                <!-- uiView: main -->
                                <div id="homeRetencion" ng-show=ctrl.showHome>
                                    <section ui-view="main" class="container clearfix ng-scope">
                                        <section class="formulario-retencion ng-scope"><h1>Retención</h1>
                                            <div class="row">
                                                <div class="form-group">
                                                    <div class="form-group col-xs-2"><label class="bch-custom-check radiobutton">
                                                        <div><input name="radio1" type="radio" value="" checked="checked"> <i></i></div>
                                                        <span>Solicitud de cierre</span></label></div>
                                                        <div class="form-group col-xs-3"><label class="bch-custom-check radiobutton">
                                                            <div><input name="radio1" type="radio" disabled="disabled"> <i></i></div>
                                                            <span>Intención de cierre</span></label></div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-xs-4 adicional"><label>Rut cliente</label>
                                                        <div class="row">
                                                            <div class="col-xs-8"><input class="form-control" placeholder="Ej: 12345678-9"
                                                            ng-model="ctrl.rutClientBusqueda"></div>
                                                            <div class="col-xs-4">
                                                                <button type="button" class="btn info"
                                                                ng-click="ctrl.fetchClientData(ctrl.rutClientBusqueda)">Buscar
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div ng-show="ctrl.showAntecedentes">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15"><h2 class="text-primary">Antecedentes
                                                            personales</h2>
                                                            <article class="resume-box width-40">
                                                                <div class="bloque-logo width-100 pull-left">
                                                                    <div class="logo-ico"><i class="bch-custom-icon-editardatospersonales"></i></div>
                                                                    <div class="glosa pl-20"><p class="text-bold text-color-3 px-14"
                                                                    ng-bind="ctrl.clientData.nombre+' '+ctrl.clientData.apellidoPaterno+' '+ctrl.clientData.apellidoMaterno"></p>
                                                                    <h4 class="text-color-4 text-light mt-5">{{ctrl.clientData.rutClient}}</h4>
                                                                    <button type="button"
                                                                    class="btn-link btn-link--no-underline__sm ml-0 mr-0 mt-5">
                                                                    <span class="btn-link">{{'+'+ ctrl.clientData.fonoParticularCliente}}</span><span
                                                                    class="btn-open-aside pull-right ml-5"
                                                                    ng-click="vm.asideAsignarReemplazo('md')"><i
                                                                class="ion-ios-arrow-right mr-0"></i></span></button>
                                                                <button type="button"
                                                                class="btn-link btn-link--no-underline__sm ml-0 mr-0 display-block mt-5">
                                                                <span class="btn-link">{{ctrl.clientData.emailParticularCliente}}</span> <span
                                                                class="btn-open-aside pull-right ml-5"
                                                                ng-click="vm.asideAsignarReemplazo('md')"><i
                                                            class="ion-ios-arrow-right mr-0"></i></span></button>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-5"><p class="border-bottom-dashed"><span
                                            class="text-bold">Segmento</span> <span
                                        class="pull-right">{{ctrl.clientData.segmento}}</span></p>
                                        <p class="border-bottom-dashed"><span class="text-bold">Comportamiento</span> <span
                                    class="pull-right">{{ctrl.clientData.comportamiento}}</span></p>
                                    <p class="border-bottom-dashed"><span class="text-bold">Clasificación</span> <span
                                class="pull-right">{{ctrl.clientData.clasificacionRiesgo}}</span></p>
                                <p class="border-bottom-dashed"><span class="text-bold">Rentabilidad</span> <span
                            class="pull-right">-</span></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 mt-20"><h2 class="text-primary">Productos
                            vigentes</h2>
                            <p class="px-16">Selecciona los productos a cerrar</p>
                            <ul class="form-group list-unstyled mt-20 mb-30">
                                <li class="mb-10"><label class="bch-custom-check">
                                    <div><input type="checkbox"> <i></i></div>
                                    <span>Seleccionar todos</span></label>
                                    <hr class="mt-10 mb-10">
                                </li>
                                <li class="mb-10"><label class="bch-custom-check">
                                    <div><input type="checkbox"> <i></i></div>
                                    <span>Cuenta corriente Nº 12345678900000</span></label>
                                    <hr class="mt-10 mb-10">
                                </li>
                                <li class="mb-10"><label class="bch-custom-check">
                                    <div><input type="checkbox"> <i></i></div>
                                    <span>Línea de crédito Nº 123456781234000</span></label>
                                    <hr class="mt-10 mb-10">
                                </li>
                                <li class="mb-10"><label class="bch-custom-check">
                                    <div><input type="checkbox"> <i></i></div>
                                    <span>Tarjeta de débito Nº 1234 5678 9876 6543</span></label>
                                    <hr class="mt-10 mb-10">
                                </li>
                                <li class="mb-10"><label class="bch-custom-check">
                                    <div><input type="checkbox"> <i></i></div>
                                    <span>Tarjeta de crédito Master Card Nº 1234 5678 1234 5678</span></label>
                                    <hr class="mt-10 mb-10">
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row mb-30">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="border-top pt-5 mt-5 mb-5 pt-10 width-100 text-right">
                            <button type="button" class="btn success" ng-click="ctrl.cargarFormulario(ctrl.clientData.rutEjecutivo)" >Continuar
                            </button>                            
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
    <!-- fin div home -->
    <!-- inicio div fomulario -->
    <div id="formularioRetencion" ng-show=ctrl.showFormulario>
        <section ui-view="main" class="container clearfix ng-scope">
            <section class="formulario-retencion ng-scope">
                <h1>Formulario de cierre de productos</h1>
                <h3>Datos del cliente</h3>
                <!-- RESUMEN -->
                <article class="resume-box">
                    <div class="bloque-logo width-35 pull-left">
                        <div class="logo-ico">
                            <i class="bch-custom-icon-editardatospersonales"></i>
                        </div>
                        <div class="glosa">
                            <p>{{ctrl.clientData.nombre+' '+ctrl.clientData.apellidoPaterno+' '+ctrl.clientData.apellidoMaterno}}
                            </p>
                            <h4 class="text-color-4 text-light">{{ctrl.clientData.rutCliente}}</h4>
                        </div>
                    </div>
                    <div class="bloque-box width-65 pull-right">
                        <div class="list-data col-2">
                            <div class="element-list">
                                <ul>
                                    <li>Teléfono</li>
                                    <li class="text-right text-regular text-color-11 pull-right">{{'+56 '+ctrl.clientData.codigoCiudadPartCliente+' '+ctrl.clientData.telefono}}</li>
                                </ul>
                            </div>
                            <div class="element-list">
                                <ul>
                                    <li>Celular</li>
                                    <li class="text-right text-regular text-color-11 pull-right">{{'+56 '+ctrl.clientData.codigoCiudadCelularCliente+' '+ctrl.clientData.celularParticularCliente}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="list-data col-2">
                            <div class="element-list">
                                <ul>
                                    <li>Email</li>
                                    <li class="text-right text-regular text-color-11 pull-right">{{ctrl.clientData.emailParticularCliente}}</li>
                                </ul>
                            </div>
                            <div class="element-list">
                                <ul>
                                    <li>Dirección</li>
                                    <li class="text-right text-regular text-color-11 pull-right ">{{ctrl.clientData.direccion+' '+ctrl.clientData.complementoDireccion+', '+ctrl.clientData.comuna+', '+ctrl.clientData.ciudad+'.'}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                <!-- END RESUMEN -->
                <!-- STEPS -->
                <section class="steps">
                    <article class="step" data-step="1">
                        <h3>Productos a cerrar</h3>
                        <div class="row">
                            
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <article class="col-lg-12 col-md-12 col-sm-12 data-bar sin-producto-tipo mb-30 form-group">
                                    <div class="data-bar__resumen-producto no-actions">
                                        <div class="data-bar__resumen-producto--bloque col-5">
                                            <span>Cuenta corriente</span>
                                            <h5 class="text-color-11">Nº 123456781234000</h5>
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-4">
                                            
                                            <label class="col-xs-12 switch success pb-0 mb-0 pt-0">
                                                <input type="checkbox">
                                                <i></i>
                                                <!-- Circle -->
                                                <span class="text-default">¿Devuelve talonario de cheques?</span>
                                            </label>
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-5">
                                            <span class="width-30 pull-left mt-10">Del Nº</span>
                                            <input type="text" class="form-control width-70" placeholder="Ingrese">
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-5 border-none
                                            ">
                                            <span class="width-30 pull-left mt-10">Al Nº</span>
                                            <input type="text" class="form-control width-70" placeholder="Ingrese">
                                        </div>
                                        
                                        <div class="data-bar__actions come-back">
                                            <div class="box-back">
                                                <i class="icon-icon-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                
                                <article class="col-lg-12 col-md-12 col-sm-12 data-bar sin-producto-tipo mb-30 form-group">
                                    <div class="data-bar__resumen-producto no-actions">
                                        <div class="data-bar__resumen-producto--bloque col-3">
                                            <span>Tarjeta de crédito</span>
                                            <h5 class="text-color-11">Master Card Nº 1234 5678 1234 5678</h5>
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-4">
                                            
                                            <label class="col-xs-12 switch success pb-0 mb-0">
                                                <input type="checkbox">
                                                <i></i>
                                                <!-- Circle -->
                                                <span class="text-default">¿Devuelve la tarjeta?</span>
                                            </label>
                                        </div>
                                        
                                        <div class="data-bar__actions come-back">
                                            <div class="box-back">
                                                <i class="icon-icon-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                
                                <article class="col-lg-12 col-md-12 col-sm-12 data-bar sin-producto-tipo mb-30 form-group">
                                    <div class="data-bar__resumen-producto no-actions">
                                        <div class="data-bar__resumen-producto--bloque col-3">
                                            <span>Línea de crédito</span>
                                            <h5 class="text-color-11">Nº 123456781234000</h5>
                                        </div>
                                        
                                        <div class="data-bar__actions come-back">
                                            <div class="box-back">
                                                <i class="icon-icon-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                
                                <article class="col-lg-12 col-md-12 col-sm-12 data-bar sin-producto-tipo mb-30 form-group">
                                    <div class="data-bar__resumen-producto no-actions">
                                        <div class="data-bar__resumen-producto--bloque col-3">
                                            <span>Tarjeta de débito</span>
                                            <h5 class="text-color-11">Nº 1234 5678 1234 5678</h5>
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-4">
                                            
                                            <label class="col-xs-12 switch success pb-0 mb-0">
                                                <input type="checkbox">
                                                <i></i>
                                                <!-- Circle -->
                                                <span class="text-default">¿Devuelve la tarjeta?</span>
                                            </label>
                                        </div>
                                        
                                        <div class="data-bar__resumen-producto--bloque col-4">
                                            <span class="width-30 pull-left mt-10">Otros</span>
                                            <input type="text" class="form-control width-70" placeholder="Ingrese">
                                        </div>
                                        
                                        <div class="data-bar__actions come-back">
                                            <div class="box-back">
                                                <i class="icon-icon-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            
                            
                            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <h4 class="text-color-4">Motivo del cierre</h4>
                                <ul class="form-group list-unstyled">
                                    <li class="mb-10">
                                        <label class="bch-custom-check">
                                            <div>
                                                <input type="checkbox">
                                                <i></i>
                                            </div>
                                            <span>Atención/Servicio inadecuado</span>
                                        </label>
                                    </li>
                                    <li class="mb-10">
                                        <label class="bch-custom-check">
                                            <div>
                                                <input type="checkbox">
                                                <i></i>
                                            </div>
                                            <span>No usa el producto</span>
                                        </label>
                                    </li>
                                    <li class="mb-10">
                                        <label class="bch-custom-check">
                                            <div>
                                                <input type="checkbox">
                                                <i></i>
                                            </div>
                                            <span>Disconformidad con Tarifas/Tasa/Comisiones</span>
                                        </label>
                                    </li>
                                    <li class="mb-10">
                                        <label class="bch-custom-check">
                                            <div>
                                                <input type="checkbox">
                                                <i></i>
                                            </div>
                                            <span>Términos de giros comerciales</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 clear-left form-group">
                                <label for="">Otro motivo</label>
                                <input class="form-control width-70" placeholder="Ingrese">
                            </div>
                        </div>
                    </article>
                    <article class="step" data-step="2">
                        <h3>Datos representante legal</h3>
                        <div class="row form-group">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 clear-left form-group">
                                <label for="">Nombre</label>
                                <input class="form-control " placeholder="Ingrese">
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">
                                <label for="">Rut</label>
                                <input class="form-control " placeholder="Ej. 12.345.678-9">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="form-group col-xs-4">
                                <label>Teléfono de fijo</label>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 pl-0 pr-0 text-center pt-10">
                                        +56
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 pl-0">
                                        <ui-select ng-required="true" ng-model="codigoFono">
                                        <ui-select-match placeholder="00">
                                        {{$lista.selected}}
                                        </ui-select-match>
                                        <ui-select-choices repeat="lista in listadoDemo">
                                        {{lista}}
                                        </ui-select-choices>
                                        </ui-select>
                                    </div>
                                    <div class="col-lg-5 col-md-5 col-sm-4 pl-0">
                                        <input type="text" class="form-control" placeholder="123 45 67">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-4">
                                <label>Teléfono celular</label>
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-4 pl-0 pr-0 text-center pt-10">
                                        +56
                                    </div>
                                    <div class="col-lg-5 col-md-5 col-sm-4 pl-0">
                                        <input type="text" class="form-control" placeholder="123 45 67">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
                                <label for="">Dirección</label>
                                <input class="form-control" placeholder="Ingrese">
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">
                                <label for="">Email</label>
                                <input class="form-control" placeholder="Ej. Nombre@mail.cl">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-20">
                                <a class="btn-fill info-btn mr-30" href="javascript:void(0);">
                                    <div class="cont-animacion">
                                        <span></span>
                                        <i class="ion-ios-plus-empty"></i>
                                    </div>
                                    <span class="btn-link">Agregar otro representante legal</span>
                                </a>
                            </div>
                            
                        </div>
                    </article>
                    <article class="step" data-step="3">
                        <h3>Datos de la solicitud</h3>
                        <div class="row form-group">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 clear-left form-group">
                                <label for="">Nombre del ejecutivo que recibe la solicitud</label>
                                <input class="form-control " placeholder="Ingrese" value="{{ctrl.ejecutivoData.nombre +' '+ctrl.ejecutivoData.apellidoPaterno+' '+ctrl.ejecutivoData.apellidoMaterno}}">
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">
                                <label for="">Rut</label>
                                <input class="form-control " placeholder="Ej. 12.345.678-9">
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 clear-left form-group">
                                <label for="">Sucursal donde se ingresa la solicitud</label>
                                <input class="form-control " placeholder="Ingrese">
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">
                                <label for="">Fecha</label>
                                <p class="input-group mb-0">
                                    <input type="text" class="form-control" show-button-bar="false" datepicker-popup="{{format}}" ng-model="dt" is-open="opened"
                                    datepicker-options="false" close-text="Close" show-weeks="false" />
                                    <span class="input-group-btn">
                                        <button type="button" class="btn border" ng-click="datepicker($event)">
                                        <i class="ion-calendar"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <label for="">Comentarios</label>
                                <textarea class="form-control" cols="10" rows="2" ng-model="textArea1" maxlength="{{limiteTextArea1}}"></textarea>
                                <span class="pull-right px-14 mt-5">
                                    <span ng-class="{'text-danger': textArea1.length >= limiteTextArea1 -10}">0</span> /
                                    <span ng-class="{'text-danger': textArea1.length == limiteTextArea1}">350</span>
                                </span>
                            </div>
                        </div>
                    </article>
                    <article class="step" data-step="4">
                        <h3>Descargar e imprimir formulario</h3>
                        <div class="row form-group">
                            
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5">
                                <p class="px-14">Descargue e imprima el formulario para que sea firmado.</p>
                            </div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="button" class="btn btn-link ml-0 mr-0">
                                <i class="ion-ios-download-outline px-18"></i> Descargar formulario</button>
                            </div>
                            
                            
                        </div>
                    </article>
                    <article class="step" data-step="5">
                        <h3>Adjuntar formulario firmado u otros documentos</h3>
                        <div class="row form-group" ng-show="false">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15 mb-15">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 color-16">
                                    <div class="col-xs-4">
                                        Directiva dnd-file-upload
                                    </div>
                                    <div class="col-xs-8">
                                        Directiva content-file-upload
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                </section>
                <div class="row" ng-show="false">
                    <div class="bch-mensaje-empresas warning">
                        <article>
                            <h5>Campos incompletos</h5>
                            <p>Verifíque elementos en rojo</p>
                        </article>
                    </div>
                </div>
                <div class="row mb-30">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="border-top pt-5 mt-5 mb-5 pt-10 width-100 text-right">
                            <button type="button" class="btn neutro ml-0" ui-sref="retencion-antecedentes" ng-click="ctrl.btnVolver()">Volver</button>
                            <button type="button" class="btn success">Continuar</button>
                        </div>
                    </div>
                </div>
                <!-- END STEPS -->
            </section>
        </section>
    </div>
    <!-- fin div fomulario -->
</div>
<!-- uiView: footer -->
<footer ui-view="footer" class="footer ng-scope">
    <section class="footer-container__accesos ng-scope ng-hide"
        ng-class="{'ng-hide': uiState.current.name != 'escritorio' , '' : uiState.current.name === 'escritorio' }">
        <div class="container">
            <div class="footer-container__accesos--listado-cdn"><!-- ngIf: footermenu.empty -->
            <div class="widget-cargado ng-scope" ng-if="footermenu.empty">
                <div class="footer-container__accesos--listado listado-cdn"><h5>Accesos CDN</h5>
                    <ul>
                        <li><a href="javascript:void">Asignar reemplazo</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                    </ul>
                </div>
            </div>
            <!-- end ngIf: footermenu.empty --><!-- ngIf: !footermenu.empty --></div>
            <div class="footer-container__accesos--listado-externos"><!-- ngIf: footermenu.empty -->
            <div class="widget-cargado widget-cargado--listado ng-scope" ng-if="footermenu.empty">
                <div class="footer-container__accesos--listado listado-externos item-2"><h5>Gestión <i
                    class="ion-android-open"></i></h5>
                    <ul>
                        <li><a href="javascript:;">Asignar reemplazo <i class="ion-ios-information-outline"
                            popover-append-to-body="false"
                            uib-popover-html="footermenu.htmlcontent"
                            popover-placement="top"
                            popover-trigger="mouseenter"
                        popover-animation="false"></i></a></li>
                        <li><a href="javascript:;">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:;">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:;">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:;">Gestiones ejecutivos DAP</a></li>
                    </ul>
                    <ul>
                        <li><a href="javascript:void">Asignar reemplazo</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                    </ul>
                </div>
                <div class="footer-container__accesos--listado listado-externos"><h5>Gestión <i
                    class="ion-android-open"></i></h5>
                    <ul>
                        <li><a href="javascript:void">Asignar reemplazo</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                    </ul>
                </div>
                <div class="footer-container__accesos--listado listado-externos item-2"><h5>Gestión <i
                    class="ion-android-open"></i></h5>
                    <ul>
                        <li><a href="javascript:void">Asignar reemplazo</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                    </ul>
                    <ul>
                        <li><a href="javascript:void">Asignar reemplazo</a></li>
                        <li><a href="javascript:void">Gestiones ejecutivos DAP</a></li>
                    </ul>
                </div>
            </div>
            <!-- end ngIf: footermenu.empty --><!-- ngIf: !footermenu.empty --></div>
        </div>
    </section>
    <section class="footer-container__global ng-scope">
        <div class="container">
            <div class="bch-logo"></div>
            <div class="footer-container__mesa-ayuda"><p>Linea de apoyo comercial</p><span>3-2222</span></div>
        </div>
    </section>
</footer>
<section class="box-over">
    <h2>Notificaciones <i class="ion-close-round box-over__close"></i></h2>
    <p class="functionality-in-progress">Función en desarrollo</p>
</section>
<!--    <footer ui-view="footer"></footer>
-->
</div>
<!-- end ngIf: uiState.current.name != 'login' -->
<!-- ngIf: uiState.current.name === 'login' -->
<style type="text/css" media="screen">
.client-box__defuncion {
margin-left: 20px;
margin-top: 15px;
float: left;
}
.fixed-top .client-box {
padding: 4px !important;
}
.fixed-top .client-box .client-box__defuncion {
margin-left: 20px;
margin-top: 0px !important;
}
.fixed-top .client-box .client-box__nav {
margin-top: -7px !important;
}
.fixed-top .client-box .client-box__defuncion i, .fixed-top .client-box .client-box__nav i {
font-size: 25px !important;
}
</style>
<div>
<div class="sweet-overlay"></div>
<div class="sweet-alert"><h2>Mensaje de titulo</h2>
<div class="icon error"><span class="x-mark"><span class="line left"></span><span
class="line right"></span></span></div>
<div class="icon warning"><span class="body"></span><span class="dot"></span></div>
<div class="icon info"></div>
<div class="icon success"><span class="line tip"></span><span class="line long"></span>
<div class="placeholder"></div>
<div class="fix"></div>
</div>
<div class="icon custom"></div>
<div class="space-box"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
<button class="confirm">OK</button>
<button class="cancel">Cancel</button>
</div>
</div>
</body>
</html>