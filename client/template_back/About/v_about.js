// var dataAbout = [
// 	{
// 		visi 	: 'Menyejahterakan karyawan beserta jajaran direksinya :D ',
// 		misi 	: 'Menjadi Perusaahn IT Paling Berpengaruh di Dunia'
// 	},
// ];

Template.viewAbout.helpers({
	about : function(){
		return About.findOne();
	},
	cekAbout : function(){
		return About.find().count() === 0;
	},
});

Template.viewAbout.events({
	'click #delete': function(event){
		About.remove(this._id);
	},
	'click #edit': function(event){
		//console.log(this._id);

	},
});