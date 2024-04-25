const mongoose= require('mongoose');
const AdminSchema= new mongoose.Schema({
    id:{type:String,unique:true},
      password:String,
      confirmpassword:String,
      mail:String
     

  });
  const Admins= mongoose.model('admins',AdminSchema);
  module.exports = Admins;