# Orion Drop Multi Select

Directiva selector dropdown con multiples opciones

## Instalación

#### bower.json

Agregar dependencia:

`"orion-drop-multi-select": "1.0.12"`


#### tuApp.module.js

Agregar modulo:

`'WebBancoChile.dropMultiSelect'`

## Uso

```
<drop-multi-select data="ejemploData">
</drop-multi-select>
```

Donde:

```
ejemploData = {
    opciones: ['opcion1','opcion2','opcion3','opcion4','opcion5'],
    selecciones: [],
    placeholder: 'Seleccionar rubros...',
    placeholderDisabled: "Bloqueado por condicion",
    placeholderVacio: "Sin rubros",
    msjSeleccionados: 'Rubros seleccionados:',
    buscador: true,
    botones: true,
    textoAceptar: 'Seleccionar',
    funcionAceptar: funcionAceptar,
    disabled: true,
    selectAll: true,
    invalid: false
};
```

*`ejemploData.opciones` es la lista de opciones para seleccionar.

*`ejemploData.selecciones` es la lista de opciones seleccionadas.

`ejemploData.placeholder` es el mensaje para la selección vacía.

`ejemploData.placeholderDisabled` es el mensaje que muestra cuando disabled es true. (tiene dependencia con `ejemploData.disabled`)

`ejemploData.placeholderVacio` es el mensaje que muestra cuando `ejemploData.opciones` es vacio.

`ejemploData.msjSeleccionados` es el mensaje para la selección no vacía.

`ejemploData.buscador` es un booleano que determina si se va a poder filtrar la lista de opciones con un input de búsqueda de texto.

`ejemploData.botones` es un booleano que determina si el selector va a tener botones Aceptar y Cancelar.

`ejemploData.textoAceptar` es el texto para el botón Aceptar.

`ejemploData.funcionAceptar` es la función a ejecutar al hacer click en el botón Aceptar (ejemplo abajo).

`ejemploData.disabled` es un booleano que determina si el selector va estar deshabilitado.

`ejemploData.selectAll` es un booleano agrega una opción en la primera posición para seleccionar todos los elementos simultáneamente.

`ejemploData.invalid` es un booleano que agrega la clase ng-invalid si el dato es requerido.

*: Obligatorio


### Resetear selecciones

Se puede vaciar la lista de selecciones, desde el controlador, de la forma:

```
ejemploData.selecciones = [];
```

### Ejemplo funcionAceptar

Saca los strings seleccionados de la lista de opciones:

```
function funcionAceptar(){
    for (var i = ejemploData.selecciones.length - 1; i >= 0; i--) {
        var index = ejemploData.opciones.indexOf(ejemploData.selecciones[i]);
        if(index > -1){
            ejemploData.opciones.splice(index,1);
        }
    }
}
```

### Actualización parámetro data

Cada vez que se quiera actualizar la data que se le entrega a la directiva, se tiene que ejecutar la siguiente línea:

```
vm.$scope.$root.$broadcast("orionDropMultiSelect::refrescarData", ejemploData);
```

