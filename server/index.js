const express = require('express');
const cors = require('cors');
const app = express();
const uuid = require('uuid/v1');

const twilio = require('twilio')
const accountSid = 'AC17364c31e803e7f143e9b7a08fef27b2';
const authToken = '021f61d3069bbff66ce792f71bc84380';
const client = new twilio(accountSid, authToken);


const projectData =  require('./data/projectData.json');
const taskData = require('./data/taskData.json');
let combinedData = require('./data/combinedData.json');


const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/sendSMS', (req, res) => {
  const {recipient, textmessages} = req.query;

  client.messages
    .create({
      body: textmessages,
      from: recipient,
      to: '+16475729076'
    })
    .then(message => console.log(message.body));

})


// // My web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDZcCHoB-R5u0mvAXteZMX0f0PRs934Hpg",
//     authDomain: "hometeam-84ccd.firebaseapp.com",
//     databaseURL: "https://hometeam-84ccd.firebaseio.com",
//     projectId: "hometeam-84ccd",
//     storageBucket: "hometeam-84ccd.appspot.com",
//     messagingSenderId: "107019629244",
//     appId: "1:107019629244:web:2ce47cd9ec3a3ab2"
// };
// // Initializing Firebase
// firebase.initializeApp(firebaseConfig);

app.get('/projectData', (req, res) => {
    res.json(projectData);
})

app.get('/taskData', (req, res) => {
    res.json(combinedData);
})

app.post('/taskData', (req, res) => {   

    if (req.body.members) {
        combinedData.members = req.body.members
    } else {
        combinedData.columns.column1.taskIds.push(req.body.id);
        combinedData = { ...combinedData };
        combinedData.tasks[req.body.id] = req.body;
    }

    res.json(combinedData);
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