Template.viewService.helpers({
	service: function() {
    return Service.find({}, {sort: {submitted: -1}});
  }
});

Template.viewService.events({
	'click #delete' : function(event){
		Service.remove(this._id);
	},
});
