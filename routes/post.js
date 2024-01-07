const mongoose= require('mongoose');


const postSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId ,// Here we are actually wanting to access the ID of the user who has made this particular post. So ID will not be string , it's datatype will be mongoose.Schema.Types.ObjectId
    ref: "user" //The post is linked with some "user" 
},
  title: String,
  description: String,
  image: String
});


module.exports= mongoose.model("post",postSchema);