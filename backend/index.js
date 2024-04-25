const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const PORT=process.env.PORT||3001


const app = express();


app.use(cors(
  {
    origin : ("https://deploy-mern-delta.vercel.app"),
    methods:['POST','GET'],
    credentials:true

  }
));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://mahakdeveloper0804:Mahak%40080204@cluster0.lpbdmkv.mongodb.net/Vidhyaghar');

app.get('/', (req, res) => {
  res.status(200);
});
app.get('/Contact', (req, res) => {
  res.status(200);
});
app.get('/Signup', (req, res) => {
  res.status(200);
});
app.get('/Adminlogin', (req, res) => {
  res.status(200);
});
app.get('/Teacherslogin', (req, res) => {

  res.status(200);
});
app.get('/Studentlogin', (req, res) => {

  res.status(200);
});

app.get('/admin/dashboard', (req, res) => {

  res.status(200);
});

app.get('/admin/attendance', (req, res) => {

  res.status(200);
});
app.get('/admin/complain', (req, res) => {

  res.status(200);
});
app.get('/admin/notice', (req, res) => {

  res.status(200);
});
app.get('/teacher/dashboard', (req, res) => {

  res.status(200);
});
app.get('/teacher/attendance', (req, res) => {

  res.status(200);
});
app.get('/teacher/notice', (req, res) => {

  res.status(200);
});
app.get('/teacher/complain', (req, res) => {

  res.status(200);
});
app.get('/teacher/assessment', (req, res) => {

  res.status(200);
});
app.get('/teacher/lectures', (req, res) => {

  res.status(200);
});
app.get('/teacher/Class-7A', (req, res) => {

  res.status(200);
});
app.get('/teacher/Class-6A', (req, res) => {

  res.status(200);
});
app.get('/teacher/Class-8B', (req, res) => {

  res.status(200);
});
app.get('/teacher/Class-9C', (req, res) => {

  res.status(200);
});


// Contact
const Contacts = require('./models/Contact')

app.post('/Contact', async (req, res) => {
  try {

    let data = new Contacts(req.body);
    let result = await data.save();
    console.log(result);
    // res.send(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Internal server error' });
  }

});

// Admin-notice
const Notice = require('./models/Adminnotice')

app.post('/admin/notice', async (req, res) => {
  try {

    let data2 = new Notice(req.body);
    let result2 = await data2.save();
    console.log(result2);
    // res.send(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Internal server error' });
  }

});



// Teachers login
const Teachers = require('./models/Teachers')

app.post('/Teacherslogin', async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await Teachers.findOne({ id });



    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
    console.log("Login successful");


  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});


// Admins Signup
const Admins = require('./models/Admin');
app.post('/Signup', async (req, res) => {
  try {

    let data = new Admins(req.body);
    let result = await data.save();
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

});



// Admins login


app.post('/Adminlogin', async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await Admins.findOne({ id });
    console.log(req.body);


    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
    console.log("Login successful");


  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});


// Students login
const Students = require('./models/Student');

app.post('/Studentlogin', async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await Students.findOne({ id });



    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
    console.log("Login successful");


  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Attendance
const Attendance = require('./models/Attendance');
const url='mongodb+srv://mahakdeveloper0804:Mahak%40080204@cluster0.lpbdmkv.mongodb.net/Vidhyaghar';
const dbName='Vidhyaghar';
app.get('/teacher/Class-7A', async (req, res) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');
    const students = await collection.find({}, { projection: { _id: 1, name: 1 } }).toArray();
    res.json(students);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.post('/teacher/Class-7A', async (req, res) => {
  try {
    const { isAbsent, isPresent } = req.body;
    const attendance = new Attendance({ isAbsent, isPresent });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT);

