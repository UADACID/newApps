Template.addClient.events({
	'submit form': function(e){
		e.preventDefault();

		var post = {
			nama : $(e.target).find('[name=nama]').val(),
			deskripsi : $(e.target).find('[name=deskripsi]').val(),
			};

			//console.log(post);
			post._id = Client.insert(post);
			Router.go('viewClient',post);
		
		
	}
});