/**
 *
 * 系统首页布局West界面
 * @author JY
 * @since 2012-04-22
 */
Ext.define('BMS.view.layout.West', {
    extend: 'Ext.panel.Panel',
    region: 'west',
    collapsible: true,
    layout: 'accordion',
    title: '系统导航',
    split: true,
    autoScroll: true,
    width: 200,
    cls: 'imagesIcon',
    layoutConfig: {
        fill: true,
        hideCollapseTool: true,
        animate: true
    },
    initComponent: function() {

        var me = this;
        Ext.applyIf(me, {
            items: [
                    Ext.create('Ext.tree.Panel',{
                        title: '系统管理',
                        width: 200,
                        height: 20,
                        store: store,
                        rootVisible: false,
                        listeners: {
                            'itemclick': function(tree, record, item, index) {
                                if (!record.isLeaf()) {
                                    return;
                                }
                                var center = Ext.getCmp("centerPanel");
                                items = center.add({
                                    //id:id,
                                	iconCls: 'tab_organisationIcon',
                                    title: 'panel标题' ,
                                    closable: true,
                                    layout: 'fit',
                                    //html: '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src='+url+'></iframe>'
                                    html:'<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src='+/department/+'></iframe>'
                                    //如果功能页面使用中心区域阴影加载模式则使用下面的代码unmaskCenterPanel();页面加载完毕后取消阴影
                                });
                                center.setActiveTab(items); // 设置为活动面板
                                center.doLayout();          // 重新计算布局
                            }
                        }
                    })
                ]
        });
        this.callParent(arguments);
    }
});

var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true },
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true },
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true },
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true }
        ]
    }
});