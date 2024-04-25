const mongoose= require('mongoose');
const ContactSchema= new mongoose.Schema({
    name:String,
      email:String,
      subject:String,
      message:String

  });
  const Contacts= mongoose.model('contacts',ContactSchema);
  module.exports = Contacts;