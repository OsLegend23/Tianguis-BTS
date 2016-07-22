Ext.define('Tbts.model.ModeloProducto', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'idProducto', type: 'number' },
        { name: 'idCategoria', type: 'number' },
        { name: 'descripcion', type: 'string' },
        { name: 'marca', type: 'string' },
        { name: 'precio', type: 'number' },
        { name: 'stockMinimo', type: 'number' },
        { name: 'stockActual', type: 'number' },
        { name: 'foto', type: 'string' }
    ]/*,
    actualizarProducto:function(productoEditado){
        //LOGICA ADICIONAL
        this.set(productoEditado);
    },
    borrarProducto:function(){
       //LOGICA ADICIONAL
        this.erase();
    }*/
});