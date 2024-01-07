const mongoose= require('mongoose');
const plm= require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pin")

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String, // Hum aage jaake profile Image bhi input krayenge taaki usse display kra sken
  contact: Number,
  boards:{      // User kitne boards bana skta. Pinterest me boards banata hai user just like Album jisme images hoti hain
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