# orion-transition-detail-directive

### Instalación

Agregar libreria `orion-transition-detail-directive` en el archivo bower.json

```Javascript
"dependencies": {
    ...
    "orion-transition-detail-directive": "X.X.X.X",
    ...
}
```

Agregar module en `xxxx.module.js`

```Javascript
(function () {
    angular
        .module( 'WebBancoChile', [
            ...
            'WebBancoChile.transitionDetailDirective',
            ...
            ]);
})();
```

### Uso

Agregar directiva al html donde sea requerido.

```Javascript
<advanced-detail back-state="statename.to.go"
                 scroll-fix-button="200">
</advanced-detail>
```

|Parámetro          |Requerido|Descripción                                                                                                                                              |
|-------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------   |
|back-state         |   si    | Estado al cual se debe regresar desde la vista del detalle. El cambio de estado se ejecutará desde el botón `volver` presente en la vista del detalle   |
|scroll-fix-button  |   si    | Parametro para ajustar la altura del boton volver en la vista detalle                                                                                   |


### Observaciones

- La directiva no crea una tabla. La tabla con los elementos a detallar debe estar presente en la vista y debe ser provista de forma externa a la directiva. La directiva solo maneja la transición con el efecto visual correspondiente y crea un botón `volver` que retorna al estado anterior al detalle
- Se han registrado problemas en los filtros del detalle al presionar la lupa. Esto se soluciona agregando la clase 'clear' al row donde se encuentran los filtros:

```html
<div class="row clear">
    <form name="formConsultaDetalleEjemplo">
        ...
    </form>
</div>
```

- En la tabla con los elementos a detallar se debe la siguiente estructura y las siguientes clases para el correcto funcionamiento de la directiva:

```html
<!-- div padre -->
<div>
    <!-- div que contendra la tabla desde la cual se ira al detalle -->
    <div class="... contenedor-listado ...">
        ...
        <div class="... table-responsive ...">
            <table class="... table ...">
                <thead>
                <tr>
                    ...
                    <th > ... </th>
                    ...
                </tr>
                </thead>
                <tbody>
                <tr ng-repeat="contrato in contratosCtrl.contratosPaginados">
                    ...
                    <td>...</td>
                    ...
                    <td>
                        <a  ...
                            class="... boton-detalle ..."
                            ui-sref="detailState"
                           ...>
                           ...
                        </a>
                    </td>
                    ...
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- directiva con detalle -->
    <advanced-detail back-state="statename.to.go"
                     scroll-fix-button="200">
    </advanced-detail>
</div>
```

### ¿Que hace la directiva?

La funcionalidad principal la encontramos en el archivo
`advanced-detail.directive.js`, la cual decribiremos a continuación:

De acuerdo con la estructura de la tabla antes señalada,
la directiva buscará el elemento padre y creara las clases 
necesarias para identificar los contenedores del detalle y el
listado original.

Con esto se enlazaran los manejadores de eventos asociados a los
botones con clase `boton-detalle` para realizar la transicion de ida
y el evento asociado al `boton-volver` para la transicion de vuelta.

Se define tambien un watcher para capturar los cambios de tamaño
del contenido del detalle para ajustar al tamaño del contenedor padre
y evitar que el resto de contenido (como el footer) se traslape.

