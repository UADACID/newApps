Template.addAbout.events({
	'submit form': function(e){
		e.preventDefault();

		var cek = About.find().count();
		//console.log(cek);
		if (cek == 1) {
			alert("Data About sudah terisi");
			Router.go('viewAbout',post);
		}else{
			var post = {
			visi : $(e.target).find('[name=visi]').val(),
			misi : $(e.target).find('[name=misi]').val(),
			};

			//console.log(post);
			post._id = About.insert(post);
			Router.go('viewAbout',post);
		}
		
	}
});