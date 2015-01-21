/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires:['MyApp.store.main.Navigation'],//引入必要文件

    data: {
        navigationTitle: '导航栏'//导航栏标题
    }

   /* stores:{
        navigationStore:{
            type:'navigation',//导航栏treestore
            storeId:'navigation'
        }
    }*/
});