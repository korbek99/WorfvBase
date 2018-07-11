# Orion Drag and Drop File Upload (Beta)


### Instalación

Agregar paquete bower:

`bower install orion-drag-and-drop-file-upload --save-dev`

Agregar module en `tuApp.module.js`

`WebBancoChile.dndFileUpload`


### Uso


Agregar directiva al HTML en donde sea requerido.

```Javascript
<dnd-file-upload config="" success-call-back="" fail-call-back="" clean-call-back="" progress-call-back=""></dnd-file-upload>
```

|Parametro      |Requerido|Descripción                                                                                            |
|---------------|---------|-------------------------------------------------------------------------------------------------------|
|config         |   si    | Configuracion para la carga del archivo                                                               |
|success-call-back  |   si    | Recibe función que se gatilla cuando la subida está ok                                                          |
|fail-call-back     |   si    | Recibe función que se gatilla cuando la subida falla                                                      |
|progress-call-back |   si    | Recibe función para manejar el progreso de la carga                                                     |
|clean-call-back    |   si    | Recibe función que se gatilla para reinicio de variables                                                |
|validator    |   si    | Recibe función que se valida el archivo que es está subiendo                                              |


Ejemplo config:

```Javascript
vm.config = {
    dataUpload: {
        validMimeType: 'text/plain',
        maxFileSize: '1',
        url: '/recaudacion-tradicional-rest/upload/upload'
    },
    escucha: function(){
        /**
         * funcion que se ejecuta cuando termina de cargar la directiva
         * ideal para iniciar variables despues de la renderizacion
         * no es obligatoria function(){}
         */
    },
    data: {
        /**
         * información extra que se necesite enviar al backend junto con el archivo
         * no es obligatorio
         */
    }
};
```



