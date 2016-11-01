Meteor.publish('about', function(){
	return About.find();
});
Meteor.publish('client', function(){
	return Client.find();
});