Ext.define('MyApp.store.main.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',
    proxy: {
        type: 'ajax',
        url: 'resources/data/Navigation.json'
    },
    root: {
        text: 'All',
         id: 'all',
        expanded: true
    }
});
