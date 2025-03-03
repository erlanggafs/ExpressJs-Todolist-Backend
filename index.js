const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const TodoRoute = require('./routes/TodoRoutes.js')
const UserRoute = require('./routes/UserRoutes.js');
const NewsRoute = require('./routes/NewsRoutes.js');

app.get('/', (req, res)=> {
    res.send("Service On")
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(TodoRoute)
app.use(UserRoute)
app.use(NewsRoute)

app.listen(port, ()=> {
     console.log("App is Running on port"+port)
})