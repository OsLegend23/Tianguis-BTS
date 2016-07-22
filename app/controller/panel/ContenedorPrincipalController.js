Ext.define('Tbts.controller.panel.ContenedorPrincipalController',{
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            '*':{
                'cambiarcard':'onCambiarCard'
            },
            'contenedorlogin':{
                'login': 'onLoginContenedorLogin'
            }
        });
    },

    refs:[
        {
            ref:'ContenedorPrincipal',//guerer
            selector:'contenedorprincipal'//ecstaip
        }
    ],

    onLoginContenedorLogin: function(datosUsuario){
        this.getContenedorPrincipal().fireEvent('cambiarcard',
            (datosUsuario.rol=='admon')?'panelAdministrador':'panelProductos');
    },

    onCambiarCard: function(idCard){
        console.log(idCard);
        var contenedorCard = this.getContenedorPrincipal().down('#contenedorCard');
        console.log(contenedorCard);
        contenedorCard.getLayout().setActiveItem(idCard);
    }

});