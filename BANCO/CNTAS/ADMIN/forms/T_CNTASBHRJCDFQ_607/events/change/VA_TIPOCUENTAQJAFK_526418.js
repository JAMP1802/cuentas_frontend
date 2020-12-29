

//Entity: FiltroCuentas
//FiltroCuentas.tipoCuenta (ComboBox) View: pantallaCreacionCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TIPOCUENTAQJAFK_526418 = function(  entities, changedEventArgs ) {

    tipoC=changedEventArgs.newValue;
	
	if(tipoC == "A"){
		changedEventArgs.commons.api.viewState.show('VA_VABUTTONQQLAQAF_932418');
		changedEventArgs.commons.api.viewState.hide('VA_VABUTTONBJWRJDK_498418');

	}else if(tipoC == "C"){
		changedEventArgs.commons.api.viewState.hide('VA_VABUTTONQQLAQAF_932418');
		changedEventArgs.commons.api.viewState.show('VA_VABUTTONBJWRJDK_498418');
	}
    
    changedEventArgs.commons.execServer = false;

};