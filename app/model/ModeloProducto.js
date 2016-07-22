/**
 * Created by raguilar on 22/07/2016.
 */
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

    /*
    Uncomment to add validation rules
    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }
    */

    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});