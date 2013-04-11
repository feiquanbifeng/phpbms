/**
 *
 * 系统分页共通
 * @author JY
 * @since 2012-04-27
 */
Ext.define('BMS.common.PageGrid', {
	extend: 'Ext.grid.Panel',
	loadMask: true,
	initComponent: function() {
		var store = this.store;
		var me = this;
		Ext.applyIf(me, {
			bbar: Ext.create('Ext.toolbar.Paging', {
				displayInfo: true,
				store: store,
				displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
				items: ['-', 
				    Ext.create('Ext.form.ComboBox', {
						name: 'pagesize',
						lazyRender: true,
						mode: 'local',
						store: Ext.create('WMZ.store.Page'),
						valueField: 'value',
						displayField: 'text',
						emptyText: '20条/页',
						editable: false,
						width: 80,
						listeners: {
							change: function(comboBox,newValue) {
								store.load({
									params: {
										start: 0,
										limit: newValue
									}
								});
							}
						}
				    }
				)]
			})
		});
		me.callParent(arguments);
	}
})