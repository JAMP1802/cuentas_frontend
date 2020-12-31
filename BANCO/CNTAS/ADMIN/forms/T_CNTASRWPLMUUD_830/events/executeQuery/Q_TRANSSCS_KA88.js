
//TransaccionQuery Entity: Transaccion
task.executeQuery.Q_TRANSSCS_KA88 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta = executeQueryEventArgs.commons.api.vc.model.FiltroBusqueda.numCuenta
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transaccion = true;
};