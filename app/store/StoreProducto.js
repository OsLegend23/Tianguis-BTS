/**
 * Created by raguilar on 22/07/2016.
 */
Ext.define('Tbts.store.StoreProducto', {
    extend: 'Ext.data.Store',
    model: 'Tbts.model.ModeloProducto',
    proxy: {
        api: {
            read: '',
            create: 'agregar en backend',
            update: 'llamadaabackendalgobienparaupdatear',
            destroy: 'eliminar en backend'
        },
        type: 'ajax',
        url: 'Servicios/productos.json',
        reader: {
            type: 'json',
            rootProperty: 'productos'
        }
    },

        /*
    Uncomment to specify data inline
    data : [
        {firstName: 'Ed',    lastName: 'Spencer'},
        {firstName: 'Tommy', lastName: 'Maintz'},
        {firstName: 'Aaron', lastName: 'Conran'}
    ]
    */

    obtenerProductosPorCategoria: function(idCategoria) {

        this.load({
            params: {
                idCategoria: idCategoria
            },
            callback: function(records) {
                console.log('productoscargados');
                this.fireEvent('productoscargados', records);
            }
        });

    },
    agregarProducto: function(producto) {
        this.add(producto);
        this.sync();
    }/*,
    actualizarProducto:function(productoEditado){
        //LOGICA ADICIONAL
        this.set(productoEditado);
    }*/,
    borrarProducto:function(producto){
        this.remove(producto);
        this.sync();
    }
});