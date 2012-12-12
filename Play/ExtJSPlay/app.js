Ext.application({
    //requires: ['Ext.container.Viewport'],
    name: 'AM',

    //appFolder: 'app',
    
    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: '用户',
                    html : '显示所有的用户信息'
                }
            ]
        });
    }
});