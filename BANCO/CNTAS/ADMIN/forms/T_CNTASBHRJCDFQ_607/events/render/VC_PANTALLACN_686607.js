
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: pantallaCreacionCuenta
task.render = function (entities, renderEventArgs){
    
    renderEventArgs.commons.api.viewState.hide('VA_TIPOCUENTAQJAFK_526418');
    renderEventArgs.commons.api.viewState.hide('VA_SALDOIGEIUONGFJ_226418');
    renderEventArgs.commons.api.viewState.hide('VA_VABUTTONQQLAQAF_932418');
    renderEventArgs.commons.api.viewState.hide('VA_VABUTTONBJWRJDK_498418');
    
    

    renderEventArgs.commons.execServer = false;

};