var requireLogin = function(){
	if (!Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate)
		}else{
			this.render('accessDenied');
		}
	}else{
		this.next();
	}
}

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
Router.onBeforeAction(requireLogin, {only: 'dashboard'});

Router.onBeforeAction(requireLogin, {only: 'addClient'});
Router.onBeforeAction('dataNotFound', {only: 'editClient'});
Router.onBeforeAction(requireLogin, {only: 'editClient'});
Router.onBeforeAction(requireLogin, {only: 'viewClient'});

Router.onBeforeAction(requireLogin, {only: 'addAbout'});
Router.onBeforeAction('dataNotFound', {only: 'editAbout'});
Router.onBeforeAction(requireLogin, {only: 'editAbout'});
Router.onBeforeAction(requireLogin, {only: 'viewAbout'});

Router.configure({
	title : 'CMantra',
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){ return Meteor.subscribe('about'); },
	waitOn: function(){ return Meteor.subscribe('client'); }
});


var about = randomString(24).toLowerCase();
Router.route('/admin/about-'+about, {
	name:'viewAbout',
	title : 'CMantra | about',
});

Router.route('/admin/submit-about', {
	name:'addAbout',
	title : 'CMantra | add-about',

});

Router.route('/admin/about/:_id/edit', {
	name : 'editAbout',
	title : 'CMantra | edit-about',
	data : function(){ return About.findOne(this.params._id);
	}
});


Router.route('/', {
	name:'dashboard',
	title : 'CMantra | Dashboard',
});
var client = randomString(8).toLowerCase();
Router.route('/admin/client-'+client, {
	name:'viewClient',
	title : 'CMantra | client',
});

Router.route('/admin/submit-client', {
	name: 'addClient',
	title : 'CMantra | add-client',
});

Router.route('/admin/client/:_id/edit',{
	name : 'editClient',
	title : 'CMantra | edit-about',
	data : function(){
		return Client.findOne(this.params._id);
	}
});

// Router.route('/client', {
// 	name:'viewAbout'
// });

// Router.route('/contact', {
// 	name:'viewAbout'
// });

// Router.route('/service', {
// 	name:'viewAbout'
// });