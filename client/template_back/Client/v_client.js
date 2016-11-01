Template.viewClient.helpers({
	client : function(){
		return Client.find();
	}
});
Template.viewClient.events({
	'click #delete': function(event){
		Client.remove(this._id);
	},
});