Ext.define('Tbts.view.panel.PanelProductos', {
    extend: 'Ext.panel.Panel',
    xtype: 'panelproductos',
    itemId: 'panelProductos',
    dockedItems: [{
        xtype: 'toolbarbuscar',
        dock: 'top',
        hideLabel: false
    }]
});