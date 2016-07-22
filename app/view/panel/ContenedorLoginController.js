Ext.define('Tbts.view.panel.ContenedorLoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.panel-contenedorlogin',
    init:function(){
        this.listen({
            component:{
                'button':{
                    click:'onClickAceptar'
                }
            }
        });
    },

    onClickAceptar: function(boton){
        var formulario=this.getView().down('form').getForm();
        
        if(formulario.isValid()){
            this.getView().fireEvent('login',{
                username:'fsd',
                rol:'usuario'
            });
        }
    }
    
});
