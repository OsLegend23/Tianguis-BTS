
Ext.define('Tbts.view.panel.ContenedorLogin',{
    extend: 'Ext.panel.Panel',
    xtype:'contenedorlogin',
    requires: [
        'Tbts.view.panel.ContenedorLoginController',
        'Tbts.view.panel.ContenedorLoginModel'
    ],

    controller: 'panel-contenedorlogin',
    viewModel: {
        type: 'panel-contenedorlogin'
    },

    layout:{
        type:'vbox',
        align:'center',
        pack:'middle'
    },
    items:[
        {
            xtype:'form',
            width:300,
            height:250,
            title:'Hola compaq',
            items:[],
            buttons:[
                {
                    text:'Aceptar'
                }
            ]
        }
    ]
});
