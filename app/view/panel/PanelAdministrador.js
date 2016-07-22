Ext.define('Tbts.view.panel.PanelAdministrador', {
    extend: 'Ext.tab.Panel',
    xtype: 'paneladministrador',
    itemId:'panelAdministrador',

    items: [{
        xtype: 'panelproductosadmon'
    }, {
        xtype: 'panelordenesadmon'
    }]

});