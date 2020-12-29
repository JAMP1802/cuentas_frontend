
//gridRowSelecting QueryView: 
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_VR51_GJG53 = function (entities,gridRowSelectingEventArgs) {
    
    
    codCliente=entities.Cliente._view[0].codCliente;
    
    gridRowSelectingEventArgs.commons.api.viewState.show('VA_TIPOCUENTAQJAFK_526418');
    gridRowSelectingEventArgs.commons.api.viewState.show('VA_SALDOIGEIUONGFJ_226418');
    
    
     gridRowSelectingEventArgs.commons.execServer = false;

};







