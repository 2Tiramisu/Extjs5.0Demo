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
    viewModel: true,
    width: 600,
    layout: 'column',
    defaults: {
        bodyPadding: 10,
        height: 300,
        autoScroll: true,
        columnWidth: 0.5
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
                value: 'top'
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
        xtype: 'textfield',
        value:'hello',
        reference: 'isAdmin'
    },{
        xtype: 'textfield',
        fieldLabel: 'Admin Key',
        bind: {
            value: '{value.value}'
        }
    }]

});