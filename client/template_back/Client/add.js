Template.addClient.events({
	'submit form': function(e){
		e.preventDefault();

		var post = {
			nama : $(e.target).find('[name=nama]').val(),
			deskripsi : $(e.target).find('[name=deskripsi]').val(),
			};

			//console.log(post);
			// post._id = Client.insert(post);
			Meteor.call('clientInsert', post, function(error, result){

				if(error)
					return alert(error.reason);
				
				Router.go('viewClient', {_id: result._id});
		});
		
	}
});