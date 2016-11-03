Template.viewService.helpers({
	service: function () {
		return Service.find();
	}
});

Template.viewService.events({
	'click #delete' : function(event){
		Service.remove(this._id);
	},
});
