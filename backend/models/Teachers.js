const mongoose= require('mongoose');
const TeachersSchema= new mongoose.Schema({
    id:{type:String,unique:true},
      password:String,
      confirmpassword:String,
      mail:String
     

  });
  const Teachers= mongoose.model('teachers',TeachersSchema);
  module.exports = Teachers;