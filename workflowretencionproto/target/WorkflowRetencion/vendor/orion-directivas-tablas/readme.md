Directivas de Tabla

Esta directiva tiene de dependencia angular-off-click,
en tu build.config debes agregarlo así:

'vendor/angular-off-click/dist/angular-off-click.js'

Ejemplo tabla:

<pre>
	<xmp>
<div class="table-responsive" tablas-interactivas tabla-select
     columnas-ocultas="table heading 4,table heading 5,table heading 6, table heading 7"
     columnas-no-ocultables="Nombre, fecha"
     status-columnas="app.tabla1.statusColumnas"
     cantidad-minima-columnas="4"
     cantidad-maxima-columnas="5">
    <table class="table tabla-interactiva tabla-seleccion">
        <thead>
        <tr>
            <th class="actions text-center" width="5%">
                <label class="bch-custom-check">
                    <div>
                        <input type="checkbox" class="seleccionar-todo">
                        <i></i>
                    </div>
                </label>
            </th>
            <th ng-click="app.tabla1.predicate = 'name';  app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'name'}">Nombre</th>
            <th ng-click="app.tabla1.predicate = 'fecha'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'fecha'}">Fecha</th>
            <th ng-click="app.tabla1.predicate = 'data1'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data1'}">Table heading 1</th>
            <th ng-click="app.tabla1.predicate = 'data2'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data2'}">Table heading 2</th>
            <th ng-click="app.tabla1.predicate = 'data3'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data3'}">Table heading 3</th>
            <th ng-click="app.tabla1.predicate = 'data4'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data4'}">Table heading 4</th>
            <th ng-click="app.tabla1.predicate = 'data5'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data5'}">Table heading 5</th>
            <th ng-click="app.tabla1.predicate = 'data6'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data6'}">Table heading 6</th>
            <th ng-click="app.tabla1.predicate = 'data7'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'data7'}">Table heading 7</th>
            <th ng-click="app.tabla1.predicate = 'monto'; app.tabla1.reverse=!tabla1.reverse" ng-class="{active: app.tabla1.predicate == 'monto'}">Monto</th>
            <th class="actions show-hide" width="7%">
                <a href="javascript:void(0)" ng-click="app.tabla1.dropCols = !app.tabla1.dropCols" ng-class="{'lista-desplegada': app.tabla1.dropCols}" off-click-filter="'.listado-header'">
                    <i class="ion-ios-more"></i>
                </a>
                <div class="listado-header" collapse="!app.tabla1.dropCols" off-click="app.tabla1.dropCols = false"></div>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="dato in app.tabla1.datos | filter : app.filterFunction | orderBy : app.tabla1.predicate : app.tabla1.reverse">
            <td class="actions text-center">
                <label class="bch-custom-check">
                    <div>
                        <input type="checkbox">
                        <i></i>
                    </div>
                </label>
            </td>
            <td>{{dato.name}}</td>
            <td>{{dato.fecha}}</td>
            <td>{{dato.data1}}</td>
            <td>{{dato.data2}}</td>
            <td>{{dato.data3}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>$ {{dato.monto}}</td>
            <td class="actions text-center">
                <div class="dropdown dropdown-descarga pull-right">
                    <a class="dropdown-toggle boton-descarga-documentos" href="javascript:void(0);" aria-haspopup="true" aria-expanded="false" popover-append-to-body="true" popover="Descargar" popover-placement="top" popover-trigger="mouseenter" popover-animation="false"><i class="ion-ios-download-outline"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="bch-ico-q2-TXT"></i>Descargar TXT</a></li>
                        <li><a href="#"><i class="icon-icon-xls"></i>Descargar Excel</a></li>
                        <li><a href="#"><i class="icon-icon-pdf"></i>Descargar PDF</a></li>
                    </ul>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
	</xmp>
</pre>
