
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNTE_OM51 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.cedula=executeQueryEventArgs.commons.api.vc.model.FiltroBusqueda.cedula;
    //executeQueryEventArgs.parameters.tipoCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuentas.tipoCuenta;
    //executeQueryEventArgs.parameters.cedula=executeQueryEventArgs.commons.api.vc.model.FiltroCuentas.cedula;
    //executeQueryEventArgs.parameters.cedula=executeQueryEventArgs.commons.api.vc.model.FiltroCuentas.cedula;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};