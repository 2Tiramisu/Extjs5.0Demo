/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {

    extend: 'Ext.container.Container',

    requires: [
        'MyApp.view.main.MainController',//引入controller
        'MyApp.view.main.MainModel',
        'MyApp.view.main.Header',//引入Header
        'MyApp.view.main.Navigation'//引入导航栏
    ],

    xtype: 'app-main',

    controller: 'main',//指定控制器

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'north',
            xtype: 'app-header'//使用Header
        }, {
            xtype: 'app-navigation',
            region: 'west'
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Home',
                html:' KitchenSink.DummyText.longText'
            }, {
                title: 'Users',
                html: 'KitchenSink.DummyText.extraLongText'
            }, {
                title: 'Groups',
                html:' KitchenSink.DummyText.longText'
            }, {
                title: 'Settings',
                html:' KitchenSink.DummyText.extraLongText'
            }]
        }]
});
