Template.viewFront.helpers({
	about: function () {
		return About.findOne();
	},
	client: function() {
		return Client.find();
	},
	service : function(){
		return Service.find();
	}
});