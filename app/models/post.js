var mongoose = require("mongoose");

module.exports = function() {
  var postSchema = mongoose.Schema({
    id: {
      type: String
    },
    titulo: {
      type: String
    },
    texto: {
      type: String
    },
    autor: {
      type: String
    },
    data: {
      type: String
    }
  });

  return mongoose.model('Post', postSchema);

}
