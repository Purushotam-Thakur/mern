const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type : Schema.Types.ObjectId,
    ref : 'users'
  },
  text : {
    type : String,
    required : true
  },
  name : {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user : {
        type: Schema.Type.ObjectId,
        ref : 'users'
      }
    }
  ],
  comments: [
    {
      user : {
        type: Schema.Type.ObjectId,
        ref : 'users'
      }
    },
    text : {
      type: String,
      required : true
    },
    name : {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    data : {
      type: Date,
      defalut: Date.now
    }
  ],
   data : {
      type: Date,
      defalut: Date.now
    }
});

module.exports = Post = mongoose.model({'post', PostSchema})
