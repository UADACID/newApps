Template.editService.events({
	'submit form' : function(e){
		e.preventDefault();

		var currentPostId = this._id;

		var properti = {
			judul : $(e.target).find('[name=judul]').val(),
			deskripsi : $(e.target).find('[name=deskripsi]').val(),
		}

		console.log(properti);
		Service.update(currentPostId, {$set: properti}, function(error) {
	      if (error) {
	        // display the error to the user
	        alert(error.reason);
	      } else {
	        Router.go('viewService', {_id: currentPostId});
	      }
	    });
	},
});