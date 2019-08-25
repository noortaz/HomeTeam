const express = require('express');
const cors = require('cors');
const app = express();
const uuid = require('uuid/v1');


const projectData =  require('./data/projectData.json');
const taskData = require('./data/taskData.json');


const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZcCHoB-R5u0mvAXteZMX0f0PRs934Hpg",
    authDomain: "hometeam-84ccd.firebaseapp.com",
    databaseURL: "https://hometeam-84ccd.firebaseio.com",
    projectId: "hometeam-84ccd",
    storageBucket: "hometeam-84ccd.appspot.com",
    messagingSenderId: "107019629244",
    appId: "1:107019629244:web:2ce47cd9ec3a3ab2"
};
// Initializing Firebase
firebase.initializeApp(firebaseConfig);

app.get('/projectData', (req, res) => {
    res.json(projectData);
})

app.get('/taskData', (req, res) => {
    res.json(taskData);

})

app.post('/taskData', (req, res) => {
    const task = req.body;
    const newTask = { ...task, taskId: `${uuid().substr(0, 12)}` }
    taskData.push(newTask);
    res.json(newTask);
})

app.post('/projectData', (req, res) => {
    const project = req.body;
    const newProject= { ...project, projectId: `${uuid().substr(0, 12)}` }
    projectData.push(newProject);
    res.json(newProject);
})


app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running...')
})