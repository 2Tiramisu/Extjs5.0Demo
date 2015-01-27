/**
 * Panel headers can be docked to any side of the panel.  This example demonstrates how
 * to dynamically change the position of a panel header by binding the headerPosition
 * config to the value of a segmented button.
 */
Ext.define('MyApp.view.panel.HeaderPosition', {
    extend: 'Ext.panel.Panel',
    xtype: 'panel-header-position',
    requires:[
        'Ext.layout.container.Column',
        'Ext.form.Label',
        'Ext.button.Segmented'
    ],
    width: 600,
    layout: 'column',
    viewModel: true,

    defaults: {
        bodyPadding: 10,
        height: 300,
        scrollable: true
    },

    initComponent: function () {

        this.bodyStyle = 'background: transparent';

        this.tbar = [
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
        ];

        this.items = [
            {
                columnWidth: 0.5,
                margin: '10 5 0 0',
                title: 'Panel',
                html: '我没有圆角',
                bind: {
                    headerPosition: '{positionBtn.value}'
                }
            }, {
                columnWidth: 0.5,
                margin: '10 10 10 5',
                frame: true,
                title: 'Framed Panel',
                html: '我有圆角',
                bind: {
                    headerPosition: '{positionBtn.value}'
                }
            }
        ];

        this.callParent();
    }
});