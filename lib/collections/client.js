Client = new Mongo.Collection('client');

// Client.allow({
// 	insert: function(userId, doc){

// 		return !! userID;
// 	}
// });
Meteor.methods({
  clientInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      nama: String,
      deskripsi: String
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
    	//atribute tambahan
    });


     //console.log(post);

    var postId = Client.insert(post);

    return {
      _id: postId
    };
  }
});