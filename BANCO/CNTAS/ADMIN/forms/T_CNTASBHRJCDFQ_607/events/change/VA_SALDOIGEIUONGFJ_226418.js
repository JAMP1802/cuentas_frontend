

//Entity: FiltroCuentas
//FiltroCuentas.saldoI (TextInputBox) View: pantallaCreacionCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_SALDOIGEIUONGFJ_226418 = function(  entities, changedEventArgs ) {

    let valor = entities.FiltroCuentas.saldoI;
	if(tipoC == "A"){
		if(!(valor>= 50 && valor <= 200)){
            changedEventArgs.commons.messageHandler.showMessagesInformation('El valor de estar entre 50 y 200');
            changedEventArgs.commons.api.viewState.disable('VA_VABUTTONQQLAQAF_932418');
        }else{
            changedEventArgs.commons.api.viewState.enable('VA_VABUTTONQQLAQAF_932418');
        }
	}else if(tipoC == "C"){
		if(!(valor>= 50 && valor <= 100)){
            changedEventArgs.commons.messageHandler.showMessagesInformation('El valor de estar entre 50 y 100');
            changedEventArgs.commons.api.viewState.disable('VA_VABUTTONBJWRJDK_498418');
        }else{
            changedEventArgs.commons.api.viewState.enable('VA_VABUTTONBJWRJDK_498418');
        }
	}
    
    changedEventArgs.commons.execServer = false;

};