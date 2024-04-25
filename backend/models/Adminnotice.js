const mongoose= require('mongoose');
const NoticeSchema= new mongoose.Schema({
      notice:String

  });
  const Notice= mongoose.model('adminnotices',NoticeSchema);
  module.exports = Notice;