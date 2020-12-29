
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: pantallaCreacionCuenta
task.initData.VC_PANTALLACN_686607 = function (entities, initDataEventArgs){
    
    
    initDataEventArgs.commons.api.viewState.hide('G_PANTALLACU_483418');

    initDataEventArgs.commons.execServer = false;

};