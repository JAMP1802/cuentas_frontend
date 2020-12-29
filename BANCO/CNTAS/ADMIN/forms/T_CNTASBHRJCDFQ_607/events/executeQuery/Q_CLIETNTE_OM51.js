
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNTE_OM51 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.cedula=executeQueryEventArgs.commons.api.vc.model.FiltroBusqueda.cedula;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};