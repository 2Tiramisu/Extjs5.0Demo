/**
 * Created by zjzt on 2015/1/23.
 */
/**
 * Panel headers can be docked to any side of the panel.  This example demonstrates how
 * to dynamically change the position of a panel header by binding the headerPosition
 * config to the value of a segmented button.
 */
Ext.define('MyApp.view.panel.HeaderPosition', {
    extend: 'Ext.panel.Panel',
    xtype: 'panel-header-position',
    width: 600,
    layout: 'column',
    defaults: {
        bodyPadding: 10,
        height: 300,
        autoScroll: true
    },
    bodyStyle: 'background: transparent',

    tbar: [
        {
            xtype: 'label',
            text: 'Header Position:'
        },
        {
            xtype: 'segmentedbutton',
            reference: 'positionBtn',
            value: 'top',
            defaultUI: 'default',
            items: [{
                text: 'Top',
                value: 'top',
                handler:function(){
                    console.log(getPositionBtn());
                }
            }, {
                text: 'Right',
                value: 'right'
            }, {
                text: 'Bottom',
                value: 'bottom'
            }, {
                text: 'Left',
                value: 'left'
            }]
        }
    ],

    items: [{
        columnWidth: 0.5,
        margin:'10 5 0 0',
        title: 'Panel',
        html: '我是正常的',
        bind: {
            headerPosition: '{positionBtn.value}'
        }
    }, {
        columnWidth: 0.5,
        frame: true,
        margin:'10 0 0 5',
        title: 'Framed Panel',
        html:' 我是frame的，注意我有圆角',
        bind: {
            headerPosition: '{positionBtn.value}'
        }
    }]

});