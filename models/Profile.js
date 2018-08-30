const mongooose = require('mongoose');
const Schema = mongoose.Schema;\

//Create Schema
const ProfileSchema = new Schema({
  user : {
    type : Schema.Type.ObjectId,
    ref: 'users'
  },
  handle : {
    type: String,
    required : true,
    max : 40
  },
  company : {
    type : String,
  },
  website : {
    type : String,
  },
  location : {
    type : String
  },
  status : {
    type: String,
    required : true
  },
  skills : {
    type : {String},
    required : true,
  },
  bio : {
    type : String
  },
  githubusername : {
    type : String
  },
  experience : [
    {
      title : {
        title : string,
        required : true
      },
      company : {
        type: String,
        required : true
      },
      location : {
        type: String,
        required : true
      },
      from : {
        type: Date,
        required : true
      },
      to : {
        type: Date
      },
      current : {
        type: Boolean,
        defalut : false
      },
      description : {
        type: String
      }
    }
  ],
  education : [
    {
      school : {
        title : string,
        required : true
      },
      degree : {
        type: String,
        required : true
      },
      fieldofstudy : {
        type: String,
        required : true
      },
      from : {
        type: Date,
        required : true
      },
      to : {
        type: Date
      },
      current : {
        type: Boolean,
        defalut : false
      },
      description : {
        type: String
      }
    }
  ],
  social : {
    youtube : {
      type: String
    },
    twiter : {
      type: String
    },
    facebook : {
      type: String
    },
    linkedin : {
      type: String
    },
    instagram : {
      type: String
    }
  },
  date : {
    type : Date,
    defalut : Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
