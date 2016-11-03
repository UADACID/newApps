Contact = new Mongo.Collection("contact");
Contact.attachSchema(new SimpleSchema({

  facebook: {
    type  : String,
    label : "Facebook",
    max   : 50
  },

  twitter : {
    type  : String,
    label : "Twitter",
    max   : 50
  },

  email   : {
    type  : String,
    label : "Email",
    max   : 50
  },

  alamat   : {
    type  : String,
    label : "Alamat",
    max   : 1000
  },

  telp   : {
    type  : String,
    label : "Telepon",
    max   : 50
  },

  hp   : {
    type  : String,
    label : "No HP",
    max   : 50
  },

}));
// Books.attachSchema(new SimpleSchema({
//   title: {
//     type: String,
//     label: "Title",
//     max: 200
//   },
//   author: {
//     type: String,
//     label: "Author"
//   },
//   copies: {
//     type: Number,
//     label: "Number of copies",
//     min: 0
//   },
//   lastCheckedOut: {
//     type: Date,
//     label: "Last date this book was checked out",
//     optional: true
//   },
//   summary: {
//     type: String,
//     label: "Brief summary",
//     optional: true,
//     max: 1000
//   }
// }));