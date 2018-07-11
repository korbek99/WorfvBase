<%--
  Created by IntelliJ IDEA.
  User: Carlos Negrón
  Date: 6/22/2018
  Time: 13:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Formulario Retención de Clientes</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <!-- Incluir Bootstrap -->
    <link rel="stylesheet" href="static/css/bootstrap.min.css">
    <!-- Incluir AngularJS -->
    <script src="static/js/lib/angular.min.js"></script>
    <script src="static/js/app.js"></script>
    <script src="static/js/service/cliente_service.js"></script>
    <script src="static/js/controller/cliente_controller.js"></script>
</head>

<body ng-app="workflowRetencion">
<div class="container" ng-controller="ClientController as ctrl">
    <h1>Formulario Cliente</h1>

    <form>
        <div id="datos-cliente" ng-show="true">
            <br>
            <br>

            <div class="form-group">
                <label for="text">Nombre/Razon Social:</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre o Razon Social" name="Nombre"
                       disabled required ng-model="ctrl.clientData.nombre">
            </div>
            <div class="form-group">
                <label for="text">Rut:</label>
                <input type="text" class="form-control" id="rut" placeholder="Rut cliente" name="rut" disabled required
                       ng-model="ctrl.clientData.rutCliente">
            </div>
            <div class="form-group">
                <label for="text">Celular</label>
                <input type="text" class="form-control" id="celualr" placeholder="Celular cliente" name="celular"
                       required ng-model="ctrl.clientData.fonoParticularCliente">
            </div>
            <div class="form-group">
                <label for="text">Email:</label>
                <input type="text" class="form-control" id="email" placeholder="Email cliente" name="email"
                       required ng-model="ctrl.clientData.emailParticularCliente">
            </div>
            <br>
            <br>
            <button type="submit" class="btn btn-success">Submit</button>
        </div>
    </form>
</div>
</body>
</html>
