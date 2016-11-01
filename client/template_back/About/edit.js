Template.editAbout.events({
	'submit form' : function(e){
		e.preventDefault();

		var currentPostId = this._id;

		var properti = {
			visi : $(e.target).find('[name=visi]').val(),
			misi : $(e.target).find('[name=misi]').val(),
		}

		//console.log(properti);
		About.update(currentPostId, {$set: properti}, function(error) {
	      if (error) {
	        // display the error to the user
	        alert(error.reason);
	      } else {
	        Router.go('viewAbout', {_id: currentPostId});
	      }
	    });
	},
});