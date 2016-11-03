Template.editClient.events({
	'submit form' : function(e){
		e.preventDefault();

		var currentPostId = this._id;

		var properti = {
			nama : $(e.target).find('[name=nama]').val(),
			deskripsi : $(e.target).find('[name=deskripsi]').val(),
		}

		//console.log(properti);
		Client.update(currentPostId, {$set: properti}, function(error) {
	      if (error) {
	        // display the error to the user
	        alert(error.reason);
	      } else {
	        Router.go('viewClient', {_id: currentPostId});
	      }
	    });
	},
});