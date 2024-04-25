const mongoose= require('mongoose');
const attendanceSchema = new mongoose.Schema({
  isAbsent: Boolean,
  isPresent: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;