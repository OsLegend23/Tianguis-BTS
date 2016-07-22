
Ext.define('Tbts.view.panel.ContenedorPrincipal',{
    extend: 'Ext.panel.Panel',
    xtype:'contenedorprincipal',
    layout: 'border',

    items:[
        {
            xtype: 'container',
            region: 'north',
            height: 200
        },
        {
            xtype: 'container',
            itemId: 'contenedorCard',
            region: 'center',
            layout: 'card',
            items:[
                {
                    xtype: 'contenedorlogin'
                },
                {
                    xtype: 'paneladministrador'
                },
                {
                    xtype: 'panelcategorias'
                },
                {
                    xtype: 'panelproductos'
                }
            ]
        }
    ]

});
