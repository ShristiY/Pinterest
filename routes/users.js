const mongoose= require('mongoose');
const plm= require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pin")

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String, 
  contact: Number,
  boards:{      
    type:Array,
    default:[]
  },
  posts:[
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }
]
});

userSchema.plugin(plm);// this plugin is basically providing serializeUser and deserializeUser functions to our app so that we can use them both

module.exports= mongoose.model("user",userSchema);
