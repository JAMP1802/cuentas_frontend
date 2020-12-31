
//OperacionesQuery Entity: Operaciones
task.executeQuery.Q_OPERCCOE_TY13 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta = executeQueryEventArgs.commons.api.vc.model.FiltroBusqueda.numCuenta
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Operaciones = true;
};