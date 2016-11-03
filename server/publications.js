Meteor.publish('about', function(){
	return About.find();
});
Meteor.publish('client', function(){
	return Client.find();
});
Meteor.publish('service', function(){
	return Service.find();
})
Meteor.publish('contact', function(){
	return Contact.find();
})