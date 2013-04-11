/**
 *
 * 系统部门管理界面
 * @author JY
 * @since 2012-04-24
 */
Ext.Loader.setConfig({enabled:true});
//设置动态加载路径 命名空间
Ext.Loader.setPath('BMS', '/static/js/app');
Ext.onReady(function() {
	Ext.create('WMZ.view.layout.CommonViewport', {
		grid: Ext.create('WMZ.view.group.Department')
	});
});


Ext.define('WMZ.view.group.Department',{
	extend: 'WMZ.common.PageGrid',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			title: '部门信息表',
			iconCls: 'buildingIcon',
			height: 500,
			defaults: {
				sortable: false,
				xtype: 'gridcolumn'
			},
			store: Ext.create('WMZ.store.Department'),
			columns: [
				{
					header: '部门名称',
					dataIndex: 'deptname',
					width: 180
					
				}, {
					header: '上级部门',
					dataIndex: 'parentid',
					width: 180
				}, {
					header: '部门编号',
					dataIndex: 'customid',
					width: 100
				}, {
					header: '备注',
					dataIndex: 'remark',
					width: 200,
					sortable: false
				}],
			tbar: [
			{
				text: '新增',
				iconCls: 'page_addIcon',
				handler: function() {
					//addInit();
				}
			}, '-', {
				text: '修改',
				iconCls: 'page_edit_1Icon',
				handler: function() {
					//editInit();
				}
			}, '-', {
				text: '删除',
				iconCls: 'page_delIcon',
				handler: function() {
					//deleteDeptItems('1', '');
				}
			}, '->', Ext.create('Ext.form.field.Text', {
				id: 'queryParam',
				name: 'queryParam',
				emptyText: '请输入部门名称',
				enableKeyEvents: true,
				listeners: {
					specialkey: function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							//queryDeptItem();
						}
					}
				},
				width : 130
			}), {
				text: '查询',
				iconCls: 'previewIcon',
				handler: function() {
					//queryDeptItem();
				}
			}, '-', {
			text: '刷新',
				iconCls: 'arrow_refreshIcon',
				handler: function() {
					me.store.load();
				}
			}],
		});
		me.callParent(arguments);
	}
});