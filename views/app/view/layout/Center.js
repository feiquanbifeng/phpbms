/**
 *
 * 系统首页布局Center界面
 * @author JY
 * @since 2012-04-22
 */
Ext.define('BMS.view.layout.Center', {
    extend: 'Ext.tab.Panel',
    region: 'center',
    collapsible: false,
    title: '系统导航',
    activeTab: 0,
    id: 'centerPanel',
    border: false,
    frame: true,
    layout: 'fit',
    initComponent: function() {

        var me = this;
        Ext.applyIf(me, {
            items: [{
                title:"<img align='top' class='iepng' src='../../../resource/image/ext/user.png'/>我的工作台",
                listeners: {activate: function(){Ext.getCmp('centerPanel').setTitle('aa -> mm');}},
                html: "<div style='padding-left:20px;padding-top:10px;'><H1>2013奋斗到底</H1><br /></div><div style='padding-left:20px;padding-top:10px;'><H1>成事在天,谋事在人</H1><br />460429192@qq.com</div>"
            }]
        });
        this.callParent(arguments);
    }
});
