/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.store.main.Navigation',
        'MyApp.view.thumbnails.Thumbnails'
    ],

    alias: 'controller.main',

    control: {
        'app-navigation': {//组件别名，表示要控制的是该组件
            selectionchange: 'onTreeNavSelectionChange'
        }
    },

    routes  : {
        ':id': {
            action: 'handleRoute',//执行跳转
            before: 'beforeHandleRoute'//路由跳转前操作
        }
    },

    onTreeNavSelectionChange: function(selModel, records) {
        var record = records[0];
        if (record) {
            this.redirectTo(record.getId());
        }
    },

    beforeHandleRoute: function(id, action) {
        var me = this,
            store =Ext.StoreMgr.get('navigation');
        var node = store.getNodeById(id);

        if (node) {
            //resume action
            action.resume();
        } else if(store.getCount() === 0){
            action.stop();
            me.redirectTo(id);
        }else {
            Ext.Msg.alert(
                '路由跳转失败',
                '找不到id为' + id + ' 的组件. 界面将跳转到应用初始界面',
                function() {
                    me.redirectTo('all');
                }
            );
            //stop action
            action.stop();
        }
    },

    handleRoute: function(id) {
        var me = this,
            mainView = me.getView(),
            navigationTree = mainView.down('app-navigation'),
            store =Ext.StoreMgr.get('navigation'),
            node = store.getNodeById(id),
            contentPanel = mainView.down('app-contentPanel'),
            thumbnails = mainView.down('thumbnails');
        if(node.isLeaf()){
            if (thumbnails) {
                contentPanel.remove(thumbnails, false); // remove thumbnail view without destroying
            } else {
                contentPanel.removeAll(true);
            }
        }else{

            if(!thumbnails){
                contentPanel.removeAll(true);
            };
            contentPanel.add({xtype:'thumbnails'});
        }

    }

});
