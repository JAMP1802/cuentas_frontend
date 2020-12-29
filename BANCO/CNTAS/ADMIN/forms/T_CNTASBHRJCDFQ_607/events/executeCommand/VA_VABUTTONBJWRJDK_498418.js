

//Entity: FiltroCuentas
//FiltroCuentas. (Button) View: pantallaCreacionCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONBJWRJDK_498418 = function(  entities, executeCommandEventArgs ) {

     executeCommandEventArgs.commons.api.vc.model.FiltroCuentas.codCliente=codCliente;
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.FiltroCuentas = true;

};