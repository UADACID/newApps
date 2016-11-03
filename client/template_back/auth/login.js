Template.viewLogin.events({
	'submit form' : function(event){
		event.preventDefault();
		var username = $('[name=username]').val();
        var password = $('[name=password]').val();
       
       	Meteor.loginWithPassword(username, password, function(error){
		    if(error){
		        // console.log(error.reason);
		        throwError(error.reason);
		    } else {
		        Router.go("dashboard");
		    }

		});
	}
});