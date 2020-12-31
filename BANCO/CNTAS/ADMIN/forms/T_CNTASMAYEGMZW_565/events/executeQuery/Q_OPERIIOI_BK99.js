
//OperacionesDestinoQuery Entity: OperacionesDestino
task.executeQuery.Q_OPERIIOI_BK99 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaDestino = executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaDestino.numCuentaDestino
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.OperacionesDestino = true;
};