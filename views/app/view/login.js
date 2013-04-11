/**
 *
 * 系统登录界面
 * @author JY
 * @since 2013-01-25
 */
Ext.onReady(function() {
    // 加载显示图片
    Ext.get('hello-tabs').setStyle('display', 'block');
	var panel = Ext.create('Ext.panel.Panel', {
		autoTabs: true,
		deferredRender: false,
		border: false,
		items: [{
            contentEl: 'hello-tabs'
        }, {
			xtype: 'tabpanel',
			id: 'loginTabs',
			activeTab: 0,
			height: 180,
			border: false,
			items: [{
				title: "身份认证",
				xtype: 'form',
				id: 'loginForm',
				defaults: {
					width: 260,
                    labelWidth: 35
				},
				bodyStyle: 'padding:20px 0px 0px 50px',
				defaultType: 'textfield',
				labelWidth: 40,
				labelSeparator: '：',
				items: [{
                    fieldLabel: '帐&nbsp;号',
                    name: 'account',
                    id: 'account',
                    fieldCls: 'user',
                    blankText: '帐号不能为空,请输入!',
                    maxLength: 30,
                    maxLengthText: '账号的最大长度为30个字符',
                    allowBlank: false,
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() == Ext.EventObject.ENTER) {
                                Ext.getCmp('password').focus();
                            }
                        }
                    }
                }, {
                    fieldLabel: '密&nbsp;码',
                    name: 'password',
                    id: 'password',
                    fieldCls: 'key',
                    inputType: 'password',
                    blankText: '密码不能为空,请输入!',
                    maxLength: 20,
                    maxLengthText: '密码的最大长度为20个字符',
                    allowBlank: false,
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() == Ext.EventObject.ENTER) {
                                login();
                            }
                        }
                    }
                }]
            }]
		}]
	});
        
    var win = Ext.create("Ext.window.Window", {
        closable: false,
        title: '登录系统',
        renderTo: Ext.getBody(),
        layout: 'fit',
        width: 460,
        height: 300,
        closeAction: 'hide',
        // plain: true,
        modal: true,
        collapsible: true,
        titleCollapse: true,
        maximizable: false,
        draggable: false,
        closable: false,
        resizable: false,
        animateTarget: document.body,      
        items: panel,   
        buttons: [{
            text: '登&nbsp;录',
            iconCls: 'acceptIcon',
            handler: function() {
                if (Ext.isIE) {
                    if (!Ext.isIE8 || !Ext.isIE9) {
                        Ext.MessageBox.alert('温馨提示',
                                       '系统检测到您正在使用基于MSIE内核的浏览器<br>我们强烈建议立即切换到<b><a href="http://firefox.com.cn/" target="_blank">FireFox</a></b>或者<b><a href="http://www.google.com/chrome/?hl=zh-CN" target="_blank">GoogleChrome</a></b>浏览器体验飞一般的感觉!'
                                       + '<br>如果您还是坚持使用IE,那么请使用基于IE8以上内核的浏览器登录!')
                        return;
                    }
                    login();
                } else {
                    login();
                }
            }
        }, {
            text: '重&nbsp;置',
            iconCls: 'tbar_synchronizeIcon',
            handler: function() {
                // 重置用户名和密码
                Ext.getCmp('account').setValue("");
                Ext.getCmp('password').setValue("");
                Ext.getCmp('account').focus();
                return false;
            }
        }]
	});
	win.show();
    
    /**
    * 提交登录请求
    */
    function login() {
        // 取得form对象
        var form = Ext.getCmp("loginForm").form;
        if (form.isValid()) {
            form.submit({
                url: '/login',
                method: 'post',
                timeout: 5000,
                success: function(form, action) {
                    window.location.href = 'index?reqCode=indexInit';
                },
                failure: function(form, action) {
                    var errmsg = action.result.msg;
                    Ext.Msg.alert('登录失败', errmsg, 'info');
                    // form.reset();
                }
            });
        }
    }
 });
