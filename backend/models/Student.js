const mongoose= require('mongoose');
const StudentSchema= new mongoose.Schema({
    id:{type:String,unique:true},
      password:String,
      confirmpassword:String,
      mail:String
     

  });
  const Students= mongoose.model('students',StudentSchema);
  module.exports = Students;