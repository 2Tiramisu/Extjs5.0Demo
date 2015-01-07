/**
 * Created by zjzt on 2014/12/31.
 */
Ext.define('MyApp.view.main.Navigation', {
    extend: 'Ext.tree.Panel',//继承treepanel
    xtype: 'app-navigation',
    rootVisible: false,
    lines: false,
    stateful: true,
    useArrows: true,
    hideHeaders: true,
    width: 250,
    minWidth: 100,
    split: true,
    collapsible: true,
    columns:[{
        xtype: 'treecolumn',
        flex: 1,
        dataIndex: 'text'
    }],
    bind: {
        store: '{navigationStore}',//绑定store
        title: '{navigationTitle}'
    }
});