/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Tbts.Application', {
    extend: 'Ext.app.Application',

    name: 'Tbts',

    requires: [
        'Comps.componentes.Toolbar'
    ],

    controllers: [
        'panel.ContenedorPrincipalController'
    ],

    views: [
        'panel.ContenedorLogin',
        'panel.PanelProductosAdmon',
        'panel.PanelOrdenesAdmon',
        'panel.PanelAdministrador',
        'panel.PanelCategorias',
        'panel.PanelProductos'
    ],

    stores: [
        'StoreProducto'
    ],

    models: [
        'ModeloProducto'
    ],

    launch: function() {
        // TODO - Launch the application
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});