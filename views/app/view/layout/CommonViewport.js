/**
 *
 * 系统首页布局Center共通界面
 * @author JY
 * @since 2012-04-24
 */
Ext.define('BMS.view.layout.CommonViewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    initComponent: function() {
    	//var deptTree = this.deptTree;
    	var grid = this.grid;
        var me = this;
        Ext.applyIf(me, {
            items: [{
                title: '<span class="commoncss">组织机构</span>',
                iconCls: 'chart_organisationIcon',
                tools: [{
                    id: 'refresh',
                    handler: function() {
                        //deptTree.root.reload()
                    }
                }],
                collapsible: true,
                width: 210,
                minSize: 160,
                maxSize: 280,
                split: true,
                region: 'west',
                autoScroll: true,
                //items: [deptTree]
            }, {
                region : 'center',
                layout : 'fit',
                border : false,
                items : [grid]
            }]
        });
        this.callParent(arguments);
    }
});