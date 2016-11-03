Service = new Mongo.Collection('service');

Meteor.methods({
	serviceInsert: function(postAttributes){
		check(Meteor.userId(), String);
		check(postAttributes, {
			judul : String,
			deskripsi : String
		});

		var user = Meteor.user();
		var post = _.extend(postAttributes, {});

		var postId = Service.insert(post);
		return {
			_id: postId
		};
	}
});

// Meteor.methods({
//   clientInsert: function(postAttributes) {
//     check(Meteor.userId(), String);
//     check(postAttributes, {
//       nama: String,
//       deskripsi: String
//     });

//     var user = Meteor.user();
//     var post = _.extend(postAttributes, {
//     	//atribute tambahan
//     });


//      //console.log(post);

//     var postId = Client.insert(post);

//     return {
//       _id: postId
//     };
//   }
// });