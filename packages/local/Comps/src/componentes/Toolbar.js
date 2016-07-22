Ext.define('Comps.componentes.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'toolbarbuscar',

    hideLabel: true,

    items: [{
        scope: this,
        xtype: 'label',
        html: '<h2>Departamentos</h2>',
        hidden: this.hideLabel
    },'->',
        {
            xtype: 'textfield'
        },{
            xtype: 'combobox'
        },
        {
            xtype: 'button',
            text: 'up'
        },
        {
            xtype: 'button',
            text: 'dn'
        }
    ]
});